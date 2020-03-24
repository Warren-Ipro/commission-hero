setTimeout(function(){ 
    $('h3u span').addClass('active') 
}, 200);

$(window).on("scroll", function(){
    highlight();
});

function highlight(){
var scroll = $(window).scrollTop();
var height = $(window).height();

$(".highlight").each(function(){
    var pos = $(this).offset().top;
    if (scroll+height >= pos) {
    $(this).addClass("active");
    } 
});
}  

$(document).ready(function () {
    //your code here
  });