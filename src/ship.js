/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */

const Ship = (row, col, rotation, length) => {
  const getLength = () => length;

  const location = [];

  // Sets ship location based on parameters
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

  const isSunk = () => hits.length === getLength();

  return {
    getLength, location, hit, isSunk, hits,
  };
};

export default Ship;
