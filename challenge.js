//page 1
//build empty object if f103
//ask user for student name
//put into object
//ask user for the same students grade
//put that into object
//pass info to page two

//page 2
//when user presses button, get the name and grade from object

function page1() {
  
  var f103 = {}
var name = prompt("What is you name");
f103["name"] = name;
var grade = prompt("What is you grade");
f103["grade"] = grade;

localStorage.setItem('passname', name);
localStorage.setItem('passgrade', grade);
location.href = "page2.html";
  
}

function page2() {
  var a = localStorage.getItem('passname');
  var b = localStorage.getItem('passgrade');
  window.alert(a + " " + b);
  
}



