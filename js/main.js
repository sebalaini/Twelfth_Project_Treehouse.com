$(document).ready(function(){

/***************
MENU BTN
***************/

	$("#menu").click(function() {
		$( ".nav" ).toggle();
	});

/* var contentSections = $('.section');
var navigationItems = $('.nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('.nav a[href="#'+$this.attr("class")+'"]');
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('selected');
			}else {
				navigationItems.eq(activeSection).removeClass('selected');
			}
		});
	} */ 

});