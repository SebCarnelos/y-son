// Smooth scroll on anchor
$(document).ready(function() {
    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });
});

// Back to Top button appearence
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 500) {
      $('#totop').fadeIn();
    } else {
      $('#totop').fadeOut();
    }
  });

// Back to top button
