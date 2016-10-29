function Player(x,y) {
	this.x = x;
	this.y = y;
	this.gravity = 0.15;
	this.yvel = 0;
	this.radius = 20;
	this.bounceVel = -10;
	this.jumpVel = -5;
	this.direction = 1;
	this.targetX = x;
	this.easing = 0.05;
	this.bounceflash = 0;
	this.jumpflash = 0;

	this.update = function() {
		// move x towards the targetX
		var dx = this.targetX-this.x;
		this.x += dx*this.easing;

		// manage the bounce
		this.yvel += this.gravity;
		this.y += this.yvel;
		if(this.y > height) {
			this.y= height;
		}
	};

	this.draw = function() {
		if(this.bounceflash > 0){
			stroke(255, 0, 0);
			this.bounceflash--;
		} else {
			stroke(255);
		}	
			

		if(this.jumpflash > 0) {
			this.jumpflash--;
			fill(255, 0, 0);			
		} else {
			fill(255);	
		}

		ellipse(this.x, this.y, this.radius, this.radius);		
	};	

	this.jump = function() {
		this.yvel = this.jumpVel;
		this.jumpflash = 10;
	};

	this.bounce = function() {
		this.yvel = this.bounceVel;
		this.bounceflash = 10;
	};
}
