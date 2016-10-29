function Terrain(startX) {
	this.viewX = startX;

	this.speed = 5;

	// The "terrain" is really just a list of evenly spaced points

	this.numPoints = 10000;
	this.pointSpace = 100;
	this.points = [];
	this.visiblePoints = [];

	// initialize some random points
	// bound the world
	this.points.push(0);
	for(var i=0; i < this.numPoints; i++){
		this.points.push(random(height-100, height));
	}	
	this.points.push(0);


	// update the locations of the points 
	this.update = function(){
		this.viewX+=this.speed;
	};

	// draw the points
	this.draw = function(){
		stroke(255);

		var startPointIndex = Math.floor(this.viewX/this.pointSpace);
		var endPointIndex = Math.ceil((this.viewX + width)/this.pointSpace) + 1;	
		var fromPointIndex = startPointIndex - 1;

		for(var i=startPointIndex; i< endPointIndex; i++){
			var x1 = ((i-1)*this.pointSpace)-this.viewX;
			var y1 = this.points[fromPointIndex];
			var x2 = (i*this.pointSpace)-this.viewX;
			var y2 = this.points[i]; 
			// console.log("(x1, y1, x2, y2) = (" + x1 + ", " + y1 + ", " + x2 + ", " + y2 + ")");
			line(x1,y1,x2,y2);
			fromPointIndex = i;
		}
	};

	this.hitting = function(player){
	
		var startPointIndex = Math.floor(this.viewX/this.pointSpace);
		var endPointIndex = Math.ceil((this.viewX + width)/this.pointSpace) + 1;	
		var fromPointIndex = startPointIndex - 1;

		for(var i=startPointIndex; i< endPointIndex; i++){
			var x1 = ((i-1)*this.pointSpace)-this.viewX;
			var y1 = this.points[fromPointIndex];
			var x2 = (i*this.pointSpace)-this.viewX;
			var y2 = this.points[i]; 
			fromPointIndex = i;
			if (collideLineCircle(x1,y1,x2,y2,player.x, player.y, player.radius*2)){
				return(true);
			};
			lastPoint = this.points[i];

			if(fromPointIndex.x > player.x) break;
		}
		return false;
	};
}