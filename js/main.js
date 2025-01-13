jQuery(document).ready(function(){

    // Counter
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    //myBtn
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#myBtn').fadeIn();
        } else{
            $('#myBtn').fadeOut();
        }
    });

   $("#myBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
   });
});





