function gen () {
  planets = PLANETS.map(PD => createPlanet(PD));
  
  junoPod = new Pod('pinwheel', [layers[1]]);
  junoPod.name = 'Juno Pinwheel';
  junoPod.x = -11800; junoPod.y = 13600; junoPod.size = 30; junoPod.hits = 'p'; junoPod.scale = 1; junoPod.rotSpeed = 0;

  gxPod = new GXPod('pinwheel', [layers[1]]);
  gxPod.name = 'Galaxian Pinwheel';
  gxPod.x = planets[2].x; gxPod.y = planets[2].y + 3000; gxPod.size = 30; gxPod.hits = 'p'; gxPod.scale = 1; gxPod.rotSpeed = 0;

  capeSantosField = new EmptyPod('blank', [layers[1]]);
  capeSantosField.name = 'Los Santos Field';
  capeSantosField.x = planets[1].x + 3000;
  capeSantosField.y = planets[1].y + 3000;
  capeSantosField.size = 30;
  capeSantosField.scale = 1;


  ponds = [];
  ponds.push(new Lake(gxPod.x, gxPod.y + 500));

  // Race track between Ceres and Juno
  raceTrack(planets[0], planets[2], 1);

  seleniumAsteroidField();
}

function seleniumAsteroidField() {
  for (let i = 0; i < ASTEROID_RINGS * ASTEROIDS_PER_RING; i++) {
    const distance = rand.range(-1000, 1000);
    const aDirection = rand.range(0, 2 * Math.PI);
    const x = capeSantosField.x + distance * Math.cos(aDirection);
    const y = capeSantosField.y + distance * Math.sin(aDirection);
    new Asteroid(x, y, rand.range(1, 3), true);
    asteroids++;
  }
}

function raceTrack(p1, p2, diff) {
  point = {x: p1.x, y: p1.y};
  angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
  point.x = point.x + Math.cos(angle) * (p1.size + 1000);
  point.y = point.y + Math.sin(angle) * (p1.size + 1000);
  j = 0;
  while (dist(point, p2) > p2.size + 1000) {
    j++;
    point.x = point.x + Math.cos(angle) * 1200;
    point.y = point.y + Math.sin(angle) * 1200;
    for (i = 0; i < 10; i++) {
      x = point.x + Math.cos(angle + Math.PI / 2) * (i+1-5) * 300;
      y = point.y + Math.sin(angle + Math.PI / 2) * (i+1-5) * 300;
      x+= rands.range(-200, 200);
      y+= rands.range(-200, 200);
      if(rands.int(100)<Math.max(100 - 10*j, 10)) {
        new Booster(x, y);
      } else { 
        new Asteroid(x,y,rand.range(1, 3), true);
      }
    }
  }
}