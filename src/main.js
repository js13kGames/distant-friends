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
  [[[,0,400,.02,.01,.7,,.7,.01,,,,,,1,.1,1.05],[,0,221],[,0,221],[,0,221,,.12,.3,,.5,.1,,,.2,,,.1,,.7,.9]],[[[,-1,10,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,9,,,,,,,,,,,,,,,,14,,,,,,,,15,,,,,,,,],[1,1,32,,,,27,,,,32,,,,34,,,,31,,,,27,,,,31,,,,32,,,,29,,,,27,,,,25,,,,27,,,,29,,,,27,,,,25,,,,27,,,,],[2,,,,,,,,,,2,,,,,,,,,,,,,,,,2,,,,,,,,,,,,,,,,2,,,,,,,,,,,,,,,,2,,,,2,,,,],[3,1,,,,,,,,,32,,,,,,,,,,,,,,,,,,,,29,,,,,,,,,,,,27,,,,,,,,24,,,,,,,,24,,,,,,,-1],[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]]],[0],170],
  [[[,0,740,,,.24,1,.1,-.1,-.1,12,.02,,,.12,,.12,,.02],[,0,221,,.06,2,,,,6,,,4,,.5,,1,,,1],[.7,0,22,,.07,.07,2,0,,,,.01]],[[[,-1,12,,,,3,,,,12,,,,3,,,,,,,,,,,,,,,,12,,,,11,,,,3,,,,11,,,,3,,,,,,,,,,,,,,,,11,,,,],[1,1,3,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,3,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[2,,22,,,,22,,,,,,,,22,,,,22,,,,,,,,22,,,,34,,,,34,,,,27,,,,15,,,,15,,,,27,,,,,,15,,27,,,,,,34,,],[,1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]],[[,-1,12,,,,3,,,,12,,,,3,,,,,,,,,,,,,-1,,,12,,,,13,,,,4,,,,13,,,,4,,,,,,,,,,,,,,,,11,,,,],[1,1,3,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,6,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[2,,27,,,,27,,,,,,,,27,,,,27,,,,,,,,27,,,,27,,,,15,,,,27,,,,15,,,,15,,,,27,,,,,,15,,27,,,,,,34,,],[,1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]]],[0,1],135]
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
  b() {
    return this.range(0,100)<50;
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
  renderPath(c, path, strokeStyle, lineWidth, fillStyle, x, y, scale, rotation, pivotX, pivotY, flip, fixedToCamera) {
    c.strokeStyle = strokeStyle;
    c.lineWidth = lineWidth;
    c.fillStyle = fillStyle;
    if (!fixedToCamera) {
      x = cameraX(x);
      y = cameraY(y);
    }
    pivotX = pivotX * scale;
    pivotY = pivotY * scale;
    const transPivotX = flip ? x + pivotX : x - pivotX;
    c.translate(transPivotX, y - pivotY);
    const rotaPivotX = flip ? -pivotX : pivotX;
    c.translate(rotaPivotX, pivotY);
    c.rotate(rotation + Math.PI / 2);
    c.translate(-rotaPivotX, -pivotY);
    c.scale(scale * (flip ? -1 : 1), scale);
    const p2d = new Path2D(path);
    c.stroke(p2d);
    if (fillStyle)
      c.fill(p2d);
    c.setTransform(1, 0, 0, 1, 0, 0);
  },
  renderCircle(c, radius, strokeStyle, lineWidth, fillStyle, x, y, fixedToCamera) {
    c.strokeStyle = strokeStyle;
    c.lineWidth = lineWidth;
    c.fillStyle = fillStyle;
    if (!fixedToCamera) {
      x = cameraX(x);
      y = cameraY(y);
    }
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI*2);
    c.stroke();
    c.fill();
  },
  render(c,ins,x,y,s,over,flip,scalex, rotation, fixedToCamera) {
    var sx = s
    if (scalex)
      sx = s * scalex;
    var xFlip = flip ? -1 : 1;
    c.fillStyle = over != undefined ? over : ins[0];
    var i = 1;
    drawlLine = false;
    c.globalAlpha = 1;
    if (!fixedToCamera) {
      x = cameraX(x);
      y = cameraY(y);
    }
    c.translate(x, y);
    c.rotate(rotation + Math.PI / 2);
    c.translate(-x, -y);
    while(i < ins.length + 2) {
      let co = ins[i++];
      switch (co) {
        case 'c':
          c.beginPath();
          c.arc(x,y,ins[i++]*s,0,Math.PI*2,true);
          c.fill();
          drawlLine = false;
          break;
        case 'p':
          c.strokeStyle = c.fillStyle;
          c.beginPath();
          c.moveTo(ins[i++]*sx*xFlip+x, ins[i++]*s+y);
          co = ins[i++];
          drawlLine = true;
          break;
        case 'f':
          c.fill();
          drawlLine = false;
          break;
        case 's':
          c.stroke();
          drawlLine = false;
          break;
        case 'a':
          c.globalAlpha = ins[i++];
          break;
        case 'o':
          c.fillStyle = over != undefined ? over : ins[i++];
          break;
        case 'v':
          c.save();
          c.beginPath();
          c.translate(x+ins[i++]*sx*xFlip, y+ins[i++]*s);
          c.scale(1, ins[i++]);
          c.arc(0, 0, ins[i++]*s, 0, 2 * Math.PI, false);
          c.restore(); // restore to original state
          break;
        case 'vh':
          c.save();
          c.beginPath();
          c.translate(x+ins[i++]*s*xFlip, y+ins[i++]*s);
          c.scale(1, ins[i++]);
          c.arc(0, 0, ins[i++]*s, ins[i++], ins[i++], false);
          c.restore();
          break;
        case 'm':
          co = ins[i++];
          drawlLine = true;
          break;
      }
      if (drawlLine) {
        c.lineTo(co*sx*xFlip+x, ins[i++]*s+y);
      }
    };
    c.setTransform(1, 0, 0, 1, 0, 0);
  }
}   

// Mob classes

var mobDestroyed = false;
class Mob {
  constructor(app, lists) {
    this.app = a[app];
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
    const dx = Math.cos(this.rotation) * this.dv;
    const dy = Math.sin(this.rotation) * this.dv;
    this.x += dx * d;
    this.y += dy * d;
  }

  destroy() {
    this.app = false;
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

class BGObject {
  constructor(app, lists) {
    this.app = a[app];
    this.turnScale = 0;
    mobs.push(this);
    lists.forEach(l => l.push(this));
    this.lists = lists;
    this.ch = [];
  }

  destroy() {
    this.app = false;
    this.dead = true;
    mobDestroyed = true;
    //this.lists.forEach(l => l.splice(l.indexOf(this), 1));
    this.ch.forEach(c => c.destroy());
  }

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
  if (m.specialRender) {
    m.specialRender(ctx);
  }
  var turnScale = 1;
  if ((m.turnScale > 0 && flip) || (m.turnScale < 0 && !flip)) {
    turnScale = 1 - Math.abs(m.turnScale);
  } 
  if (!m.specialRender) {
    Renderer.render(ctx,m.app,m.x,m.y,m.scale,m.blink?0:undefined,flip,turnScale,m.rotation);
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
    if (m.kob && m.y > camera.y + H / 2 + m.size) {
      killType = 'kob';
    } else if (m.kot && m.y < camera.y - H / 2 - m.size) {
      killType = 'kot';
    } else if (m.kor && m.x > camera.x + W / 2 + m.size) {
      killType = 'kor';
    } else if (m.kol && m.x < camera.x - W / 2 - m.size) {
      killType = 'kol';
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

const lcdmap = [
  [1,1,1,0,1,1,1],
  [0,0,1,0,0,1,0],
  [1,0,1,1,1,0,1],
  [1,0,1,1,0,1,1],
  [0,1,1,1,0,1,0],
  [1,1,0,1,0,1,1],
  [1,1,0,1,1,1,1],
  [1,0,1,0,0,1,0],
  [1,1,1,1,1,1,1],
  [1,1,1,1,0,1,1],
]

var NS = 3;
// Score renderer
function renderScore(c, x, y, score) {
  score.forEach((d, i) => renderDigit(c, x + i * (NS * 12), y, d));
}

function renderDigit(c, x, y, digit) {
  const x6 = 6 * NS + NS;
  const x3 = 3 * NS + NS;
  const f = Renderer.render.bind(Renderer);
  const l = lcdmap[digit];
  f(c, l[0]?a.n3:a.n2, x, y - x6, NS);
  f(c, l[1]?a.n1:a.n0, x - x3, y - x3, NS);
  f(c, l[2]?a.n1:a.n0, x + x3, y - x3, NS);
  f(c, l[3]?a.n3:a.n2, x, y, NS);
  f(c, l[4]?a.n1:a.n0, x - x3, y + x3, NS);
  f(c, l[5]?a.n1:a.n0, x + x3, y + x3, NS);
  f(c, l[6]?a.n3:a.n2, x, y + x6, NS); 
}

// THE GAME!
let W = canvas.width;
let H = canvas.height;
(function() {
  window.addEventListener('resize', resizeCanvas, false);
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    W = canvas.width;
    H = canvas.height;
  }
  
  resizeCanvas();
})();

const font = (s) => s + 'px Courier New';

const FRAGMENTS = ['🎹','🎻','🎷','🎸','🎺','🥁'];

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
    c.fillText("SPACE SONG",W/2,50);
    c.font = font(20);
    c.fillStyle= "#ea0a8e";
    c.fillText("INSTRUCTIONS",W/2,90);
    c.fillStyle= "#ffffff";
    c.fillText("Use Arrow Keys to move",W/2,130);
    c.fillText("Enter to change waypoint",W/2,170);
    c.fillText("Make your way to the planets",W/2,210);
    c.fillText("to find the six fragments of the song.",W/2,230);
    c.font = font(32);
    c.fillStyle= "#ea0a8e";
    c.fillText("Press Enter to start",W/2,290);
    c.fillStyle= "#ffffff";
    c.font = font(18);
    c.fillText("Programmed by Slashie",W/2,330);
    c.fillText("Sounds by QuietGecko", W/2,350);
  } else if (gState == 2 || gState == 3) {
    //Renderer.render(c,a.scoreBack,250,600,NS*2.5,undefined,true);
    //renderScore(c, 0, 350, p1.scoreArray)
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
    Renderer.render(c, a.triangle, W / 2, H - 60, 2, undefined, false, undefined, angle, true);
    Renderer.render(c, a.triangle, W / 2, H - 60, 2, undefined, true, undefined, angle, true);
    c.textAlign="center"; 
    c.fillText(soundFragmentsTxt, W / 2, 20);
    c.fillText("to "+currentWaypoint.name+": " + Math.floor(rdist(p1, currentWaypoint) - currentWaypoint.size), W / 2, H - 20);
    c.fillText("[Enter] to change", W / 2, H - 5);
    c.textAlign="left"; 
    /*c.fillText("Thrust: " + p1.av,20, 100);
    c.fillText("Speed: " + Math.floor(p1.dv), 20, 115);
    c.fillText("Fuel: " + Math.floor(p1.fuel), 20, 130);
    c.fillText(p1.landed ? "[Landed]" : "", 20, 145);*/
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
}

var camera = {x : 0, y : 0};
const rotSpeed = Math.PI / 90;

var ef = { // Enemy Factory
  i(){
    this.defs={
      d: {ap:'mine',hp:10,sp:300,sc:10,scale:5,size:15}, // Crasher coming down in formation
      c: {ap:'enemyFighter',hp:1,sp:100,sc:50,fp:true,size:15,scale:4}, // Cruises the screen shooting at player
      p: {ap:'platform',hp:1,sp:20,sc:0,size:80,scale:25,t:[[2,-1],[2,1]],transparent:true}, // Turret platform
      t: {ap:'e1',hp:5,sp:0,sc:20,fp:true,size:15}, // Turret
    }
  },
  b(id,x,y,dx,dy,lv=1){
    var d = this.defs[id];
    const groups = [layers[d.t?1:2]];
    if (!d.transparent) {
      groups.push(enemies);
    }
    var hp = d.hp + d.hp * (lv / 2);
    var e = new Enemy(hp,d.ap,groups);
    e.x = x;
    e.y = y;
    e.dy = dy;
    e.dx = dx;
    e.score = d.sc;
    e.reactionTime = d.rt || 10000;
    e.reactionTime -= lv * 2000;
    if (e.reactionTime < 1000) {
      e.reactionTime = 1000;
    }
    e.fireAtPlayer = d.fp;
    e.size = d.size;
    if (!d.transparent) {
      e.hits = 'p'; // Player
    }
    var s = e.scale = d.scale || 1;
    if (d.t) { // Mounted turrets
      d.t.forEach(t => {
        e.ch.push(this.b('t',x+t[0]*s,y+t[1]*s,dx,dy));
        e.ch.push(this.b('t',x+t[0]*-s,y+t[1]*s,dx,dy));
      });
    }
    e.react();

    this.kob = dy > 0;
    this.kot = dy < 0;
    this.kol = dx < 0;
    this.kor = dx > 0;
    return e;
  },
  horizontal(id,l,y,lv) {
    var d = this.defs[id];
    var x = l?(W+d.size):-d.size;
    var e = this.b(id,x,y,d.sp*(l?-1:1),0,lv);
    e.kor = !l;
    e.kol = l;
  },
  vertical(id,top,x,lv) {
    var d = this.defs[id];
    this.b(id,x,top?-100:H+100,0,top?d.sp:-d.sp,lv)
  },
  f(id,n,x,w,lv) { // Horizontal Formation
    var d = this.defs[id];
    var ix=x-w/2;
    var is=w/(n-1);
    for (var i = 0; i < n; i++) {
      this.b(id,ix+i*is,-100,0,d.sp,lv)
    }
  },
  hrow(id,left,y,n,lv) {
    var d = this.defs[id];
    var is = d.size + 20;
    var ix= -n*is - 100;
    if (left) {
      ix = W + 100;
    }
    for (var i = 0; i < n; i++) {
      this.b(id,ix+i*is,y,d.sp*(left?-1:1),0,lv)
    }
  },
  vrow(id,top,x,n,lv) {
    var d = this.defs[id];
    var is = -(d.size + 20);
    var iy= n*is - 100;
    if (!top) {
      iy = H + 100;
      is *= -1;
    }
    for (var i = 0; i < n; i++) {
      this.b(id,x,iy+i*is,0,d.sp*(top?1:-1),lv)
    }
  }
}
ef.i();

class Ship extends Mob {
  specialRender(c) {
    const body = "M49 13Q33 17 30 35L25 73L28 76Q30 79 49 79Z";
    const wing = "M28 71L15 69Q16 53 31 46Z";
    const purpleCover = "M27 58L36 67L49 58L49 81L21 80Z";
    const thruster1 = "M49 77L26 77L24 85L49 85Z";
    const thruster2 = "M49 82L28 82L26 88L49 88Z";
    Renderer.renderPath(c,thruster2, "#131047", 2, "#5b5e8b", this.x, this.y, this.scale, this.rotation, 50, 50);
    Renderer.renderPath(c,thruster2, "#131047", 2, "#5b5e8b", this.x, this.y, this.scale, this.rotation, 50, 50, true);
    Renderer.renderPath(c,thruster1, "#131047", 2, "#5b5e8b", this.x, this.y, this.scale, this.rotation, 50, 50);
    Renderer.renderPath(c,thruster1, "#131047", 2, "#5b5e8b", this.x, this.y, this.scale, this.rotation, 50, 50, true);
    Renderer.renderPath(c,wing, "#b82782", 2, "#eb29a4", this.x, this.y, this.scale, this.rotation, 50, 50);
    Renderer.renderPath(c,wing, "#b82782", 2, "#eb29a4", this.x, this.y, this.scale, this.rotation, 50, 50, true);
    Renderer.renderPath(c,body, "#dadde2", 2, "#dadde2", this.x, this.y, this.scale, this.rotation, 50, 50);
    Renderer.renderPath(c,body, "#dadde2", 2, "#dadde2", this.x, this.y, this.scale, this.rotation, 50, 50, true);
    Renderer.renderCircle(c, 28, "#6772dc", 3, "#100e1b", this.x, this.y);
    Renderer.renderPath(c,purpleCover, "#b82782", 2, "#eb29a4", this.x, this.y, this.scale, this.rotation, 50, 50);
    Renderer.renderPath(c,purpleCover, "#b82782", 2, "#eb29a4", this.x, this.y, this.scale, this.rotation, 50, 50, true);
    
    const buddyScale = this.scale * 0.3;
    const buddyX = this.x;
    const buddyY = this.y;
    const buddyPivotX = 50;
    const buddyPivotY = 30; // For some reason we can use this to position him vertically

    const head = "M50 10Q28 15 24 37A4 6 0 0 0 24 52Q34 59 50 58Z";
    const ear1="M37 15Q36 11 27 10Q22 19 29 26Z";
    const ear2="M34 18Q33 14 29 14Q26 18 31 25Z";
    const band="M50 10Q28 16 24 37Q47 33 57 14Z";
    const eye="M42 34Q38 20 31 34";
    const nose="M50 38Q40 41 50 44";
    const mouth="M50 47Q45 47 42 45Q40 54 50 55";

    Renderer.renderPath(c,ear1, "#e7ad3f", 2, "#e7ad3f", buddyX, buddyY, buddyScale, this.rotation, buddyPivotX, buddyPivotY);
    Renderer.renderPath(c,ear1, "#ede9ea", 2, "#ede9ea", buddyX, buddyY, buddyScale, this.rotation, buddyPivotX, buddyPivotY, true);
    Renderer.renderPath(c,ear2, "#d66ead", 2, "#d66ead", buddyX, buddyY, buddyScale, this.rotation, buddyPivotX, buddyPivotY);
    Renderer.renderPath(c,ear2, "#d66ead", 2, "#d66ead", buddyX, buddyY, buddyScale, this.rotation, buddyPivotX, buddyPivotY, true);
    Renderer.renderPath(c,head, "#eeeaeb", 2, "#eeeaeb", buddyX, buddyY, buddyScale, this.rotation, buddyPivotX, buddyPivotY);
    Renderer.renderPath(c,head, "#eeeaeb", 2, "#eeeaeb", buddyX, buddyY, buddyScale, this.rotation, buddyPivotX, buddyPivotY, true);
    Renderer.renderPath(c,band, "#ecae41", 2, "#ecae41", buddyX, buddyY, buddyScale, this.rotation, buddyPivotX, buddyPivotY);
    Renderer.renderPath(c,eye, "#733621", 2, false, buddyX, buddyY, buddyScale, this.rotation, buddyPivotX, buddyPivotY);
    Renderer.renderPath(c,eye, "#733621", 2, false, buddyX, buddyY, buddyScale, this.rotation, buddyPivotX, buddyPivotY, true);
    Renderer.renderPath(c,nose, "#dc7ab7", 2, "#dc7ab7", buddyX, buddyY, buddyScale, this.rotation, buddyPivotX, buddyPivotY);
    Renderer.renderPath(c,nose, "#dc7ab7", 2, "#dc7ab7", buddyX, buddyY, buddyScale, this.rotation, buddyPivotX, buddyPivotY, true);
    Renderer.renderPath(c,mouth, "#c52c5a", 2, "#c52c5a", buddyX, buddyY, buddyScale, this.rotation, buddyPivotX, buddyPivotY);
    Renderer.renderPath(c,mouth, "#c52c5a", 2, "#c52c5a", buddyX, buddyY, buddyScale, this.rotation, buddyPivotX, buddyPivotY, true);
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

    this.fuel -= this.av * d * 0.003;
    if (this.fuel < 0) {
      this.fuel = 0;
    }
    this.updateScoreArray();
    camera.x = this.x;
    camera.y = this.y;
  }
  k(){
    var PY = 20;
    if (isDown(this.keys[0])){ // Increase Thrust
      this.av += PY; // TODO: Affect acceleration indirectly
      this.landed = false;
    } else if (!this.landed && isDown(this.keys[1])){ // Reduce Thrust
      this.av = -200;
    } else {
      this.av = 0;
    }
    if (this.fuel <= 0) {
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
      this.turnScale -= 0.02;
      if (this.turnScale < -0.5) {
        this.turnScale = -0.5;
      }
      this.rotation -= rotSpeed;
    } else if (isDown(this.keys[3])){ // Right
      this.flipped = true;
      this.turnScale += 0.02;
      if (this.turnScale > 0.5) {
        this.turnScale = 0.5;
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
  destroyed(m) {
    playSound(3);
    this.score += m.score;
    this.updateScoreArray();
  }
  updateScoreArray() {
    this.scoreArray = [];
    var ss = '0000000'+Math.abs(this.av);
    ss = ss.substr(ss.length - 5)
    for (var i = 0, len = ss.length; i < len; i += 1) {
      this.scoreArray.push(+ss.charAt(i));
    }
  }
  destroy() {
    if (this.energy > 0) {
      this.energy--;
      playSound(0);
      return;
    }
    playSound(3);
    super.destroy();
    this.dead = true;
    if (!players.filter(p=>!p.dead).length) {
      gameOver();
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
          const angle = Math.atan2(this.y - m.y, this.x - m.x);
          this.rotation = angle; // TODO: Tween rotation?
          this.x = m.x + Math.cos(angle) * (m.size + this.size + 1);
          this.y = m.y + Math.sin(angle) * (m.size + this.size + 1);

          if (!this.visitedPlanets[m.name]) {
            this.songFragments[m.songFragmentIndex] = 'yes';
            this.visitedPlanets[m.name] = "yes";
          }
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
        } else {
          // Bounce!
          this.dv = -500;
        }
      }
    }
  }
}

class Rocket extends Mob {
  constructor(x, y, d) {
    super('missile', [layers[1]]);
    this.x = x;
    this.y = y;
    this.rotation = d;
    this.av = 300;
    this.dv = -50;
    this.size = 5;
    this.hits = 'e'; // Enemy
    this.scale = 4;
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

class Enemy extends Mob {
  constructor(hp, app, lists, reactionTime) {
    super(app, lists);
    this.hp = hp;
    this.reactionTime = reactionTime;
  }

  nearestPlayer() {
    return players.length && players.sort((a,b)=>dist(a,this)-dist(b,this))[0];
  }

  react() {
    if (this.dead)
      return;
    if (this.fireAtPlayer) {
      this.fire();
    }
    timers.push([()=>this.react(), this.reactionTime/1000]);
  }

  fire() {
    var p = this.nearestPlayer();
    if (!p) {
      return;
    }
    playSound(1);
    var b = new Mob('bullet', [layers[1]]);
    b.x = this.x;
    b.y = this.y;
    var angle = Math.atan2((p.y - this.y), (p.x - this.x));
    var speed = rand.range(250, 300);
    b.dx = Math.cos(angle) * speed;
    b.dy = Math.sin(angle) * speed;
    b.size = 5;
    b.hits = 'p';
    b.kob = true;
    b.kot = true; // TODO: Kill anywhere outside screen
    b.scale = 1;
  }

  collide(m) {
    this.hp--;
    this.blink = true;
    setTimeout(() => this.blink = false, 50);
    if (this.hp <= 0) {
      m.player.destroyed(this);
      super.collide(m);
    }
    playSound(0);
    var e = new Explosion(20);
    e.x = m.x;
    e.y = m.y;
    sfx.push(e);
    m.destroy();
  }
}

class Star extends BGObject {
  destroy(killType) {
    const kob = this.y > camera.y + H / 2 + this.size;
    super.destroy();
    // Create a new Star
    var size = rand.range(1, 3);
    var t = new Star('star'+size, [layers[0]]);
    
    switch (killType) {
      case 'kob':
        t.x = rand.range(p1.x - W/2, p1.x + W/2);
        t.y = p1.y - H/2 - size;
        break;
      case 'kot':
        t.x = rand.range(p1.x - W/2, p1.x + W/2);
        t.y = p1.y + H/2 + size;
        break;
      case 'kol':
        t.x = p1.x + W/2 - size;
        t.y = rand.range(p1.y - H/2, p1.y + H/2);
        break;
      case 'kor':
        t.x = p1.x - W/2 + size;  
        t.y = rand.range(p1.y - H/2, p1.y + H/2);
        break;
    }
    t.size = size;
    t.kot = true;
    t.kob = true;
    t.kol = true;
    t.kor = true;
    t.scale = 1;
  }
}

function cameraX(x) { return x - camera.x + W / 2}
function cameraY(y) { return y - camera.y + H / 2}

class Planet extends Mob {
  specialRender(c) {
    c.globalAlpha = 1;
    const thex = cameraX(this.x);
    const they = cameraY(this.y);
    var grad=c.createLinearGradient(thex-this.gax,they-this.gay,thex+this.gax,they+this.gay);
    grad.addColorStop(0, this.color1);
    grad.addColorStop(1, this.color2);
    c.fillStyle=grad;
    c.beginPath();
    c.arc(thex,they,this.size,0,Math.PI*2,true);
    c.fill();
  }

  collide(m) {
    console.log(m,'collided');
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
      c.arc(cameraX(this.x), cameraY(this.y),size,0,Math.PI*2,true);
      c.fill();
    } else {
      // Fading fire
      var segmentProgress = (progress - cut) / (1 - cut);
      var size = segmentProgress * this.sf;
      c.fillStyle = '#bb9900';
      c.beginPath();
      c.arc(cameraX(this.x), cameraY(this.y),this.sf,0,Math.PI*2,true);
      c.arc(cameraX(this.x), cameraY(this.y),size,0,Math.PI*2,false);
      c.fill();
    }
  }
}

const WH = '#ffffff';
const RD = '#ff0000';


const a = { // Appearances
  /*ship Half ovals
    'o','#dddddd','vh',0,-6,2.2,2.2,Math.PI/2,Math.PI+Math.PI/2,'f',
    'o','#000000','vh',0,-6,2,1.5,Math.PI/2,Math.PI+Math.PI/2,'f',
  ]
  */
  ship: [
    '#eeeeee','p',0,4,-6,4,0,-2,'f',
    //'#eeeeee','p',-2,2,-4,4,-6,0,-4,-1,-2,-4,0,-4,0,2,'f',
    /*'o','#0000ff','p',-3,3,-4,4,-6,4,-8,0,-6,-3,-4,-4,-5,-1,'f',
    'o','#dddddd','v',0,-6,2.2,2.2,'f',
    'o','#888888','vh',0,1,2.5,2,Math.PI,2*Math.PI,'f',
    'o','#ff3333','p',0,1,-2.5,1,-2.5,2,-1.5,3,0,3,'f',
    'o','#000000','v',0,-6,2,1.5,'f',
    'o','#ff0000','vh',0,-6,2,1.5,0.5,Math.PI-0.5,'f',*/
  ],
  triangle: [
    '#eeeeee','p',0,4,-6,4,0,-2,'f',
  ],
  floor: [
    '#888888','p',0,2,3,2,3,3,1,4,0,4,'f',
  ],
  enemyFighter: [
    '#33aa33','p',3,0,4,0,4,-6,2,-8,2,-6,3,-5,'f',
    'o','#33ff33','p',2,0,2,-4,4,0,4,2,'f',
    'o','#888888','v',0,0,1,3,'f',
    'o','#000033','v',0,0,1,2,'f',
  ],
  missile: [
    '#ff3333','p',0,1,1.5,3.5,0,3.5,'f',
    'o','#eecc00','p',0,4,0.7,4,0.85,4.5,0,5,'f',
    'o','#dddddd', 'p', 0,0,0.5,1,0.5,4,0,4,'f',
  ],
  star1: [WH,'c',1],
  star2: [WH,'c',2],
  star3: [WH,'c',3],
  planet: ['G1','c', 1],
  bullet: [RD,'c',4],
  mine: ['#888888','p',0,-3, 1,-2, 3,-3, 2,-1, 3,0, 2,1, 3,3, 1,2, 0,3, 'f','o','#dd0000','c',1],
  e1: ['#888888','c',15,'o','#dd0000','c',5],
  platform: [
    '#888888','p',0,2,3,2,3,3,1,4,0,4,'f',
    'o','#888888','p',0,0,1,0,1,-2,0,-2,'f',
    'o','#bbbbbb','p',0,-3, 2,-3, 3,-2, 3,-1.5, 4,-1.5, 4,-1.3, 3,-1.3, 3,1.3, 4,1.4, 4,1.6, 3,1.6, 3,2, 2,2.5, 2,4, 1.8,4, 1.8,2.5, 1,3, 0,3,
    0,1,1,1,1,-1,0,-1,'f',
    'o','#0000dd','v',0.5,-2.5,1,0.2,'f',
    'o','#0000dd','v',2.5,-1.8,1,0.2,'f',
    'o','#0000dd','v',2.5,0.8,1,0.2,'f',
    'o','#0000dd','v',0.5,2.2,1,0.2,'f',
  ],
  n0: ['#003300','p',-1,-2,0,-3,1,-2,1,2,0,3,-1,2,'f'], 
  n1: ['#00ff00','p',-1,-2,0,-3,1,-2,1,2,0,3,-1,2,'f'], // TODO: Optimize, same as n0, different color
  n2: ['#003300','p',-2,-1,-3,0,-2,1,2,1,3,0,2,-1,'f'],
  n3: ['#00ff00','p',-2,-1,-3,0,-2,1,2,1,3,0,2,-1,'f'], // TODO: Optimize, same as n2, different color
  scoreBack: ['#002200','a',0.7,'p',0,0,4,-12,40,-12,40,0,'f']
}

var p1;
let currentWaypoint, currentWaypointIndex;
let planets;

function createPlanet (x, y, size, name, songFragmentIndex) {
  var t = new Planet('planet', [layers[2]]);
  t.name = name;
  t.isPlanet = true;
  t.x = x;
  t.y = y;
  t.size = size;
  var angle = seeded() * (2 * Math.PI);
  t.gax = Math.cos(angle) * t.size;
  t.gay = Math.sin(angle) * t.size;
  t.color1 = getRandomColor();
  t.color2 = getRandomColor();
  t.scale = size;
  t.hits = 'p';
  t.songFragmentIndex = songFragmentIndex;
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
    p.score = 0;
    p.updateScoreArray();
    p.scale = 2;
    p.fuel = 10000;
    p.keys=k;
    p.rotation = -Math.PI / 2;
    p.songFragments = {};
    p.visitedPlanets = {};
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
      planets.push(createPlanet(planetPosition.x, planetPosition.y, rand.range(1000, 3500), getPlanetName(), i));
    }
  }
  currentWaypoint = planets[0];
  currentWaypointIndex = 0;

  p1 = createShip('ship', W / 2, ['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space' ]);
  const randomAngle = rand.range(0, 2*Math.PI);
  const randDist = rand.range (4000, 5000);
  p1.x = Math.cos(randomAngle) * randDist + planets[0].x;
  p1.y = Math.sin(randomAngle) * randDist + planets[0].y;

  camera.x = p1.x;
  camera.y = p1.y;
  stars50();

}

const planetNames = ['Mercuria', 'Afrodin', 'Gaia', 'Heracle', 'Zyus', 'Sarton', 'Apos', 'Ninua'];

function getPlanetName() {
  return planetNames.pop();
}

// Enemy Waves
var wave = 1;
var waveArray = [];
function updateWaveArray() {
  waveArray = [];
  var ss = '0000000'+(Math.floor(wave / 10)+1);
  ss = ss.substr(ss.length - 2)
  for (var i = 0, len = ss.length; i < len; i += 1) {
    waveArray.push(+ss.charAt(i));
  }
}

updateWaveArray();

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(seeded() * 16)];
  }
  return color;
}

function addEnemy(){
  var type = rands.range(0, 10);
  var diff = Math.floor(wave/10)+1;
  //diff = wave + 1; // Test
  switch (type) {
    case 0: // Formation
      ef.vrow('d',rands.b(),rands.range(100,W-100),diff*2,diff);
      break;
    case 1: // Cruiser
      ef.hrow('d',rands.b(),rands.range(100,H-100),diff*2,diff);
      break;
    case 2:
      ef.vertical('c',rands.b(),rands.range(100,W-100),diff);
      break;
    case 3:
    case 4:
    case 5:
      ef.horizontal('c',rands.b(),rands.range(100,H-100),diff)
      break;
    case 6: // Formation
    case 7: // 
    case 8: // 
    case 9: // 
      ef.f('d',rands.range(2,diff+2),W/2,rands.range(400,600),diff);
      break;
  }
}

function newWave(){
  // Check at least one player alive
  if (!players.filter(p=>!p.dead).length) {
    return;
  }
  addEnemy();
  addEnemy();
  if (rands.range(0,100) < 20) {
    ef.vertical('p',rands.b(),rands.range(100,W-100),Math.floor(wave/10)+1);
  }
  if (wave % 20 === 1) {
    var t = new Planet('planet', [layers[0]]);
    t.x = rands.range(100, W - 100);
    t.y = -100;
    t.dy = 10;
    t.size = rands.range(2,10);
    var angle = seeded() * (2 * Math.PI);
    t.gax = Math.cos(angle) * t.size;
    t.gay = Math.sin(angle) * t.size;
    console.log(angle, t.size, t.gax, t.gay)
    t.color1 = getRandomColor();
    t.color2 = getRandomColor();
    t.kob = true;
    t.scale = 1;
  }
  wave++;
  updateWaveArray();
  timers.push([()=>newWave(), 3]);
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
  }
});

function stars50(){
  for (var i = 0; i < 50; i++) {
    var size = rand.range(1, 3);
    var t = new Star('star'+size, [layers[0]]);
    t.x = rand.range(p1.x - W / 2, p1.x + W / 2);
    t.y = rand.range(p1.y - H / 2, p1.y + H / 2);
    t.size = size;
    t.kob = true;
    t.kot = true;
    t.kol = true;
    t.kor = true;
    t.scale = 1;
  }
}

function title(){
  playMusic(0);
  camera.x = W/2;
  camera.y = H/2;
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
  wave = 1;
  waveArray = [];
  updateWaveArray();
  startGame();
}