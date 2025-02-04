import { Grid } from "./grid.ts";
const canvas = document.querySelector("canvas")!;
const grid: Grid = new Grid(50, canvas);
grid.drawGrid();
// colour the grid randomly with white or black:
for (let i = 0; i < grid.numRows; i++) {
  for (let j = 0; j < grid.numCols; j++) {
    // Randomly choose between 0 (white) or 1 (black)
    let colorNum = Math.floor(Math.random() * 2);
    console.log(colorNum);
    if (colorNum == 1) {
      grid.colorCell(i, j, "#000000");
    }
  }
}
