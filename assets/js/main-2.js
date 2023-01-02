$(function(){
   
const questions = [
    " Interpreting data, analyzing results using statistical techniques  are some of the duties and responsibilities of a data analyst.",
    " One of the process you follow when cleaning data is  making corrections to the data.",
    " Are you familier with SPSS or have you ever heard of it.",
    " Data Type Check is a data visualization method.",
    " To conduct exploratory data analysis, data needs to be collected.",
    " I am very good at communicating",
    " When you miss a deadline your first instinct is to provide a brief explanation.",
    " Every organization needs protection against cyber attacks and security threats.",
    " Ransomware is considered to be one of the biggest cyber security threats in 2022 and poses a serious cyber threat to businesses of all sizes.",
    " Accurately identify all personal data under their control is a compliance obligation regarding sensitive data.",
    " You have the ability to think like a hacker.",
    "You  have good problem solving skills.",
    " Is the impression a product give important to you?",
    " When you look at a product you think about its functions?",
    " Making it comfortable to interact with a product is important in UI/UX design.",
    " You a familiar with the design process",
    " Atomization designs are a big part of UI/UX",
    " Figma is a designing software.",
    " In UI/UX user experience is very important",
    " UI/UX designers are more intersted in the amount of money they are paid and not the product.",
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
    if(outcome>=1 && outcome<=25 ){
 $('#recommend').text("Cybersecurity");
    $('#course1').text('Embedded systems ');
    $('#course2').text('Software Modeling and Simulation');
    $('#course3').text('Mobile Computing');
$('#writeUp1').text(    `Cyber security professionals, or information security analysts, have a wide range of responsibilities, but the crux of their job is to protect online data from being compromised.
 As more of our personal information is stored online, the more important it becomes to step up security.the more important it becomes to step up security.
Cyber security is a complex field, and many roles can be found within banks, retailers, e-tailers, healthcare, and government organizations. On the job, you can expect to safeguard an organization's files and network, install firewalls, create security plans, guard customer data, and monitor activity. 
If a breach occurs, you'll be responsible for identifying the problem and finding a solution quickly. `);
$('#writeUp2').text('A Cybersecurity Engineer role may be a good fit if you:')
$('#writeUp2a').text('Love solving real world problems with technology')
$('#writeUp2b').text('Want to flex both your creative and critical thinking skills')
$('#writeUp2c').text('Prefer working with prepared data and under specific project guidelines')
}
   
else if(outcome>=30 && outcome<=60){
 $('#recommend').text("Data Analyst");
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



else if(outcome>=61 && outcome<=100 ){
 $('#recommend').text("UI/UX");
    $('#course1').text('Data Mining and Warehousing');
    $('#course2').text('Introductory Abstract Algebra');
    $('#course3').text('Introductory Computational mathematics');
$('#writeUp1').text(    `UI UX designers create the user interface for an app, website, or other interactive media. Their work includes collaborating with product managers and engineers to gather requirements from users before designing ideas that can be communicated using storyboards. They also process flows or sitemaps. They'll then use their creativity 
while applying color palettes based on what best fits into a particular design conceptually. `);
$('#writeUp2').text('A UI/UX designer role may be a good fit if you:')
$('#writeUp2a').text('Love designing visuals to tell stories and bring data to life')
$('#writeUp2b').text('Prefer working with prepared data and under specific project guidelines')
$('#writeUp2c').text('Prefer working with prepared data and under specific project guidelines')
}


 else{
      $('#recommend').text("Cybersecurity");
    $('#course1').text('Embedded systems ');
    $('#course2').text('Software Modeling and Simulation');
    $('#course3').text('Mobile Computing');
$('#writeUp1').text(    ` Cyber security professionals, or information security analysts, have a wide range of responsibilities, but the crux of their job is to protect online data from being compromised.
 As more of our personal information is stored online, the more important it becomes to step up security.the more important it becomes to step up security.
Cyber security is a complex field, and many roles can be found within banks, retailers, e-tailers, healthcare, and government organizations. On the job, you can expect to safeguard an organization's files and network, install firewalls, create security plans, guard customer data, and monitor activity. 
If a breach occurs, you'll be responsible for identifying the problem and finding a solution quickly.  `);
$('#writeUp2').text('A Software Engineer role may be a good fit if you:')
$('#writeUp2a').text('Love solving real world problems with technology')
$('#writeUp2b').text('Want to flex both your creative and critical thinking skills')
$('#writeUp2c').text('Prefer working with prepared data and under specific project guidelines')
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


 









