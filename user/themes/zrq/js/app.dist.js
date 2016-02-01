$(document).ready(function() {

    // Initialize Parallax on Home Page
    if ($('section#home').length > 0) {
        $('#parallax1').css("background", "url(" + zrq1 + ") 50% 0 no-repeat fixed");
        // $('#parallaxLogo').css("background", "url(" + logoUrl + ") 50% 0 no-repeat fixed");
        $('#parallax2').css("background", "url(" + zrq2 + ") 50% 0 no-repeat fixed");
        $('#parallax3').css("background", "url(" + zrq3 + ") 50% 0 no-repeat fixed");
        $('#parallax1').parallax("50%", 0.1);
        // $('#parallaxLogo').parallax("50%", 0.7);
        $('#parallax2').parallax("50%", 0.6);
        $('#parallax3').parallax("50%", 0.3);
        $('body').addClass("home-page");
    } else {
        $('body').removeClass("home-page");
    }
});

//# sourceMappingURL=app.dist.js.map