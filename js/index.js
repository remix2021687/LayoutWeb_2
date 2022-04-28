$(document).ready(function() {
    $(".topnav-down").click(function() {
        $("html, body").animate({
            scrollTop: $(".step-2-left").offset().top
        }, 1000);
    });
});