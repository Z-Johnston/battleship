/* eslint-disable no-undef */

import Gameboard from '../gameboard';
import Ship from '../ship';

describe('gameboard', () => {
  let testBoard;
  let ship;

  beforeEach(() => {
    testBoard = Gameboard();
    ship = Ship(5, 5, 'horizontal', 2);
    testBoard.placeShip(ship);
    testBoard.recieveAttack([5, 5]);
    testBoard.recieveAttack([5, 6]);
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

  test('recieve attack func 1', () => {
    expect(testBoard.board[5][6].isHit).toBeTruthy();
  });

  test('recieve attack func 2', () => {
    expect(testBoard.fleet[0].isSunk()).toBe(true);
  });

  test('gameover function', () => {
    expect(testBoard.gameOver()).toBe(true);
  });
});
