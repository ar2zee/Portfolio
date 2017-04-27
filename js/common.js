$(document).ready(function() {



	$('#portfolio_grid').mixItUp();

$('.s_portfolio li').click(function() {
	$('.s_portfolio li').removeClass('active');
	$(this).addClass('active');
});



$('.popup').magnificPopup({type: 'image'});
$('.popup_content').magnificPopup({type: 'inline', midClick: true});


$('.section_header').animated('fadeInUp', 'fadeOutDown');

$('.animation_1').animated('flipInY', 'flipOutY');
$('.animation_2').animated('fadeInLeft', 'fadeOutDown');
$('.animation_3').animated('fadeInRight', 'fadeOutRDown');

$(' .left .resume_item').animated('fadeInLeft', 'fadeOutDown');
$(' .right .resume_item').animated('fadeInRight', 'fadeOutDown');

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
			$('.top_text').css('opacity' , '1');
			$('.top_mnu').fadeOut(600);
			$('.top_mnu li a').removeClass('fadeInUp animated');
			// $('svg path').css('fill', '#000');
		} else {
			$('.top_text').css('opacity' , '1');
			$('.top_mnu').fadeIn(600);
			$('.top_mnu li a').addClass('fadeInUp animated');
			// $('svg path').css('fill', '#fff');
		}
	});

			$('.portfolio_item').each(function(i) {
			$(this).find('a').attr('href', '#work_' + i);
			$(this).find('.podrt_descr').attr('id', 'work_' + i);
		});

});

$(window).load(function() { 

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$('.top_text h1').animated('fadeInDown', 'fadeOutUp');

	$('.top_text p').animated('fadeInUp', 'fadeOutDown');

});