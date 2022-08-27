import Gameboard from './gameboard';

const Player = (type) => {
  const isHuman = type === 'human';

  const gameboard = Gameboard();

  return { isHuman, gameboard };
};

export default Player;
