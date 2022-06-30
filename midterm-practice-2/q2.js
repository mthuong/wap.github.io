let group = {
  title: "Our Group",

  students: ["John", "Pete", "Alice"],
  showList: function () {
    // Arrow function
    this.students.forEach((student) => {
      console.log(this.title + ": " + student);
    });

    // Self pattern
    self = this;
    this.students.forEach(function (student) {
      console.log(self.title + ": " + student);
    });

    // Bind
    this.students.forEach(
      function (student) {
        console.log(this.title + ": " + student);
      }.bind(this)
    );

    // Call
    this.students.forEach((stu) =>
      function (student) {
        console.log(this.title + ": " + student);
      }.call(group, stu)
    );

    // Apply
    this.students.forEach((stu) =>
      function (student) {
        console.log(this.title + ": " + student);
      }.apply(group, [stu])
    );
  },
};

group.showList();
