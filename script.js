$('.nav a').click(function(){
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
    let newActiveID = $(this).parent().prop('id');
    console.log(newActiveID);
    switch(newActiveID){
        case'AboutNav':
        // custom colors.
        console.log('A');
        break;
        case'ExpNav':
        console.log('B');
        break;
        case'ProjectsNav':
        console.log('C');
        break;
        case'CourseworkNav':
        console.log('D');
        break;
    }
});
