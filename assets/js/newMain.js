$(function(){
   
const questions = [
  "I am comfortable with math and statistics",
  "I would rather design data models and databases than charts or dashboards",
  "I am interested in working with very large or complex datasets, including unstructured (non-tabular) data",
  "I enjoy wrangling and transforming raw data so that others can analyze and visualize it",
  "I enjoy exploring and analyzing raw data for meaningful patterns and insights",
  "I prefer projects with clear and concrete objectives, as opposed to open-ended or exploratory analysis",
  "I love to work with devices dedicated to perform a specific task",
  "I am deeply fascinated by how embedded devices for sensing and controlling operates",
  "I seek to understand automation and tasks that the human visual system can perform.",
  "I am  strongly attracted and interested about robot , Robot  software, programming and the important new field of robot vision.",
  "I love working with large amounts of data and breaking it down into easy-to-understand formats",
  "I prefer courses that will enable me to develop new projects and give instructions on how to go about them.",
  "I love the coding segment of Computer Science",
  "I prefer working with numbers. I am good at math, statistics, and anything that has to do with calculations.",
  "I am interested in finding hardware and software solutions to help businesses boost their performance.",
  "I enjoy visual design and projects that require creativity.",
  "I enjoy both analytical and creative thinking",
  "I can clearly translate an analysis' result and present findings in simple words.",
  "I enjoy thinking creatively and have a keen eye for visual design.",
  "I enjoy using open-source programming tools and languages",
]
let answers = questions.map( _ => null)
let current_index = 0
 $('#previousButton').hide()
$('#myResult').hide()




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
outcome = (total/2000)*100
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
    if(outcome == 0.00 || outcome== 25.00 || outcome==50.00 || outcome==75.00|| outcome==100.00 ){
        $('#recommend').text("Data Analyst");
       $('#course1').text('Data mining and warehousing');
        $('#course2').text('Mobile Computing');
       $('#course3').text('Computational Mathematics');
    }
    
else if(85.00<=outcome<=90.00 ){
 $('#recommend').text("Software Engineer ");
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
software to increase maintainability and reuse; evaluating software for change; and validating software changes. `);
$('#writeUp2').text('A Software Engineer role may be a good fit if you:')
$('#writeUp2a').text('Love solving real world problems with technology')
$('#writeUp2b').text('Want to flex both your creative and critical thinking skills')
$('#writeUp2c').text('Prefer working with prepared data and under specific project guidelines')
    

}
    else if(outcome==80.00){
 $('#recommend').text("Games and App Developer ");
       $('#course1').text('Embedded systems ');
        $('#course2').text('Programming 2');
       $('#course3').text('Introduction to computer graphics');
}

else if(60<= outcome <=69){
 $('#recommend').text("Data Scientists");
       $('#course1').text('Data mining and warehousing');
        $('#course2').text('Mobile Computing');
       $('#course3').text('Computational Mathematics');
              console.log(outcome)

}

else if(55.00<=outcome<=60.00){
 $('#recommend').text("Advanced web technologies ");
       $('#course1').text('Embedded systems ');
        $('#course2').text('Mobile computing  ');
       $('#course3').text('Programming 2');
       $('#course4').text('Programming 3');
    $('#option4').show();
}
 else{
        $('#recommend').text("Data Analyst");
       $('#course1').text('Data mining and warehousing');
        $('#course2').text('Mobile Computing');
       $('#course3').text('Computational Mathematics');
    }

}


})















