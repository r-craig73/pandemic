export class Gameboard {
  constructor() {
    this.grid = [];
  }

  makeGrid() {
    for (let i = 0; i < 9; i++) {
    let row = [];
      for (let j = 0; j < 9; j++){
        row.push(0);
      }
    this.grid.push(row);
    }
    console.log(this.grid);
    let masterGrid = this.grid;
    return masterGrid;
  }

  infectStart() {
    let masterGrid = this.makeGrid();
    console.log("master grid " + masterGrid);
    let rndI = Math.floor(Math.random() * 8);
    console.log(rndI);
    this.grid[0][rndI] = 1;
    console.log(this.grid[0]);
  }

}
