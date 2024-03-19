// Block object
//
function Block(
  p,
  x0,
  y0,
  vx0,
  vy0,
  accx,
  accy,
  width,
  height,
  color,
  colorStroke
) {
  // Initialize Block variables
  this.color = color;
  this.colorStroke = colorStroke;
  this.width = width;
  this.height = height;
  this.pos0 = p.createVector(x0, y0);
  this.vel0 = p.createVector(vx0, vy0);
  this.acc = p.createVector(accx, accy);
  this.pos = p.createVector(0, 0);
  this.vel = p.createVector(0, 0);
  this.xCanvas = 0;
  this.yCanvas = 0;

  // Initialize function
  this.init = function () {
    this.pos0 = p.createVector(parseFloat(x0Input.value()), y0);
    this.pos = p.createVector(parseFloat(x0Input.value()), y0);
    this.vel0 = p.createVector(parseFloat(vx0Input.value()), 0);
    this.acc = p.createVector(parseFloat(axInput.value()), 0);
  };

  // Update function
  this.update = function () {
    // Update position and velocity using MUA equations
    this.pos.x = this.pos0.x + this.vel0.x * t + 0.5 * this.acc.x * t * t;
    this.vel.x = this.vel0.x + this.acc.x * t;
  };

  // Draw function
  this.draw = function () {
    // draw table
    p.rectMode(p.CENTER);
    p.strokeWeight(5);
    p.stroke(this.colorStroke);
    p.fill(this.color);

    this.xCanvas =
      canvasWidth * ((axisFraction * this.pos.x) / axisRealLenght + 0.5);
    this.yCanvas = this.pos.y + canvasHeight / 2;
    p.rect(this.xCanvas, this.yCanvas, this.width, this.height);
  };
}
