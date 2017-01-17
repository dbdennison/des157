var canvas = document.getElementById("banner"),
    ctx = canvas.getContext("2d"),
    rects = [],
    rectWidth = 32,
    i, r;
    canvas.width = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;

//fill rects with shapes depending on the size of the canvas
for (var i = 0; i < canvas.width / rectWidth; i++)
	rects.push({x: i * rectWidth, y: 0, w: rectWidth, h: canvas.height});

canvas.onmousemove = function(eventUpdate) {

	//get the coords of the cursor relative to the canvas
	var rect = this.getBoundingClientRect(),
		x = eventUpdate.clientX - rect.left,
		y = eventUpdate.clientY - rect.top,
		i = 0, r;
	
	//iterate through rects to draw each item
	while(r = rects[i++]) {
		ctx.beginPath();
		ctx.rect(r.x, r.y, r.w, r.h);

		//check cursor for overlap of an element and set its fill
		ctx.fillStyle = ctx.isPointInPath(x, y) ? "hsl(195, 82%, 9%)" : "hsl(195, 82%, 15%)";
		ctx.fill();
	}
};

//todo: add onResize function to update rects