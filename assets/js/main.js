$(function() {
        $('.TypeWirter_effect').typed({
            strings: [' -- worthy, hardworking, ambitious, team worker, ready to make progress, excellent with the introduction of new technologies and new applications, quick understanding and so on.'],
            typeSpeed: 2,
            backDelay: 3000,
            // callback: function(){
            //     showLang(); // run another element
            //     $('.typed-cursor').first().hide(); // hide first cursor
            // }
        });
});
// function showLang() {
//         $('.lang').typed({
//             strings: ['C++', 'Java', 'Python'],
//             typeSpeed: 50,
//             backDelay: 2000,
//             loop: true
//         });
// }

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
          };
        });
      }
    }
  });

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

$(function() {
	// Cache the window object
	var $window = $(window);

	// Parallax background effet
	$('section[data-type="background"]').each(function() {

		var $bgobj = $(this); // assigning the object

		$window.scroll(function() {

			// scroll the background at var speed
			// the yPos is a negative value bacause
			// we're scroling it UP!
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));

			// Put together our final background position
			var coords = '50% ' + yPos + 'px';

			// Move the background
			$bgobj.css({ backgroundPosition: coords });

		}); // end window scroll

	});

});

function initMap() {
  var uluru = {lat: 45.258, lng: 19.835};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}