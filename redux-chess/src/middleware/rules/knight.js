import { getLocationByTranslation } from './utils';

const isValidActionForKnight = (pastLocation, newLocation, player) => {
  const validTranslations = [
    {
      x: 1,
      y: 2,
    },
    {
      x: -1,
      y: 2,
    },
    {
      x: 1,
      y: -2,
    },
    {
      x: -1,
      y: -2,
    },
    {
      x: 2,
      y: 1,
    },
    {
      x: -2,
      y: 1,
    },
    {
      x: 2,
      y: -1,
    },
    {
      x: -2,
      y: -1,
    },
  ];
  const validLocations = validTranslations.map(({ x, y }) => (
    getLocationByTranslation(pastLocation, x, y, player)
  ));
  return validLocations.includes(newLocation);
};

export default isValidActionForKnight;
