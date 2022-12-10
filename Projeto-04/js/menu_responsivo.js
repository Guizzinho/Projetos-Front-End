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

// Script do sistema de pesquisa de dinamico
	
	var currentValue = 0;
	var isDrag = false;
	var precoAtual = 0;
	var precoMaximo = 70000;

	$('.pointer-barra').mousedown(function(){
		isDrag = true;
	})

	$('.pointer-barra').mouseup(function(){
		isDrag = false;
		enableTextSelected();
	})

	$('.barra-preco').mousemove(function(e){
		if(isDrag == true){
			disableTextSelected();
			var elBase = $(this);
			var mouseX = e.pageX - elBase.offset().left;
			if(mouseX < 0)
				mouseX = 0;
			if(mouseX > elBase.width())
				mouseX = elBase.width();

			$('.pointer-barra').css('left',(mouseX-13)+'px');
			currentValue = (mouseX / elBase.width()) * 100;
			$('.barra-preco-fill').css('width',currentValue+'%');
			
			precoAtual = (currentValue/100) * precoMaximo;
			precoAtual = formatarPreco(precoAtual);
			$('.preco-pesquisa').html('R$'+precoAtual)
		}	
	})

	function formatarPreco(precoAtual){
		precoAtual = precoAtual.toFixed(2);
		precoArr = precoAtual.split('.');

		var novoPreco = formatarTotal(precoArr);

		return novoPreco;
		
	}


	function formatarTotal(precoArr){
		if(precoArr[0] < 1000){
			return precoArr[0]+','+precoArr[1];
		}else if(precoArr[0] < 10000){
			return precoArr[0][0]+'.'+precoArr[0].substr(1,precoArr[0].lenght)+','+precoArr[1];
		}else
			return precoArr[0][0]+precoArr[0][1]+'.'+precoArr[0].substr(2,precoArr[0].lenght)+','+precoArr[1];
		}
	

	function disableTextSelected(){
		$('body').css('-webkit-user-select','none');
		$('body').css('-moz-user-select','none');
		$('body').css('-ms-user-select','none');
		$('body').css('-o-user-select','none');
		$('body').css('-user-select','none');
	}

	function enableTextSelected(){
		$('body').css('-webkit-user-select','auto');
		$('body').css('-moz-user-select','auto');
		$('body').css('-ms-user-select','auto');
		$('body').css('-o-user-select','auto');
		$('body').css('-user-select','auto');
	}


//Script do slider dinâmico da pagina: Venda Individual

	//class mini img wraper => style="background-color:rgb(210, 210 ,210);" 
	//class foto destaque => style="background-image:url('imagens/carro1.jpg');"

	var imgShow = 3;
	var maxIndex = Math.ceil($('.mini-img-wraper').length/3) - 1;
	var curIndex = 0;

	function initiSlider(){
		var amt = $('.mini-img-wraper').length * 33.3;
		var elScroll = $('.nav-galeria-wraper');
		var elSingle = $('.mini-img-wraper');

		elScroll.css('width',amt+'%');
		elSingle.css('width',33.3*(100/amt)+'%');
	}

	function navigateSlider(){
		$('.nav-right-arrow').click(function(){
			if(curIndex < maxIndex){
				curIndex++;
				var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
				$('.nav-galeria').animate({'scrollLeft':elOff+'px'})
			}else{
				//console.log('Chegamos no fim!')
			};

		$('.nav-left-arrow').click(function(){
			if(curIndex > 0){
				curIndex--;
				var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
				$('.nav-galeria').animate({'scrollLeft':elOff+'px'})
			}else{
					//console.log('Chegamos no fim!')
			};

		})
	})
}

	function clickSlider(){
		$('.mini-img-wraper').click(function(){
			$('.mini-img-wraper').css('background-color','transparent');
			$(this).css('background-color','rgb(210,210,210)');
			
			var img = $(this).children().css('background-image');
			$('.foto-destaque').css('background-image',img);
		})

		$('.mini-img-wraper').eq(0).click();
	}

	$('nav a').click(function(){
		$(' header nav a').css('color','black');
		$(this).css('color','red');
		var href = $(this).attr('href');
		var tamanho = $(href).offset().top;

		$('html.body').animate({'scrollTop': tamanho});
	})


	initiSlider();
	navigateSlider();
	clickSlider();


//Menu Responsivo da pagina de vendas individual

	$('.mobile').click(function(){
		$(this).find('ul').slideToggle();
	})

})