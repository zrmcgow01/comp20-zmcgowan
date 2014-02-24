
function draw(){
	canvas = document.getElementById('game');
	ctx = canvas.getContext('2d');
	var img = new Image();
	img.src = 'assets/duckhunt.png/';
	img.onload = function(){
		for(var i = 1; i < 6; i++){
			ctx.drawImage(img, 120, 110, 50, 40, 100*i, 100, 50, 40); //draw the ducks
		}
		ctx.drawImage(img, 0, 0, 60, 45, 325, 430, 80, 60); // draw the dog
		ctx.drawImage(img, 0, 270, 80, 130, 100, 250, 160, 260); //draw the tree
		ctx.drawImage(img, 0, 700, 900, 200, 0, 400, 800, 200); //draw the grass, bushes, and dirt
		ctx.fillStyle = "rgb(200,0,0)";
		ctx.fillRect(200, 200, 1, 1);
	}
}
