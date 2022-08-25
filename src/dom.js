/* eslint-disable no-unused-expressions */

const DOM = () => {
  const computerBoard = document.querySelector('.computer-board');
  const humanBoard = document.querySelector('.human-board');
  const display = document.querySelector('.display');

  //
  const initBoard = (player) => {
    player.gameboard.board.forEach((row) => {
      row.forEach((spot) => {
        const location = document.createElement('.div');
        location.classList.add('loc');
        location.dataset.hasShip = `${spot.hasShip}`;
        location.dataset.isHit = `${spot.isHit}`;
        row.appendChild(spot);
      });
      player.isHuman ? humanBoard.appendChild(row) : computerBoard.appendChild(row);
    });
  };

  return { initBoard };
};

export default DOM;
