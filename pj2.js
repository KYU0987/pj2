$(document).ready(function(){

    $('#menubtn').click(function(){
        $('.Mmenu').addClass('on');
        $('body').addClass('no-scroll');
        $('#mbg').addClass('on');
    });

    function close(){
        $('.Mmenu').removeClass('on');
        $('body').removeClass('no-scroll');
        $('#mbg').removeClass('on');
    };

    $('#xbtn').click(close);
    $('#mbg').click(close);

    


    var startX, endX;
    var list=$('.freeconM>div>div>a>.imgM');

    $(list).each(function(index){
        $(this).on('touchstart',function(event){
            startX=event.originalEvent.changedTouches[0].screenX;
    });
    });
    
    $(list).each(function(index){
        $(this).on('touchend',function(event){
        endX=event.originalEvent.changedTouches[0].screenX;

        if(startX-endX>50){
            $(this).addClass('on');
            list.not($(this)).removeClass('on');
        }
        if(endX-startX>50){
            $(this).removeClass('on');
        }
    });
    });




    var swiper = new Swiper("#pClass", {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints:{
            768:{
                slidesPerView: 2,
                spaceBetween: 10
            },
            1280:{
                slidesPerView: 2,
                spaceBetween: 20
            }
        },
        navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
        });


    
});
