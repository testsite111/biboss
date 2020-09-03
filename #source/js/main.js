document.addEventListener('DOMContentLoaded', function(){
	$('.btn-burger').on('click',function(event) {
	   if ($(this).is(event.target)) {
		   $('.sidebar').fadeOut('slow');
		   $(this).find('span').removeClass('active');
	   } else {
		   $('.sidebar').fadeIn('slow');
		   $(this).find('span').addClass('active');
	   }
	});
	$('.header__plus').on('click',function(event) {
	   if ($(this).is(event.target)) {
		   $(this).removeClass('active');
		   $(this).find('button').css('color', 'rgba(0, 0, 0, 0.52)');
	   } else {
		   $(this).addClass('active');
		   $(this).find('button').css('color', '#FA961E');
	   }
	});
});