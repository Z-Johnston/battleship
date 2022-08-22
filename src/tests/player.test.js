/* eslint-disable no-undef */

import Player from '../player';

describe('player', () => {
  let player;

  beforeEach(() => {
    player = Player('human');
  });

  test('human player assigned correctly', () => {
    expect(player.isHuman).toBeTruthy();
  });
});
