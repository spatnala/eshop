$(function () {
    $('.ad-slick-container').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
    });

    //caches a jQuery object containing the header element
    var header = $(".navbar.fixed-top");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            header.addClass("nav-shadow");
        } else {
            header.removeClass("nav-shadow");
        }
    });

    $("#productDdl").dropdown();

    //STICKY AD'S WRAPPER TO TOP WHEN IT REACHES TO TOP
    // USED IN VIDEO PLP AND PDP PAGES.
    //NEED TO WORK AROUND WHEN POSITION FIXED.
    //ALSO ADD SCREEN BELOW 767 DISABLE THE BELOW SCRIPT.
    // var stickySidebar = $('.sticky-ad-wrapper').offset().top;
    // $(window).scroll(function () {
    //     if ($(window).scrollTop() > stickySidebar) {
    //         $('.sticky-ad-wrapper').addClass('affix');
    //     }
    //     else {
    //         $('.sticky-ad-wrapper').removeClass('affix');
    //     }
    // });
    

    //JQUERY INFINIT SCROLL
    /*$(window).scroll(function() {
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
          //NEED TO PERFORM SOME ACTION AFTER BACKEND IS DONE.
        }
      });*/

      //PLP LIST VIEW OR GRID VIEW CHANGE SCRIPT START
      $('.switch-list-grid-wrapper a').click(function () {
        $('.switch-list-grid-wrapper a').removeClass('active');
        $(this).addClass('active');
        if ($('.grid-view a').hasClass('active')) {
            $('.products-list-wrapper').removeClass('plp-list-view');
        }
        else if ($('.list-view a').hasClass('active')) {
            $('.products-list-wrapper').addClass('plp-list-view');
        }
    });
});