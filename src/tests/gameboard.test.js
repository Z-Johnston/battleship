/* eslint-disable no-undef */

import Gameboard from '../gameboard';

describe('gameboard', () => {
  let testBoard;

  beforeEach(() => {
    testBoard = Gameboard();

    testBoard.placeShip(5, 5, 'horizontal', 2);
    testBoard.placeShip(4, 4, 'vertical', 3);
    testBoard.recieveAttack([5, 5]);
    testBoard.recieveAttack([5, 6]);
    testBoard.recieveAttack([4, 4]);
    testBoard.recieveAttack([3, 4]);
    testBoard.recieveAttack([2, 4]);
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
    expect(testBoard.board[5][6].isHit).toBeTruthy();
  });

  test('is sunk function', () => {
    expect(testBoard.fleet[0].isSunk()).toBe(true);
  });

  test('is sunk function 2', () => {
    expect(testBoard.fleet[1].isSunk()).toBe(true);
  });

  test('gameover function', () => {
    expect(testBoard.gameOver()).toBe(true);
  });

  test('ship hit length', () => {
    expect(testBoard.fleet[0].hits.length).toBe(2);
  });
});
