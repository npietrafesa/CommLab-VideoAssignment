// Video Popup JavaScript 
$(document).ready(function(){
  for(let i = 1; i < 5; i++){

  $("#img"+i).on('click', function(){
    $("#"+i).fadeIn('slow');
    return false;
  });
  
  $("#bg"+i).on('click', function(){
    $("#"+i).slideUp('slow');
    return false;
  });
  
   $('.close-btn').on('click', function(){
     $("#"+i).fadeOut('slow');
      return false;
   });
  }
});


