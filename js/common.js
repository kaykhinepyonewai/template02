$(document).ready(function () {
    $('.btn-gnavi').on('click', function () {
        var rightVal = 0;
        if ($(this).hasClass('hb-open')) {
            rightVal = -1100;
            $(this).removeClass('hb-open');
        } else {
            $(this).addClass('hb-open');
        }

        $('.nav-gp').stop().animate({
            right: rightVal
        }, 200);
    });
})