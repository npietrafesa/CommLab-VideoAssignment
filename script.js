// Video Popup JavaScript 
$(document).ready(function(){
  // For loop that goes thhrough all the 4 timeline images, div's, Video frames and background by index
  for(let i = 1; i < 5; i++){

  $("#img"+i).on('click', function(){ // One image click on the timeline 
    $("#"+i).fadeIn('slow'); // Fading in the i th video frame 
    return false;
  });
  
  $("#bg"+i).on('click', function(){ // One background click ater the image
    $("#"+i).slideUp('slow'); // sliding the video up 
    return false;
  });
  
   $('.close-btn').on('click', function(){ // One background click on close buttom
     $("#"+i).fadeOut('slow'); // fading the div out
      return false;
   });
  }
});


