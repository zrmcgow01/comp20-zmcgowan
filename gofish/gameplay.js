//drawImage() function uses (x.src, y.src, width.src, height.src, x.dest, y.dest, width.dest, height.dest)
//each card is 72px wide by 98px high
//card back is 1506x1052 px
//rows of cards are separated by 0 px
//columns of cards are separated by ~1px

var img;  //global spritesheet variable
var deck_length = 52;
var Deck = [];
function init(){
	canvas = document.getElementById('game');

	for(var i = 0; i < 13; i++){
		for(var j = 0; j < 4; j++){
			var card = [];
			var suit;
			if(j==0){
				suit = 'c';
			}
			else if(j==1){
				suit = 's';
			}
			else if(j==2){
				suit = 'h';
			}
			else{
				suit = 'd';
			}
			card.push(suit);
			card.push(i);
			Deck.push(card);
		}
	}


	img = new Image();
	img.src = '52cardsprite.jpg'; //950px by 392 px
	img2 = new Image();
	img2.src = 'card_back.jpeg';
	img2.onload = load_backs;
	img.onload = deal_cards;
		//ctx.drawImage(img, 0, 0, 72, 98, 200, 400, 70, 98);
		//ctx.drawImage(img, 0, 98, 72, 98, 0, 400, 70, 98);
		//ctx.drawImage(img, 0, 98, 72, 98, 0, 400, 70, 98);

		//ctx.drawImage(img, 0, 270, 80, 130, 100, 200, 160, 310); //draw the tree
		//ctx.drawImage(img, 0, 700, 900, 200, 0, 400, 800, 200); //draw the grass, bushes, and dirt
		//ctx.fillStyle = "rgb(200,0,0)";
		//ctx.fillRect(200, 200, 1, 1);
}

function load_backs(){
	console.log("backs loaded");
}

function deal_cards(){
	console.log("here");
	ctx = canvas.getContext('2d');
	attempt = 0;
	while(Deck.length > 24){
		var random_num = Math.floor(Math.random()*Deck.length);
			if(Deck[random_num][0]=='c'){
				var y_src = 0;
			}
			if(Deck[random_num][0]=='s'){
				var y_src = 1;
			}
			if(Deck[random_num][0]=='h'){
				var y_src = 2;
			}
			if(Deck[random_num][0]=='d'){
				var y_src = 3;
			}
			var x_src = Deck[random_num][1];

			if(Deck.length%4 == 0){
				ctx.drawImage(img, (72*x_src + x_src), (y_src*98), 72, 98, Math.floor((52-Deck.length)/4)*13+300, 450, 72, 98);
			}
			else if(Deck.length%4 == 1){
				ctx.drawImage(img2, 80, 50, 140, 200, Math.floor((52-Deck.length)/4)*13, 200, 70, 100);
			}
			else if(Deck.length%4 == 2){
				ctx.drawImage(img2, 80, 50, 140, 200, Math.floor((52-Deck.length)/4)*13+300, 50, 70, 100);
			}
			else{
				ctx.drawImage(img2, 80, 50, 140, 200, Math.floor((52-Deck.length)/4)*13+600, 200, 70, 100);
			}
			Deck.splice(random_num, 1);
	}
}


