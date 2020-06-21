// HEADER SCRIPTS



// YOU DO NOT NEED TO EDIT BELOW THIS LINE
// Intermountain Martial Arts Alliance





// START SCROLL TO TOP ARROW SCRIPT

$(document).ready(function(){
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},300);
		return false;
	});
	
});

// END SCROLL TO TOP ARROW SCRIPT





// FOR JQUERY INCLUDES

$(document).ready(function(){
    $("[data-load]").each(function(){
        $(this).load($(this).data("load"), function(){
        });
    });
})
