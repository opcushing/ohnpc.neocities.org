/*
Name: clocks
Author: ohnpc
Date: 20231123
*/

var clocks = [];
const clock_num = 30;

function setup() {
	var myCanvas = createCanvas(windowWidth, windowHeight);
  const unit = (width / clock_num);
	background("#202020");
	for (var clock_row = 0; clock_row * unit < height; ++clock_row) {
		row_of_clocks = []
		for (var clock_idx = 0; clock_idx < clock_num; ++clock_idx) {
      const clock_x = (clock_idx * unit) + (unit / 2);
      const clock_y = (clock_row * unit) + (unit / 2);
			row_of_clocks[clock_idx] = new Clock(clock_x, clock_y, unit / 2);
		}
		clocks[clock_row] = row_of_clocks;
	}
	myCanvas.parent("clocks");
}

function draw() {
	background("#202020");
	for (var i = 0; i < clocks.length; ++i) {
		for (var j = 0; j < clocks[i].length; ++j) {
			clocks[i][j].update();
			clocks[i][j].draw();
		}
	}
}
