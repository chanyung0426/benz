$(function () {

    $('.models_inner').slick({
        /* general */
        autoplay: true, // 자동 Slide = Rolling
        autoplaySpeed: 2000, // Slide후 대기 시간
        speed: 500, // Slide animate속도
        asNavFor: '.models_item_wrap',

        /* slide(carousel) */
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,

        /* etc */
        pauseOnHover: true,
        dots: false,

        /* custom arrows */
        arrows: true,

        /* responsive */
        responsive: [{
                breakpoint: 1930,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    })


    $('.models_item_wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.models_inner'
    });
 



$(function () {

    $('.ham').click(function(){
        $('nav').addClass('nav_on')
    })
    $('.close_btn').click(function(){
        $('nav').removeClass('nav_on')
    })

    $(window).resize(function(){
        var win_w = $(window).width()
        if(win_w >= 1280){
            $('.close_btn').click()
        }
    })
})


$(function(){

    $('.footer_menu_wrap a').click(function(){
        return false
    })
    
    $('.footer_menu_wrap h3').click(function(){
        $(this).parent().next().stop().slideToggle(500)
        console.log('test')
    })

    $(window).resize(function(){
        var win_w = $(window).width()
        if(win_w >= 1280){
            $('.footer_menu_wrap ul').show()
        } else {
            $('.footer_menu_wrap ul').hide()
        }
    }).resize()

})

})
