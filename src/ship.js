const rotSpeed = Math.PI / 90;

const maxTurnScale = 0.2;
const turnScaleSpeed = 0.015;

class Ship extends GO {
  isCruising () {
    return !this.nearPlanet() && this.dv > 250;
  }
  nearPlanet () {
    return planets.find(p => rdist(p, this) < (ASTEROID_SPACE + p.size));
  }
  specialRender(c) {
    if (this.blastRadius > 0) {
      const noozleX = this.x - Math.cos(this.rotation) * 75;
      const noozleY = this.y - Math.sin(this.rotation) * 75;
      Renderer.renderCircle(c, Math.max(1, this.blastRadius + rand.range(-5, 5)), "#ffe203", rand.range(0.5, 2), "#ffe203", noozleX, noozleY, 1, 0, 0, false, mainCamera);
    }
    Renderer.renderShapes(c, SHAPES.ship, this.x, this.y, this.scale, 1 + this.turnScale, this.rotation, 50, 50);
    Renderer.renderShapes(c, SHAPES.cat, this.x, this.y, this.scale * 0.3, 1, this.rotation, 50, 30);
  }
  u(d) {
    super.u(d);    
    if (Math.abs(this.av > 0)) {
      this.blastRadius += d * 80; 
      this.blastRadius = Math.min(30, this.blastRadius);
      if (this.blastRadius > 20) {
        const noozleX = this.x + Math.cos(this.rotation) * -70;
        const noozleY = this.y + Math.sin(this.rotation) * -70;
        new RocketParticle(noozleX - this._dx * 4 * d, noozleY - this._dy * 4 * d);
      }
    } else {
      this.blastRadius -= d * 40;
      this.blastRadius = Math.max(0, this.blastRadius);
    }
    // Damp
    var D = 2 * d;
    if (this.dv !== 0) {
      this.dv -= this.dv * D;
    }
    // Inertia
    if (Math.abs(this.turnScale) < 0.01) {
      this.turnScale = 0;
    } else if (this.turnScale < 0) {
      this.turnScale += 0.01;
    } else if (this.turnScale > 0) {
      this.turnScale -= 0.01;
    }
    // BOundaries
    if (this.dv > 2000) {
      this.dv = 2000; // Temporary
    }
    mainCamera.x = this.x;
    mainCamera.y = this.y;
    starCamera.x += this._dx * 0.5 * d;
    starCamera.y += this._dy * 0.5 * d;
  }
  k(){
    if (gState != 2 && gState != 3) {
      this.av = 0;
      return;
    }
    var PY = 20;
    if (isDown(this.keys[0])){ // Increase Thrust
      this.av += PY; // TODO: Affect acceleration indirectly
      this.landed = false;
    } else if (!this.landed && isDown(this.keys[1])){ // Reduce Thrust
      this.av = -200;
    } else {
      this.av = 0;
    }
    if (this.av > 1000) { // max thrust
      this.av = 1000;
    }
    if (this.landed) {
      return;
    }
    if (isDown(this.keys[2])){ // Left
      this.flipped = true;
      this.turnScale -= turnScaleSpeed;
      if (this.turnScale < -maxTurnScale) {
        this.turnScale = -maxTurnScale;
      }
      this.rotation -= rotSpeed;
    } else if (isDown(this.keys[3])){ // Right
      this.flipped = true;
      this.turnScale += turnScaleSpeed;
      if (this.turnScale > maxTurnScale) {
        this.turnScale = maxTurnScale;
      }
      this.rotation += rotSpeed;
    }
    if (isDown(this.keys[4])) { // Space
      this.fire();
    }
  }
  fire() {
    if (this.fireBlocked) {
      return;
    }
    this.fireBlocked = true;
    setTimeout(() => this.fireBlocked = false, 100);
    new Rocket(this.x + rand.range(-20, 20), this.y + rand.range(-20, 20), this.rotation);
    playSound(2);
  }
  async landOnCity (p, c) {
    const trigger = triggers[p.name + "-" + c.name]
    if (trigger) {
      delete triggers[p.name + "-" + c.name];
      for (let i = 0; i < trigger.sequence.length; i++) {
        await showConversationFragment (SHAPES[trigger.person], trigger.sequence[i]);
      }
      if (trigger.giveInstrument != undefined) {
        this.songFragments[trigger.giveInstrument] = 'yes';
        let allFragments = true;
        for (let i = 0; i < FRAGMENTS.length; i++) {
          if (!this.songFragments[i]) {
            allFragments = false;
            break;
          }
        }
        if (allFragments) {
          victory();
        }
      }
      var hint = '✅';
      if (trigger.next) {
        const nextTrigger = trigger.next;
        hint = trigger.hint || nextTrigger.planet + ", " + nextTrigger.city;
        triggers[nextTrigger.planet + "-" + nextTrigger.city] = nextTrigger;
      }
      friendHints[trigger.friendIndex] = hint;
      gState = 2;
    } else {
      await showConversationFragment (SHAPES.cat, 'Nothing interesting here.');
      gState = 2;
    }
  }
  collide(m) {
    if (m.isPlanet) {
      if (this.landed) {
        // Ignore collision (This is unlikely to happen due to the re-placement on landing)
      } else {
        if (this.dv <= 0) {  // Landing
          this.landed = true;
          this.dv = 0;
        } else {
          // Bounce!
          this.dv = -500;
        }
        let reloc = m.size + this.size + 1;
        if (!this.landed) {
          reloc += 20;
        }
        const angle = Math.atan2(this.y - m.y, this.x - m.x);
        this.x = m.x + Math.cos(angle) * reloc;
        this.y = m.y + Math.sin(angle) * reloc;
        if (this.landed) {
          this.rotation = angle; // TODO: Tween rotation?
          const city = m.nearbyCity(this);
          if (city) {
            this.landOnCity(m, city);
          }
        }
      }
    } else if (m.isAsteroid) {
      this.dv = 500 * -Math.sign(this.dv);
    }
  }
}

let conversationText = "Test";
let conversationNext;
function showConversationFragment(app, text) {
  gState = 10;
  conversationApp = app;
  conversationText = text;
  return new Promise (resolve => {
    conversationNext = resolve;
  });
}

class Rocket extends GO {
  constructor(x, y, d) {
    super('triangle', [layers[1]]);
    this.x = x;
    this.y = y;
    this.rotation = d;
    this.av = 300;
    this.dv = -50;
    this.size = 5;
    this.hits = 'e'; // Enemy
    this.scale = 0.5;
    setTimeout(()=>this.explode(), rand.range(1100, 1300));
  }
  explode() {
    playSound(0);
    var e = new Explosion(20);
    e.x = this.x;
    e.y = this.y;
    sfx.push(e);
    this.destroy();
  }
}