/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-expressions */

import Player from './player';
import Ship from './ship';

const Game = () => {
  const computerBoard = document.querySelector('.computer-board');
  const humanBoard = document.querySelector('.human-board');
  const display = document.querySelector('.display');

  // 1 create computer and human players and set timeline to setup
  const human = Player('human');
  const computer = Player('computer');

  let currentShipLength = 2;
  let currentShipOrien = 'vertical';

  const timeline = () => (currentShipLength <= 5 ? 'setup' : 'game');
  const randomSpot = () => Math.floor(Math.random() * 10);

  const updateShipOrien = () => {
    currentShipOrien = currentShipOrien === 'vertical' ? 'horizontal' : 'vertical';
  };

  const updateDisplay = () => {
    if (timeline() === 'setup') {
      display.textContent = `Place a ${currentShipLength} length ship on your board. Toggle orientiation with Enter Key: ${currentShipOrien}`;
    } else if (timeline() === 'game') {
      display.textContent = 'Your turn, take a shot on the enemy board';
    }
  };

  document.onkeydown = (e) => {
    if (e.key === 'Tab') {
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
        }

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

  const gameRound = (loc) => {
    if (timeline() === 'setup') {
      const ship = Ship(loc.dataset.row, loc.dataset.col, currentShipOrien, currentShipLength);
      if (human.gameboard.isPlacementValid(ship)) {
        human.gameboard.placeShip(ship);
        currentShipLength++;
        updateBoard(human);
        updateBoard(computer);
        updateDisplay();
      }
    } else if (timeline() === 'game') {
      computer.gameboard.recieveAttack([loc.dataset.row, loc.dataset.col]);
      updateBoard(computer);

      human.gameboard.recieveAttack([randomSpot(), randomSpot()]);
      setTimeout(updateBoard(human), 1000);
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

    const ship = Ship(row, col, rotation, i);

    if (computer.gameboard.isPlacementValid(ship)) {
      computer.gameboard.placeShip(ship);
      updateBoard(computer);
    } else i--;
  }
};

export default Game;
