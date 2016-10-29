var player;
var bullets = [];
var laser;
var terrain;
var lives;

function preload(){
	laser=loadSound('sounds/laser.mp3');
}


function setup() {
	createCanvas(800,480);
	player = new Player(100,100);	
	terrain = new Terrain(0, height-100);
	terrain.speed=5;
	lives=3;
}

function draw() {
  background(0);
  // update the game objects
  update();

  // update and paint the wasp
  player.draw();

  // update the terrain
  terrain.draw();

  // check for hits
  if(terrain.hitting(player)) {
    player.bounce();
  }  

  // show the lives
  text("Lives: " + lives, width-80, 15);

  // if the first bullet is past the screen remove it
  if(bullets.length>0){
	  if(bullets[0].x > (width + bullets[0].width)){
		bullets.shift();
	  } 	
  }

  // paint and update the bullets
  for(var i=0; i<bullets.length; i++){
  	bullets[i].updateAndDraw();
  }  	
}  

function update(){
	player.update();	
	terrain.update();
}

function keyPressed(){
	if(key == ' ') {
		player.jump();
  	}
 	if(key == 'X') {
		bullets.push(new Bullet(player.x, player.y));
		laser.play();
  	}
  	console.log(keyCode);
 	if(keyCode == LEFT_ARROW) {
		player.direction=-1;
		terrain.speed= 5 * player.direction;
		player.x=width-100;
  	}
 	if(keyCode == RIGHT_ARROW) {
		player.direction=1;
		terrain.speed = 5 * player.direction;
		player.x=100;
  	}  	  	 	
}  
