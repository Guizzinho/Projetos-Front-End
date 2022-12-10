$(window).on('load',function(){

    var el = '<div class="single-anot"><div class="faixa"><i class="fa-solid fa-xmark"></i></div><textarea name="anot" placeholder="Escrever uma anotação..."></textarea></div>'
    
    $('.border').click(function(){
        
        $('.container-anot').append(el);
        
        $('.single-anot').fadeIn();


        var text = $('.single-anot').last().find('faixa');

        var date = new Date();
        var hh = date.getHours();
        var mm = date.getMinutes();

        var finalTime = hh+":"+mm;

        $('.faixa').prepend('<p class="time">Nova anotação em: '+finalTime+'</p>');


        $('.faixa i').click(function(){
            $(this).parents('.single-anot').remove();
        }) 

    })

           

})