/**
 * For the given students array below, compute the average grade of all students who took cs303 course which returns an object which key is students' names, values is the average.
 * 
 * @returns {
 * Quincy: 93.5,
 * Sam: 86.5,
 * Katie: 71.5
 * }
 */
function question1() {
  const students = [
    { name: 'Quincy', grades: [99, 88], courses:['cs301', 'cs303']},
    { name: 'Jason', grades: [29, 38], courses:['cs201', 'cs203']},
    { name: 'Alexis', grades: [79, 78], courses:['cs105', 'cs211'] },
    { name: 'Sam', grades: [91, 82], courses:['cs445', 'cs303'] },
    { name: 'Katie', grades: [66, 77], courses:['cs303', 'cs477'] }
  ];

  function average(array) {
    if (array.length > 0) {
      return array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      }, 0)/array.length
    } else {
      return 0
    }
  }

  return students.filter(s => s.courses.includes('cs303'))
    .reduce((accumulator, s) => {
      accumulator[s.name] = average(s.grades)
      return accumulator
    }, {})
}

console.log(question1());