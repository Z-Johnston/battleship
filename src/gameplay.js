/* eslint-disable no-undef */
/* eslint-disable no-plusplus */

import Player from './player';

const Gameplay = () => {
  const human = Player('human');
  const computer = Player('computer');

  for (let i = 0; i < 5; i++) {
    human.gameboard.placeShip(row, col, rotation, length);
  }

  while (!gameOver()) {
    human.takeShot(location);
    computer.takeShot(location);
  }
};

export default Gameplay;
