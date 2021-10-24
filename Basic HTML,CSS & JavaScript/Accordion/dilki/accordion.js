$(".accordion_box h3").click(function(){
    $(".accordion_box ul ul").slideUp("fast");
    if(!$(this).next().is(":visible")){
        $(this).next().slideDown("fast")
    }
})

