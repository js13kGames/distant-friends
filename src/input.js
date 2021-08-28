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