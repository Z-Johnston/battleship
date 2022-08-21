/* eslint-disable no-plusplus */

const Ship = (row, col, rotation, length) => {
  const getLength = () => length;

  const getLocation = () => {
    const location = [];
    if (rotation === 'vertical') {
      for (let i = 0; i < length; i++) {
        location.push([row - i, col]);
      }
    } else if (rotation === 'horizontal') {
      for (let i = 0; i < length; i++) {
        location.push([row, col + i]);
      }
    } else return 'select correct ship orientation';
    return location;
  };

  const getFront = () => getLocation()[0];
  const getBack = () => getLocation()[getLocation().length - 1];

  const hits = [];

  const hit = (index) => {
    hits.push(index);
  };

  const isSunk = () => hits.length === length;

  return {
    getLength, getLocation, getFront, getBack, hit, isSunk,
  };
};

export default Ship;
