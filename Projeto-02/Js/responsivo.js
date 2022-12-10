$(window).on('load',function(){

// Script do menu mobile

	$('.mobile-menu').click(function(){
		$('.mobile-menu').find('ul').slideToggle();
	})


// Script do scroll dinamico

	$('nav a').click(function(){
		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;

		$('html,body').animate({'scrollTop': offSetTop});

		return false;
	})	

	$('.home').click(function(){
		$('.home').val(false);
	})

	
//Script slider scroll

	function initSlider(){
		amt = $('.sobre-autor').length;
		var sizeContainer = 100 * amt;
		var sizeBoxSingle = 100 / amt;

		$('.sobre-autor').css('width',sizeBoxSingle+'%');
		$('.scroll-wraper').css('width',sizeContainer+'%');

		for(var i = 0; i < amt; i++){
		if(i == 0){
			$('.slider-bullets').append('<span style="background-color: rgb(180, 180, 180);"></span>');
		}else{
			$('.slider-bullets').append('<span></span>');
		}
	}
}

var amt
var delay = 3000;
var curIndex = 0;


	
	function autoPlay(){
		setInterval(function(){
			curIndex++;
			if(curIndex == amt){
				curIndex = 0;
			}
				goToSlider(curIndex);
		},delay)
	}

function goToSlider(curIndex){
	var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;

	$('.scroll').stop().animate({'scrollLeft': offSetX+'px'});
	$('.slider-bullets span').css('background-color','rgb(200,200,200)');
	$('.slider-bullets span').eq(curIndex).css('background-color','rgb(180,180,180)');
}

	$(window).resize(function(){
		$('.scroll').stop().animate({'scrollLeft': 0})
	})

	initSlider();
	autoPlay();
})