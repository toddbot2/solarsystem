$(document).ready(function(){
	$('.info li').click(function(){
		console.log("is this working?");
		var planets = $('.info li');
		if(planets.hasClass('clicked')){
			planets.removeClass('clicked');
		}
		else{
			 planets.addClass('clicked')
			};
		
	});

});