class GO {
  constructor(app, lists) {
    this.app = SHAPES[app];
    this.dv = this.av = 0;
    this.rotation = 0;
    this.turnScale = 0;
    mobs.push(this);
    lists.forEach(l => l.push(this));
    this.lists = lists;
    this.ch = [];
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
    //this.lists.forEach(l => l.splice(l.indexOf(this), 1));
    this.ch.forEach(c => c.destroy());
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
    this.size = size * 20;
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
    p.dv = 500 * -Math.sign(p.dv);
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
        p.dv = 0;
        playSound(2);
      } else {
        // Bounce!
        p.dv = -500;
      }
      let reloc = this.size + p.size + 1;
      if (!p.landed) {
        reloc += 20;
      }
      const angle = Math.atan2(p.y - this.y, p.x - this.x);
      p.x = this.x + Math.cos(angle) * reloc;
      p.y = this.y + Math.sin(angle) * reloc;
      if (p.landed) {
        p.rotation = angle; // TODO: Tween rotation?
        const city = this.nearbyCity(p);
        if (city) {
          p.landOnCity(this, city);
        }
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
    var color = p1.boost ? "#5555ff" : "#ffe203";
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
    currentWaypoint = planets.find(p=>p.name=='Ceres');
    this.rotSpeed = 5;
  }
  reset () {
    this.rotSpeed = 0;
  }
  u(d) {
    this.rotation += this.rotSpeed * d;
  }
}

class Booster extends GO {
  constructor (x, y) {
    super('rocket', [layers[1]]);
    this.x = x; this.y = y;
    this.hits = 'p';
    this.scale = 1;
    this.size = 40;
  }

  collide () {
    p1.boost = 5; this.destroy();
  }
}