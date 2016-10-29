function Player(x,y) {
	this.x = x;
	this.y = y;
	this.gravity = 0.15;
	this.yvel = 0;
	this.radius = 20;
	this.bounceVel = -10;
	this.jumpVel = -5;
	this.direction = 1;

	this.update = function() {
		this.yvel += this.gravity;
		this.y += this.yvel;
		if(this.y > height) {
			this.y= height;
		}
	};

	this.draw = function() {
		fill(255);	
		stroke(255);	
		ellipse(this.x, this.y, this.radius, this.radius);
	};	

	this.jump = function() {
		this.yvel = this.jumpVel;
	};

	this.bounce = function() {
		this.yvel = this.bounceVel;
	};
}
