$(document).ready(function() {
	$("#mobileNavOpen").click(function() {
		$("#mobileNav").css("left", "0");
	});

	$("#mobileNavClose").click(function() {
		$("#mobileNav").css("left", "-100%");
	});
});