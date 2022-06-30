let student = {
  firstName: "",
  lastName: "",
  grades: [],
  inputNewGrade: function (newGrade) {
    this.grades.push(newGrade);
  },
  computeAverageGrade: function () {
    return this.grades.reduce((sum, grade) => sum + grade) / this.grades.length;
  },
};

const names = [
  { firstName: "John", lastName: "Smith", grades: [70, 80, 90] },
  { firstName: "Tim", lastName: "Howard", grades: [75, 85, 95]  },
  { firstName: "Mike", lastName: "Robson", grades: [70, 80, 100]  },
];

const students = names.map(n => {
  let s = Object.create(student);
  s.firstName = n.firstName;
  s.lastName = n.lastName;
  s.grades = [];
  n.grades.map(g => s.inputNewGrade(g));
  return s;
});

const averageAllStudent = students.reduce((s, current) => s + current.computeAverageGrade(), 0) / students.length;

console.log(averageAllStudent);