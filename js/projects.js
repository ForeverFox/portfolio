$("document").ready(function() {    
  $("#web").click(function(){
    $(".print, .illustration, .photography, .video, .audio").hide(); $(".web").show();
  });  
  $("#print").click(function(){
    $(".web, .illustration, .photography, .video, .audio").hide(); $(".print").show();
  });  
  $("#illustration").click(function(){
   $(".web, .print, .photography, .video, .audio").hide(); $(".illustration").show();
  });
  $("#photography").click(function(){
   $(".web, .print, .illustration, .video, .audio").hide(); $(".photography").show();
  });
  $("#video").click(function(){
    $(".web, .print, .illustration, .photography, .audio").hide(); $(".video").show();
  }); 
  $("#audio").click(function(){
    $(".web, .print, .illustration, .photography, .video").hide(); $(".audio").show();
  });  

  $("#showAll").click(function(){
   $(".web, .print, .illustration, .photography, .video, .audio").show();
  }); 
});