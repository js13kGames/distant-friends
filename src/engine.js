const font = (s) => s + 'px Courier New';

let W = canvas.width;
let H = canvas.height;
let canvasScale;

(function() {
  window.addEventListener('resize', resizeCanvas, false);
  function resizeCanvas() {
    ih = window.innerHeight;
    iw = window.innerWidth;
    if (ih > iw) {
      // Portrait
      rat = iw / ih;
      ih = Math.max(Math.min(ih, ASTEROID_START), 800);
      iw = ih * rat;
    } else {
      rat = ih / iw;
      iw = Math.max(Math.min(iw, ASTEROID_START), 1200);
      ih = iw * rat;  
    }
    canvasScale = ih / canvas.scrollHeight;
    canvas.width = iw;
    canvas.height = ih;
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
var rocks = [];

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
    Renderer.renderShapes(ctx, m.app, m.x, m.y, m.scale, 1, m.rotation, 49, 49, m.camera);
  }
}
raf(function(d) {
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
    m.hits && (m.hits === 'p' ? collide(m, p1) : rocks.length && rocks.forEach(a => collide(m, a))); // Assume the mob hits the asteroids if it doesn't hit the player (i.e. a rocket)
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
  renderUI(ctx, d);
});