function gen () {
  planets = PLANETS.map(PD => createPlanet(PD));
  
  junoPod = new Pod('rocket', [layers[1]]);
  junoPod.name = 'Juno Pod';
  junoPod.x = -11800; junoPod.y = 13600; junoPod.size = 30; junoPod.hits = 'p'; junoPod.scale = 1; junoPod.rotSpeed = 0;
  planets.push(junoPod);
}