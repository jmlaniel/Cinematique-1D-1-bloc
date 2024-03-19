// Update objects
function objectUpdate() {
  // Update time
  t += dt;

  // Test if canvas edges has been reached
  var xMin = xAxis.base.x;
  var xMax = xAxis.base.x + xAxis.vec.x;

  // Test if canvas edges has been reached
  if (block.xCanvas < xMin || block.xCanvas > xMax) {
    stopperState = "on";
  } else {
    stopperState = "off";
  }

  // Update only if block is still within the canvas
  if (stopperState == "off") {
    // Update objects
    block.update();

    // X Position plot
    label =
      t.toFixed(2).toString() +
      "s" +
      ", " +
      block.pos.x.toFixed(2).toString() +
      "m";
    plotXPos.points.push(new GPoint(t, block.pos.x, label));

    // X Velocity plot
    label =
      t.toFixed(2).toString() +
      "s" +
      ", " +
      block.vel.x.toFixed(2).toString() +
      "m/s";
    plotXVel.points.push(new GPoint(t, block.vel.x, label));
  }
}
