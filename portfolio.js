$(document).ready(function(){
    $(".intro_nav, .go_from_intro, .go_from_portfolio, .go_from_skills, .go_from_contacts").on("click", "a", function (event) {
        event.preventDefault();
        var id  = $(this).attr("href"),
            top = $(id).offset().top;
        $("body, html").animate({scrollTop: top}, 1500);
    });

    $('h1').addClass('zoomIn');





});
