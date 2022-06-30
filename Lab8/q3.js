
Array.prototype.my_sort = function () {
  let array = this;
  let length = array.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = i; j < length; j++) {
      const ai = array[i];
      const aj = array[j];
      if (ai > aj) {
        array[i] = aj;
        array[j] = ai;
      }
    }
  }
  return array;
}

console.log([8, 1, 20, 6, 10, 11].my_sort());