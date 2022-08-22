/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */

const Ship = (row, col, rotation, length) => {
  const getLength = () => length;

  const location = [];

  const setLocation = () => {
    if (rotation === 'vertical') {
      for (let i = 0; i < length; i++) {
        location.push([row - i, col]);
      }
    } else if (rotation === 'horizontal') {
      for (let i = 0; i < length; i++) {
        location.push([row, col + i]);
      }
    } else return 'select correct ship orientation';
  };

  setLocation();

  const hits = [];

  const hit = (loc) => {
    hits.push(loc);
  };

  const isSunk = () => hits.length === length;

  return {
    getLength, location, hit, isSunk,
  };
};

export default Ship;
