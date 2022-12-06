const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
ctx.fillStyle = 'yellow';
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 10;
ctx.shadowColor = 'black'


function drawShape(x, y, radius, inset, n){
    ctx.beginPath();
    ctx.save();
    ctx.translate(x, y);
    ctx.moveTo(0, 0 - radius);
    for(let i = 0; i < n; i++){
        ctx.rotate(Math.PI /n);
        ctx.lineTo(0, 0 - (radius * inset));
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - radius);
    }
   
    ctx.restore();
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

drawShape(120, 120, 100, 0.5, 8, 1);

window.addEventListener('mousemove', function(e){
    drawShape(e.x, e.y, 150, 0.1, 7);
}
)