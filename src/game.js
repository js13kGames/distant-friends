// --- Initialization
let asteroids = 0;
const triggers = {};
var p1;
let currentWaypoint, currentWaypointIndex;
let planets;

// Load triggers
FRIENDS.forEach((friend,j) => {
  const first = friend.findSequence[0];
  triggers[first.planet + "-" + first.city] = first;
  friend.findSequence.forEach((f, i) => {
    f.friendIndex = j;
    if (i < friend.findSequence.length - 1) {
      f.next = friend.findSequence[i + 1];
    }
  })
})

NPCs.forEach(npc => triggers[npc[0] + "-" + npc[1]] = { person: npc[2], sequence: [npc[3]]});

function startGame() {
  function createShip(a,x,k){
    var p = new Ship(a, [layers[2]]);
    p.energy = 0;
    p.dv = 480;
    p.x = x;
    p.y = H - 20;
    p.size = 8;
    p.scale = 2;
    p.keys=k;
    p.rotation = -Math.PI / 2;
    p.songFragments = {};
    p.blastRadius = 0;
    return p;
  }

  if (!planets)  {
    planets = PLANETS.map(PD => createPlanet(PD));
    junoPod = new Pod('rocket', [layers[1]]);
    junoPod.name = 'Juno Pod';
    junoPod.x = -11800; junoPod.y = 13600; junoPod.size = 30; junoPod.hits = 'p'; junoPod.scale = 1; junoPod.rotSpeed = 0;
    planets.push(junoPod);
  }
  currentWaypoint = planets[0];
  currentWaypointIndex = 0;

  p1 = createShip('ship', W / 2, ['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space' ]);
  const randomAngle = Math.PI/2;
  const randDist = 3000;
  p1.x = Math.cos(randomAngle) * randDist + planets[0].x;
  p1.y = Math.sin(randomAngle) * randDist + planets[0].y;

  mainCamera.x = p1.x;
  mainCamera.y = p1.y;
  starCamera.x = p1.x;
  starCamera.y = p1.y;
  stars50();

}

typed(13, () => {
  if (gState == 0) {
    if (musicLoaded) {
      // zzfxX - the common audio context
      zzfxX=new(window.AudioContext||webkitAudioContext);
      title()
    }
  } else if (gState == 1) {
    zzfxX=new(top.AudioContext||webkitAudioContext);
    playMusic(1);
    playSound(4);
    startGame();
    gState = 2;
  } else if (gState == 2) {
    currentWaypointIndex++;
    if (currentWaypointIndex >= planets.length) {
      currentWaypointIndex = 0;
    }
    currentWaypoint = planets[currentWaypointIndex];
  } else if (gState == 3) {
    restart();
    gState = 2;
  } else if (gState == 10) {
    conversationNext();
  }

});

function stars50(){
  for (var i = 0; i < 50; i++) {
    var t = new Star(rand.range(1, 3));
    t.x = rand.range(p1.x - W / 2, p1.x + W / 2);
    t.y = rand.range(p1.y - H / 2, p1.y + H / 2);
  }
}

function title(){
  playMusic(0);
  mainCamera.x = W/2;
  mainCamera.y = H/2;
  gState = 1;
}

function gameOver() {
  gState = 3;
}

function victory() {
  p1.won = true;
}

function restart() {
  seeded = LCG(13312);
  layers = [[],[],[]];
  mobs = [];
  rocks = [];
  timers = [];
  startGame();
}

setInterval (() => {
  if (gState != 2) return;
  if (p1.isCruising() && rand.b(30))
    asteroidField(p1.rotation);
}, 2000);


function asteroidField(direction) {
  for (let j = 0; j < ASTEROID_RINGS; j++)
    for (let i = 0; i < ASTEROIDS_PER_RING; i++) {
      const distance = ASTEROID_START + rand.range(-40, 40) + ASTEROID_RING_WIDTH * j;
      const aDirection = direction + rand.range(-ASTEROID_ANGLE_RANGE, ASTEROID_ANGLE_RANGE) * (Math.PI / 180);
      const x = p1.x + distance * Math.cos(aDirection);
      const y = p1.y + distance * Math.sin(aDirection);
      new Asteroid(x, y, rand.range(1, 3));
      asteroids++;
    }
}