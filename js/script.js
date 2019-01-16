$(document).ready(function() {
// Preloader
	$(function() {	

		$("#preload-images").waitForImages({
		    finished: function() {
		        console.log("All images loaded.");
				$("#preloader").delay(250).fadeOut(500);
				$("#home").addClass("loaded");			
			},
		    each: function() {
	       		console.log("Image loaded.")
		    },
		    waitForAll: true
		});	
	});

// Fade-in screens
	$("body, html").fadeIn("fast");

	/* $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.find('img').attr('title');
			}
		}
	}); */

	$("#fox").addClass("animated slideInUp");

	$("#chameleon").addClass("animated slideInLeft");

	setTimeout(function() {
		$("#prestoFox").attr("src", "img/fox-hi-word.jpg");
	}, 3000);
});

