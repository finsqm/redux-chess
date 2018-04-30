import mapValues from 'lodash/mapValues';
import range from 'lodash/range';

import { getLocationByTranslation } from './utils';

const isValidActionForBishop = (pastLocation, newLocation, player, isCapturing) => {
  if (isCapturing) {
    return false;
  }
  const bishopMove = {
    x: 1,
    y: 1,
  };
  let multipliers = range(1, 9);
  multipliers = multipliers.concat(multipliers.map(mult => -1 * mult));
  const validTranslations = multipliers.map(mult => mapValues(bishopMove, pos => pos * mult));
  const validLocations = validTranslations.map(({ x, y }) => (
    getLocationByTranslation(pastLocation, x, y, player)
  ));
  return validLocations.includes(newLocation);
};

export default isValidActionForBishop;
