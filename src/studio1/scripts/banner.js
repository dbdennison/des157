var canvas = document.getElementById("banner"),
    ctx = canvas.getContext("2d"),
    rects = [],
    rectWidth = 32,
    i, r;
    canvas.width = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;

ctx.fillStyle='hsl(195, 82%, 9%)';
	for (var i = 0; i < canvas.width / rectWidth; i++)
		rects.push({x: i * rectWidth, y: 0, w: rectWidth, h: canvas.height});

canvas.onmousemove = function(eventUpdate) {

	var rect = this.getBoundingClientRect(),
		x = eventUpdate.clientX - rect.left,
		y = eventUpdate.clientY - rect.top,
		i = 0, r;
  
	ctx.clearRect(0, 0, canvas.width, canvas.height);
   
	while(r = rects[i++]) {
		ctx.beginPath();
		ctx.rect(r.x, r.y, r.w, r.h);

		ctx.fillStyle = ctx.isPointInPath(x, y) ? "hsl(195, 82%, 9%)" : "hsl(195, 82%, 15%)";
		ctx.fill();
	}
};