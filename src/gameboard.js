/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */

import Ship from './ship';

// Create 10 x 10 gameboard with hasShip and isHit properties for each position
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
  const fleet = [];

  /*   Checks if proposed ship placement is within gameboard extents
    and doesn't conflict with existing ships  */
  const isPlacementValid = (row, col, rotation, i) => {
    const ship = Ship(row, col, rotation, i);

    const endPos = ship.location[ship.getLength() - 1];
    if (Math.max(...endPos) > 9 || Math.min(...endPos) < 0) {
      return false;
    } if (ship.location.some((loc) => board[loc[0]][loc[1]].hasShip)) {
      return false;
    } return true;
  };

  // Place ship on board and adds to fleet
  const placeShip = (row, col, rotation, leng) => {
    const ship = Ship(row, col, rotation, leng);
    for (let i = 0; i < ship.getLength(); i++) {
      const coord = ship.location[i];
      board[coord[0]][coord[1]].hasShip = true;
    }
    fleet.push(ship);
  };

  // check if ship is hit (for finding ship index in fleet)
  const isHitShip = (ship, loc) => {
    for (let i = 0; i < ship.location.length; i++) {
      if (ship.location[i][0] === loc[0] && ship.location[i][1] === loc[1]) {
        return true;
      }
    }
  };

  // Checks if attack location has ship and will call the ship-hit function
  // Sets attack location's isHit property to true
  const recieveAttack = (loc) => {
    if (board[loc[0]][loc[1]].hasShip) {
      fleet.forEach((ship) => {
        if (isHitShip(ship, loc)) {
          ship.hit(loc);
        }
      });
    }
    board[loc[0]][loc[1]].isHit = true;
    console.log(fleet);
  };

  const gameOver = () => fleet.every((ship) => ship.isSunk());

  return {
    board, isPlacementValid, placeShip, recieveAttack, gameOver, fleet,
  };
};

export default Gameboard;
