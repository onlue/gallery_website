$(window).on("load", function () {
	var animationTime = 300;
	$('.gallery-tab-title-holder-text').click(function() {
		if($(this).parent().parent().next().is(":visible")){
			$(this).parent().animate({"left": -45}, animationTime);
			}else{
			$(this).parent().animate({"left": 65}, animationTime);
		}
		$(this).parent().parent().next().slideToggle(animationTime);
	});
	$('.gallery-tab-images-slider').each(function(slider_index, slider) {
		var total_width = 0;
		$(this).children('.gallery-tab-images-slider img').each(function(image_index, image) {
			$(this).attr('data-height',image.height);
			$(this).attr('data-width',image.width);
			var ratio = image.width/image.height;
			var actual_width = Math.round(ratio*220);
			total_width+= actual_width+20;
		});
		$(this).width(total_width);
	});
	$('.gallery-next').click(function() {
		if($(this).parent().parent().parent().next().is(":visible")){
			var this_slider = $(this).parent().parent().parent().next().children('.gallery-tab-images-slider')

			if((this_slider.position().left)>(-(this_slider.width()-$('#rotated-gallery').width()))){
				this_slider.animate({"left": (this_slider.position().left)-300}, 100);
			}
		}
	});
	$('.gallery-previous').click(function() {
		if($(this).parent().parent().parent().next().is(":visible")){
			var this_slider = $(this).parent().parent().parent().next().children('.gallery-tab-images-slider')
			if((this_slider.position().left)<-200){
				this_slider.animate({"left": (this_slider.position().left)+300}, 100);
			}
		}
	});
	$('#gallery-popup-box-close').click(function() {
		$('#gallery-popup').fadeOut(200);
	});
	$(".gallery-tab-images-slider img").click(function() {
		$("#gallery-popup-box-image").attr("src", $(this).attr("src"));
		$('#gallery-popup').fadeIn(200);
	});
});
