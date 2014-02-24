
function draw(){
	canvas = document.getElementById('game');
	ctx = canvas.getContext('2d');
	var img = new Image();
	img.onload = function(){
		for(var i = 1; i < 6; i++){
			ctx.drawImage(img, 120, 110, 50, 40, 100*i, 100, 50, 40);
		}
		ctx.drawImage(img, 0, 0, 60, 45, 350, 455, 60, 45);
		ctx.drawImage(img, 0, 270, 70, 130, 100 , 240, 140, 260);
		ctx.fillStyle = "rgb(200,0,0)";
		ctx.fillRect(200, 200, 1, 1);
	}
	img.src = 'assets/duckhunt.png/';
}
