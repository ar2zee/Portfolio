$(document).ready(function() {

function heightDetect() {
$('.main_head').css('height', $(window).height());	// fit all height
};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle_mnu").click(function() {
  		$(".sandwich").toggleClass("active");
	});

	$('.top_mnu ul a').click(function() {
		$('.top_mnu').fadeOut(600);
		$(".sandwich").toggleClass("active");
	}).append('<span></span>');

	$('.toggle_mnu').click(function() {
		if ( $('.top_mnu').is(':visible') ) {
			$('.top_text').removeClass('h-opacify');
			$('.top_mnu').fadeOut(600);
			$('.top_mnu li a').removeClass('fadeInUp animated');
			// $('svg path').css('fill', '#000');
		} else {
			$('.top_text').addClass('h-opacify');
			$('.top_mnu').fadeIn(600);
			$('.top_mnu li a').addClass('fadeInUp animated');
			// $('svg path').css('fill', '#fff');
		}
	});
});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});