$(document).ready(function(){

/***************
MENU BTN
***************/

$("#menu").click(function() {
	$( ".nav" ).toggle();
});



/***************
OVERLAY DIV
***************/

$(window).resize(function() {
	width = $(window).width();
		if(width < 768) {
  		$(".description").css("display", "block");
		} else {
  		$(".description").css("display", "none");
		};
});


});