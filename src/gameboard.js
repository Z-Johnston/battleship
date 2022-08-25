/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */

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
    const endPos = ship.location[ship.getLength() - 1];
    if (Math.max(...endPos) > 9 || Math.min(...endPos) < 0) {
      return false;
    } if (ship.location.some((loc) => board[loc[0]][loc[1]].hasShip)) {
      return false;
    } return true;
  };

  // Place ship on board and adds to fleet
  const placeShip = (ship) => {
    for (let i = 0; i < ship.getLength(); i++) {
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
    board, isPlacementValid, placeShip, recieveAttack, fleet,
  };
};

export default Gameboard;
