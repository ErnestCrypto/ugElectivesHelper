$(function(){
   
const questions = [
   
  "I enjoy using open-source programming tools and languages",
  "I am  strongly attracted and interested about robot , Robot  software, programming and the important new field of robot vision.",
  "I prefer courses that will enable me to develop new projects and give instructions on how to go about them.",
  "I love the coding segment of Computer Science",
  "I am interested in finding hardware and software solutions to help businesses boost their performance.",
  "I am comfortable with math and statistics",
  "I enjoy thinking creatively and have a keen eye for visual design.",
" I am an innovative thinker",
" I love to invent new technologies",
"I am a problem solver"
]
let answers = questions.map( _ => null)
let current_index = 0
 $('#previousButton').hide()
$('#myResult').hide()
    $('.lds-spinner').hide();


 $("#questionbox").text(questions[current_index])
$("#outof").text(`QUESTION ${current_index + 1} OF ${questions.length}`)
$('#previousButton').click(()=>{
     $('#nextButton').removeAttr('disabled');
    current_index--
    $("#questionbox").text(questions[current_index])
    if(current_index==0){
        $('#previousButton').hide()
    }
    $("#outof").text(`QUESTION ${current_index+1} OF ${questions.length}`)
     triggeranswer()
}) 




$('.question').change((e)=>{
    e.stopPropagation() 
    $('#nextButton').removeAttr('disabled');
    let val = e.target.value
  if(val !== ""){
        answers[current_index] = val
    }
    
})
$('#nextButton').click(()=>{
     $('#nextButton').attr("disabled", "disabled");
    current_index++
    $("#questionbox").text(questions[current_index])
    if(current_index>=1){
        $('#previousButton').show()
    }
    $("#outof").text(`QUESTION ${current_index + 1} OF ${questions.length}`)
    triggeranswer()

    if(current_index == questions.length){
        compute();
    }

})

var triggeranswer = ()=>{
    let chosen = answers[current_index]
    if( chosen !== null){
        $('.question').each((index,element)=>{
            if($(element).val()==chosen){
                $(element).prop('checked',true)
                $('#nextButton').removeAttr('disabled');
            }
        })
    }else{
         $('#myForm')[0].reset()
    }
}


$('#restart').click(()=>{
    location.reload(true);
})


var compute = ()=>{
    var total = 0;
$('#myForm').hide()
$.each(answers,(index)=>{
    if(answers[index]!=null){
    numAnswer = parseInt(answers[index]) ;
 var score = numAnswer
total +=score
    } 
})
outcome = (total/1000)*100
 outcome = parseInt(outcome);
 $('#myPercent').text(outcome+"%")
 progress();
 myRecommended();
$('#myResult').show()
}



var progress = ()=>{
var elem = $('#myBar');
  var i = 0;
  if (i == 0) {
    i = 1;
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= outcome) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        $.each(elem,(index)=>{
            elem[index].style.width = width + "%";
        })
      }
    }
  }
}

var myRecommended = ()=>{
    if(outcome>=70 ){
 $('#recommend').text("Congratulations This Course is for You!");
   $('#course1').text('Embedded systems ');
    $('#course2').text('Software Modeling and Simulation');
    $('#course3').text('Mobile Computing');
$('#writeUp1').text(    `software engineering requires an in-depth study of software design 
and implementation using a modern, object-oriented language with support for graphical user 
interfaces and complex data structures. Topics covered will be specifications, design patterns, and abstraction techniques, including typing,
 access control, inheritance, and polymorphism. Students will learn the proper engineering use of techniques such as information hiding, classes, 
objects, inheritance, exception handling, event-based systems, and concurrency. This course equips students with practical set of skills for the 
development of software. The software crisis; why software fail (case studies);  Design as modeling; The Unified Modeling Language, Concepts and 
techniques for testing and modifying software in evolving environments. Topics include software testing at the unit, module, subsystem, and system levels; 
developer testing; automatic and manual techniques for generating test data; testing concurrent and distributed software; designing and implementing 
software to increase maintainability and reuse; evaluating software for change; and validating software changes.`);
$('#writeUp2').text('A Software Engineer role may be a good fit if you:')
$('#writeUp2a').text('Love solving real world problems with technology')
$('#writeUp2b').text('Want to flex both your creative and critical thinking skills')
$('#writeUp2c').text('Prefer working with prepared data and under specific project guidelines')
}
  
 else{
      $('#recommend').text("Sorry but you are not compatible with this course. We recommend you explore these electives instead");
    $('#course1').text('Introductory Abstract Algebra');
        $('#course2').text('Introductory Computational mathematics');
       $('#course3').text('Data Ming and warehousing');
$('#writeUp1').text(    ` Here are some of the elective courses you can explore  `);
$('#writeUp2').hide()
$('#writeUp2a').hide()
$('#writeUp2b').hide()
$('#writeUp2c').hide()  

}

}


})



//fetch api 
fetch('https://script.google.com/macros/s/AKfycbzUdT99c8Q-3Tm_dxB8OOqJli7niD_AldxjphaZHyGJEHumkY5fbUfx24NTOEJzDIVx/exec')
.then(response => response.json())
.then(data  => {
    let index = data.content.length - 1
    let arr = data.content[index]
     $('#myID').text(arr[0]);
})


 









