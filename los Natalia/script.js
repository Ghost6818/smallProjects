los = false
var students = []

function start() {
  if (!los) {
    var list = document.getElementById("list").children;
    for (i = 0; i < list.length; i++) {
      document.getElementById(i+'-ch').style.display = 'none';
      if (list[i].children[0].checked) {
          var student = list[i].children[1].id;
            students.push(student);
      } else {
        document.getElementById(i+'-n').style.display = 'none';
      }
    }
    los = true
  } else {
    if (students.length > 1) {
      var studentsHelper = [...students];
      var saves = [];
      for (let i = 0; i < students.length/2; i++) {
          var save = Math.floor(Math.random() * (students.length)) + 0;
          saves.push(save);
          document.getElementById(studentsHelper[save]).style.display = 'none';
      }
      students = []
      studentsHelper.forEach(function(student, index) {
          if (!saves.includes(index)) {
              students.push(student);
          }
      })
      if (students.length === 1) {
        document.getElementById('los').innerHTML = 'Wybrany: ' + document.getElementById(students).innerText;
      }
    } else if (students.length === 1) {
      document.getElementById('los').innerHTML = 'Wybrany: ' + document.getElementById(students).innerText; 
    }
  }
}