$(document).ready(function () {
    $(window).scroll( function(e) {

        if ($(this).scrollTop() > 350) {
            $('.top_btn').stop().fadeIn(600);

        } else {
            $('.top_btn').stop().fadeOut(600);

        }
    });

    $(".top_btn").click(function() {
        $('html, body').stop().animate({
            scrollTop : 0
        }, 400);
    });
})