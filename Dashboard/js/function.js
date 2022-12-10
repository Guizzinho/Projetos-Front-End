$(window).on('load',function(){
    
    // animação da lupa do header

   $('#lupa').click(()=>{
            $('.pesquisa').animate({
                width: 'toggle'
            });
   })

//    

    // animação no header

   $('.colaboradores a').hover(function(){
        $(this).append('<div class="ln2"></div>');

        var ln2 = $('.ln2');
        
        ln2.fadeIn('slow');

        if(ln2.length > 1){
            ln2.remove();
        }
    })

// 

    // animação da notificacao
    
        $('#sino').click(function(){
            $('.notificacao').slideDown('slow');
        })


        $('.notificacao i').click(function(){
            $('.notificacao').slideUp('slow');
            return false;
        })
    
// 

    // animação da section atualização no mobile

        $('.swipe').click(function(){
            if($('.atualizacao').css('width') == '0px'){
                $('.atualizacao').animate({
                    width: '300px'
                },'linear');

                $(this).animate({
                    right: '305px'
                },'linear')

        }else if($('.atualizacao').css('width') == '300px'){
            
            $('.atualizacao').animate({
                width: '0px'
            },'linear');

            $(this).animate({
                right: '0px'
            },'fast','linear');

        }

    })

// 

    // animação sidebar
        $('#bars').click(function(){
            if($('.sidebar').is(':hidden')){
                $('.sidebar').animate({
                    width: 'show'
                },'linear')

                $('#bars').css('color','white');

            }else{
                $('.sidebar').animate({
                    width: 'hide'
                },'linear')

                $('#bars').css('color','#2d3035');
            }   
            
    })


       
// 
        
})