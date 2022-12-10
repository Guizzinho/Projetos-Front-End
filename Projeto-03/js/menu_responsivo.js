$(window).on('load',function(){

// Script do menu mobile

	$('.menu-mobile').click(function(){
		$('.menu-mobile').find('ul').slideToggle();
	})

// Script do scroll dinamico

	$('nav a').click(function(){
		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;

		$('html,body').animate({'scrollTop': offSetTop});
	})

//Sistema de slides com o plugin Slick

	$('.mosaico .container .mosaico-slide').slick({
		centerMode:false,
		slidesToShow:6,
		arrow:false,
		responsive:[

		{
			breakpoint:768,
			settings:{
				arrows: false,
				centerMode: true,
				slidesToShow:3
			}
		},

		{
			breakpoint:580,
			settings:{
				arrows: false,
				centerMode: true,
				slidesToShow:2
			}
		}

		]
	});


	$('.tratamento .container').slick({
		centerMode: false,
		arrows: false,
		slidesToShow: 3,
		infinite: false,
		responsive:[

		{
			breakpoint:768,
			settings:{
				centerMode: false,
				dots: true,
				arrows: false,
				infinite: false,
				slidesToShow: 2
			}
		},

		{
			breakpoint:580,
			settings:{
				centerMode: false,
				dots: true,
				arrows: false,
				infinite: false,
				slidesToShow: 1
			}
		}

		]

	});


	$('.depoimentos .container').slick({
		centerMode: false,
		infinite: false,
		arrows: false,
		dots: true,
		slidesToShow:1
	});

})