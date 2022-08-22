import Gameboard from './gameboard';

const Player = (type) => {
  const isHuman = type === 'human';

  const takeShot = (location) => location;

  const gameboard = Gameboard();

  return { isHuman, takeShot, gameboard };
};

export default Player;
