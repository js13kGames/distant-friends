friendNames = ['Kori', 'Ponchi', 'Patty'];
friendHints = ['Creta', 'Cape Santos', 'Los Pinos'];
fws = [];

const ve = () => mo ? 'Tap' : 'Enter'; 

function wrapText(txt) {
  wi = Math.floor((W - 270) / ctx.measureText('m').width);
  y = H - (mo ? 220 : 150);
  words = txt.split(' ');
  line = '';
  while (words.length) {
    w = words.splice(0,1)[0]
    if (line.length + w.length > wi) {
      ctx.fillText(line, 250, y);
      y += 30;
      line = '';
    }
    line += w + ' ';
    if (!words.length) {
      ctx.fillText(line, 250, y);
    }
  }
}

// let lastDelta = -1; // FPS
function renderUI(c,d) {
  if (gState == 0) {
    c.font = font(18);
    c.fillStyle= "#00ff00";
    c.fillText("Loading...",10,50);
    if (musicLoaded) {
      c.fillText(ve()+ " to start",10,70);
    }
  } else if (gState == 1) {
    c.font = "64px 'Brush Script MT'";
    c.textAlign="center"; 
    c.fillStyle= "#cf3436";
    c.fillText("Distant Friends",W/2,80);
    c.font = font(20);
    c.fillStyle= "#ffffff";
    
    c.fillText(ve()+ " to start",W/2,350);
    c.fillText("by Slashie, Mateo Robayo and QuietGecko", W/2, H - 50);
    c.fillText("js13k21", W/2,H - 30);
  } else if (gState == 2 || gState == 3 || gState == 10) {
    c.font = font(16);
    c.textAlign="left"; 
    c.fillStyle= "#ffffff";
    for (let i = 0; i < 3; i++) 
      c.fillText((i == cwi?'> ':' ') +friendNames[i] + ": " + friendHints[i], 30, 30 + i * 20);

    if (minerals)
      c.fillText("Selenium: " + minerals, 30, 120);
    if (fishes)
      c.fillText("Fishes: " + fishes, 30, 140);
    if (raceTime > 0) {
      c.fillText("Kestrel Run: " + raceTime, 30, 160);
    }
    if (gxTime > 0) {
      c.fillText("Galaxian Gate: " + gxTime, 30, 180);
    }

    c.textAlign="right"; 
    // Stats
    if (p1.won) {
      c.fillText("Game Completed: " + completeTime,W - 30, 30);
    }

    /* FPS
    if (lastDelta == -1) {
      lastDelta = Date.now();
    } else {
      let now = Date.now();
      let diff = (now - lastDelta) / 1000;
      c.fillText("FPS: " + Math.floor(1/diff), 30, H - 30);
      lastDelta = now;
    }
    */
    c.textAlign="center"; 

    if (curCtxTime > 0) {
      curCtxTime -= d;
      c.fillText(curCtxHint, W / 2, H / 2 - 150);
    }

    const angle = Math.atan2(p1.y - currentWaypoint.y, p1.x - currentWaypoint.x) + Math.PI;
    Renderer.renderShapes(c, SHAPES.triangle, W / 2, H - 60, 1, 1, angle, 50, 50, undefined, true);
    c.fillStyle= "#ffffff";
    c.fillText("to "+currentWaypoint.name+": " + Math.floor(rdist(p1, currentWaypoint) - currentWaypoint.size), W / 2, H - 20);
    c.fillText(ve()+ " to change", W / 2, H - 5);
    if (gState != 10) {
      if (mo) {
        low = H - 200;
        c.lineWidth = 2;
        c.strokeStyle = '#5b5e8b';
        c.beginPath();
        c.moveTo(W/3, 0);
        c.lineTo(W/3, H);
        c.moveTo(0, low);
        c.lineTo(W, low);
        c.moveTo(W*2/3, 0);
        c.lineTo(W*2/3, H);
        c.stroke();
        c.fillText("[Turn]", 60, low - 20);
        c.fillText("[Turn]", W - 60, low - 20);
        c.fillText("[Fire]", W/2, low - 20);
        c.fillText("[Forward]", 60, low + 20);
        c.fillText("[Back]", W - 60, low + 20);
      } else {
        c.textAlign="left"; 
        c.fillText("[Arrow Keys, Spacebar]", 60, H - 30);
      }
    }
    // DEBUG
    /*c.fillText("Cruising: " + p1.isCruising(), 50, 50);
    c.fillText("Near Planet: " + p1.nearPlanet(), 50, 70);
    c.fillText("DV: " + p1.dv, 50, 90);
    c.fillText("Asteroids: " + asteroids, 50, 110);*/


  } 
  if (gState == 10) {
    c.fillStyle = "#000";
    c.globalAlpha = 0.5;
    c.fillRect(0, H - (mo ? 250 : 180), W, (mo ? 195 : 125));
    c.globalAlpha = 1;
    Renderer.renderShapes(c, conversationApp, 150, H - (mo ? 190 : 120), 2, 1, -Math.PI / 2, 49, 49, undefined, true);
    c.font = font(24);
    c.fillStyle= "#FFF";
    c.textAlign="left"; 
    wrapText(conversationText);
    c.textAlign="right"; 
    c.fillText("["+ve()+"]", W - 20, H - 65);
  }
}

let curCtxHint, curCtxTime;
function contextHint(msg) {
  curCtxTime = 5;
  curCtxHint = msg;
}