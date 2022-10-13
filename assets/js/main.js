
let myCenter1 = document.getElementById('myCenter1');
let myCenter2 = document.getElementById('myCenter2');
let student = document.getElementById('student');
let staff = document.getElementById('staff');
const mainBody = document.querySelectorAll('.main_body');
const nextBtn = document.querySelectorAll('#nextButton');
const previousBtn = document.querySelectorAll('#previousButton');
const elem = document.getElementById("myBar");
const percent = document.getElementById("myPercent");
const restart = document.getElementById("restart");
const form = document.getElementById("myForm");
const  course1 = document.getElementById("course1");
const  course2 = document.getElementById("course2");
const  course3 = document.getElementById("course3");
const recommend = document.getElementById("recommend");
var total = 0;




restart.addEventListener('click', function(){
  location.reload();
})


for(let i=0;i<mainBody.length;i++){
  if(nextBtn[i]!=undefined){
nextBtn[i].onclick=()=>{
mainBody[i].style.cssText="display:none;"}
 mainBody[i].style.cssText="z-index:" +(100000-(i*10)) + ";";
  }
if(previousBtn[i]!=undefined){
  
previousBtn[i].onclick=()=>{
   i=i+1;
  mainBody[i].style.cssText="display:block;"
     mainBody[i].style.cssText="z-index:" +(100000+(i*10)) + ";";
  // i-=1;
   
}
}
}

form.addEventListener('submit',(e)=>{
e.preventDefault();
  for(i=0;i<form.length;i++){
    if(form.elements[i].checked){

      let score =parseInt(form.elements[i].value);
      total += score;  
    } 
  }
 console.log(total);
  const matchScore = (total/2000) * 100;
  percent.innerHTML = matchScore  + "%";

  var i = 0;
  if (i == 0) {
    i = 1;
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= matchScore) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        percent.innerHTML = width  + "%";
      }
    }
  }

  if(matchScore == 0 ||matchScore == 25 || matchScore == 75 ||matchScore == 100  ){
    recommend.innerHTML = "Data Analyst";
    course1.innerHTML ="Data mining and warehousing";
    course2.innerHTML ="Mobile computing";
    course3.innerHTML ="Computational mathematics";

  }
 else if(60<=matchScore<=69){
    recommend.innerHTML = "Data Scientists";
    course1.innerHTML ="Data mining and warehousing";
    course2.innerHTML ="Programming 2";
    course3.innerHTML ="Computational mathematics";
}
 else if(matchScore==80){
    recommend.innerHTML = "Software Engineer";
    course1.innerHTML ="Embedded Systems ";
    course2.innerHTML ="Mobile computing ";
    course3.innerHTML ="Programming 2 ";
}
 else if(55<=matchScore<=59){
    recommend.innerHTML = "Web Developer";
    course1.innerHTML ="Advanced web technologies ";
    course2.innerHTML ="Mobile computing ";
    course3.innerHTML ="Programming 2 ";
}

  else{
    recommend.innerHTML = "Data Analyst";
    course1.innerHTML ="Data mining and warehousing";
    course2.innerHTML ="Mobile computing";
    course3.innerHTML ="Computational mathematics";
  }






}
)











 
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









