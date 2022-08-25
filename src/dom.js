/* eslint-disable no-unused-expressions */

const DOM = () => {
  const computerBoard = document.querySelector('.computer-board');
  const humanBoard = document.querySelector('.human-board');
  //   const display = document.querySelector('.display');

  //
  const initBoard = (player) => {
    player.gameboard.board.forEach((row) => {
      const domRow = document.createElement('div');
      domRow.classList.add('dom-row');
      row.forEach((spot) => {
        const loc = document.createElement('div');

        if (spot.hasShip && spot.isHit) {
          loc.classList.add('hit-ship-loc');
        } else if (spot.hasShip) {
          loc.classList.add('ship-loc');
        } else if (spot.isHit) {
          loc.classList.add('hit-water-loc');
        } else loc.classList.add('water-loc');

        domRow.appendChild(loc);
      });
      player.isHuman ? humanBoard.appendChild(domRow) : computerBoard.appendChild(domRow);
    });
  };

  return { initBoard };
};

export default DOM;
