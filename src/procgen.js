function gen () {
  planets = PLANETS.map(PD => createPlanet(PD));
  
  junoPod = new Pod('rocket', [layers[1]]);
  junoPod.name = 'Juno Pod';
  junoPod.x = -11800; junoPod.y = 13600; junoPod.size = 30; junoPod.hits = 'p'; junoPod.scale = 1; junoPod.rotSpeed = 0;
  planets.push(junoPod);

  // Race track between Ceres and Juno
  raceTrack(planets[0], planets[2], 1);
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