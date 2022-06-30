let group = {
  title: "Our group",
  students: ["John", "Pete", "Alex"],

  showList: function () {
    // console.log(this.title);

    // 1. Arrow function
    // this.students.forEach((student) => {
    //   console.log(this.title + ": " + student);
    // });

    // 2. bind
    // this.students.forEach(function(student) {
    //   console.log(this.title + ": " + student);
    // }.bind(this));

    // 3. self pattern
    // self = this;
    // this.students.forEach(function(student) {
    //   console.log(self.title + ": " + student);
    // });

    // 4. call and apply
    // const f = function(student) {
    //   console.log(this.title + ": " + student);
    // }
    // this.students.forEach(function(student) {
    //   // f.call(group, student);
    //   f.apply(group, [student]);
    // });

    this.students.forEach((stu) => function(student) {
      console.log(this.title + ": " + student);
    }.call(this, stu));
  },
};

group.showList();
