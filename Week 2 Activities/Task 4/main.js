var myCanvas = document.getElementById('canvas');
var ctx = myCanvas.getContext('2d');

var gra = ctx.createLinearGradient(0, 0, 200, 0);
gra.addColorStop(0,'#AA336A');
gra.addColorStop(1,'white');

ctx.fillStyle = gra;
ctx.fillRect(50, 50, 200, 200);