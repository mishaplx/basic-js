import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 export default function dateSample(sampleActivity) {
  let sampleActivityFloat = parseFloat(sampleActivity);
  if (
    typeof sampleActivity === "string" &&
    sampleActivityFloat > 0 &&
    sampleActivityFloat < 15
  )
    return Math.ceil(
      Math.log(MODERN_ACTIVITY / sampleActivityFloat) /
        (0.693 / HALF_LIFE_PERIOD)
    );
  else return false;
}
