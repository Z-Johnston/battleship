/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */

import Player from './player';
import DOM from './dom';

const Gameplay = () => {
  const dom = DOM();

  const human = Player('human');
  const computer = Player('computer');
  dom.initBoard(human);
  dom.initBoard(computer);

  const gameOver = () => {
    if (human.gameboard.fleet.forEach((ship) => ship.isSunk())) return 'computer';
    if (computer.gameboard.fleet.forEach((ship) => ship.isSunk())) return 'human';
    return false;
  };

  // Place five ships randomly on computer's board
  for (let i = 2; i <= 6; i++) {
    const row = Math.floor(Math.random() * 10);
    const col = Math.floor(Math.random() * 10);
    const rotation = Math.random() >= 0.5 ? 'vertical' : 'horizontal';
    computer.gameboard.placeShip(row, col, rotation, i);
  }

  // Have human player place 5 ships on board
  for (let i = 2; i <= 6; i++) {
    human.gameboard.placeShip(/* enter stuff here */);
  }

  // Game loop of players taking shots until game is over
  while (!gameOver()) {
    human.takeShot(/* enter stuff here */);
    computer.gameboard.recieveAttack(/* enter stuff here */);

    setTimeout(computer.takeShot(/* enter stuff here */), 4000);
    human.gameboard.recieveAttack(/* enter stuff here */);
  }
};

export default Gameplay;
