// ---------- Pasted ZZFX

// zzfx() - the universal entry point -- returns a AudioBufferSourceNode
zzfx=(...t)=>zzfxP(zzfxG(...t))

// zzfxP() - the sound player -- returns a AudioBufferSourceNode
zzfxP=(...t)=>{let e=zzfxX.createBufferSource(),f=zzfxX.createBuffer(t.length,t[0].length,zzfxR);t.map((d,i)=>f.getChannelData(i).set(d)),e.buffer=f,e.connect(zzfxX.destination),e.start();return e}

// zzfxG() - the sound generator -- returns an array of sample data
zzfxG=(q=1,k=.05,c=220,e=0,t=0,u=.1,r=0,F=1,v=0,z=0,w=0,A=0,l=0,B=0,x=0,G=0,d=0,y=1,m=0,C=0)=>{let b=2*Math.PI,H=v*=500*b/zzfxR**2,I=(0<x?1:-1)*b/4,D=c*=(1+2*k*Math.random()-k)*b/zzfxR,Z=[],g=0,E=0,a=0,n=1,J=0,K=0,f=0,p,h;e=99+zzfxR*e;m*=zzfxR;t*=zzfxR;u*=zzfxR;d*=zzfxR;z*=500*b/zzfxR**3;x*=b/zzfxR;w*=b/zzfxR;A*=zzfxR;l=zzfxR*l|0;for(h=e+m+t+u+d|0;a<h;Z[a++]=f)++K%(100*G|0)||(f=r?1<r?2<r?3<r?Math.sin((g%b)**3):Math.max(Math.min(Math.tan(g),1),-1):1-(2*g/b%2+2)%2:1-4*Math.abs(Math.round(g/b)-g/b):Math.sin(g),f=(l?1-C+C*Math.sin(2*Math.PI*a/l):1)*(0<f?1:-1)*Math.abs(f)**F*q*zzfxV*(a<e?a/e:a<e+m?1-(a-e)/m*(1-y):a<e+m+t?y:a<h-d?(h-a-d)/u*y:0),f=d?f/2+(d>a?0:(a<h-d?1:(h-a)/d)*Z[a-d|0]/2):f),p=(c+=v+=z)*Math.sin(E*x-I),g+=p-p*B*(1-1E9*(Math.sin(a)+1)%2),E+=p-p*B*(1-1E9*(Math.sin(a)**2+1)%2),n&&++n>A&&(c+=w,D+=w,n=0),!l||++J%l||(c=D,v=H,n=n||1);return Z}

// zzfxV - global volume
zzfxV=.3

// zzfxR - global sample rate
zzfxR=44100

// ---------- End of ZZFX

// ---------- Pasted ZZFXM

//! ZzFXM (v2.0.3) | (C) Keith Clark | MIT | https://github.com/keithclark/ZzFXM
zzfxM=(n,f,t,e=125)=>{let l,o,z,r,g,h,x,a,u,c,d,i,m,p,G,M=0,R=[],b=[],j=[],k=0,q=0,s=1,v={},w=zzfxR/e*60>>2;for(;s;k++)R=[s=a=d=m=0],t.map((e,d)=>{for(x=f[e][k]||[0,0,0],s|=!!f[e][k],G=m+(f[e][0].length-2-!a)*w,p=d==t.length-1,o=2,r=m;o<x.length+p;a=++o){for(g=x[o],u=o==x.length+p-1&&p||c!=(x[0]||0)|g|0,z=0;z<w&&a;z++>w-99&&u?i+=(i<1)/99:0)h=(1-i)*R[M++]/2||0,b[r]=(b[r]||0)-h*q+h,j[r]=(j[r++]||0)+h*q+h;g&&(i=g%1,q=x[1]||0,(g|=0)&&(R=v[[c=x[M=0]||0,g]]=v[[c,g]]||(l=[...n[c]],l[2]*=2**((g-12)/12),g>0?zzfxG(...l):[])))}m=G});return[b,j]}

// ---------- End of ZZFXM

