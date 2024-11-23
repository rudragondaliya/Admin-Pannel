// $("#side-bar>button").on("click", function () {
// $("#charts,#icons,#calender,#login").hide()
//  $($(this).attr("for")).show();
//  $("#side-bar").toggle(900,function(){
//   $("#supMan").css("width","100%")
// })
// });


// $(".fa-bars-staggered").on("click",function(){
//   $("#side-bar").toggle(900,function(){
//       $("#supMan").css("width","100%")
//   })
// })








let sideVisible = true;

function contantSize(){
 sideVisible = !sideVisible;
 if(sideVisible){
   if(visualViewport.width <= 600){
    $("#supMain").css("width","100%");
    return;
   }
   $("#supMain").css("width","80%");
 }else{
  $("#supMain").css("width","100%");
 }
}










$('#charts,#icons,#tables,#login').hide()





$(".btn>button").on("click",function(){
    $("#dashboard,#charts,#icons,#tables,#login").hide();
  $($(this).attr("for")).show();
  console.log($(this).attr("for"));
})





$('.fa-bars-staggered').on('click',function(){
  $('#side-bar').toggle().css("z-index","20")
  contantSize();
})




$('.profile').animatedHeadline({
  animationType: "type"
});



$('#login-btn').on('click',function(){
  
})


$("#side-close-btn").on('click',function(){
  $("#side-bar").hide();
  contantSize();
})


$('.popup-container').css({
  "display":"none"
})


// $('.btn>button').on('click',function(){
//   $('#side-bar').hide()
// })



$('.fa-shake').on('click',function(){
  $('.popup-container').show();
})



$('.fa-xmark').on('click',function(){
  $('.popup-container').hide();
});


