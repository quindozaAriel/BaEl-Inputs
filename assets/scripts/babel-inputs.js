var lastScrollTop = 0;
$(window).scroll(function(event){
	var st = $(this).scrollTop();
	
	if (st > lastScrollTop)
	{

		$('.alpha-div').css('background-size',100 + parseInt(st / 10, 0) + '% ');

	}
	else if (st < lastScrollTop)
	{
		if(st <= 100)
		{
			$('.alpha-div').css('background-size','100%');
		}
		else(st)
		{
			$('.alpha-div').css('background-size',100 + parseInt(st / 10, 0) + '% ');
		}


	}


});