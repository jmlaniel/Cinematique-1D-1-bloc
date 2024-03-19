// Draw function
//
function objectDraw() {
  // Draw Objects
  xAxis.draw();
  yAxis.draw();
  block.draw();
  // Update plots
  if (plotDisplayStatus == "on") {
    plotXPos.draw();
    plotXVel.draw();
  }
}
