//-------------------------------------------------------------------------
// Control functions (running, pause, stop)
//-------------------------------------------------------------------------

// Start Simulation
function simRunning(p) {
  // initialize time
  t = 0;
  simPhase = "running"; // Set phase to running
  stopperState = "off"; // Set stopperState flag to off
  // Set coordinates and velocities to initial conditions
  objectInit(p);
  // Draw objects
  objectDraw();
}

// Pause simulation
function simPause(p) {
  switch (simPhase) {
    case "pause":
      simPhase = "running"; // Toggle pause for running
      break;
    case "running":
      simPhase = "pause"; // Toggle running for pause
      break;
  }
}

// Stop Simulation
function simStopping(p) {
  simPhase = "setup"; // Set phase to running
}

//-------------------------------------------------------------------------
// Inputs
//-------------------------------------------------------------------------

function guiText(p) {
  // General coordinates for gui text
  let x0 = 10;
  let y0 = 30;

  // Title
  let dx = 0;
  let dy = 0;
  x0 += dx;
  y0 += dy;
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeBold);
  p.textStyle(p.BOLD);
  p.fill("black");
  p.text("Cinématique 1D - MUA", x0, y0);

  // X Position
  dx = 0;
  dy = 30;
  x0 += dx;
  y0 += dy;
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeRegular);
  p.textStyle(p.NORMAL);
  p.text("x0 (m) : ", x0, y0);

  // X Velocity
  dx = 0;
  dy = 25;
  x0 += dx;
  y0 += dy;
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeRegular);
  p.textStyle(p.NORMAL);
  p.text("vx0 (m/s) : ", x0, y0);

  // X Acceleration
  dx = 0;
  dy = 25;
  x0 += dx;
  y0 += dy;
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeRegular);
  p.textStyle(p.NORMAL);
  p.text("ax0 (m/s2) : ", x0, y0);

  // Size in meters for the axis
  dx = 195;
  dy = -50;
  x0 += dx;
  y0 += dy;
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeRegular);
  p.textStyle(p.NORMAL);
  p.text("Longueur de l'axe (m) : ", x0, y0);

  // X Axis label
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeBold + 10);
  p.textStyle(p.BOLD);
  p.fill("black");
  p.text("x", 990, 340);

  // Y Axis label
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeBold + 10);
  p.textStyle(p.BOLD);
  p.fill("black");
  p.text("y", 485, 45);

  // Credits
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeRegular);
  p.textStyle(p.NORMAL);
  p.text("JML 2021", canvasWidth - 100, canvasHeight - 15);
}

function guiInputs(p) {
  // General coordinates for gui text
  let x0 = 120;
  let y0 = 17;

  // Input for x position
  dx = 0;
  dy = 25;
  x0 += dx;
  y0 += dy;
  x0Input = p.createInput(0);
  x0Input.position(x0, y0);
  x0Input.size(inputLength, inputHeight);
  x0Input.style("accentColor", "black");

  // Input for x velocity
  dx = 0;
  dy = 25;
  x0 += dx;
  y0 += dy;
  vx0Input = p.createInput(0);
  vx0Input.position(x0, y0);
  vx0Input.size(inputLength, inputHeight);
  vx0Input.style("accentColor", "black");

  // Input for x acceleration
  dx = 0;
  dy = 25;
  x0 += dx;
  y0 += dy;
  axInput = p.createInput(0);
  axInput.position(x0, y0);
  axInput.size(inputLength, inputHeight);
  axInput.style("accentColor", "black");

  // Input for axis real lenght (in meters)
  dx = 280;
  dy = -50;
  x0 += dx;
  y0 += dy;
  axisRealLenghtInput = p.createInput(axisRealLenght);
  axisRealLenghtInput.position(x0, y0);
  axisRealLenghtInput.size(inputLength, inputHeight);
  axisRealLenghtInput.style("accentColor", "black");
  axisRealLenghtInput.style("text-align", "right");

  // Setup Run Button
  dx = -200;
  dy = 35;
  x0 += dx;
  y0 += dy;
  runButton = p.createButton("Démarrer");
  runButton.position(x0, y0);
  runButton.size(buttonLength, buttonHeight);
  runButton.style("font-family", fontName);
  runButton.mousePressed(function () {
    simRunning(p);
  });

  // Setup Pause Button
  dx = 1.1 * buttonLength;
  dy = 0;
  x0 += dx;
  y0 += dy;
  pauseButton = p.createButton("Pause");
  pauseButton.position(x0, y0);
  pauseButton.size(buttonLength, buttonHeight);
  pauseButton.style("font-family", fontName);
  pauseButton.mousePressed(function () {
    simPause(p);
  });

  // Setup Stop Button
  dx = 1.1 * buttonLength;
  dy = 0;
  x0 += dx;
  y0 += dy;
  stopButton = p.createButton("Arrêt");
  stopButton.position(x0, y0);
  stopButton.size(buttonLength, buttonHeight);
  stopButton.style("font-family", fontName);
  stopButton.mousePressed(function () {
    simStopping(p);
  });

  // Checkbox for displaying plots
  plotDisplayControl = p.createCheckbox("Affichage des graphiques", true);
  plotDisplayControl.position(740, 10);
  plotDisplayControl.style("font-family", fontName);
  plotDisplayControl.changed(plotDisplayStatusControl);

  // Checkbox for displaying plots
  initialParametersDisplayControl = p.createCheckbox(
    "Affichage des paramètres initiaux",
    true
  );
  initialParametersDisplayControl.position(740, 30);
  initialParametersDisplayControl.style("font-family", fontName);
  initialParametersDisplayControl.changed(
    initialParametersDisplayStatusControl
  );
}

// Plot Display control function
function plotDisplayStatusControl() {
  if (this.checked()) {
    plotDisplayStatus = "on";
  } else {
    plotDisplayStatus = "off";
  }
}

// Initial Parameters Display control function
function initialParametersDisplayStatusControl() {
  if (this.checked()) {
    x0Input.show();
    vx0Input.show();
    axInput.show();
    axisRealLenghtInput.show();
  } else {
    x0Input.hide();
    vx0Input.hide();
    axInput.hide();
    axisRealLenghtInput.hide();
  }
}
