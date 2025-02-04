import "./style.module.css";
import {
  InfiniteCanvas,
  InfiniteCanvasRenderingContext2D,
} from "ef-infinite-canvas";
export class Grid {
  realCanvas: HTMLCanvasElement; // reference to the original canvas
  infCanvas: InfiniteCanvas; // reference to the infinitized canvas
  ctx: InfiniteCanvasRenderingContext2D; // context of the infitized canvas

  // The grid would be rendered until certain endpoints and expanded further once those points are reached
  // These endpoints can be defined with just 4 variables and will initially be set to 100000
  // minX, maxX, minY, maxY
  // Our initial grid would stretch from (-100000, -100000) to (100000, 100000)
  // so our intial values for these variables would be
  minX: number = 10000;
  maxX: number = 10000;
  minY: number = 10000;
  maxY: number = 10000;
  // if x or y from the user's current's coordinates of the grid crosses these threshold values
  // Then we will expand the grid

  // Thus we need another variable, to keep track of the user's current zoom and user's current coordinate
  // Initially the current coordinate would be (0, 0)
  // There would be a minimum and maximum zoom, if the user tries to zoom in or zoom out any further, there'd be no effect on the grid
  // the default zoom would be at 50%
  currX: number;
  currY: number;
  zoom: number;
  // if the grid is zoomed at 50%, then the each cell in the grid would be of size cellSize
  cellSize: number = 30;
  constructor(infCanvas: InfiniteCanvas, realCanvas: HTMLCanvasElement) {
    this.infCanvas = infCanvas;
    this.realCanvas = realCanvas;
    this.ctx = this.infCanvas.getContext("2d");
  }
  drawGridLines() {
    // draw horizontal lines
    for (let y = this.cellSize; y < this.maxY; y += this.cellSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(this.maxX, y);
      this.ctx.stroke();
    }
    // Draw vertical lines
    for (let x = this.cellSize; x < this.maxX; x += this.cellSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.maxY);
      this.ctx.stroke();
    }
    this.ctx.moveTo(0, 0);
  }
}
