$("document").ready(function() {    
  $("#web").click(function(){
    $(".print, .illustration, .photography, .type,  .video, .audio, .ux").hide(); $(".web").show();
  });
  $("#ux").click(function(){
    $(".web, .print, .illustration, .photography, .type,  .audio, .video").hide(); $(".ux").show();
  });   
  $("#print").click(function(){
    $(".web, .illustration, .photography, .type, .video, .audio, .ux").hide(); $(".print").show();
  }); 
  $("#type").click(function(){
    $(".web, .illustration, .photography, .print, .video, .audio, .ux").hide(); $(".type").show();
  }); 
  $("#illustration").click(function(){
   $(".web, .print, .photography, .type, .video, .audio, .ux").hide(); $(".illustration").show();
  });
  $("#photography").click(function(){
   $(".web, .print, .illustration, .type, .video, .audio, .ux").hide(); $(".photography").show();
  });
  $("#video").click(function(){
    $(".web, .print, .illustration, .photography, .type,  .audio, .ux").hide(); $(".video").show();
  }); 
  $("#audio").click(function(){
    $(".web, .print, .illustration, .photography, .type,  .video, .ux").hide(); $(".audio").show();
  });  

  $("#showAll").click(function(){
   $(".web, .print, .illustration, .photography, .type,  .video, .audio, .ux").show();
  }); 
});