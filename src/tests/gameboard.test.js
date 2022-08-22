/* eslint-disable no-undef */

import Gameboard from '../gameboard';

describe('gameboard', () => {
  let testBoard;

  beforeEach(() => {
    testBoard = Gameboard();
    testBoard.placeShip(5, 5, 'horizontal', 3);
  });

  test('board length is accurate', () => {
    expect(testBoard.board.length).toBe(10);
  });

  test('board spots are accurate', () => {
    expect(testBoard.board[2][2]).toEqual({ hasShip: false, isHit: false });
  });

  test('place ship on board function 1', () => {
    expect(testBoard.placeShip(3, 4, 'vertical', 5)).toBe(false);
  });

  test('place ship on board function 2', () => {
    expect(testBoard.placeShip(0, 4, 'horizontal', 5)).toBeUndefined();
  });

  test('conflicting ship placement returns false', () => {
    expect(testBoard.placeShip(6, 5, 'vertical', 3)).toBe(false);
  });

  test('board updated after ship placement', () => {
    expect(testBoard.board[5][6].hasShip).toBeTruthy();
  });
});
