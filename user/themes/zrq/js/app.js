$(document).ready(function() {

    // Initialize Parallax on Home Page
    if ($('section#home').length > 0) {
        var speed = 0;

        for (var i = 0; i < imagesArr.length; i++) {
            if (i < 10) {
                switch (i) {
                    case 0:
                        speed = 0.1;
                        break;
                    case 1:
                        speed = 0.6;
                        break;
                    case 2:
                        speed = 0.3;
                        break;
                    default:
                        speed = 0.3;
                        break;
                }
                $('#parallax' + (i + 1)).css("background", "url(" + imagesArr[i] + ") 50% 0 no-repeat fixed");
                $('#parallax' + (i + 1)).parallax("50%", speed);
            }
        }
        $('body').addClass("home-page");
    } else {
        $('body').removeClass("home-page");
    }

    // initialize video formatting
    if ($('section#default-page').length > 0) {
        $("video").attr("poster", "images/transparent.png");
    }
});
