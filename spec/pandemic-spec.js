import { Gameboard } from './../src/pandemic.js'

describe('Gameboard', function () {

  let timerCallback;

  beforeEach(function() {
  timerCallback = jasmine.createSpy("timerCallback");
  jasmine.clock().install();
  })

  afterEach(function() {
  jasmine.clock().uninstall();
  })


  it('should create 9 rows containing 9 0s', () => {
    let game = new Gameboard()
    game.makeGrid()
    expect(game.grid[0]).toBeArrayOfSize(9)
  })

  it("causes a timeout to be called", function() {
  setTimeout(function() {
    timerCallback()
  }, 100)

  expect(timerCallback).not.toHaveBeenCalled()

  jasmine.clock().tick(101)

  expect(timerCallback).toHaveBeenCalled()
  })

})
