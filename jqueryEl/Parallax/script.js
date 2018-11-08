$(function () {
    
    
    var rellax = new Rellax('.rellax', {
    speed: -4,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
/*        var rellax2 = new Rellax('.rellax2', {
    speed: -1,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });*/
/*        var rellax3 = new Rellax('.rellax3', {
    speed: 0,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
    */
    
    
    
       new WOW().init();
    
    $(window).scroll(function () {


        var scrollVal = $(this).scrollTop();
        $("#logo").css("transform", "translate(0px,-" + scrollVal / 2 + "%)");
        $("#btn").css("transform", "translate(-50%," + scrollVal / 3 + "%)");


    });

    $(".project").hover3d({
        selector: ".project__card",
        shine: true,
        sensitivity: 20,

    });
    $("#main").hover3d({
        selector: "#logoImg",
        sensitivity: 20,
    });
});
