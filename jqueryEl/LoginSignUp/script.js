$(function () {

    var widthCont = 110;
    var slider = $('.slider');
    var login = $('.login');
    var signup = $('.signup');
    $('.container').css('width', widthCont + 'rem');
    var sliderMargin = widthCont / 4;
    var sliderWidth = $('.slider').css('width').replace('px', '');
    slider.css('transform', 'translateX(-' + sliderWidth / 2 + 'px)');

    console.log(sliderWidth);

    slider.css('margin-left', sliderMargin + "rem");

    $('.signUpForm').hide();
    
    login.fadeOut();
    login.stop().click(function () {
        
        $('.loginForm').fadeIn(400);
        $('.signUpForm').fadeOut(400);
        slider.css("transition", "all .3s cubic-bezier(.87,.32,.79,.6)");
        slider.css('margin-left', sliderMargin + "rem");
        
        login.fadeOut();
        signup.fadeIn();
    });
    signup.stop().click(function () {
        $('.loginForm').fadeOut(400);
        $('.signUpForm').fadeIn(400);
        slider.css("transition", "all .5s cubic-bezier(.87,.32,.79,.6)");
        slider.css('margin-left', sliderMargin * 3 + "rem");        
        signup.fadeOut()
        login.fadeIn();
        
    });

    
    
});
