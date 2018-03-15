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

    // $('.parallax-office-div').css({
    //     opacity: function() {
    //       var elementHeight0 = $(this).height(),
    //           opacity0 =  (((Math.abs(wScroll - windowHeight) / wScroll))+0.2);
    //           console.log('wScroll' , wScroll);
    //           console.log('windowHeight',windowHeight);
    //           console.log('opacity0',opacity0);
              
    //       return opacity0;
    //     }
    //   });
    //   $('.parallax-residential-div').css({
    //     opacity: function() {
    //       var elementHeight1 = $(this).height(),
    //           opacity1 = ((1-(Math.abs(wScroll - windowHeight) / wScroll))+0.2);
    //           console.log('opacity1',opacity1);
    //       return opacity1;
    //     }
    //   });
    //   $('.parallax-commercial-div').css({
    //     opacity: function() {
    //       var elementHeight2 = $(this).height(),
    //           opacity2 = ((1-(Math.abs(wScroll - windowHeight) / wScroll))+0.2);
    //           console.log('opacity2',opacity2);
    //       return opacity2;
    //     }
    //   });
    //   $('.parallax-budget-div').css({
    //     opacity: function() {
    //       var elementHeight3 = $(this).height(),
    //           opacity3 = ((1-(Math.abs(wScroll - windowHeight) / wScroll))+0.2);
    //           console.log('opacity3',opacity3);
    //       return opacity3;
    //     }
    //   });

    // $('.parallax-div-text').css ({
    //     'transform':'translate(0px , -'+ wScroll/25 +'%)'
    // });
});