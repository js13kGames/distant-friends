class GO {
  constructor(app, lists) {
    this.app = SHAPES[app];
    this.dv = this.av = 0;
    this.rotation = 0;
    this.turnScale = 0;
    mobs.push(this);
    lists.forEach(l => l.push(this));
    this.lists = lists;
  }
  // update
  u(d) {
    this.dv += this.av * d;
    this._dx = Math.cos(this.rotation) * this.dv;
    this._dy = Math.sin(this.rotation) * this.dv;
    this.x += this._dx * d;
    this.y += this._dy * d;
  }

  destroy() {
    this.dead = true;
    mobDestroyed = true;
  }
}

class Star extends GO {
  constructor (size) {
    super('coolStar', [layers[0]]);
    this.size = size;
    this.rotation = rand.range(0, Math.PI * 2);
    this.scale = size / 5;
    this.koo = true;
    this.camera = starCamera;
  }
  destroy(killType) {
    super.destroy();
    // Create a new Star
    var size = rand.range(1, 3);
    var t = new Star(size);
    
    switch (killType) {
      case 'kob':
        t.x = rand.range(starCamera.x - W/2, starCamera.x + W/2);
        t.y = starCamera.y - H/2 - size;
        break;
      case 'kot':
        t.x = rand.range(starCamera.x - W/2, starCamera.x + W/2);
        t.y = starCamera.y + H/2 + size;
        break;
      case 'kol':
        t.x = starCamera.x + W/2 - size;
        t.y = rand.range(starCamera.y - H/2, starCamera.y + H/2);
        break;
      case 'kor':
        t.x = starCamera.x - W/2 + size;  
        t.y = rand.range(starCamera.y - H/2, starCamera.y + H/2);
        break;
    }
  }
}

class City extends GO {
  constructor(app, lists, name) {
    super(app, lists);
    this.name = name;
  }
}

class CityLabel extends GO {
  constructor(app, lists, name) {
    super(app, lists);
    this.name = name;
  }

  specialRender(c) {
    c.save();
    const thex = cameraX(mainCamera, this.x);
    const they = cameraY(mainCamera, this.y);
    c.translate(thex, they);
    c.rotate(this.rotation + Math.PI / 2);
    c.font = font(24);
    c.textAlign="center"; 
    c.fillStyle= "#00ff00";
    c.fillText(this.name, 0, 30);
    c.restore();
  }
}

class Asteroid extends GO {
  constructor (x, y, size, strong) {
    super('asteroid1', [rocks, layers[2]]);
    this.isAsteroid = true;
    this.x = x; this.y = y;
    this.size = size * 30;
    this.scale = size;
    this.hits = 'p';
    this.hp = size * 4;
    if (!strong) this.deathInterval = setInterval(() => {
      if (rdist(this, p1) > ASTEROID_SPACE) {
        asteroids--;
        clearInterval(this.deathInterval);
        this.destroy();
      }
    }, 1000)
    this.rotSpeed = rand.range(0.5, 1) * (rand.b() ? 1 : -1);
  }
 
  u(d) {
    this.rotation += this.rotSpeed * d;
  }

  collide(p) {
    p.crash(this);
  }
}

function createPlanet (planetData) {
  var t = new Planet();
  t.name = planetData[0];
  t.isPlanet = true;
  t.x = planetData[1];
  t.y = planetData[2];
  t.size = planetData[3];
  t.visibleSize = t.size - 72;
  var angle = seeded() * (2 * Math.PI);
  t.gax = Math.cos(angle) * t.size;
  t.gay = Math.sin(angle) * t.size;
  t.color1 = planetData[5];
  t.color2 = planetData[6];
  t.scale = planetData[3];
  t.hits = 'p';
  planetData[4].forEach(cd => {
    t.addCity(Math.PI * cd[1], 'city', cd[0]);
  });
  return t;
}

