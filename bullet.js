function Bullet(startX, startY, speed) {

	this.x=startX;
	this.y=startY;
	this.width=20;
	this.height=3;
	this.speed = speed;

	this.updateAndDraw = function(){
		// update position
		this.x+=this.speed;		

		// draw
		fill(255,0,0);
		stroke(0);
		rect(this.x, this.y, this.width, this.height);
	};
}