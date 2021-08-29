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

  /*
  collide(m) {
    this.destroy();
    m.destroy();
    for (var i = 0; i < 10; i++) {
      var e = new Explosion(50);
      e.x = this.x - (this.size / 2) + rand.range(0, this.size);
      e.y = this.y - (this.size / 2) + rand.range(0, this.size);
      sfx.push(e);
    }
  }
  */
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
  constructor (x, y, size) {
    super('asteroid', [layers[2]]);
    this.isAsteroid = true;
    this.x = x; this.y = y;
    this.size = size;
    this.scale = size;
    this.hits = 'p';
    this.deathInterval = setInterval(() => {
      if (rdist(this, p1) > ASTEROID_SPACE) {
        asteroids--;
        clearInterval(this.deathInterval);
        this.destroy();
      }
    }, 1000)
    const blurbCount = rand.range(10, 20);
    this.blurbs = [];
    this.blurbs[0] = [0, 0, this.scale];
    for (let i = 1; i < blurbCount; i++) {
      const blurbSize = this.scale * rand.range(4, 7) / 10;
      const dist = rand.range(this.scale - blurbSize, this.scale);
      const angle = rand.range(0, 2 * Math.PI);
      this.blurbs[i] = [angle, dist, blurbSize];
    }
    this.rotSpeed = Math.PI / rand.range(700, 1200) * (rand.b() ? 1 : -1);
  }
  specialRender(c) {
    c.globalAlpha = 1;
    const thex = cameraX(mainCamera, this.x);
    const they = cameraY(mainCamera, this.y);
    c.fillStyle = GREY;
    for (let i = 0; i < this.blurbs.length; i++) {
      c.beginPath();
      const angle = this.blurbs[i][0];
      const dist = this.blurbs[i][1];
      c.arc(thex + Math.cos(angle + this.rotation) * dist,they + Math.sin(angle + this.rotation) * dist, this.blurbs[i][2], 0, Math.PI*2, true);
      c.fill();
    }
  }

  u() {
    this.rotation += this.rotSpeed;
  }
}

function createPlanet (planetData) {
  var t = new Planet();
  t.name = planetData[0];
  t.isPlanet = true;
  t.x = planetData[1];
  t.y = planetData[2];
  t.size = planetData[3];
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
    c.arc(thex,they,this.size,0,Math.PI*2,true);
    c.fill();
  }
  addCity (rotation, app, name) {
    const c = new City(app, [layers[0]], name);
    c.x = this.x + this.size * Math.cos(rotation);
    c.y = this.y + this.size * Math.sin(rotation);
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