class Planet extends GO {
  constructor () {
    super(null, [layers[2]]);
    this.cities = [];
  }
  specialRender(c) {
    c.globalAlpha = 1;
    const thex = cameraX(mainCamera, this.x);
    const they = cameraY(mainCamera, this.y);
    var grad=c.createLinearGradient(thex-this.gax,they-this.gay,thex+this.gax,they+this.gay);
    grad.addColorStop(0, this.color1);
    grad.addColorStop(1, this.color2);
    c.fillStyle=grad;
    c.beginPath();
    c.arc(thex,they,this.visibleSize,0,Math.PI*2,true);
    c.fill();
  }
  addCity (rotation, app, name) {
    const c = new City(app, [layers[0]], name);
    c.x = this.x + this.visibleSize * Math.cos(rotation);
    c.y = this.y + this.visibleSize * Math.sin(rotation);
    c.scale = 2;
    c.rotation = rotation;
    this.cities.push(c);
    const label = new CityLabel(app, [layers[2]], name);
    label.x = c.x;
    label.y = c.y;
    label.rotation = c.rotation;
  }
  nearbyCity (p) {
    return this.cities.find (c => rdist(c, p) < 100);
  }
  collide (p) {
    if (p.landed) {
      // Ignore collision (This is unlikely to happen due to the re-placement on landing)
    } else {
      if (p.dv <= 0) {  // Landing
        p.landed = true;
        p.gear = 1;
        p.dv = 0;
        p.r = 0;
        playSound(2);
        p.rotation = p.touch(this); // TODO: Tween rotation?
        const city = this.nearbyCity(p);
        if (city) {
          p.landOnCity(this, city);
        }
      } else {
        contextHint("Use the reverse thrusters to land.");
        p.crash(this);
      }
    }
  }
}

class Explosion {
  constructor(s){
    this.sf = s;
    this.s0 = s / 5;
    this.runTime = 0;
  }
  update(d){
    this.runTime += d;
  }
  render(c){
    var totalTime = 0.2;
    var progress = this.runTime / totalTime;
    if (progress > 1) {
      sfx.splice(sfx.indexOf(this),1);
      return;
    }
    var cut = 0.4;
    if (progress < cut) {
      // Growing ball of fire
      var segmentProgress = progress / cut;
      var size = this.s0 + segmentProgress * (this.sf-this.s0);
      c.fillStyle = '#eecc00';
      c.beginPath();
      c.arc(cameraX(mainCamera, this.x), cameraY(mainCamera, this.y),size,0,Math.PI*2,true);
      c.fill();
    } else {
      // Fading fire
      var segmentProgress = (progress - cut) / (1 - cut);
      var size = segmentProgress * this.sf;
      c.fillStyle = '#bb9900';
      c.beginPath();
      c.arc(cameraX(mainCamera, this.x), cameraY(mainCamera, this.y),this.sf,0,Math.PI*2,true);
      c.arc(cameraX(mainCamera, this.x), cameraY(mainCamera, this.y),size,0,Math.PI*2,false);
      c.fill();
    }
  }
}

class RocketParticle extends GO {
  constructor (x, y) {
    super(null, [layers[1]]);
    this.x = x; this.y = y;
    this.radius = rand.range(15, 20);
    this.alpha = 1;
    setTimeout(() => {
      this.destroy();
    }, rand.range(300, 600));
  }

  u(d) {
    this.radius -= d * 8;
    this.alpha -= d * 2;
  }

  specialRender(c) {
    if (this.radius <=0 || this.alpha <= 0) return;
    const theAlpha = c.globalAlpha;
    c.globalAlpha = this.alpha;
    var color = flameColor();
    Renderer.renderCircle(c, this.radius, color, 1, color, this.x, this.y, 1, 0, 0, false, mainCamera);
    c.globalAlpha = theAlpha;
  }
}

class Mineral extends GO {
  constructor (x, y) {
    super('mineral', [layers[1]]);
    this.x = x; this.y = y;
    this.isMineral = true;
    this.hits = 'p';
    this.scale = 1;
    this.size = 40;
  }
  collide() {
    minerals++;
    this.destroy();
  }
}

class Pod extends GO {
  collide () {
    podReached = true;
    friendWaypoints[1] = currentWaypoint = planets.find(p=>p.name=='Ceres');
    this.rotSpeed = 5;
    playSound(6);
  }
  reset () {
    podReached = false;
    this.rotSpeed = 0;
  }
  u(d) {
    this.rotation += this.rotSpeed * d;
  }
}

