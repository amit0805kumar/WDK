$(function () {
    $(window).scroll(function () {


        var scrollVal = $(this).scrollTop();
        $("#logo").css("transform", "translate(0px,-" + scrollVal / 2 + "%)");
        $("#btn").css("transform", "translate(-50%," + scrollVal / 3 + "%)");

    });
});
