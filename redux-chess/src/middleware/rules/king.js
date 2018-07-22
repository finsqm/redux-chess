import flatMap from 'lodash/flatMap';

import { getLocationByTranslation } from './utils';

const isValidActionForKing = (pastLocation, newLocation, player) => {
  const validOneDim = [-1, 0, 1];
  const validSteps = flatMap(validOneDim, xStep =>
    validOneDim.map(yStep => ({ x: xStep, y: yStep })));
  const validLocations = validSteps.map(({ x, y }) => (
    getLocationByTranslation(pastLocation, x, y, player)
  ));
  return validLocations.includes(newLocation);
};

export default isValidActionForKing;