class Booster extends GO {
  constructor (x, y) {
    super('booster', [layers[1]]);
    this.x = x; this.y = y;
    this.hits = 'p';
    this.scale = 1;
    this.size = 60;
    this.rotSpeed = 3;
  }

  collide () {
    p1.boost = 5;
    playSound(4);
  }

  u(d) {
    this.rotation += this.rotSpeed * d;
  }
}

class Hook extends GO {
  constructor () {
    super('booster', [layers[1]]);
    this.x = p1.x; this.y = p1.y;
    this.scale = 1;
    this.size = 60;
    this.dv = -800;
    this.rotation = p1.rotation + Math.PI;
  }

  destroy() {
    if (this.dead) return;
    super.destroy();
    hook = undefined;
  }

  pull() {
    this.rotation = Math.atan2(p1.y - this.y, p1.x - this.x)
    this.dv = 100;
    if (theFish) {
      if (rdist(hook,theFish) < 30) {
        theFish.hp--;
        theFish.scale -= 0.05;
        theFish.rotation = rand.range(0, Math.PI * 2);
        theFish.dv = rand.range(100, 200);
        if (theFish.hp < 0) {
          theFish.catch();
        }
        this.dv = 0;
      } else if (rdist(hook,theFish) < 100) {
        theFish.rotation = Math.atan2(this.y - theFish.y, this.x - theFish.x) + rand.range(0, Math.PI / 20);
        theFish.dv = rand.range(100, 200);
        this.dv = 0;
      }
    }
    if (rdist(p1, this) < 50) {
      this.destroy();
    } 
  }

  u(d) {
    super.u(d);
    // Damp
    if (this.dv !== 0) {
      this.dv -= this.dv * 2 * d;
    }

    if (rdist(p1, this) > 300) {
      let angle = Math.atan2(this.y - p1.y, this.x - p1.x)
      this.x = Math.cos(angle) * 300 + p1.x;
      this.y = Math.sin(angle) * 300 + p1.y;
    }
  }
}

FC = ['#89C3CA', '#C6EC8E', '#FFCB4B', '#E84583', '#FA8072'];

class Lake extends GO {
  constructor (x, y) {
    super('lake', [layers[1]]);
    this.x = x; this.y = y;
    this.scale = 10;
  }

  spawnFish() {
    if (rand.b(40)) {
      theFish = new Fish(hook.x + rand.range(-200,200), hook.y + rand.range(-200,200), FC[rand.range(0,4)]);
      if (fishes >= 3 && !hasGx) {
        theFish.gx = true;
        theFish.scale = 2;
        theFish.hp = 10;
      }
    }
  }
}

class Fish extends GO {
  constructor (x, y, color) {
    super(null, [layers[2]]);
    this.x = x; this.y = y;
    this.scale = 0.6;
    this.app = [["M49 17Q34 20 31 39Q31 59 42 70Q41 79 31 85Q40 90 49 88", color, 2, color]];
    this.ai = setInterval(()=>this.act(), 1000);
    this.hp = 4;
    setTimeout(()=>this.flee(), rand.range(10000, 30000));
  }

  flee () {
    if (this.dead) return;
    this.destroy();
    contextHint('The fish dives into deep space');
  }

  destroy() {
    if (this.dead) return;
    super.destroy();
    theFish = undefined;
    clearInterval(this.ai);
  }

  catch () {
    this.destroy();
    fishes++;
    if (this.gx) {
      contextHint('You capture Galaxian!');
      hasGx = true;
      gxTime = undefined;
      fishes = 0;
      hook.destroy();
    } else {
      contextHint('You capture the space fish.');
    }
  }

  act() {
    if (rand.b(70)) return;
    this.rotation = rand.range(0, Math.PI * 2);
    this.dv = rand.range(50, 100);
  }
}

class GXPod extends GO {
  collide () {
    if (hasGx) return;
    if (!gxTime) {
      gxTime = 90;
      this.rotSpeed = 5;
      playSound(6);
    }
  }
  reset () {
    podReached = false;
    this.rotSpeed = 0;
  }
  u(d) {
    this.rotation += this.rotSpeed * d;
    if (!gxTime) {
      this.rotSpeed = 0;
    }
  }
}