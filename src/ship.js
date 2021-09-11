const rotSpeed = 3;

const maxTurnScale = 0.2;
const turnScaleSpeed = 0.015;
let rl = false;
let minerals, fishes = 0;
let thrsfx = 0;
let raceTime, podReached,hook,gxTime,hasGx;

questCompleted = (type) => {
  if (type == 'getSel') {
    if (minerals > 10) {
      minerals -= 10;
      return true;
    }
  } else if (type == 'race') {
    if (podReached && raceTime > 0) {
      raceTime = 0;
      return true;
    }
    raceTime = 0;
  } else if (type == 'fish') {
    return hasGx;
  }
  return false;
}

restartQuest = (type) => {
  if (type == 'race') {
    raceTime = 60;
    currentWaypoint = friendWaypoints[1] = junoPod;
    currentWaypointIndex = 1;
    junoPod.reset();
    contextHint("Reach the pinwheel and return.");
  }
}

setInterval(() => {
  if (raceTime > 0) {
    raceTime--;
  }
  if (gxTime > 0 && !hasGx) {
    gxTime--;
    if (gxTime <= 0) {
      fishes = 0;
      gxTime = undefined;
      if (hook) {
        hook.destroy();
      }
      if (theFish)
        theFish.flee();
    }
  }
}, 1000);

flameColor = () => p1.boost ? "#5555ff" : "#ffe203";

class Ship extends GO {
  isCruising () {
    return !raceTime && !this.nearPlanet() && this.dv > 250;
  }
  nearPlanet () {
    return planets.find(p => rdist(p, this) < (ASTEROID_SPACE + p.size));
  }
  specialRender(c) {
    if (hook) {
      c.lineWidth = 3;
      c.strokeStyle = '#fff';
      c.beginPath();
      c.moveTo(W/2, H/2);
      c.lineTo(cameraX(mainCamera, hook.x), cameraY(mainCamera, hook.y));
      c.stroke();
    }
    if (this.blastRadius > 0) {
      const noozleX = this.x - Math.cos(this.rotation) * 75;
      const noozleY = this.y - Math.sin(this.rotation) * 75;
      Renderer.renderCircle(c, Math.max(1, this.blastRadius + rand.range(-5, 5)), flameColor(), rand.range(0.5, 2), flameColor(), noozleX, noozleY, 1, 0, 0, false, mainCamera);
    }
    Renderer.renderShapes(c, SHAPES.ship, this.x, this.y, this.scale, 1 + this.turnScale, this.rotation, 50, 50);
    Renderer.renderShapes(c, SHAPES.gato, this.x, this.y, this.scale * 0.3, 1, this.rotation, 50, 30);
  }
  crash(go) {
    let ndv = 500 * -Math.sign(this.dv);
    this.touch(go);
    this.boost = 0;
    this.dv = ndv;
    this.gear = 1;
  }
  touch(go) { // Place the shp in the surface of the go
    let reloc = this.size + go.size + 1;
    const angle = Math.atan2(this.y - go.y, this.x - go.x);
    this.x = go.x + Math.cos(angle) * reloc;
    this.y = go.y + Math.sin(angle) * reloc;
    this.av = 0;
    this.dv = 0;
    return angle;
  }
  u(d) {
    super.u(d);
    // Affect acceleration based on player input and stuff
    if (this.gear == 2) {
      this.cmd = 't';
    } else if (!this.landed && this.gear == 0) {
      this.cmd = 'b';
    }
    switch (this.cmd) {
      case 'n':
        if (this.av > 0 && !this.boost) {
          playSound(1);
        }
        this.av = 0;
        break;
      case 't':
        var PY = 2000;
        if (this.av == 0) {
          playSound(8);
        }
        if (thrsfx > -1) {
          playSound(0);
          thrsfx = 0;
        }
        
        this.av += PY * d;
        this.landed = false;
        if (this.av > 1000) { // max thrust
          this.av = 1000;
        }
        break;
      case 'b':
        this.av -= 200 * d;
        break;
    }
    if (this.boost) {
      this.boost -= d;
      if (this.boost <=0) this.boost =0;
      this.av += 1;
      this.dv += 1500 * d;
    }
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
    if (!this.boost && this.dv > 2000) {
      this.dv = 2000;
    }
    mainCamera.x = this.x;
    mainCamera.y = this.y;
    starCamera.x += this._dx * 0.5 * d;
    starCamera.y += this._dy * 0.5 * d;
  }
  k(){
    if (gState != 2 && gState != 3) {
      this.cmd = 'n';
      return;
    }
    if (isDown(this.keys[0])){ // Increase Thrust
      this.cmd = 't';
    } else if (!this.landed && isDown(this.keys[1])){ // Reduce Thrust
      this.cmd = 'b';
    } else {
      this.cmd = 'n';
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
    if (!gxTime) {
      const offset = (rl ? 1 : -1) * 50;
      rl = !rl;
      let noozleX = this.x + Math.sin(this.rotation) * offset;
      let noozleY = this.y - Math.cos(this.rotation) * offset;
      noozleX = noozleX + Math.cos(this.rotation) * 15;
      noozleY = noozleY + Math.sin(this.rotation) * 15;

      this.dv -= 10;
      new Rocket(noozleX, noozleY, this.rotation + (rl ? -1 : 1) * (Math.PI / 30));
    } else {
      if (hook)
        hook.pull();
      else 
        hook = new Hook();
    }
    playSound(4);
  }
  async landOnCity (p, c) {
    const trigger = triggers[p.name + "-" + c.name]
    if (trigger) {
      var completed = trigger.quest && questCompleted(trigger.quest);
      if (!trigger.quest || !completed) {
        await showConversation (makeAnimal(trigger.person), trigger.sequence);
        if (trigger.quest) {
          restartQuest(trigger.quest);
          friendHints[trigger.friendIndex] = trigger.questHint;
        }
      }
      if (!trigger.quest || completed) {
        delete triggers[p.name + "-" + c.name];
        if (trigger.reward)
          await showConversation (makeAnimal(trigger.person), trigger.reward);
        var hint = '✅';
        if (trigger.next) {
          const nextTrigger = trigger.next;
          hint = trigger.hint || nextTrigger.planet + ", " + nextTrigger.city;
          triggers[nextTrigger.planet + "-" + nextTrigger.city] = nextTrigger;
          friendWaypoints[trigger.friendIndex] = planets.find(p=>p.name==nextTrigger.planet);
        } else {
          playSound(6);
          let count = 0;
          friendHints.forEach(h => { if (h == hint) count++})
          if (count == 2) {
            victory();
          }
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

async function showConversation(app, conv) {
  for (let i = 0; i < conv.length; i++) {
    await showConversationFragment(app, conv[i]);
  }
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