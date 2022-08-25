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
  const isPlacementValid = (ship) => {
    const highestPos = ship.location[0];
    const lowestPos = ship.location[ship.location.length - 1];
    if (Math.max(...highestPos) > 9 || Math.min(...lowestPos) < 0) {
      return false;
    } if (ship.location.some((loc) => board[loc[0]][loc[1]].hasShip)) {
      return false;
    } return true;
  };

  // Creates ship object, places on board, and pushes to fleet if placement is valid
  // Function is called again if placement is not valid
  const placeShip = (row, col, rotation, length) => {
    const ship = Ship(row, col, rotation, length);

    if (!isPlacementValid(ship)) placeShip(row, col, rotation, length);

    for (let i = 0; i < ship.location.length; i++) {
      const coord = ship.location[i];
      board[coord[0]][coord[1]].hasShip = true;
    }
    fleet.push(ship);
  };

  // Checks if attack location has ship and will call the ship-hit function
  // Sets attack location's isHit property to true
  const recieveAttack = (loc) => {
    if (board[loc[0]][loc[1]].hasShip) {
      fleet.forEach((ship, index) => {
        if (ship.location.indexOf(loc) >= 0) {
          fleet[index].hit(loc);
        }
      });
    }
    board[loc[0]][loc[1]].isHit = true;
  };

  return {
    board, placeShip, recieveAttack, fleet,
  };
};

export default Gameboard;
