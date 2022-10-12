
let myCenter1 = document.getElementById('myCenter1');
let myCenter2 = document.getElementById('myCenter2');
let student = document.getElementById('student');
let staff = document.getElementById('staff');
const mainBody = document.querySelectorAll('.main_body');
const nextBtn = document.querySelectorAll('#nextButton');
const previousBtn = document.querySelectorAll('#previousButton');
const elem = document.getElementById("myBar");
const percent = document.getElementById("myPercent");

elem.addEventListener('click',function () {
  var i = 0;
  if (i == 0) {
    i = 1;
    var width = 10;
    
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        percent.innerHTML = width  + "%";
      }
    }
  }
}
)


for(let i=0;i<mainBody.length;i++){
  nextBtn[i].onclick=()=>{mainBody[i].style.cssText="display:none;"}
 mainBody[i].style.cssText="z-index:" +(100000-(i*10)) + ";";


}


for(let i=0;i<mainBody.length;i++){
 
  previousBtn[i].onclick=()=>{mainBody[i].style.cssText="display:none;"}

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









