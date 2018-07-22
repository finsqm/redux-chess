import { isValidActionForLongMover } from './utils';

const isValidActionForRook = (pastLocation, newLocation, player) => {
  const positiveSteps = [
    {
      x: 0,
      y: 1,
    },
    {
      x: 1,
      y: 0,
    },
  ];

  return isValidActionForLongMover(pastLocation, newLocation, positiveSteps, player);
};
export default isValidActionForRook;
