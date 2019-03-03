
function screenClass() {
    if($(window).innerWidth() > 960) {
        $('.advantag-grid').removeClass('owl-carousel');
    } else {
        $('.advantag-grid').addClass('owl-carousel');
            var owl2 = $('.advantag-grid');
            owl2.owlCarousel({
                items:1,
                loop:true,
                margin: 0,
                smartSpeed: 500,
                //autoplay: true,
                //autoHeight:true,
                nav: true,
                autoplayTimeout: 20000,
                autoplayHoverPause: false
            });
    }
}


screenClass();


$(window).bind('resize',function(){
    screenClass();
});

$(function() {


    var owl2 = $('.tutors-slider');
        owl2.owlCarousel({
            stagePadding: 120,
            items: 3,
            loop:true,
            margin: 40,
            smartSpeed: 500,
            //autoplay: true,
            //autoHeight:true,
            nav: true,
            autoplayTimeout: 20000,
            autoplayHoverPause: false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });


});
