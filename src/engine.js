const font = (s) => s + 'px Courier New';

var canvas = document.querySelector('canvas');
let W = canvas.width;
let H = canvas.height;

(function() {
  window.addEventListener('resize', resizeCanvas, false);
  function resizeCanvas() {
    canvas.width = Math.max(Math.min(window.innerWidth, ASTEROID_START), 800);
    canvas.height = Math.max(Math.min(window.innerHeight, ASTEROID_START), 800);
    W = canvas.width;
    H = canvas.height;
  }
  
  resizeCanvas();
})();

var gState = 0;
var mobDestroyed = false;

// RAF
var time = 0;
function raf(fn) {
  function rf(fn) {
    return window.requestAnimationFrame(function() {
      var now = Date.now();
      var elapsed = now - time;
      if (elapsed > 999) {
        elapsed = 1 / 60;
      } else {
        elapsed /= 1000;
      }
      time = now;
      fn(elapsed);
    });
  }
  return rf(function tick(elapsed) {
    fn(elapsed);
    rf(tick);
  });
}

// Game Loop
var layers = [[],[],[]];
var mobs = [];
var sfx = [];
var enemies = [];
var players = [];

var ctx = canvas.getContext('2d');
function renderMob(m, flip) {
  if (m.dead) return;
  if (m.specialRender) {
    m.specialRender(ctx);
  }
  var turnScale = 1;
  if ((m.turnScale > 0 && flip) || (m.turnScale < 0 && !flip)) {
    turnScale = 1 - Math.abs(m.turnScale);
  } 
  if (!m.specialRender) {
    Renderer.renderShapes(ctx, m.app, m.x, m.y, m.scale, 1, m.rotation, 50, 50, m.camera);
  }
}
var timers = [];
raf(function(d) {
  if (timers.length) {
    timers.forEach(t => {
      t[1] -= d;
      if (t[1] < 0) {
        t[0]();
        t.d = true;
      }
    })
    timers = timers.filter(f => !f.d);
  }
  ctx.fillStyle = '#05063c';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  layers.forEach(l => l.forEach(m => {
    m.k && m.k(); // TODO this is only for the ship, put it somewhere
    m.u && m.u(d);
    renderMob(m);
    renderMob(m, true); // TODO: Only if m.flipped
    /*if (true) {// Debug 
      ctx.strokeStyle = '#00ff00';
      ctx.beginPath();
      ctx.arc(m.x,m.y,m.size,0,Math.PI*2,true);
      ctx.stroke();
    }*/
    const targets = m.hits == 'p' ? players : enemies;
    //m.hits && (m.hits === 'p' ? !player.dead && collide(player, m) : enemies.forEach(e => collide(e, m)));
    m.hits && targets.forEach(e => collide(e, m));
    let killType;
    if (m.koo) {
      if (m.y > starCamera.y + H / 2 + m.size) {
        killType = 'kob';
      } else if (m.y < starCamera.y - H / 2 - m.size) {
        killType = 'kot';
      } else if (m.x > starCamera.x + W / 2 + m.size) {
        killType = 'kor';
      } else if (m.x < starCamera.x - W / 2 - m.size) {
        killType = 'kol';
      }
    }
    if(killType) {
      m.destroy(killType);
    }
  }))

  if (mobDestroyed){
    mobs.filter(m => m.dead == true).forEach(m => {
      m.lists.forEach(l => l.splice(l.indexOf(m), 1));
    });
    //console.log(mobs.filter(m => m.dead == true).length+" dead mobs")
    mobDestroyed = false;
    mobs = mobs.filter(m => m.dead === undefined);
    //console.log(mobs.length+" alive mobs")
  }

  sfx.forEach(s => {
    s.update(d);
    s.render(ctx);
  });
  renderUI(ctx);
});