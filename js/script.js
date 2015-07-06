$(function(){
	// Before Init
	$("#canvas").hide();
	$("nav").fadeOut(0);
	$("nav *").hide();
	$(".content").hide();
	$(".btn-floating").hide();
});
$(document).ready(function(){
	$(window).load(function(){
		$(".logo").animate({
			'width':300,
			'height':110
		},700);
		$(".logo").animate({
			'padding':20
		});
		$(".logo span").delay(1000).fadeIn();
		$(".small").delay(1500).fadeIn();
		$(".soon").delay(2000).fadeIn();
		$(".logocontainer").delay(3000).fadeOut();
		// $(".header").delay(3500).slideDown();
		// $(".header").slideDown();
		$("#canvas").delay(3500).fadeIn();
		$("nav").delay(4000).fadeIn();
		$("nav *").delay(4500).fadeIn();
		$(".content").delay(5000).fadeIn();
		$(".btn-floating").delay(5200).fadeIn();
	});
	$("nav ul li a").click(function(e){
		e.preventDefault();
		var $element = $(this).attr('href');
		$("body,html").stop(0).animate({
			scrollTop: $($element).offset().top
		});
	});
	$(".fa-twitter").click(function(){
		$(".twitter").fadeToggle();
	});
	$(".panel").click(function(){
		$(".twitter").fadeOut();
	});
});