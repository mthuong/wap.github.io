/**
 * 1/ Create a function using function declaration named sum with one parameter of Array type, the returned result is the sum of all elements which are greater than 20.
 */

function sum(array) {
  return array.reduce((accumulator, currentValue) => {
    if (currentValue > 20) {
      return accumulator + currentValue
    }
    return accumulator
  }, 0);
}

console.log(sum([1, 20, 10, 30, 50]));


/**
 * 2. Create a function using function expression named getNewArray with one parameter of String Array, return a new array which contains all string, length is greater than and equal to 5, and contains letter ‘a’.
 */

const getNewArray = function(array) {
  return array.filter(s => s.length >= 5)
    .filter(s => s.includes('a'))
}

console.log(getNewArray('Create a function using function expression named getNewArray with one parameter of String Array, return a new array which contains all string, length is greater than and equal to 5, and contains letter ‘a’.'.split(' ')));