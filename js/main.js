// Kinemtaic 1D Simulator
//
// Libraries used : p5.js, grafica.js
//
// Jacques M. Laniel, august 2021
//
//
// Global Variables
//
// Simulation control variable : 'setup', 'running', 'stop'
let simPhase = "setup";
// Motion state : "static" or "kinetic"
let motionState = "static";
// Test if stopper has been reached ("on") or not ("off")
let stopperState = "off";
// Checkbox variable for displaying or not the plots
plotDisplayStatus = "on";
// canvas size (4:3)
canvasWidth = 1024;
canvasHeight = 680;

// Time variables
let t = 0;
let fps = 50;
let dt = 1 / fps;

// Gui global variables
let fontName = "Comic Sans MS";
let fontSizeBold = 22;
let fontSizeRegular = 18;
let fontSizeSmall = 18;
let inputLength = 50;
let inputHeight = 22;
let buttonLength = 80;
let buttonHeight = 30;

// Initialization variables
// Axis
let axisColor = "Black";
let axisFraction = 0.95; // Fractionnal size of axis with respect to canvas size
let axisRealLenght = 20; // Axis real lenght in meter
// Block
let blockWidth = 40;
let blockHeight = 40;
let blockColor = "SeaGreen";
let blockColorStroke = "DarkGreen";
// X Position plot
let plotXPosXCoord = 0;
let plotXPosYCoord = 325;
let plotXPosWidth = 400;
let plotXPosHeight = 250;
// X Position plot
let plotXVelXCoord = 1.2 * plotXPosWidth;
let plotXVelYCoord = plotXPosYCoord;
let plotXVelWidth = plotXPosWidth;
let plotXVelHeight = plotXPosHeight;

// Create p5 instances for top and bottom sketches
let animP5 = new p5(sketch, "sketch");
