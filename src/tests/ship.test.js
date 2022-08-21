/* eslint-disable no-undef */

import Ship from '../ship';

describe('ship', () => {
  let ship;

  beforeEach(() => {
    ship = Ship(8, 5, 'vertical', 5);
  });

  test('ship location accurately created', () => {
    expect(ship.getLocation()).toEqual([[8, 5], [7, 5], [6, 5], [5, 5], [4, 5]]);
  });

  test('ship front accurately created', () => {
    expect(ship.getFront()).toEqual([8, 5]);
  });

  test('ship back accurately created', () => {
    expect(ship.getBack()).toEqual([4, 5]);
  });
});
