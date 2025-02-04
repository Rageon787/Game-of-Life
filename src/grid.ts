export class Grid {
  cellSize: number; // How big each cell should be in our grid?
  canvas: HTMLCanvasElement; // Canvas element in html
  ctx: CanvasRenderingContext2D;
  numRows: number;
  numCols: number;
  constructor(cellSize: number, canvas: HTMLCanvasElement) {
    this.cellSize = cellSize;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d")!;
  }
  drawGrid() {
    let dpi = window.devicePixelRatio;
    this.canvas.setAttribute("height", (this.canvas.height * dpi).toString());
    this.canvas.setAttribute("width", (this.canvas.width * dpi).toString());
    this.numRows = this.canvas.width / this.cellSize;
    this.numCols = this.canvas.height / this.cellSize;
    console.log(`${this.numCols} ${this.numRows}`);
    // draw horizontal lines

    for (let y = this.cellSize; y < this.canvas.height; y += this.cellSize) {
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(this.canvas.width, y);
    }
    this.ctx.stroke();
    // Draw vertical lines
    for (let x = this.cellSize; x < this.canvas.width; x += this.cellSize) {
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.canvas.height);
    }
    this.ctx.stroke();
  }

  // Colour the (i, j)th cell of the grid with "color"
  colorCell(i: number, j: number, color: string) {
    console.log(color);
    // firstly, find the (x, y) coordinate of the (i, j)th cell
    let x = i * this.cellSize;
    let y = j * this.cellSize;
    // Then draw a rectangle with fill color of cellSize at those coordinates
    this.ctx.fillStyle = color;
    this.ctx.rect(x + 1, y + 1, this.cellSize - 1, this.cellSize - 1);
    this.ctx.fill();
  }
}
