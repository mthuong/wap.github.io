let group = {
  title: 'Our group',
  students: ["John", "Pete", "Alex"],

  showList: function() {
    console.log(this.title);

    // Using bind
    // this.students.forEach(function(student) {
    //   console.log(this.title + ": " + student);
    // }.bind(this));

    // Arrow function
    this.students.forEach((student) => {
      console.log(this.title + ": " + student);
    });
  }
}

group.showList();