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

  const isPlacementValid = (ship) => {
    const highestPos = ship.getFront();
    const lowestPos = ship.getBack();
    return (Math.max(...highestPos) <= 9 && Math.min(...lowestPos) >= 0);
  };

  const placeShip = (row, col, rotation, length) => {
    const ship = Ship(row, col, rotation, length);
    if (!isPlacementValid(ship)) return false;
    return ship;
  };

  return { board, placeShip };
};

export default Gameboard;
