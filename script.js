//  There was not anything that I saw on the page that used 
//  effects not already incorporated with BootStrap.  So I just added
//  some components that showed the functionality of jQuery.

$(document).ready(function(){

	$('.brewLinks').on('click', function(event){
		event.preventDefault();
		$(this).css('background-color','#00F');
	});

	$('.redButton').on('click', function(event){
		event.preventDefault();
		$(this).css('outline','0');
		$(this).css('background-color','#359a35');
		$(this).animate({ borderTopLeftRadius: 50, borderTopRightRadius: 40, borderBottomLeftRadius: 12, borderBottomRightRadius: 50}, 'fast');
		$(this).animate({ borderTopLeftRadius: 3, borderTopRightRadius: 50, borderBottomLeftRadius: 30, borderBottomRightRadius: 30}, 'fast');
		$(this).animate({ borderTopLeftRadius: 44, borderTopRightRadius: 6, borderBottomLeftRadius: 66, borderBottomRightRadius: 3}, 'fast');
		$(this).animate({ borderTopLeftRadius: 21, borderTopRightRadius: 31, borderBottomLeftRadius: 21, borderBottomRightRadius: 19}, 'fast');
	});

	$(window).on('scroll', function(event){
		$('.scrollBeer').css('display', 'inline-block');
	});

	$('p').on('mouseover', function(event){
		$(this).css('color','pink');
	});

	 $('body > div > div.content > div:nth-child(4) > div.col-md-4 > div').on('mouseover', function(event){
	 	$(this).css('background-image', 'url("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRA5D_UbhAPpybU9hTyfByD6AZf55yuNY4L-NS6lDy-OKK5R5OF")');
	 });

	
});