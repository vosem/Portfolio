$(document).ready(function(){
    $(".intro_nav, .go_from_intro, .go_from_portfolio, .go_from_skills, .go_from_contacts").on("click", "a", function (event) {
        event.preventDefault();
        var id  = $(this).attr("href"),
            top = $(id).offset().top;
        $("body, html").animate({scrollTop: top}, 1500);
    });

    $('h1.name').addClass('zoomIn');


    var h = $(window).height();
    $(window).scroll(function() {
        if (($(this).scrollTop() + h) >= $("div.portfolio_item").offset().top) {
            $('div.portfolio_item').addClass('flip');
        }
        if (($(this).scrollTop() + h) >= $("li.skills_item").offset().top) {
            $('li.skills_item').addClass('anim');
        }
        if (($(this).scrollTop() + h) >= $(".about_skills").offset().top) {
            $('.about_skills').addClass('zoomIn');
        }
    });

    // SKILLS

    var dipl = document.getElementsByClassName('diploma')[0];
    dipl.onclick = function () {
        dipl.classList.toggle('enlarge');
    };
    $(window).scroll(function() {
        if ($('enlarge')) {
            $('div.diploma').removeClass('enlarge');
        }
    });

});
