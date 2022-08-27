/* eslint-disable no-undef */

import Ship from '../ship';

describe('ship', () => {
  let ship;

  beforeEach(() => {
    ship = Ship(8, 5, 'vertical', 2);
    ship.hit([8, 5]);
    ship.hit([9, 5]);
  });

  test('ship location accurately created', () => {
    expect(ship.location).toEqual([[8, 5], [7, 5]]);
  });

  test('ship location accurately created', () => {
    expect(ship.location[1][0]).toEqual(7);
  });

  test('ship is sunk', () => {
    expect(ship.isSunk()).toBe(true);
  });
});
