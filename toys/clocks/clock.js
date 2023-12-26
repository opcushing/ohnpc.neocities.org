// make a clock class
function Clock(x, y, size) {
	this.pos = createVector(x, y);
	this.size = size;

	this.minute = 0; // goes up to 59
	this.hour = 0; // goes up to 11
	
	// draws the clock based on the minute and hour
	this.draw = function() {
		// calculate the position of the end of the arm based on the minute.
		min_degree = (this.minute / 60.0) * TWO_PI;
		minute_arm = createVector(sin(min_degree), -cos(min_degree));
		minute_arm.setMag(this.size);
		minute_arm.add(this.pos); // translate the position
		// draw the minute
		stroke("#f0f0f0");
		strokeWeight(5);
		line(this.pos.x, this.pos.y, minute_arm.x, minute_arm.y);
		// stroke("#f00000");
		hour_degree = (this.hour / 12.0) * TWO_PI;
		hour_degree += min_degree / 12.0;
		hour_arm = createVector(sin(hour_degree), -cos(hour_degree));
		hour_arm.setMag(this.size * 0.5);
		hour_arm.add(this.pos); // translate the position
		line(this.pos.x, this.pos.y, hour_arm.x, hour_arm.y);
	}

	// updates the minute and hour based off mouse position
	this.update = function() {
		// calculate new_minute based on mouse position
		var radians = Math.atan2(mouseY - this.pos.y, mouseX - this.pos.x);
		radians += (TWO_PI / 120); // correct for rounding. more centered.
		var new_minute = Math.floor(((radians / TWO_PI) + 0.25) * 60);
		new_minute = ((new_minute % 60) + 60) % 60; // give true modulusk

		// calculate hour update based on difference between minute and new_minute.
		overflow = new_minute < this.minute && ((this.minute - new_minute) > 30);
		underflow = this.minute < new_minute && ((new_minute - this.minute) > 30);

		if (underflow) {
			this.hour = ((this.hour - 1) % 12) % 12;
		}
		if (overflow) {
			this.hour = (this.hour + 1) % 12;
		}

		this.minute = new_minute;
	}
}