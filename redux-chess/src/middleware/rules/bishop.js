import { isValidActionForLongMover } from './utils';

const isValidActionForBishop = (pastLocation, newLocation, player) => {
  const postitiveSteps = [
    {
      x: 1,
      y: 1,
    },
    {
      x: -1,
      y: 1,
    },
  ];

  return isValidActionForLongMover(pastLocation, newLocation, postitiveSteps, player);
};

export default isValidActionForBishop;
