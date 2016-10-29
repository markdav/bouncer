function Terrain(startX, startY) {
	this.x = startX;

	// y of the top left of the shape 
	this.y = startY;
	this.speed = 5;
	this.pointSpace = 100;

	this.points = [];

	// initialize some random points
	this.points.push(createVector(startX, startY));
	for(var i=startX; i < width+this.pointSpace; i+=this.pointSpace){
		this.points.push(createVector(i, random(height-100, height)));
	}

	// update the locations of the points 
	this.update = function(){
		// move all the points by speed
		for(var i=0; i< this.points.length; i++){
			this.points[i].x-=this.speed;
		}		

		// if the first element has left the screen, remove it and add a new one to replace
		if(this.points[0].x < 0-this.pointSpace){
			this.points.shift();
			this.points.push(createVector(this.points[this.points.length-1].x + this.pointSpace, random(height-100, height)));
		}


	};

	// draw the points
	this.draw = function(){
		stroke(255);
		var lastPoint = this.points[0];
		for(var i=1; i< this.points.length; i++){
			line(lastPoint.x, lastPoint.y, this.points[i].x, this.points[i].y);
			lastPoint = this.points[i];
		}
	};

	this.hitting = function(player){
		// go through the points till the x > wasp.x and check for collision
		var lastPoint = this.points[0];
		for(var i=1; i< this.points.length; i++){

			if (collideLineCircle(lastPoint.x, lastPoint.y, this.points[i].x, this.points[i].y, player.x, player.y, player.radius*2)){
				return(true);
			};
			lastPoint = this.points[i];

			// don't bother checking lines that start past the player x
			if(lastPoint.x > player.x) break;
		}
		return false;
	}
}