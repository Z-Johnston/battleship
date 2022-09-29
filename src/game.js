/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-expressions */

import Player from './player';

const Game = () => {
  const computerBoard = document.querySelector('.computer-board');
  const humanBoard = document.querySelector('.human-board');
  const display = document.querySelector('.display');

  // 1 create computer and human players and set timeline to setup
  const human = Player('human');
  const computer = Player('computer');

  let currentShipLength = 2;
  let currentShipOrien = 'vertical';

  const timeline = () => {
    if (currentShipLength <= 5) return 'setup';
    if (human.gameboard.gameOver() || computer.gameboard.gameOver()) return 'game over';
    return 'game';
  };

  const randomSpot = () => Math.floor(Math.random() * 10);

  const updateShipOrien = () => {
    currentShipOrien = currentShipOrien === 'vertical' ? 'horizontal' : 'vertical';
  };

  const updateDisplay = () => {
    if (timeline() === 'setup') {
      display.textContent = `Place a ${currentShipLength} length ship on your board. Toggle orientiation with 'Space' Key: ${currentShipOrien}`;
    } else if (timeline() === 'game over') {
      display.textContent = 'game OVERRR';
    } else if (timeline() === 'game') {
      display.textContent = 'Your turn, take a shot on the enemy board';
    }
  };

  document.onkeydown = (e) => {
    if (e.key === 'Space') {
      e.preventDefault();
      updateShipOrien();
      updateDisplay();
    }
  };

  //
  const updateBoard = (player) => {
    player.gameboard.board.forEach((row, rowInd) => {
      row.forEach((spot, colInd) => {
        const domBoard = player.isHuman ? humanBoard : computerBoard;
        const loc = domBoard.querySelector(`[data-row="${rowInd}"][data-col="${colInd}"]`);

        if (timeline() === 'setup' && !player.isHuman) {
          loc.style.pointerEvents = 'none';
        } if (timeline() === 'game' && !player.isHuman) {
          loc.style.pointerEvents = 'auto';
        } if (timeline() === 'game' && player.isHuman) {
          loc.style.pointerEvents = 'none';
        } if (timeline() === 'game over') {
          computerBoard.style.pointerEvents = 'none';
        }

        if (spot.hasShip && spot.isHit) {
          loc.dataset.stat = 'hit-ship';
          loc.style.pointerEvents = 'none';
        } else if (spot.hasShip) {
          loc.dataset.stat = 'ship';
        } else if (spot.isHit) {
          loc.dataset.stat = 'hit-water';
          loc.style.pointerEvents = 'none';
        } else loc.dataset.stat = 'water';
      });
    });
  };

  // Loc click event: either valid ship placement or attack on both boards
  const gameRound = (loc) => {
    if (timeline() === 'setup') {
      if (human.gameboard.isPlacementValid(loc.dataset.row, loc.dataset.col, currentShipOrien, currentShipLength)) {
        human.gameboard.placeShip(loc.dataset.row, loc.dataset.col, currentShipOrien, currentShipLength);
        currentShipLength++;
        updateBoard(human);
        updateBoard(computer);
      }
    } else if (timeline() === 'game') {
      computer.gameboard.recieveAttack([parseInt(loc.dataset.row, 10), parseInt(loc.dataset.col, 10)]);
      updateBoard(computer);

      human.gameboard.recieveAttack([randomSpot(), randomSpot()]);
      updateBoard(human);
    } else if (timeline() === 'game over') {
      updateDisplay();
    }
  };

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

        loc.onclick = () => {
          gameRound(loc);
          updateDisplay();
        };

        domRow.appendChild(loc);
      });
      player.isHuman ? humanBoard.appendChild(domRow) : computerBoard.appendChild(domRow);
    });
  };

  // 2 render the human players board
  renderBoard(human);

  // 3 render the computer players board
  renderBoard(computer);

  // 4 Place five ships randomly on computer's board
  for (let i = 2; i <= 5; i++) {
    const row = randomSpot();
    const col = randomSpot();
    const rotation = Math.random() >= 0.5 ? 'vertical' : 'horizontal';

    if (computer.gameboard.isPlacementValid(row, col, rotation, i)) {
      computer.gameboard.placeShip(row, col, rotation, i);
      updateBoard(computer);
    } else i--;
  }
};

export default Game;
