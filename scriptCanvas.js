const canvas = document.getElementById('graph');
const ctx = canvas.getContext('2d');


ctx.beginPath();
ctx.moveTo(50, ctx.canvas.height - 50)
ctx.lineTo(ctx.canvas.width - 50, ctx.canvas.height - 50)
ctx.moveTo(50, 50);
ctx.lineTo(50, ctx.canvas.height - 50)


ctx.stroke()

