// p5.js sketch
//
// Jacques M. Laniel, august 2021
//
let sketch = function (p) {
  // p5 setup function
  p.setup = function () {
    // Set pixel density to 1
    p.pixelDensity(1);
    // Create canvas using the whole browser window
    canvas = p.createCanvas(canvasWidth, canvasHeight);
    // Setup framerate fps = 1/dt
    p.frameRate(fps);
    // Create objects
    objectCreation(p);
    // Create GUI inputs
    guiInputs(p);
    // Draw Gui text
    guiText(p);
    // Initialize objects
    objectInit(p);
  };

  // p5 draw function
  p.draw = function () {
    console.log(plotDisplayStatus);
    // Set background color
    p.background("LightSkyBlue");
    switch (simPhase) {
      case "setup":
        // Initialize objects
        objectInit();
        // Draw objects
        objectDraw();
        break;
      case "running":
        // Update objects
        objectUpdate();
        // Draw objects
        objectDraw();
        break;
      case "pause":
        // Draw objects
        objectDraw();
    }
    // Draw Gui text
    guiText(p);
  };
};
