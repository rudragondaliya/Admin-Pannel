let sideVisible = true;

function contantSize(){
 sideVisible = !sideVisible;
 if(sideVisible){
   $("#supMain").css("width","80%");
 }else{
  $("#supMain").css("width","100%");
 }
}



$('#charts,#icons,#login').hide()





$(".btn>button").on("click",function(){
    $("#dashboard,#charts,#icons,#login").hide();
  $($(this).attr("for")).show();
  console.log($(this).attr("for"));
})





$('.fa-bars-staggered').on('click',function(){
  $('#side-bar').toggle();
  contantSize();
})


$('.profile').animatedHeadline({
  animationType: "type"
});
