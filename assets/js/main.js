var selectedElement = document.querySelectorAll("[id='option']");
for(var i = 0; i < selectedElement.length; i++) 
{
selectedElement[i].addEventListener('click', function(){
var selected = document.querySelector('.selected')
if(selected)
{
    selected.classList.remove('selected');
}
  this.classList.toggle('selected');
  });
}


var myCenter1 = document.getElementById('myCenter1');
var myCenter2 = document.getElementById('myCenter2');
var student = document.getElementById('student');
var staff = document.getElementById('staff');

student.addEventListener('click', function(){
if (myCenter1.style.display === "none") {
    myCenter1.style.display = "flex";
    myCenter2.style.display = "none";

  } else {
    myCenter1.style.display = "flex";
    myCenter2.style.display = "none";
  }

});


staff.addEventListener('click', function(){
if (myCenter2.style.display === "none") {
    myCenter2.style.display = "flex";
    myCenter1.style.display = "none";
  } 
   else {
    myCenter2.style.display = "flex";
    myCenter1.style.display = "none";
  }
});

