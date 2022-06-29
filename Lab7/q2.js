let group = {
  title: 'Our group',
  students: ["John", "Pete", "Alex"],

  showList: function() {
    console.log(this.title);

    this.students.forEach(function(student) {
      console.log(this.title + ": " + student);
    }.bind(this));
  }
}

group.showList();