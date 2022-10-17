const { NotImplementedError } = require('../extensions/index.js');

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
function dateSample(sampleActivity ) {
  let result = false;
  const sampleActivityNumber = Number(sampleActivity);
  console.log(sampleActivityNumber)

 if ((typeof(sampleActivity) != 'string') || (isNaN(sampleActivityNumber)) || (sampleActivityNumber < 0)) {
 return result;
 }
  result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumber) / (0.693 / HALF_LIFE_PERIOD));
  if ((result === Infinity) || (result < 0)) {
    return false
  }
   return result;
}

module.exports = {
  dateSample
};

