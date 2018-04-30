import { getCartesianFromChess, getLocationByTranslation } from './utils';

const isPawnInStartingLocation = (location, player) => {
  const startingY = 2;
  const { y } = getCartesianFromChess(location, player);
  return y === startingY;
};

const isValidActionForPawn = (pastLocation, newLocation, player, isCapturing) => {
  if (isCapturing) {
    return false;
  }
  const validTranslations = [
    {
      x: 0,
      y: 0,
    },
    {
      x: 0,
      y: 1,
    },
  ];
  if (isPawnInStartingLocation(pastLocation, player)) {
    validTranslations.push({ x: 0, y: 2 });
  }
  const validLocations = validTranslations.map(({ x, y }) => (
    getLocationByTranslation(pastLocation, x, y, player)
  ));
  return validLocations.includes(newLocation);
};

export default isValidActionForPawn;
