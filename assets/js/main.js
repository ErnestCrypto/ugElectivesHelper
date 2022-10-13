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
const  course4 = document.getElementById("course4");
const  option4 = document.getElementById("option4");

const recommend = document.getElementById("recommend");
var total = 0;

//next
var question1 = form.elements['question1'];
var nextButton1 = question1[question1.length-1];
for(i=0;i<question1.length;i++){
 question1[i].addEventListener('click',()=>{
    nextButton1.removeAttribute('disabled'); 
 })
}
//next



//next
var question2 = form.elements['question2'];
var nextButton2 = question2[question2.length-1];
for(i=0;i<question2.length;i++){
 question2[i].addEventListener('click',()=>{
    nextButton2.removeAttribute('disabled'); 
 })
}
//next


//next
var question3 = form.elements['question3'];
var nextButton3 = question3[question3.length-1];
for(i=0;i<question3.length;i++){
 question3[i].addEventListener('click',()=>{
    nextButton3.removeAttribute('disabled'); 
 })
}
//next




//next
var question4 = form.elements['question4'];
var nextButton4 = question4[question4.length-1];
for(i=0;i<question4.length;i++){
 question4[i].addEventListener('click',()=>{
    nextButton4.removeAttribute('disabled'); 
 })
}
//next



//next
var question5 = form.elements['question5'];
var nextButton5 = question5[question5.length-1];
for(i=0;i<question5.length;i++){
 question5[i].addEventListener('click',()=>{
    nextButton5.removeAttribute('disabled'); 
 })
}
//next


//next
var question6 = form.elements['question6'];
var nextButton6 = question6[question6.length-1];
for(i=0;i<question6.length;i++){
 question6[i].addEventListener('click',()=>{
    nextButton6.removeAttribute('disabled'); 
 })
}
//next



//next
var question7 = form.elements['question7'];
var nextButton7 = question7[question7.length-1];
for(i=0;i<question7.length;i++){
 question7[i].addEventListener('click',()=>{
    nextButton7.removeAttribute('disabled'); 
 })
}
//next




//next
var question8 = form.elements['question8'];
var nextButton8 = question8[question8.length-1];
for(i=0;i<question8.length;i++){
 question8[i].addEventListener('click',()=>{
    nextButton8.removeAttribute('disabled'); 
 })
}
//next



//next
var question9 = form.elements['question9'];
var nextButton9 = question9[question9.length-1];
for(i=0;i<question9.length;i++){
 question9[i].addEventListener('click',()=>{
    nextButton9.removeAttribute('disabled'); 
 })
}
//next


//next
var question10 = form.elements['question10'];
var nextButton10 = question10[question10.length-1];
for(i=0;i<question10.length;i++){
 question10[i].addEventListener('click',()=>{
    nextButton10.removeAttribute('disabled'); 
 })
}
//next

//next
var question11 = form.elements['question11'];
var nextButton11 = question11[question11.length-1];
for(i=0;i<question11.length;i++){
 question11[i].addEventListener('click',()=>{
    nextButton11.removeAttribute('disabled'); 
 })
}
//next
//next
var question12 = form.elements['question12'];
var nextButton12 = question12[question12.length-1];
for(i=0;i<question12.length;i++){
 question12[i].addEventListener('click',()=>{
    nextButton12.removeAttribute('disabled'); 
 })
}
//next

//next
var question13 = form.elements['question13'];
var nextButton13 = question13[question13.length-1];
for(i=0;i<question10.length;i++){
 question13[i].addEventListener('click',()=>{
    nextButton13.removeAttribute('disabled'); 
 })
}
//next

//next
var question14 = form.elements['question14'];
var nextButton14 = question14[question14.length-1];
for(i=0;i<question14.length;i++){
 question14[i].addEventListener('click',()=>{
    nextButton14.removeAttribute('disabled'); 
 })
}
//next


//next
var question15 = form.elements['question15'];
var nextButton15 = question15[question15.length-1];
for(i=0;i<question15.length;i++){
 question15[i].addEventListener('click',()=>{
    nextButton15.removeAttribute('disabled'); 
 })
}
//next
//next
var question16 = form.elements['question16'];
var nextButton16 = question16[question16.length-1];
for(i=0;i<question16.length;i++){
 question16[i].addEventListener('click',()=>{
    nextButton16.removeAttribute('disabled'); 
 })
}
//next
//next
var question17 = form.elements['question17'];
var nextButton17 = question17[question17.length-1];
for(i=0;i<question17.length;i++){
 question17[i].addEventListener('click',()=>{
    nextButton17.removeAttribute('disabled'); 
 })
}
//next
//next
var question18 = form.elements['question18'];
var nextButton18 = question18[question18.length-1];
for(i=0;i<question18.length;i++){
 question18[i].addEventListener('click',()=>{
    nextButton18.removeAttribute('disabled'); 
 })
}
//next
//next
var question19 = form.elements['question19'];
var nextButton19 = question19[question19.length-1];
for(i=0;i<question19.length;i++){
 question19[i].addEventListener('click',()=>{
    nextButton19.removeAttribute('disabled'); 
 })
}
//next

//next
var question20 = form.elements['question20'];
var nextButton20 = question20[question20.length-1];
for(i=0;i<question20.length;i++){
 question20[i].addEventListener('click',()=>{
    nextButton20.removeAttribute('disabled'); 
 })
}
//next





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
        option4.style.cssText="display:block;"
    course3.innerHTML ="Computational mathematics";
    
}
 else if(matchScore==80){
    recommend.innerHTML = "Software Engineer";
    course1.innerHTML ="Embedded Systems ";
    course2.innerHTML ="Mobile computing ";
    course3.innerHTML ="Programming 2 ";
    option4.style.cssText="display:block;"
    course4.innerHTML ="Software modeling and simulation";
}
 else if(55<=matchScore<=59){
    recommend.innerHTML = "Web Developer";
    course1.innerHTML ="Advanced web technologies ";
    course2.innerHTML ="Mobile computing ";
    course3.innerHTML ="Programming 2 ";
      option4.style.cssText="display:block;"
    course4.innerHTML ="Programming 3";
}

  else{
    recommend.innerHTML = "Data Analyst";
    course1.innerHTML ="Data mining and warehousing";
    course2.innerHTML ="Mobile computing";
    course3.innerHTML ="Computational mathematics";
    course4.innerHTML ="";
  }






}
)












