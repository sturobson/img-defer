// smart resize function from Paul Irish to stop so many damn resize event fires

(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');


// wait until the page loads
$(window).load(function() {
  // if the viewport is narrower than 600px (arbitary)
  if (document.width < 600) {
    // change the attribute from narrowsrc to src
    $('.defer').each(function() {
      $(this).attr('src', $(this).attr('narrowsrc'));
    });
  }
  // if it's larger than 600px (arbitary)
  else {
    // change the attribute from largesrc to src
    $('.defer').each(function() {
      $(this).attr('src', $(this).attr('largesrc'));
    });
  }
  // check for pesky developer resizing
  $(window).smartresize(function() {
    // if the viewport is narrower than 600px (arbitary)
    if (document.width < 600) {
      // change the attribute from narrowsrc to src
      $('.defer').each(function() {
        $(this).attr('src', $(this).attr('narrowsrc'));
      });
    }
    // if it's larger than 600px (arbitary)
    else {
      // change the attribute from largesrc to src
      $('.defer').each(function() {
        $(this).attr('src', $(this).attr('largesrc'));
      });
    }
  });
});
