$('.nav a').click(function(){
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
}); 

$('.btn-primary').click(function(){
    if($(this).children('span').hasClass('glyphicon-chevron-right')){
        $(this).children('span').removeClass('glyphicon-chevron-right');
        $(this).children('span').addClass('glyphicon-chevron-down');  
    }
    else{
        $(this).children('span').removeClass('glyphicon-chevron-down');
        $(this).children('span').addClass('glyphicon-chevron-right');
    }
});

