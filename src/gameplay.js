/* eslint-disable prefer-const */
/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */

import Player from './player';
import Ship from './ship';
import DOM from './dom';

const Gameplay = () => {
  const dom = DOM();

  const human = Player('human');
  const computer = Player('computer');

  // Place five ships randomly on computer's board
  for (let i = 2; i <= 6; i++) {
    const row = Math.floor(Math.random() * 10);
    const col = Math.floor(Math.random() * 10);
    const rotation = Math.random() >= 0.5 ? 'vertical' : 'horizontal';

    const ship = Ship(row, col, rotation, i);

    if (computer.gameboard.isPlacementValid(ship)) {
      computer.gameboard.placeShip(ship);
    } else i--;
  }

  dom.renderBoard(human);

  // TEMPORARY - Place five ships randomly on computer's board
  for (let i = 2; i <= 6; i++) {
    const row = Math.floor(Math.random() * 10);
    const col = Math.floor(Math.random() * 10);
    const rotation = Math.random() >= 0.5 ? 'vertical' : 'horizontal';

    const ship = Ship(row, col, rotation, i);

    if (human.gameboard.isPlacementValid(ship)) {
      human.gameboard.placeShip(ship);
      dom.updateBoard(human);
    } else i--;
  }

  // Human player place 5 ships on board
  //   for (let i = 2; i <= 6; i++) {
  //     const spot = dom.getSpotInfo(dom.pickedSpot);
  //     const ship = Ship(spot.row, spot.col, 'vertical', i);
  //     if (human.gameboard.isPlacementValid(ship)) {
  //       human.gameboard.placeShip(ship);
  //     } else i--;
  //   }

  dom.renderBoard(computer);

  //   Game loop of players taking shots until game is over
  let attackingPlayer = human;
  while (!attackingPlayer.gameboard.gameOver()) {
    let recievingPlayer = attackingPlayer.isHuman ? computer : human;

    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);
    let location = [row, col];

    attackingPlayer.takeShot(location);
    recievingPlayer.gameboard.recieveAttack(location);
    setTimeout(() => {
      dom.updateBoard(recievingPlayer);
    }, 250);

    attackingPlayer = attackingPlayer.isHuman ? computer : human;
  }
};

export default Gameplay;
