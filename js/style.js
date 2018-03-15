jQuery(document).ready(function($) {

    new WOW().init();
    
$(window).scroll(function() {

    var wScroll = $(this).scrollTop();
    var windowHeight = $(this).height();

    $('.parallax-heading').css ({
        'transform':'translate(0px , '+ wScroll/4 +'%)'
    });

    $('.parallax-image').css ({
        'transform':'translate(0px , -'+ wScroll/3 +'%) rotate(10deg)'
    });

    $('.parallax-image2').css ({
        'transform':'translate(0px , '+ wScroll +'%) rotate(-10deg)'
    });
});
});