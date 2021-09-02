const rotSpeed = 3;

const maxTurnScale = 0.2;
const turnScaleSpeed = 0.015;
let rl = false;
let minerals = 0;
let thrsfx = 0;

questCompleted = (type) => {
  if (type == 'getSel') {
    if (minerals > 30) {
      minerals -= 30;
      return true;
    }
  }
  return false;
}

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
      } else {
        thrsfx += d * this.av;
      }
    } else {
      this.blastRadius -= d * 40;
      this.blastRadius = Math.max(0, this.blastRadius);
    }
    this.rotation += this.r * rotSpeed * d;
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
      if (this.av == 0 || thrsfx > 10) {
        playSound(0);
        thrsfx = 0;
      }
      this.av += PY; // TODO: Affect acceleration indirectly
      this.landed = false;
      
    } else if (!this.landed && isDown(this.keys[1])){ // Reduce Thrust
      this.av = -200;
    } else {
      if (this.av > 0) {
        playSound(1);
      }
      this.av = 0;
    }
    if (this.av > 1000) { // max thrust
      this.av = 1000;
    }
    if (this.landed) {
      return;
    }
    this.r = 0;
    if (isDown(this.keys[2])){ // Left
      this.flipped = true;
      this.turnScale -= turnScaleSpeed;
      if (this.turnScale < -maxTurnScale) {
        this.turnScale = -maxTurnScale;
      }
      this.r = -1;
    } else if (isDown(this.keys[3])){ // Right
      this.flipped = true;
      this.turnScale += turnScaleSpeed;
      if (this.turnScale > maxTurnScale) {
        this.turnScale = maxTurnScale;
      }
      this.r = 1;
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
    setTimeout(() => this.fireBlocked = false, 300);
    const offset = (rl ? 1 : -1) * 50;
    rl = !rl;
    let noozleX = this.x + Math.sin(this.rotation) * offset;
    let noozleY = this.y - Math.cos(this.rotation) * offset;
    noozleX = noozleX + Math.cos(this.rotation) * 15;
    noozleY = noozleY + Math.sin(this.rotation) * 15;

    this.dv -= 10;
    new Rocket(noozleX, noozleY, this.rotation + (rl ? -1 : 1) * (Math.PI / 30));
    playSound(4);
  }
  async landOnCity (p, c) {
    const trigger = triggers[p.name + "-" + c.name]
    if (trigger) {
      var completed = trigger.quest && questCompleted(trigger.quest);
      if (!trigger.quest || !completed) {
        for (let i = 0; i < trigger.sequence.length; i++) {
          await showConversationFragment (makeAnimal(trigger.person), trigger.sequence[i]);
        }
      }
      if (!trigger.quest || completed) {
        delete triggers[p.name + "-" + c.name];
        if (trigger.reward) for (let i = 0; i < trigger.reward.length; i++) {
          await showConversationFragment (makeAnimal(trigger.person), trigger.reward[i]);
        }
        if (trigger.giveInstrument != undefined) {
          playSound(6);
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
      }      
      gState = 2;
    } else {
      await showConversationFragment (makeAnimal('cat'), 'Nothing interesting here.');
      gState = 2;
    }
  }
}

let conversationText = "Test";
let conversationNext;
function showConversationFragment(app, text) {
  playSound(5);
  gState = 10;
  conversationApp = app;
  conversationText = text;
  return new Promise (resolve => {
    conversationNext = resolve;
  });
}

class Rocket extends GO {
  constructor(x, y, d) {
    super('rocket', [layers[2]]);
    this.x = x;
    this.y = y;
    this.rotation = d;
    setTimeout(()=>{
      this.av = 800;
    }, rand.range(400, 500));
    this.dv = -100;
    this.size = 40;
    this.hits = 'a'; // Asteroid
    this.scale = 1;
    setTimeout(()=>this.explode(), rand.range(3100, 3300));
  }
  explode() {
    if (this.dead) return;
    playSound(3);
    var e = new Explosion(40);
    e.x = this.x;
    e.y = this.y;
    sfx.push(e);
    this.destroy();
  }
  collide (r) {
    r.hp--;
    if (r.hp == 0) {
      new Mineral(r.x, r.y);
      r.destroy();
    }
    this.explode();
  }
}