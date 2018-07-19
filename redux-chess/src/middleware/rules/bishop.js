import mapValues from 'lodash/mapValues';
import range from 'lodash/range';

import { getLocationByTranslation } from './utils';

const getTranslations = (multipliers, bishopStep) => (
  multipliers.map(mult => mapValues(bishopStep, pos => pos * mult))
);

const isValidActionForBishop = (pastLocation, newLocation, player) => {
  const bishopStepNE = {
    x: 1,
    y: 1,
  };
  const bishopStepNW = {
    x: -1,
    y: 1,
  };

  let multipliers = range(1, 9);
  // include negative multipliers for SW and SE moves
  multipliers = multipliers.concat(multipliers.map(mult => -1 * mult));

  const validTranslationsNE = getTranslations(multipliers, bishopStepNE);
  const validTranslationsNW = getTranslations(multipliers, bishopStepNW);
  const validTranslations = validTranslationsNE.concat(validTranslationsNW);

  const validLocations = validTranslations.map(({ x, y }) => (
    getLocationByTranslation(pastLocation, x, y, player)
  ));

  return validLocations.includes(newLocation);
};

export default isValidActionForBishop;
