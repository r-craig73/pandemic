import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Gameboard } from './pandemic.js';

$(document).ready(function() {
  event.preventDefault();
  let game = new Gameboard();
  game.makeGrid();
  game.infectStart();
  game.infectSpread();

});
