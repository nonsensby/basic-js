const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  console.log(arr)
  let array = [];
  try {
    if (!Array.isArray(arr)) {
      throw new Error("\'arr\' parameter must be an instance of the Array!")
    }
  } catch (e) {
    return e
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(array)
    if (typeof(arr[i]) == 'number') {
      array.push(arr[i]);
    } else if (arr[i] === '--double-next') {
      console.log('--double-next')
      if (arr[i + 1] != undefined ) {
        array.push(arr[i + 1]);
      }
      
    } else if (arr[i] === '--discard-prev') {
      console.log('--discard-prev')
      array.pop();
  } else if (arr[i] === '--discard-next') {
    console.log('--discard-next')
    i = i + 1;
} else if(arr[i] === '--double-prev') {
  console.log('--double-prev')
  if (array[array.length -1] != undefined) {
    array.push(array[array.length -1])
  }
  
}
  
}
return array
}

module.exports = {
  transform
};

console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))



