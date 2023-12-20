const { NotImplementedError } = require('../extensions/index.js');

// начальную активность по идентичности изотопа
const MODERN_ACTIVITY = 15;

// период полураспада
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
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const parsedActivity = parseFloat(sampleActivity);
  // parseFloat - пытается преобразовать строку sampleActivity в число с десятичной точкой.
  if (typeof sampleActivity !== 'string' || isNaN(parsedActivity) || parsedActivity <= 0 || parsedActivity > MODERN_ACTIVITY)
  // isNaN(parsedActivity) -является ли значение переменной parsedActivity не числом (NaN)
  // typeof sampleActivity !== 'string' -проверяет, является ли тип переменной sampleActivity не строкой.



  {
    return false;
  }
  const k = 0.693 / HALF_LIFE_PERIOD;
  const age = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
  // Math.ceil округляет переданное ему число в большую сторону до ближайшего целого числа
  return age;
}

module.exports = {
  dateSample
};
