$("document").ready(function() {    
  $("#web").click(function(){
    $(".print, .illustration, .photography, .video, .audio, .ux").hide(); $(".web").show();
  });
  $("#ux").click(function(){
    $(".web, .print, .illustration, .photography, .audio, .video").hide(); $(".ux").show();
  });   
  $("#print").click(function(){
    $(".web, .illustration, .photography, .video, .audio, .ux").hide(); $(".print").show();
  });  
  $("#illustration").click(function(){
   $(".web, .print, .photography, .video, .audio, .ux").hide(); $(".illustration").show();
  });
  $("#photography").click(function(){
   $(".web, .print, .illustration, .video, .audio, .ux").hide(); $(".photography").show();
  });
  $("#video").click(function(){
    $(".web, .print, .illustration, .photography, .audio, .ux").hide(); $(".video").show();
  }); 
  $("#audio").click(function(){
    $(".web, .print, .illustration, .photography, .video, .ux").hide(); $(".audio").show();
  });  

  $("#showAll").click(function(){
   $(".web, .print, .illustration, .photography, .video, .audio, .ux").show();
  }); 
});