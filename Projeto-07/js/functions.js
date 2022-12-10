
$(window).on('load',function(){

// Script para menu mobile

    $('.nav-mobile i').click(function(){
        $('.nav-mobile nav').slideToggle();
            $(this).css('z-index','4');
        if($(this).hasClass("fa-solid fa-xmark") == false){
            $(this).removeClass();
            $(this).addClass('fa-solid fa-xmark');
        }else{
            $(this).removeClass();
            $(this).addClass('fa-solid fa-bars-staggered');
        }
    })


    // Script para o scroll

    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offSet = $(href).offset().top;

        $('html,body').animate({'scrollTop': offSet});
    })

    
})