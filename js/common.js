$(document).ready(function() {

function heightDetect() {
$('.main_head').css('height', $(window).height());	// fit all height
};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});