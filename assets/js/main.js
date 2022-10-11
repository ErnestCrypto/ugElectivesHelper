
let myCenter1 = document.getElementById('myCenter1');
let myCenter2 = document.getElementById('myCenter2');
let student = document.getElementById('student');
let staff = document.getElementById('staff');
const mainBody = document.querySelectorAll('.main_body');
const nextBtn = document.querySelectorAll('#nextButton');
 

for(let i=0;i<mainBody.length;i++){
  nextBtn[i].onclick=()=>{mainBody[i].style.cssText="display:none;"}
  nextBtn[mainBody.length-1].onclick=()=>{mainBody[mainBody.length-1].style.cssText="display:block;"}
 mainBody[i].style.cssText="z-index:" +(100000-(i*10)) + ";";


}


student.addEventListener('click', function(){
if (myCenter1.style.display === "none")
 {
    myCenter1.style.display = "flex";
    myCenter2.style.display = "none";
    student.classList.add("selected");
    staff.classList.remove("selected");
  } 
  else {
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










