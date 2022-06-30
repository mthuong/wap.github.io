const names = [
  { firstName: "John", lastName: "Smith", grades: [70, 80, 90] },
  { firstName: "Tim", lastName: "Howard", grades: [75, 85, 95]  },
  { firstName: "Mike", lastName: "Robson", grades: [70, 80, 100]  },
];

function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = [];
};

Student.prototype.inputNewGrade = function(newGrade) {
  this.grades.push(newGrade);
};

Student.prototype.computeAverageGrade = function() {
  return this.grades.reduce((sum, grade) => sum + grade) / this.grades.length;
};

const students = names.map(n => {
  let s = new Student(n.firstName, n.lastName);
  n.grades.map(g => s.inputNewGrade(g));
  return s;
});

const averageAllStudent = students.reduce((s, current) => s + current.computeAverageGrade(), 0) / students.length;

console.log(averageAllStudent);