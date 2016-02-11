$(document).ready(function(){

  
  $('body').css('overflow', 'hidden');
  $('.randomize').each(function(){

    var top = Math.ceil(Math.random() * 75);
    var left = Math.ceil(Math.random() * 100);
    var diameter = Math.ceil(Math.random() * 100);
    var zIndex = Math.ceil(Math.random() * 100);

    console.log(top);
    console.log(left);

    $(this).css({
      'top': top + "%",
      'left': left + "%",
      'z-index': zIndex

    });
    $(this).addClass('draggable');

  })
  var characters = $("h1").text().split("");
  var charCount = characters.length;
  console.log(charCount);
  $("h1").empty();
  $.each(characters, function(i, el) {
    $("h1").append("<span class="+el+">"+el+"</span");
  });

  $(function() {
    $( ".draggable" ).draggable();
    $( "h1 span" ).draggable();
  });

  windowHeight = $(window).height();
  console.log(windowHeight);

});