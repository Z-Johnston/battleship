/* eslint-disable no-undef */

import Gameboard from '../gameboard';

describe('gameboard', () => {
  let testBoard;

  beforeEach(() => {
    testBoard = Gameboard();
  });

  test('board length is accurate', () => {
    expect(testBoard.board.length).toBe(10);
  });

  test('board spots are accurate', () => {
    expect(testBoard.board[1][1]).toEqual({ hasShip: false, isHit: false });
  });

  test('place ship validation', () => {
    expect(testBoard.placeShip(3, 4, 'vertical', 5)).toBe(false);
  });

  test('place ship validation', () => {
    expect(testBoard.placeShip(0, 4, 'horizontal', 5)).toBeTruthy();
  });
});
