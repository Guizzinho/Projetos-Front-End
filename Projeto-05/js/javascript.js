$(window).on('load',function(){
    $('.nav-mobile i').click(function(){
        var el = $(this).parent().find('ul');

        if(el.is(':visible') == false){
            el.fadeIn();
        }else{
            el.fadeOut();
        }
    })

    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offSetTop =  $(href).offset().top;

        $('html,body').animate({'scrollTop': offSetTop});
    })
})