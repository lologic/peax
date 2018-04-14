$( document ).ready(function() {
    $(".burger").click(function() {
        $("nav").toggle();
});

$("figure img").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
  $(this).removeClass("imgAnimation");
});

$("figure img").hover(function(){
  $(this).addClass("imgAnimation");
});
});
