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

    $('.signUpForm').hide();

    login.slideUp();
    login.stop().click(function () {

        $('.loginForm').fadeToggle(700);
        $('.signUpForm').fadeToggle(700);
        slider.css("transition", "all .3s cubic-bezier(.87,.32,.79,.6)");
        slider.css('margin-left', sliderMargin + "rem");
 slider.css("height","40rem");
        login.slideUp();
        signup.slideDown();
    });
    signup.stop().click(function () {
        $('.loginForm').fadeToggle(700);
        $('.signUpForm').fadeToggle(700);
        slider.css("transition", "all .5s cubic-bezier(.87,.32,.79,.6)");
        slider.css('margin-left', sliderMargin * 3 + "rem");
        signup.slideUp()
        login.slideDown();
        slider.css("height","45rem");
    });


    //Validation

    var luserName = $("#luserName");
    var lpassword = $("#lpassword");
    var susername = $("#suserName");
    var spassword = $("#spassword");
    var email = $("#email");

    $('input:text,input:password').focus(function () {

        $(this).css("border-bottom", "1.5px solid #ad0000");

    });
    var flagLUserName = -1;
    var flagLPassword = -1;
    var flagSUserName = -1;
    var flagSEmail = -1;
    var flagSPassword = -1;


    luserName.keyup(function () {
        var value = luserName.val();
        if (value.length > 3) {
            luserName.css("border-bottom", "1.5px solid #00e51a");
            flagLUserName = 1;
        } else {
            luserName.css("border-bottom", "1.5px solid #ad0000");
            flagLUserName = -1;
        }
    });

    lpassword.keyup(function () {
        var value = lpassword.val();
        if (value.length > 3) {
            lpassword.css("border-bottom", "1.5px solid #00e51a");
            flagLPassword = 1;
        } else {
            lpassword.css("border-bottom", "1.5px solid #ad0000");
            flagLPassword = -1;
        }

    });

    $(".loginForm").submit(function (event) {
        if (flagLUserName == -1) {
            $(".lUserNameDetail").text("Username Incorrect");
        } else {
            
            $("lUserNameDetail").empty();
        }
        if (flagLPassword == -1) {
            $(".lPasswordDetail").text("Password Incorrect");
        } else {
            $(".lPasswordDetail").empty();
        }
        
        
        if (flagLUserName == -1 || flagLPassword == -1) {
            event.preventDefault();
        } else {

        }

    });
    
    
    
    

});
