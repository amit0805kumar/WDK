$(function () {

    var widthCont = 110;
    var slider = $('.slider');
    var login = $('.login');
    var signup = $('.signup');
    $('.container').css('width', widthCont + 'rem');
    var sliderMargin = widthCont / 4;
    var sliderWidth = $('.slider').css('width').replace('px', '');
    slider.css('transform', 'translateX(-' + sliderWidth / 2 + 'px)');

    slider.css('margin-left', sliderMargin + "rem");

    login.stop().click(function () {
        slider.css('margin-left', sliderMargin + "rem");
    });
    signup.stop().click(function () {
        slider.css('margin-left', sliderMargin * 3 + "rem");
    });

});
