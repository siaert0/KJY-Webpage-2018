$(document).ready(function () {

    $("article").on("mouseenter",function(e){
        $(this).stop().animate({
            "width":"37%"
        },1000,function(){
            $(this).children(".article_content").stop().animate({
                "opacity":"1",
            },350);
            $(this).find("h3").stop().animate({
                "right":"10px"
            },450);
            $(this).find("p").stop().animate({
                "right":"10px"
            },750);

        });
        $(this).children(".article_bg").stop().animate({
            "opacity":"0.7",
        },1700);
        $(this).find("h2").stop().css({
            "font-size" : "2rem"
        },1000)

    });


    $("article").on("mouseleave",function(){
        $(this).stop().animate({
            "width":"12%"
        }, 700);

        $(this).children(".article_bg").stop().animate({
            "opacity":"0",
        },1700);

        $(this).children(".article_content").stop().animate({
            "opacity":"0",
        },300);

        $(this).find("h3").stop().animate({
            "right":"-310px"
        },300);

        $(this).find("p").stop().animate({
            "right":"-310px"
        },500);

        $(this).find("h2").stop().css({
            "font-size" : "1.2rem"
        },1000)

    });


});