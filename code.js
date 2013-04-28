// wait until the page loads
$(window).load(function(){  
  // if the viewport is narrower than 600px (arbitary)
  if (document.width < 600) {
    // change the attribute from narrowsrc to src
    $('img').each(function(){
      $(this).attr('src', $(this).attr('narrowsrc'));
    });
  }
  // if it's larger than 600px (arbitary)
  else {
    // change the attribute from largesrc to src
    $('img').each(function(){
      $(this).attr('src', $(this).attr('largesrc'));
    });
  }
  // check for pesky developer resizing
  $(window).resize(function() {
    // if the viewport is narrower than 600px (arbitary)
    if (document.width < 600) {
      // change the attribute from narrowsrc to src
      $('img').each(function(){
        $(this).attr('src', $(this).attr('narrowsrc'));
      });
    }
    // if it's larger than 600px (arbitary)
    else {
      // change the attribute from largesrc to src
      $('img').each(function(){
        $(this).attr('src', $(this).attr('largesrc'));
      });
    }  
  });
});
