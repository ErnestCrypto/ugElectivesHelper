var myCenter1 = document.getElementById('myCenter1');
var myCenter2 = document.getElementById('myCenter2');
var student = document.getElementById('student');
var staff = document.getElementById('staff');

student.addEventListener('click', function(){
if (myCenter1.style.display === "none") {
    myCenter1.style.display = "flex";
    myCenter2.style.display = "none";
    student.classList.add("selected");
          staff.classList.remove("selected");



  } else {
    myCenter1.style.display = "flex";
    myCenter2.style.display = "none";
    student.classList.add("selected");
          staff.classList.remove("selected");

   
  }

});


staff.addEventListener('click', function(){
if (myCenter2.style.display === "none") {
    myCenter2.style.display = "flex";
    myCenter1.style.display = "none";
     staff.classList.add("selected");
      student.classList.remove("selected");
  } 
   else {
    myCenter2.style.display = "flex";
    myCenter1.style.display = "none";
     staff.classList.add("selected");
      student.classList.remove("selected");
  }
});

