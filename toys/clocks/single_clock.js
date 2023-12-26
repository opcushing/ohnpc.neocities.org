/*
Name: clocks
Author: ohnpc
Date: 20231123
*/

var clock;

function setup() {
	var myCanvas = createCanvas(60, 60);
	background("#202020");
	clock = new Clock(30, 30, 15);
	myCanvas.parent("clock");
}

function draw() {
	background("#202020");
	clock.update();
	clock.draw();
}
