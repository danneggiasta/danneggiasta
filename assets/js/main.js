$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);
	
});

$(document).on('click', '#download-cv', function (e) {
    e.preventDefault();
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
})

$('.carousel').carousel({
  interval: 5000
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 940 || document.documentElement.scrollTop > 940) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

jQuery(function($) {

    var $nav = $('#menu');
    var $win = $(window);
    var winH = $win.height();   // Get the window height.

    $win.on("scroll", function () {
	$nav.toggleClass("stuck", $(this).scrollTop() > winH );
    }).on("resize", function(){ // If the user resizes the window
       winH = $(this).height(); // you'll need the new height value
    });

});
