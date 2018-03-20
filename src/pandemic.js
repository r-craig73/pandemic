const rndI = Math.floor(Math.random() * 8);

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
    let masterGrid = this.grid;
    console.log("master grid: " + masterGrid);
    return masterGrid;
  }

  infectStart() {
     let masterGrid = this.makeGrid();
     this.grid[0][rndI] = 1;
     console.log("infected grid start : " + masterGrid[0]);
   }

   getInfectedCells() {
     let masterGridInfected = this.grid;
     let rndJ = Math.floor(Math.random() * 8)
       if (this.grid[0][rndI] === 1){
         this.grid[0][rndJ] = 1;
         console.log("Grid contents " + this.grid[0]);
       } else {
         console.log("else log");
       }
     let sum = this.grid[0].reduce((a, b) => a+b, 0);
     // console.log(rndJ);
     // console.log(rndI);
     // console.log("masterGrid[0] = " + sum);
     // console.log("masterGridInfected: " + masterGridInfected[0]);

   }
}
