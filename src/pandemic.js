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
  }

  infectStart() {
    let randIndex = Math.floor(Math.random() * 8);
    console.log(randIndex);
    this.row.splice(randIndex, 1);
  }

}
