import { Gameboard } from './../src/pandemic.js'

describe('Gameboard', function() {
    let testRow = new Gameboard();
    let exampleRow = testRow.makeRow();

  beforeEach(function() {
   });

   it('should create a row array containing 9 0s', () => {
     let exampleRow = testRow.makeRow();
     expect(exampleRow).toBeArrayOfSize(9);
   })

   it('should add a 1 at a random index in the row', () => {
     exampleRow.infectStart();
     expect(exampleRow).toContain(1);
   })
})
