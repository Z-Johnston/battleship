/* eslint-disable no-undef */

import Ship from '../ship';

describe('ship', () => {
  let ship;

  beforeEach(() => {
    ship = Ship(8, 5, 'vertical', 5);
  });

  test('ship location accurately created', () => {
    expect(ship.location).toEqual([[8, 5], [7, 5], [6, 5], [5, 5], [4, 5]]);
  });

  test('ship location accurately created', () => {
    expect(ship.location[1][0]).toEqual(7);
  });
});
