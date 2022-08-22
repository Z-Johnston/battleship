/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */

import Ship from './ship';

const Gameboard = () => {
  const createBoard = () => {
    const board = [];
    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        row.push({ hasShip: false, isHit: false });
      }
      board.push(row);
    }
    return board;
  };

  const board = createBoard();

  /*   Checks if proposed ship placement is within gameboard extents
    and doesn't conflict with existing ships  */
  const isPlacementValid = (ship) => {
    const highestPos = ship.location[0];
    const lowestPos = ship.location[ship.location.length - 1];
    if (Math.max(...highestPos) > 9 || Math.min(...lowestPos) < 0) {
      return false;
    } if (ship.location.some((loc) => board[loc[0]][loc[1]].hasShip)) {
      return false;
    } return true;
  };

  // Creates ship object and then places on board if location is valid
  const placeShip = (row, col, rotation, length) => {
    const ship = Ship(row, col, rotation, length);
    if (!isPlacementValid(ship)) return false;
    for (let i = 0; i < ship.location.length; i++) {
      const coord = ship.location[i];
      board[coord[0]][coord[1]].hasShip = true;
    }
  };

  //
  const recieveAttack = (loc) => {
    if (board[loc[0]][loc[1]].isHit) return false;

    if (board[loc[0]][loc[1]].hasShip) {
      ship.hit(loc);
    }

    board[loc[0]][loc[1]].isHit = true;
  };

  return { board, placeShip, recieveAttack };
};

export default Gameboard;
