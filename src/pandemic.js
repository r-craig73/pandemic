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
    return masterGrid;
  }

  infectStart() {
     let masterGrid = this.makeGrid();
     let rndI = Math.floor(Math.random() * 8);
     this.grid[0][rndI] = 1;
     console.log("infected grid start : " + masterGrid);
   }

   infect() {
     let infectSpreadGrid = this.grid;
     let rndI = Math.floor(Math.random() * 8);
     this.grid[0][rndI] = 1;

   infectSpread() {
     let infectSpreadGrid = this.grid;
     setInterval(() => {
      this.infect() }
     }, 1000);
   }

}
