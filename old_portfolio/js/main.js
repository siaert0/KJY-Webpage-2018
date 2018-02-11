$(document).ready(function () {
    var colorArr = ['tomato','skyblue','seagreen','bisque','salmon','black'];
    var ranNum = 0;

    var typed = new Typed('.typed', {
        strings: ["FE Developer.", "Web Publisher.", "Good People."],
        stringsElement: null,
        typeSpeed: 120,
        startDelay: 1200,
        backSpeed: 70,
        backDelay: 550,
        loop: true,
        loopCount: false,
        showCursor: false,
        cursorChar: "|",
        contentType: 'html',
    });

    $('#scroll_icon').on('click', function() {
        $('html').animate({
            scrollTop: ($('#about').offset().top)
        }, 1000);
    });

    function logoColorChange(n) {
        var colorStr = colorArr[n];
        $('.logo').css('color',colorStr);
    }
    setInterval(function () {
        ranNum = Math.floor(Math.random()*6);
        logoColorChange(ranNum);
    },3000);




    $('#wrap .slide').each(function () {
        $(this).on('mousewheel', function (e) {
            e.preventDefault();
            var val = 0;
            var event = window.event;
            var $moveTop = null;

            if(event.wheelDelta) {
                val = event.wheelDelta / 120;
            }

            if (val < 0) {
                $moveTop = $(this).next().offset().top;
            } else {
                $moveTop = $(this).prev().offset().top;
            }

            $("html,body").stop().animate({
                scrollTop: $moveTop + 'px',

            }, {
                duration: 760, complete: function () {
                }
            });
        });
    });

    $(window).on('scroll', function() {
        $('#wrap .slide').each(function() {
            if($(window).scrollTop() >= $(this).offset().top) {
                var id = $(this).attr('id');
                $('.nav_menu ul li a').removeClass('active');
                $('.nav_menu ul li a[href=#'+ id +']').addClass('active');
            }
        });
    });

    $('.nav_menu ul li a').on('click', function(e) {
        $(this).children().find('a').removeClass('active');
        console.log($(this));
        $(this).addClass('active');
    });



    var $menu_check = $("#menu_toggle");
    var $mobile = $(".mobile");

    function menuToggleOn() {
        $mobile.stop().slideDown(550);
    }

    function menuToggleOut() {
        $mobile.stop().slideUp(300);
        $menu_check.prop("checked",false);
    }

    $menu_check.on('click',function () {
        if($(this).prop("checked")){
            menuToggleOn();
        }
        else {
            menuToggleOut();
        }
    })


    $('.mobile ul li a').on('click',function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $("html").stop().animate({
            scrollTop : ($(href).offset().top)
        }, function () {
            menuToggleOut();
        })
    })
})

