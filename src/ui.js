friendNames = ['Kori', 'Ponchi', 'Patty'];
friendHints = ['Creta', 'Cape Santos', 'Los Pinos'];

function wrapText(txt) {
  wi = Math.floor((W - 270) / ctx.measureText('m').width);
  y = H - 150;
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

    for (let i = 0; i < 3; i++) 
      c.fillText(friendNames[i] + ": " + friendHints[i], 30, 30 + i * 20);

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
    wrapText(conversationText);
    c.textAlign="right"; 
    c.fillText("[Press Enter]", W - 20, H - 65);
  }
}