$(function () {
    $("#signup_btn").click(function () {
        $("#main").stop().animate({
            left: "22.5%"
        }, 400).animate({
            left: "30%"
        }, 500);

        $("#loginForm").css("visibility", "hidden");
        $("#loginForm").animate({
            left: "25%"
        }, 400).animate({
            left: "30%"
        }, 500);
        
         $("#signUpForm").animate({
            left: "17%"
        }, 400).animate({
            left: "30%"
        }, 500);
        $("#signUpForm").css("visibility", "visible");
    });

    $("#login_btn").click(function () {
        $("#main").stop().animate({
            left: "77.5%"
        }, 400).animate({
            left: "70%"
        }, 500);

        $("#loginForm").animate({
            left: "83.5%"
        }, 400).animate({
            left: "70%"
        }, 500);
        
        $("#loginForm").css("visibility", "visible");
        
        
           $("#signUpForm").css("visibility", "hidden");
        $("#signUpForm").animate({
            left: "80%"
        }, 400).animate({
            left: "75%"
        }, 500);
    });
});
