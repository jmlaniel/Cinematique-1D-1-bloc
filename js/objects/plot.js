// plotSketch
//
// Jacques M. Laniel, July 2021
//
function Plot(p, x0, y0, width, height, xlabel, ylabel, title) {
  let plot = [];
  let pointSize = 4;
  let fontColor = "Black";
  this.xlabel = xlabel;
  this.ylabel = ylabel;
  this.title = title;
  this.points = [];

  // Create the plot
  plot = new GPlot(p);

  //Set points size
  plot.setPointSize(pointSize);
  // Activate point labels
  plot.activatePointLabels();

  // Setup title
  plot.setTitleText(this.title);
  plot.title.fontColor = fontColor;
  plot.title.fontSize = fontSizeRegular;
  plot.title.fontName = fontName;
  // Setup x-axis
  plot.xAxis.setAxisLabelText(this.xlabel);
  plot.xAxis.fontColor = fontColor;
  plot.xAxis.lab.fontColor = fontColor;
  plot.xAxis.lab.fontSize = fontSizeSmall;
  plot.xAxis.lab.fontName = fontName;
  plot.xAxis.lineColor = fontColor;
  // Setup y-axis
  plot.yAxis.setAxisLabelText(this.ylabel);
  plot.yAxis.fontColor = fontColor;
  plot.yAxis.lineColor = fontColor;
  plot.yAxis.lab.fontSize = fontSizeSmall;
  plot.yAxis.lab.fontName = fontName;
  plot.yAxis.lab.fontColor = fontColor;

  // Set position
  plot.setPos(x0, y0);
  // Set plot dimension to fit canvas
  plot.setDim(width, height);

  // Initialize function
  this.init = function () {
    this.points = [];
  };

  // Draw Function
  this.draw = function () {
    // Set the points
    plot.setPoints(this.points);
    // Draw plot
    plot.beginDraw();
    plot.drawBox();
    plot.drawXAxis();
    plot.drawYAxis();
    plot.drawTitle();
    plot.drawGridLines(GPlot.BOTH);
    plot.drawLabels();
    plot.drawPoints();
    plot.endDraw();
  };
}