const musics = [
  [[[,0,441,.06,.01,.7,,,,,,,,.5,,,1.05],[.9,0,221,,,,,.7,,,,,,.1,.1,,.17],[,0,221,,,,,,,,,,,.3,,.05],[,0,109,,.12,.3,,.9,,,,.2,,.2,,,.7,.9],[.9,0,221,.01,.12,.3,,.9,,,,.2,,.2,,,.7,.9]],[[[,-1,8,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,10,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,1,32,,,,27,,,,32,,,,34,,,,31,,,,27,,,,31,,,,32,,,,29,,,,27,,,,25,,,,27,,,,29,,,,27,,,,25,,,,27,,,,],[2,,,,,,,,,,2,,,,,,,,,,,,,,,,2,,,,,,,,,,,,,,,,2,,,,,,,,,,,,,,,,2,,,,2,,,,],[3,1,,,,,,,,,32,,,,,,,,,,,,,,,,,,,,29,,,,,,,,,,,,27,,,,,,,,24,,,,,,,,24,,,,,,,-1],[4,-1,,,,,,,,,32,,,,,,,,,,,,,,,,,,,,29,,,,,,,,,,,,27,,,,,,,,24,,,,,,,,24,,,,,-1,,-1]],[[,-1,12,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,10,,,,,,,,,,,,,,,,,,,,,,,,,,,,13,,,,],[1,1,32,,,,27,,,,25,,,,27,,,,31,,,,27,,,,25,,,,27,,,,27,,,,25,,,,24,,,,25,,,,32,,,,31,,,,25,,,,24,,,,],[2,,20,,,,,,,,,,,,,,,,22,,,,,,,,2,,,,,,,,24,,,,,,,,2,,,,,,,,24,,,,,,,,24,,,,36,,,,],[3,1,,,,,,,,,20,,,,,,,,,,,,,,,,24,,-1,,27,,,,25,,,,,,,,-1,,,,24,,,,25,,-1,,24,,,,20,,-1,,8,,,,],[3,-1,,,,,,,,,,,,,32,,,,-1,,,,36,,,,,,-1,,36,,,,29,,,,,,,,-1,,,,29,,,,30,,-1,,27,,,,27,,-1,,29,,,,]],[[,-1,8,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,13,,,,,,,,,,,,,,,,,,,,,,,,12,,,,,,,,],[1,1,32,,,,27,,,,,,,,,,34,,31,,,,,,,,,,,,27,,,,25,,,,,,,,27,,,,,,24,,22,,,,25,,,,,,20,,24,,25,,],[2,,,,,,,,,,2,,,,,,,,,,,,,,,,2,,,,2,,,,,,,,,,,,2,,,,,,,,,,,,,,,,2,,,,2,,,,],[3,1,,,,,,,,,20,,,,24,,,,-1,,,,,,,,,,,,24,,,,25,,,,,,,,-1,,,,24,,,,25,,,,24,,,,20,,,,8,,,,],[3,-1,,,,,,,,,24,,,,27,,,,-1,,,,,,,,,,,,27,,,,29,,,,,,,,-1,,,,29,,,,30,,,,34,,,,27,,,,29,,,,]]],[0,1,2,1],170],
  [[[.9,0,109,,,.5,1,,,,,,,.2,,,1],[.7,0,439,.01,.1,,,,,,,,,.05,,,.5],[.9,0,219,,.05,,1,,,,,,,.2,,,.5],[1.7,0,119,,.05,,,,,,20,.1,,.7]],[[[,-.5,13,,17,,20,,,,,,,,,,,,12,,17,,20,,,,,,,,,,,,13,,17,,20,,,,,,,,,,,,8,,12,,15,,,,,,,,,,,,],[1,1,,,29,,25,,,,27,,,,32,,,,,,29,,25,,,,27,,,,32,,,,,,29,,25,,,,27,,,,32,,,,,,29,,25,,,,27,,,,24,,,,],[2,-1,,,32,,,,32,,,,30,,,,29,,,,29,,,,29,,,,24,,,,27,,,,32,,,,32,,,,34,,,,32,,,,32,,,,29,,,,25,,,,27,,],[2,1,,,29,,,,29,,,,,,27,,,,,,25,,,,25,,,,,,25,,,,,,29,,,,29,,,,,,30,,,,,,29,,,,25,,,,20,,,,12,,],[3,,1,,,,,,,,1,,,,,,,,1,,,,,,,,1,,,,,,,,1,,,,,,,,1,,,,,,,,1,,,,,,,,1,,,,,,,,]],[[,-.5,13,,17,,20,,,,,,,,,,,,12,,17,,20,,,,,,,,,,,,13,,17,,20,,,,,,,,,,,,8,,12,,15,,,,,,,,12,,,,],[1,1,,,29,,25,,,,27,,,,32,,,,,,29,,25,,,,27,,,,20,,,,,,29,,25,,,,27,,,,32,,,,,,29,,25,,,,27,,,,24,,,,],[2,-1,,,29,,,,29,,,,27,,29,,30,,,,32,,,,32,,,,30,,32,,34,,,,25,,,,36,,,,36,,,,27,,,,27,,,,27,,,,27,,,,25,,],[2,1,,,25,,,,25,,,,,,,,,,,,29,,,,29,,,,,,,,,,,,20,,,,20,,,,20,,,,20,,,,24,,,,24,,,,22,,,,20,,],[3,,1,,,,,,,,1,,,,1,,,,1,,,,,,1,,1,,,,1,,,,1,,,,,,,,1,,,,1,,,,1,,,,,,,,,,,,1,,1,,]],[[,-.5,13,,17,,20,,,,,,,,,,,,12,,15,,20,,,,,,,,,,,,10,,13,,18,,,,,,,,,,,,8,,12,,15,,,,,,,,12,,,,],[1,1,,,29,,25,,,,27,,24,,32,,,,,,29,,25,,27,,29,,30,,32,,,,,,29,,25,,27,,36,,,,34,,,,32,,,,30,,32,,29,,30,,27,,25,,],[2,-1,,,30,,,,29,,,,30,,,,29,,,,30,,,,29,,,,30,,,,29,,,,30,,,,29,,,,30,,,,32,,,,32,,,,32,,,,32,,,,32,,],[2,1,,,25,,,,25,,,,,,,,,,,,29,,,,29,,,,,,,,,,,,20,,,,20,,,,20,,,,20,,,,24,,,,24,,,,22,,,,20,,],[3,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,]],[[,-.5,13,,17,,20,,,,,,,,,,,,12,,15,,20,,,,,,,,,,,,10,,13,,18,,,,,,,,,,,,8,,12,,15,,,,,,,,12,,,,],[1,1,,,29,,25,,,,27,,24,,32,,,,,,29,,25,,27,,29,,30,,32,,,,,,29,,25,,27,,36,,,,34,,,,32,,,,30,,32,,29,,30,,27,,25,,],[2,-1,,,30,,,,29,,,,30,,,,29,,,,30,,,,29,,,,30,,,,29,,,,30,,,,29,,,,30,,,,32,,,,32,,,,32,,,,32,,,,32,,],[2,1,,,25,,,,25,,,,25,,,,25,,,,24,,,,24,,,,24,,,,24,,,,22,,,-1,22,,,,22,,,,22,,,,20,,,,20,,,,20,,,,20,,],[3,,1,,-1,,1,,-1,,,,,,,,-1,,1,,-1,,1,,-1,,,,,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,,,1,-1,1,,-1,,1,,-1,,-1,,-1,,1,,-1,,]],[[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[2,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[2,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[3,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]]],[0,1,2,3],89]
];
const sfxs = [
  [,0,1048,.01,.05,.8,1,,,,,,,,.1,,.1],
  [,0,880,.01,.05,.8,1,,,,,,,,.1,,.1],
  [,0,440,.01,.05,.8,1,,,,,,,,.1,,.1],
  [,0,660,.01,.05,.8,1,,,,,,,,.1,,.1],

  [,0,660,.01,.05,.8,1,,,,,,,,.1,,.1]
];

function playSound(i) {
  zzfx(...sfxs[i]);
}

let song;
function playMusic(i) {
  if (song) {
    song.stop();
  }
  song = zzfxP(...musicBuffers[i]);
  song.loop = true;
}

// --- Initialization

const ASTEROID_ANGLE_RANGE = 80;
const ASTEROID_START = 1000;
const ASTEROID_RING_WIDTH = 130;
const ASTEROID_RINGS = 6;
const ASTEROIDS_PER_RING = 5;
const ASTEROID_SPACE = ASTEROID_START + ASTEROID_RING_WIDTH * ASTEROID_RINGS;

var gState = 0;

// Generate music...
let musicBuffers;
var musicLoaded = false;
setTimeout(() => {
   musicBuffers = musics.map(m => zzfxM(...m))
   musicLoaded = true;
}, 50);


// Random
var rand = {
  int: function(max) {
    return Math.random() * (max || 0xfffffff) | 0;
  },
  range: function(min, max) {
    return this.int(max - min) + min;
  },
  b(p = 50) {
    return this.range(0,100)<p;
  }
};

// 1993 Park-Miller LCG, https://gist.github.com/blixt/f17b47c62508be59987b
function LCG(s) {
  return function() {
    s = Math.imul(16807, s) | 0 % 2147483647;
    return (s & 2147483647) / 2147483648;
  }
}

var seeded = LCG(13312);

var rands = {
  int: function(max) {
    return seeded() * (max || 0xfffffff) | 0;
  },
  range: function(min, max) {
    if (min === max) {
      return min;
    }
    return this.int(max - min) + min;
  },
  b() {
    return this.range(0,100)<50;
  }
};


// Input
var pressed = {};
var typedCallbacks = {};
function keyPress(e){
  if (typedCallbacks[e.which]){
    typedCallbacks[e.which]();
  }
}
window.onkeydown = e => pressed[e.code] = true;
window.onkeyup = e => pressed[e.code] = false;
window.addEventListener("keypress", keyPress);
window.addEventListener("keydown", e => {if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) e.preventDefault();});
function isDown(keyCode){
  return pressed[keyCode];
};
function typed(keyCode, callback){
  typedCallbacks[keyCode] = callback;   
}

const Renderer = {
  // Skew alters the X scale
  renderShapes(c, shapes, x, y, scale, skew, rotation, pivotX, pivotY, camera, fixedToCamera) {
    if (!camera) {
      camera = mainCamera;
    }
    shapes.forEach(sh => {
      if (sh[0] == "C") {
        this.renderCircle(c, sh[3], sh[4], sh[5], sh[6], sh [1] * scale + x, sh[2]  * scale + y, scale, pivotX, pivotY, false, camera, fixedToCamera);
        if (!sh[7]) {
          this.renderCircle(c, sh[3], sh[4], sh[5], sh[6], -sh [1] * scale + x, sh[2]  * scale + y, scale, pivotX, pivotY, true, camera, fixedToCamera);
        }
      } else {
        this.renderPath(c, sh[0], sh[1], sh[2], sh[3], x, y, scale, skew, rotation, pivotX, pivotY, false, camera, fixedToCamera);
        if (!sh[4]) {
          this.renderPath(c, sh[0], sh[1], sh[2], sh[3], x, y, scale, 1 + (1 - skew), rotation, pivotX, pivotY, true, camera, fixedToCamera);
        }
      }
    });
  },
  renderPath(c, path, strokeStyle, lineWidth, fillStyle, x, y, scale, skew, rotation, pivotX, pivotY, flip, camera, fixedToCamera) {
    c.strokeStyle = strokeStyle;
    c.lineWidth = lineWidth;
    c.fillStyle = fillStyle;
    if (!fixedToCamera) {
      x = cameraX(camera, x);
      y = cameraY(camera, y);
    }
    let scaleX = scale / skew;
    pivotX = pivotX * scaleX;
    pivotY = pivotY * scale;
    const transPivotX = flip ? x + pivotX : x - pivotX;
    c.translate(transPivotX, y - pivotY);
    const rotaPivotX = flip ? -pivotX : pivotX;
    c.translate(rotaPivotX, pivotY);
    c.rotate(rotation + Math.PI / 2);
    c.translate(-rotaPivotX, -pivotY);
    c.scale(scaleX * (flip ? -1 : 1), scale);
    const p2d = new Path2D(path);
    c.stroke(p2d);
    if (fillStyle)
      c.fill(p2d);
    c.setTransform(1, 0, 0, 1, 0, 0);
  },
  renderCircle(c, radius, strokeStyle, lineWidth, fillStyle, x, y, scale, pivotX, pivotY, flip, camera, fixedToCamera) {
    c.strokeStyle = strokeStyle;
    c.lineWidth = lineWidth;
    c.fillStyle = fillStyle;
    if (!fixedToCamera) {
      x = cameraX(camera, x);
      y = cameraY(camera, y);
    }
    pivotX = pivotX * scale;
    pivotY = pivotY * scale;
    const transPivotX = flip ? x + pivotX : x - pivotX;
    c.translate(transPivotX, y - pivotY);
    /*const rotaPivotX = flip ? -pivotX : pivotX;
    c.translate(rotaPivotX, pivotY);
    c.rotate(rotation + Math.PI / 2);
    c.translate(-rotaPivotX, -pivotY);*/
    c.scale(scale * (flip ? -1 : 1), scale);
    c.beginPath();
    c.arc(0, 0, radius, 0, Math.PI*2);
    c.stroke();
    c.fill();
    c.setTransform(1, 0, 0, 1, 0, 0);
  }
}

// Mob classes

var mobDestroyed = false;
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


// "Physics" (LOL)

function dist(a,b) {
  return Math.abs(a.x-b.x) + Math.abs(a.y-b.y);
}

function rdist(a, b) {
  var aa = a.x - b.x;
  var bb = a.y - b.y;
  return Math.sqrt( aa*aa + bb*bb );
}

function collide(a, b) {
  if (rdist(a,b) < a.size + b.size) {
    a.collide(b);
  }
}

// Game Loop
var layers = [[],[],[]];
var mobs = [];
var sfx = [];
var enemies = [];
var players = [];
var canvas = document.querySelector('canvas');
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

const min = (a,b) => a > b ? b : a;
// THE GAME!
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

const font = (s) => s + 'px Courier New';

const FRAGMENTS = ['🎹','🎻','🎷','🎸','🎺','🥁'];

const PLANETS = [
  [
    'Ninua', 0, 0, 2000, [
      ['Arkadia', 0.25, 'capital'],
      ['Veyros', 1.25, 'industrial'],
      ['Sprot', 1.1, 'town']
    ], '#0d1852', '#5b5db8'
  ],
  [
    'Poria', 0, -3400, 200, [
      ['Kamera', 0.3, 'town']
    ], '#0d1852', '#5b5db8'
  ],
  [
    'Apos', -10000, 0, 1000, [
      ['Vernya', 0.1, 'capital'],
      ['Koroko', 1.8, 'town'],
      ['Kamera', 0.3, 'town']
    ], '#0d1852', '#5b5db8'
  ],
  [
    'Oldogg', -8000, 9200, 1300, [
      ['Geckoria', 0.1, 'capital'],
      ['Karnalgg', 1.8, 'town']
    ], '#0d1852', '#5b5db8'
  ],
]

const FRIENDS = [
  {
    name: 'Kori',
    findSequence: [
      {
        planet: 'Ninua',
        city: 'Arkadia',
        sequence: [
          [ 'cat', "Kori left Arkadia years ago... he said he was tired of the hectic life here."],
          [ 'cat', "He always wanted to live in the town of Sprot, with some luck you'll find him there!"],
        ]
      },
      {
        planet: 'Ninua',
        city: 'Sprot',
        sequence: [
          [ 'dog', "I heard you are looking for Kori the cat. He used to run the windmill here... until he got tired of it."],
          [ 'dog', "I recall he spent entire nights looking at Poria,\nthe green moon. If I where you I'd look for him\nthere."],
        ]
      },
      {
        planet: 'Poria',
        city: 'Kamera',
        sequence: [
          [ 'cat', "Bandi, is it really you? I feel like it's been a lifetime since we last met!"],
          [ 'cat', "Please, stay at my place tonight! let's play some games and have fun like in the old times."],
          [ 'cat', "<The other day>"],
          [ 'cat', "Ah... that was so fun. I recalled the old times, life was simpler then."],
          [ 'cat', "I hope to see you back sometime... Please take this instrument so you don't forget me!"]
        ],
        giveInstrument: 1
      }
    ]
  },
  {
    name: 'Ponchi',
    findSequence: [
      {
        planet: 'Ninua',
        city: 'Veyros',
        sequence: [
          [ 'cat', "Ah, Ponchi left for Oldogg to fulfill his dreams."]
        ]
      },
      {
        planet: 'Oldogg',
        city: 'Karnalgg',
        sequence: [
          [ 'dog', "Oh my god, you are still alive! come join me and play!"]
        ],
        giveInstrument: 2
      }
    ]
  }
]

const triggers = {};

FRIENDS.forEach(friend => {
  const first = friend.findSequence[0];
  triggers[first.planet + "-" + first.city] = first;
  friend.findSequence.forEach((f, i) => {
    if (i < friend.findSequence.length - 1) {
      f.next = friend.findSequence[i + 1];
    }
  })
})

function renderUI(c) {
  if (gState == 0) {
    c.font = font(18);
    c.fillStyle= "#00ff00";
    c.fillText("Loading Music...",10,50);
    if (musicLoaded) {
      c.fillText("Music Loaded, Press Enter to start",10,70);
    }
  } else if (gState == 1) {
    c.font = font(48);
    c.textAlign="center"; 
    c.fillStyle= "#cf3436";
    c.fillText("Distanced Friends",W/2,50);
    c.font = font(20);
    c.fillStyle= "#ea0a8e";
    c.fillText("INSTRUCTIONS",W/2,90);
    c.fillStyle= "#ffffff";
    c.fillText("Use Arrow Keys to move",W/2,130);
    c.fillText("Enter to change waypoint",W/2,170);
    c.fillText("Find your long lost friends",W/2,210);
    c.font = font(32);
    c.fillStyle= "#ea0a8e";
    c.fillText("Press Enter to start",W/2,290);
    c.fillStyle= "#ffffff";
    c.font = font(18);
    c.fillText("Programmed by Slashie",W/2,330);
    c.fillText("Sounds by QuietGecko", W/2,350);
  } else if (gState == 2 || gState == 3 || gState == 10) {
    c.font = font(16);
    c.textAlign="left"; 
    c.fillStyle= "#ffffff";
    let soundFragmentsTxt = '';
    for (let i = 0; i < 6; i++) {
      if (p1.songFragments[i]) {
        soundFragmentsTxt += FRAGMENTS[i];
      } else {
        soundFragmentsTxt += "❓";
      }
    }

    const angle = Math.atan2(p1.y - currentWaypoint.y, p1.x - currentWaypoint.x) + Math.PI;
    Renderer.renderShapes(c, SHAPES.triangle, W / 2, H - 60, 1, 1, angle, 50, 50, undefined, true);
    c.fillStyle= "#ffffff";
    c.textAlign="center"; 
    c.fillText(soundFragmentsTxt, W / 2, 20);
    c.fillText("to "+currentWaypoint.name+": " + Math.floor(rdist(p1, currentWaypoint) - currentWaypoint.size), W / 2, H - 20);
    c.fillText("[Enter] to change", W / 2, H - 5);
    c.textAlign="left"; 
    // DEBUG
    /*c.fillText("Cruising: " + p1.isCruising(), 50, 50);
    c.fillText("Near Planet: " + p1.nearPlanet(), 50, 70);
    c.fillText("DV: " + p1.dv, 50, 90);
    c.fillText("Asteroids: " + asteroids, 50, 110);*/

    if (p1.won) {
      c.font = font(24);
      c.textAlign="center"; 
      c.fillText("Congrats, the song is now complete!",W/2, 40);
    }
  } 
  if (gState == 3) {
    c.font = font(32);
    c.textAlign="center"; 
    c.fillStyle= "#00ff00";
    c.fillText("GAME OVER",W/2,100);
    c.fillText("Press Enter to restart",W/2,150);
  }
  if (gState == 10) {
    c.fillStyle = "#000";
    c.globalAlpha = 0.5;
    c.fillRect(0, H - 180, W, 125);
    c.globalAlpha = 1;
    Renderer.renderShapes(c, SHAPES.suit, 150, H - 130, 2, 1, -Math.PI / 2, 50, 30, undefined, true);
    Renderer.renderShapes(c, conversationApp, 150, H - 160, 2, 1, -Math.PI / 2, 50, 30, undefined, true);
    c.font = font(24);
    c.fillStyle= "#FFF";
    c.textAlign="left"; 
    c.fillText(conversationText, 250, H - 150);
  }
}

var starCamera = {x : 0, y : 0};
var mainCamera = {x : 0, y : 0};
const rotSpeed = Math.PI / 90;

const WH = '#ffffff';
const GREY = '#888';

const SHAPES = {
  coolStar: [["M44 41Q49 14 56 41Q85 30 65 49Q77 73 55 59Q32 74 45 52Q18 50 44 41", "#131047", 2, "#5b5e8b","noflip"]],
  triangle: [["M24 59L50 13L73 56L44 49Z", "#131047", 2, "#5b5e8b","noflip"]],
  ship: [
    [
      // Thruster 2
      "M49 82L28 82L26 88L49 88Z",
      "#131047", 2, "#5b5e8b"
    ],
    [
      // Thruster 1
      "M49 77L26 77L24 85L49 85Z",
      "#131047", 2, "#5b5e8b"
    ],
    [
      // Wing
      "M28 71L15 69Q16 53 31 46Z",
      "#b82782", 2, "#eb29a4"
    ],
    [
      // Body
      "M49 13Q33 17 30 35L25 73L28 76Q30 79 49 79Z",
      "#dadde2", 2, "#dadde2"
    ],
    [
      // Window
      "C",
      50, 50, 14, "#6772dc", 3, "#100e1b",
      "noflip"
    ],
    [
      // Purple Cover
      "M27 58L36 67L49 58L49 81L21 80Z",
      "#b82782", 2, "#eb29a4"
    ],
  ],
  cat : [
    [ // ear1
      "M37 15Q36 11 27 10Q22 19 29 26Z",
      "#e7ad3f", 2, "#e7ad3f",
      // TODO: Flipside with different colors "#ede9ea", 2, "#ede9ea"
    ],
    [ // ear2
      "M34 18Q33 14 29 14Q26 18 31 25Z",
      "#d66ead", 2, "#d66ead"
    ],
    [ // head
      "M50 10Q28 15 24 37A4 6 0 0 0 24 52Q34 59 50 58Z",
      "#eeeaeb", 2, "#eeeaeb"
    ],
    [ // band
      "M50 10Q28 16 24 37Q47 33 57 14Z",
      "#ecae41", 2, "#ecae41"
    ],
    [ // eye
      "M42 34Q38 20 31 34",
      "#733621", 2, false
    ],
    [ // nose
      "M50 38Q40 41 50 44",
      "#dc7ab7", 2, "#dc7ab7"
    ],
    [ // mouth
      "M50 47Q45 47 42 45Q40 54 50 55",
      "#c52c5a", 2, "#c52c5a"
    ]
  ],
  dog: [
    [
      //ear1
      "M30 18L26 13Q28 9 25 7L15 5Q9 6 10 10Q10 13 16 13L16 10L28 21",
      "#d9b06e", 2, "#d9b06e",
      "noflip"
    ],
    [
      //ear2
      "M66 17L69 13Q67 9 70 5L75 4Q81 4 87 9Q91 15 85 16Q78 15 74 10L67 21",
      "#d9b06e", 2, "#d9b06e",
      "noflip"
    ],
    [
      //head
      "M50 10Q28 13 20 24Q15 34 17 47Q12 53 14 59Q20 66 30 68Q41 70 50 69",
      "#d9b06e", 2, "#d9b06e"
    ],
    [
      //eyebrow
      "M35 21L41 24Q43 27 39 27L33 23Q32 21 35 21",
      "#441e01", 2, "#441e01"
    ],
    [
      //mouth
      "M50 57Q44 57 38 52",
      "#441e01", 2, "#441e01"
    ],
    [
      // nose
      "C",
      50, 47, 4, "#441e01", 2, "#441e01",
      "noflip"
    ],
    [
      // eyeBack
      "C",
      34, 37, 9, "#f3f0ea", 1, "#f3f0ea"
    ],
    [
      // Eyeball
      "C",
      36, 39,5, "#211b24", 2, "#211b24"
    ]
  ],
  suit: [
    [
      "M50 50L34 52Q23 56 20 65L50 65",
      "#9c96c9", 2, "#dfe4ec",
    ]
  ],
  city: [
    [
      "M79 84L79 45L72 45L72 47L68 47L68 32L63 32L63 41L57 41L57 45L53 45L53 28A2 3 0 0 0 46 28L46 37L41 37L41 42L33 42A5 8 0 0 0 23 42L19 42L19 85",
      "#0d1852", 2, "#0d1852"
    ]
  ]
}

const maxTurnScale = 0.2;
const turnScaleSpeed = 0.015;

class Ship extends GO {
  isCruising () {
    return !this.nearPlanet() && this.dv > 250;
  }
  nearPlanet () {
    return planets.find(p => rdist(p, this) < (ASTEROID_SPACE + p.size));
  }
  specialRender(c) {
    Renderer.renderShapes(c, SHAPES.ship, this.x, this.y, this.scale, 1 + this.turnScale, this.rotation, 50, 50);
    Renderer.renderShapes(c, SHAPES.cat, this.x, this.y, this.scale * 0.3, 1, this.rotation, 50, 30);
  }
  u(d) {
    super.u(d);
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
    if (this.dv > 2000) {
      this.dv = 2000; // Temporary
    }
    mainCamera.x = this.x;
    mainCamera.y = this.y;
    starCamera.x += this._dx * 0.5 * d;
    starCamera.y += this._dy * 0.5 * d;
  }
  k(){
    if (gState != 2 && gState != 3) {
      this.av = 0;
      return;
    }
    var PY = 20;
    if (isDown(this.keys[0])){ // Increase Thrust
      this.av += PY; // TODO: Affect acceleration indirectly
      this.landed = false;
    } else if (!this.landed && isDown(this.keys[1])){ // Reduce Thrust
      this.av = -200;
    } else {
      this.av = 0;
    }
    if (this.av > 1000) { // max thrust
      this.av = 1000;
    }
    if (this.landed) {
      return;
    }
    if (isDown(this.keys[2])){ // Left
      this.flipped = true;
      this.turnScale -= turnScaleSpeed;
      if (this.turnScale < -maxTurnScale) {
        this.turnScale = -maxTurnScale;
      }
      this.rotation -= rotSpeed;
    } else if (isDown(this.keys[3])){ // Right
      this.flipped = true;
      this.turnScale += turnScaleSpeed;
      if (this.turnScale > maxTurnScale) {
        this.turnScale = maxTurnScale;
      }
      this.rotation += rotSpeed;
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
    setTimeout(() => this.fireBlocked = false, 100);
    new Rocket(this.x + rand.range(-20, 20), this.y + rand.range(-20, 20), this.rotation);
    playSound(2);
  }
  async landOnCity (p, c) {
    const trigger = triggers[p.name + "-" + c.name]
    if (trigger) {
      delete triggers[p.name + "-" + c.name];
      for (let i = 0; i < trigger.sequence.length; i++) {
        await showConversationFragment (SHAPES[trigger.sequence[i][0]], trigger.sequence[i][1]);
      }
      if (trigger.giveInstrument != undefined) {
        this.songFragments[trigger.giveInstrument] = 'yes';
        let allFragments = true;
        for (let i = 0; i < FRAGMENTS.length; i++) {
          if (!this.songFragments[i]) {
            allFragments = false;
            break;
          }
        }
        if (allFragments) {
          victory();
        }
      }
      if (trigger.next) {
        const nextTrigger = trigger.next;
        triggers[nextTrigger.planet + "-" + nextTrigger.city] = nextTrigger;
      }
      gState = 2;
    }
  }
  collide(m) {
    if (m.isPlanet) {
      if (this.landed) {
        // Ignore collision (This is unlikely to happen due to the re-placement on landing)
      } else {
        if (this.dv <= 0) {  // Landing
          this.landed = true;
          this.dv = 0;
        } else {
          // Bounce!
          this.dv = -500;
        }
        let reloc = m.size + this.size + 1;
        if (!this.landed) {
          reloc += 20;
        }
        const angle = Math.atan2(this.y - m.y, this.x - m.x);
        this.x = m.x + Math.cos(angle) * reloc;
        this.y = m.y + Math.sin(angle) * reloc;
        if (this.landed) {
          this.rotation = angle; // TODO: Tween rotation?
          const city = m.nearbyCity(this);
          if (city) {
            this.landOnCity(m, city);
          }
        }
      }
    } else if (m.isAsteroid) {
      this.dv = 500 * -Math.sign(this.dv);
    }
  }
}

let conversationText = "Test";
let conversationNext;
function showConversationFragment(app, text) {
  gState = 10;
  conversationApp = app;
  conversationText = text;
  return new Promise (resolve => {
    conversationNext = resolve;
  });
}

class Rocket extends GO {
  constructor(x, y, d) {
    super('triangle', [layers[1]]);
    this.x = x;
    this.y = y;
    this.rotation = d;
    this.av = 300;
    this.dv = -50;
    this.size = 5;
    this.hits = 'e'; // Enemy
    this.scale = 0.5;
    setTimeout(()=>this.explode(), rand.range(1100, 1300));
  }
  explode() {
    playSound(0);
    var e = new Explosion(20);
    e.x = this.x;
    e.y = this.y;
    sfx.push(e);
    this.destroy();
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

function cameraX(camera, x) { return x - camera.x + W / 2}
function cameraY(camera, y) { return y - camera.y + H / 2}

class City extends GO {
  constructor(app, lists, name) {
    super(app, lists);
    this.name = name;
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


var p1;
let currentWaypoint, currentWaypointIndex;
let planets;

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
function startGame() {
  function createShip(a,x,k){
    var p = new Ship(a, [players, layers[2]]);
    p.energy = 0;
    p.dv = 480;
    p.x = x;
    p.y = H - 20;
    p.size = 8;
    p.scale = 2;
    p.keys=k;
    p.rotation = -Math.PI / 2;
    p.songFragments = {};
    return p;
  }

  if (!planets)  {
    planets = [];
    for (let i = 0; i < FRAGMENTS.length; i++) {
      let planetPosition;
      retry: while (true) {
        planetPosition = { x: rand.range (-10000, 10000),  y: rand.range (-10000, 10000)};
        for (let j = 0; j < planets.length; j++) {
          if (rdist(planets[j], planetPosition) < 5000) {
            continue retry;
          }
        }
        break;
      }
      planets = PLANETS.map(PD => createPlanet(PD));
    }
  }
  currentWaypoint = planets[0];
  currentWaypointIndex = 0;

  p1 = createShip('ship', W / 2, ['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space' ]);
  const randomAngle = rand.range(0, 2*Math.PI);
  const randDist = rand.range (4000, 5000);
  p1.x = Math.cos(randomAngle) * randDist + planets[0].x;
  p1.y = Math.sin(randomAngle) * randDist + planets[0].y;

  mainCamera.x = p1.x;
  mainCamera.y = p1.y;
  starCamera.x = p1.x;
  starCamera.y = p1.y;
  stars50();

}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(seeded() * 16)];
  }
  return color;
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
  enemies = [];
  players = [];
  timers = [];
  startGame();
}

setInterval (() => {
  if (gState != 2) return;
  if (p1.isCruising() && rand.b(30))
    asteroidField(p1.rotation);
}, 2000);


let asteroids = 0;

function asteroidField(direction) {
  for (let j = 0; j < ASTEROID_RINGS; j++)
    for (let i = 0; i < ASTEROIDS_PER_RING; i++) {
      const distance = ASTEROID_START + rand.range(-40, 40) + ASTEROID_RING_WIDTH * j;
      const aDirection = direction + rand.range(-ASTEROID_ANGLE_RANGE, ASTEROID_ANGLE_RANGE) * (Math.PI / 180);
      const x = p1.x + distance * Math.cos(aDirection);
      const y = p1.y + distance * Math.sin(aDirection);
      new Asteroid(x, y, rand.range(20, 40));
      asteroids++;
    }
}