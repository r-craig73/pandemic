import { Gameboard } from './../src/pandemic.js'

describe('Gameboard', function() {

   it('should create 9 rows containing 9 0s', () => {
     let game = new Gameboard();
     game.makeGrid();
     expect(game.grid[0]).toBeArrayOfSize(9);
   })

   it('should add a 1 at a random index in the top row', () => {
    let game = new Gameboard();
    game.infectStart();
    expect(game.grid[0]).toContain(1);
   })
})
