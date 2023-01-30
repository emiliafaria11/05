function setup() {
	createCanvas(windowWidth, windowHeight);
    colorMode(HSB,200,100);
	//background(210);
  
}

function draw() {
	blendMode(BLEND);
     background(220,230,150);

	randomSeed(frameCount / 100);
	
	let yStep = 2;
	for (let y = -100; y < width + 100; y += yStep / 2) {
		let arr = [];
		for (let i = 0; i < 100; i++) {
			arr.push(abs(randomGaussian() * 130));
		}
		noFill();
		beginShape();
		drawingContext.setLineDash(arr);
		drawingContext.lineDashOffset = y * frameCount * 0.01;
		//strokeCap(SQUARE);
		//strokeJoin(MITER);
		strokeWeight(abs(randomGaussian() + yStep));
		for (let x = -20; x <= width; x += 50) {
			let pny = (y - yStep) + (noise(x / 100, (y - yStep) / 100, frameCount / 50) - 0.5) * 2 * 100;
			let ny = y + (noise(x / 100, y / -100, frameCount / 30) - 0.3) * 2 * 100;

			ny = min(pny, ny);
			vertex(x, ny);
		}
		endShape();
	}

	// noLoop();
}