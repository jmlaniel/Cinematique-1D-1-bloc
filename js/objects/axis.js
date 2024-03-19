// Coordinate system object
//
//
function Axis(p, x, y, dirX, dirY, color) {
  // Origin of axis (pixel)
  this.base = p.createVector(x, y);
  // Direction of axis (pixel)
  this.vec = p.createVector(dirX, dirY);
  // Color of axis
  this.color = color;

  // Initialize axis variables
  this.init = function () {
    axisRealLenght = axisRealLenghtInput.value();
  };

  // Function that draw axis
  this.draw = function () {
    this.drawArrow(this.base, this.vec, this.color);
  };

  // draw an arrow for a vector at a given base position
  //
  // Taken from https://p5js.org/reference/#/p5.Vector/magSq
  //
  // base = base position in pixels (must be a p5.vector)
  // vec = vector in pixels (must be a p5.vector)
  //
  this.drawArrow = function (base, vec, myColor) {
    p.push();
    p.stroke(myColor);
    p.strokeWeight(5);
    p.fill(myColor);
    p.translate(base.x, base.y);
    p.line(0, 0, vec.x, vec.y);
    p.rotate(vec.heading());
    let arrowSize = 20;
    p.translate(vec.mag() - arrowSize, 0);
    p.triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    p.pop();
  };
}
