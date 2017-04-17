

$(function(){

	var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
	$('.container').css({'background-image': 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});


});

$(window).load(function() {
    $('.flexslider').flexslider({
    	slideshow: false,
    	touch: true,
    	keyboard: true,
    	directionNav: true,
    	controlNav: true
        });
  });

