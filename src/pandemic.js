export class Gameboard {
  constructor(row) {
    this.row = row;
  }

  makeRow() {
    let row = [];
    for (let i = 0; i < 9; i++){
      row.push(0);
    }
    console.log(row);
    return row;
  }

  infectStart() {

    
  }

}
