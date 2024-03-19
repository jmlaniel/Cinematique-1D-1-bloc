// Function thet creates all objects
function objectCreation(p) {
  // Create X axis
  let ypos = canvasHeight * 0.45;

  // Create X-axis
  xAxis = new Axis(
    p,
    (canvasWidth * (1 - axisFraction)) / 2,
    ypos,
    axisFraction * canvasWidth,
    0,
    axisColor
  );

  // Create Y-Axis
  yAxis = new Axis(p, canvasWidth / 2, ypos, 0, -250, axisColor);

  // Create block
  block = new Block(
    p,
    canvasWidth / 2,
    ypos - 0.6 * canvasHeight,
    0,
    0,
    0,
    0,
    blockWidth,
    blockHeight,
    blockColor,
    blockColorStroke
  );

  // Create plots (x pos, x vel)
  plotXPos = new Plot(
    p,
    plotXPosXCoord,
    plotXPosYCoord,
    plotXPosWidth,
    plotXPosHeight,
    "t (s)",
    "x (m)",
    "Position vs temps"
  );
  plotXVel = new Plot(
    p,
    plotXVelXCoord,
    plotXVelYCoord,
    plotXVelWidth,
    plotXVelHeight,
    "t (s)",
    "v (m/s)",
    "Vitesse vs temps"
  );
}
