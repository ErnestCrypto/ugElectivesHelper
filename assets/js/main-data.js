$(function(){
   
const questions = [
     "I love working with large amounts of data and breaking it down into easy-to-understand formats",
  "I can clearly translate an analysis' result and present findings in simple words.",
   " I am very good at communicating",
    " When you miss a deadline your first instinct is to provide a brief explanation.",
    " Data Type Check is a data visualization method.",
    " To conduct exploratory data analysis, data needs to be collected.",
    "I prefer working with numbers. I am good at math, statistics, and anything that has to do with calculations.",
    " Interpreting data, analyzing results using statistical techniques  are some of the duties and responsibilities of a data analyst.",
    " One of the process you follow when cleaning data is  making corrections to the data.",
    " Are you familier with SPSS or have you ever heard of it.",
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
 $('#recommend').text("Congratulations Data Analyst is the  course  for You!");
  
       $('#course1').text('Data mining and warehousing');
        $('#course2').text('Data Structures and Algorithm');
       $('#course3').text('Computational Mathematics');
       $('#writeUp1').text(    `Data Analyst often times focus on predictive analytics, using data to test hypotheses, train models, and predict uncertain outcomes.

Data Analyst typically excel in math and statistics, leverage open-source tools and programming languages like Python or R, and often handle large, structured and unstructured data sources.
`);
$('#writeUp2').text('A Data Analyst role may be a good fit if you:')
$('#writeUp2a').text('Love to program and write code')
$('#writeUp2b').text('Enjoy math and statistics')
$('#writeUp2c').text('Can distill complex topics and communicate them clearly')

}
  
 else{
      $('#recommend').text("Sorry but you are not compatible with this course. We recommend you explore these electives instead");
       $('#course1').text('Embedded systems ');
    $('#course2').text('Software Modeling and Simulation');
    $('#course3').text('Mobile Computing');
      $('#writeUp1').text(    `Here are some of the elective courses you can explore `);
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


 









