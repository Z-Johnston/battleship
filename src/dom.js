/* eslint-disable no-return-assign */
/* eslint-disable no-unused-expressions */

const DOM = () => {
  const computerBoard = document.querySelector('.computer-board');
  const humanBoard = document.querySelector('.human-board');
  //   const display = document.querySelector('.display');

  //
  const getSpotInfo = (loc) => loc.dataset;

  let pickedSpot;

  //
  const renderBoard = (player) => {
    player.gameboard.board.forEach((row, rowInd) => {
      const domRow = document.createElement('div');
      domRow.classList.add('dom-row');

      row.forEach((spot, colInd) => {
        const loc = document.createElement('div');
        loc.classList.add('loc');

        if (spot.hasShip && spot.isHit) {
          loc.dataset.stat = 'hit-ship';
        } else if (spot.hasShip) {
          loc.dataset.stat = 'ship';
        } else if (spot.isHit) {
          loc.dataset.stat = 'hit-water';
        } else loc.dataset.stat = 'water';

        loc.dataset.row = rowInd;
        loc.dataset.col = colInd;

        loc.onclick = () => pickedSpot = loc;

        domRow.appendChild(loc);
      });
      player.isHuman ? humanBoard.appendChild(domRow) : computerBoard.appendChild(domRow);
    });
  };

  const updateBoard = (player) => {
    player.gameboard.board.forEach((row, rowInd) => {
      row.forEach((spot, colInd) => {
        const domBoard = player.isHuman ? humanBoard : computerBoard;
        const loc = domBoard.querySelector(`[data-row="${rowInd}"][data-col="${colInd}"]`);

        if (spot.hasShip && spot.isHit) {
          loc.dataset.stat = 'hit-ship';
        } else if (spot.hasShip) {
          loc.dataset.stat = 'ship';
        } else if (spot.isHit) {
          loc.dataset.stat = 'hit-water';
        } else loc.dataset.stat = 'water';
      });
    });
  };

  return {
    renderBoard, updateBoard, getSpotInfo, pickedSpot,
  };
};

export default DOM;
