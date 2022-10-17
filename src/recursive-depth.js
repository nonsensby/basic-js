const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {
    console.log(array)
    let count = 0;
    if (!Array.isArray(array)) {
      console.log('ne massiv')
    return count
        } else {
          console.log('massiv')
           count = count + 1;
      for (let i = 0;  i < array.length; i++) {
       
        count = count + this.calculateDepth(array[i])
      }
      return count
           
    }
    
  }
}

module.exports = {
  DepthCalculator
};

const depthCalc = new DepthCalculator();
//console.log(depthCalc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]))
console.log(depthCalc.calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]))