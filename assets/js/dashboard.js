$('.Mymenu-item').each(function(){
   $(this).click(()=>{
    $(this).addClass('is-active');
    console.log('is-active')
   })
})



$('.myMenu-toggle').click(()=>{
    $('.myMenu-toggle').toggleClass('is-active');
    $('.sidebar').toggleClass('is-active');

})



