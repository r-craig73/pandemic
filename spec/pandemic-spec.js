import { Gameboard } from './../src/pandemic.js'

describe('Gameboard', function() {

  // beforeEach(function() {
  //  });

   it('should create 9 rows containing 9 0s', () => {
     let game = new Gameboard();
     game.makeGrid();
     console.log(game.grid);
     expect(game.grid[0]).toBeArrayOfSize(9);
   })

  //  it('should add a 1 at a random index in the top row', () => {
  //   testRow.infectStart();
  //    expect(testRow.).toContain(1);
  //  })
})
