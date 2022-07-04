// Question 1
// Write the necessary Node script to make this code work for all arrays: [1,2,3,4,5,6,7,8].even(); 
// [2,4,6,8] 
// [1,2,3,4,5,6,7,8].odd(); 
// [1,3,5,7] 
// Test your code in Node.JS CLI

Array.prototype.even = function() {
  const array = this;
  return array.filter(a => a % 2 === 0)
}

Array.prototype.odd = function() {
  const array = this;
  return array.filter(a => a % 2 !== 0)
}

console.log([1,2,3,4,5,6,7,8].even());
console.log([1,2,3,4,5,6,7,8].odd());