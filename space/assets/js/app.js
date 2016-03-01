$(document).ready(function() {  
  
      /*when the user hovers over the DIV that contains the image and the text... */  
      $('.box_container').hover(function(){  
  
          /*... we get the DIV's width ... '*/  
          var width = $(this).outerWidth();  
  
          /*... and change the position of the image to that width with an animation effect... */  
          $(this).find('.box_image').animate({ right : width },{queue:false,duration:1500});  
          /*queue:false means that if hovered again it won't wait for the previous animation to finish 
          duration:300 means that the animation effect will take 0.3 seconds to finish '*/  
  
      }, function(){  
  
          /*... and when he hovers out we get the image back to it's starting position using the same function... '*/  
          $(this).find('.box_image').animate({ right : '0px' },{queue:false,duration:1500});  
  
      });  
  $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1000);
                    
            }
            
        }); 
    
    });

});  