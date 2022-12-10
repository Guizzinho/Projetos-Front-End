$(window).on('load',function(){

    //Script para o header dinâmico

    $('nav a').hover(function(){
        $('nav li').removeClass('selected');
        $(this).parent().addClass('selected');
    })

    //Script para a nav mobile

    $('.mobile i').click(function(){
        $('.mobile ul').slideToggle();
    })

    $('.mobile a').click(function(){
        $('.mobile ul').fadeOut();
    })

    //Script para auto scroll

    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html,body').animate({'scrollTop': offSetTop});
    })
    
})