window.onresize = setup;
window.onload = setup;
window.onload = main;

function setup(){
	var con = document.getElementById("myContainer"),
		canvas = document.getElementById("banner2"),
		ctx = canvas.getContext("2d"),
		aspect = canvas.height/canvas.width,
		width = con.offsetWidth,
		height = con.offsetHeight;
}

function main() {
	canvas = document.getElementById("banner2");
	ctx = canvas.getContext("2d");
	setInterval(drawScreen, 60);

	ctx.fillStyle='hsl(195, 82%, 9%)';
	for (var i=0;i<24;++i) ctx.fillRect(i*32,0,32,256);

	function  drawScreen() {
		context.fillStyle = '#333';
		//context.fillRect(0, 0, canvas.width, canvas.height);
}

}