/* eslint-disable no-undef */

import Gameboard from '../gameboard';
import Ship from '../ship';

describe('gameboard', () => {
  let testBoard;
  let ship;

  beforeEach(() => {
    testBoard = Gameboard();
    ship = Ship(5, 5, 'horizontal', 3);
    testBoard.placeShip(ship);
    testBoard.recieveAttack([5, 5]);
  });

  test('board length is accurate', () => {
    expect(testBoard.board.length).toBe(10);
  });

  test('board spots are accurate', () => {
    expect(testBoard.board[2][2]).toEqual({ hasShip: false, isHit: false });
  });

  test('board updated after ship placement', () => {
    expect(testBoard.board[5][6].hasShip).toBeTruthy();
  });

  test('recieve attack func', () => {
    expect(testBoard.board[5][5].isHit).toBeTruthy();
  });
});
