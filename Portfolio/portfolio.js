$(document).ready(function () {
    $(".intro_nav, .go_from_intro, .go_from_portfolio, .go_from_skills, .go_from_contacts").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr("href"),
                top = $(id).offset().top;
        $("body, html").animate({scrollTop: top}, 1500);
    });

    $('.intro_nav').addClass('appear_left_to_right');
    $('h1.name').addClass('zoomIn');
    $('.my_photo_image').addClass('flipY');
    $('div.my_photo_border').addClass('flipY');
    $('p.go_from_intro').addClass('appear_in');

    // code below allows animating after loading if (not scrolled and) located in visible area
    var portfolioItemsArray = document.querySelectorAll('div.portfolio_item');
    for (var i = 0; i < portfolioItemsArray.length; i++) {
        if ((portfolioItemsArray[i].getBoundingClientRect().top > 0) && (portfolioItemsArray[i].getBoundingClientRect().bottom < document.documentElement.clientHeight)) {
            portfolioItemsArray[i].classList.add('flip');
        }
    }
    var firstLiSkills = document.querySelector("li.skills_item");
    if ((firstLiSkills.getBoundingClientRect().top > 0) && (firstLiSkills.getBoundingClientRect().bottom < document.documentElement.clientHeight)) {
        $('li.skills_item').addClass('anim');
        var LiSkillsArr = document.querySelectorAll("li.anim");
        var delayCounter = 0;
        for (var i = 0; i < LiSkillsArr.length; i++) {
            LiSkillsArr[i].style.animationDelay = delayCounter + "ms";
            LiSkillsArr[i].style.WebkitAnimationDelay = delayCounter + "ms";
            delayCounter += 500;
        }
    }
    var skillsAbout = document.getElementsByClassName("about_skills")[0];
    if ((skillsAbout.getBoundingClientRect().top > 0) && (skillsAbout.getBoundingClientRect().top * 1.25 < document.documentElement.clientHeight)) {
        $('.about_skills').addClass('zoomIn');
    }

    // code below allows animating by scrolling
    $(window).scroll(function () {

        for (var i = 0; i < portfolioItemsArray.length; i++) {
            if ((portfolioItemsArray[i].getBoundingClientRect().top > 0) && (portfolioItemsArray[i].getBoundingClientRect().bottom < document.documentElement.clientHeight)) {
                portfolioItemsArray[i].classList.add('flip');
            }
        }

        var firstLiSkills = document.querySelector("li.skills_item");
        if ((firstLiSkills.getBoundingClientRect().top > 0) && (firstLiSkills.getBoundingClientRect().bottom < document.documentElement.clientHeight)) {
            $('li.skills_item').addClass('anim');
            var LiSkillsArr = document.querySelectorAll("li.anim");
            var delayCounter = 0;
            for (var i = 0; i < LiSkillsArr.length; i++) {
                LiSkillsArr[i].style.animationDelay = delayCounter + "ms";
                LiSkillsArr[i].style.WebkitAnimationDelay = delayCounter + "ms";
                delayCounter += 500;
            }
        }

        var skillsAbout = document.getElementsByClassName("about_skills")[0];
        if ((skillsAbout.getBoundingClientRect().top > 0) && (skillsAbout.getBoundingClientRect().top * 1.25 < document.documentElement.clientHeight)) {
            $('.about_skills').addClass('zoomIn');
        }
    });

    // SKILLS

    var diplBachelor = document.getElementsByClassName('bachelor')[0];
    diplBachelor.onclick = function () {
        diplBachelor.classList.toggle('enlarge');
    };
    var diplMaster = document.getElementsByClassName('master')[0];
    diplMaster.onclick = function () {
        diplMaster.classList.toggle('enlarge');
    };
    $(window).scroll(function () {
        if ($('enlarge')) {
            $('div.enlarge').removeClass('enlarge');
        }
    });



});

    // CONTACTS

    var contacts = document.getElementsByClassName('contacts_line'),
        contactsTextArray = [];

    for (var k = 0; k < contacts.length; k++){
        var currentContactsLine = contacts[k];
        
        for(var n = 0; n < currentContactsLine.innerHTML.length; n++){
            contactsTextArray.push('<span>' + currentContactsLine.innerHTML.charAt(n) + '</span>');
        }
        currentContactsLine.innerHTML = contactsTextArray.join('');
        var contactsSpans = currentContactsLine.childNodes;
        console.log(contactsSpans);

          var m = 0;
  var timerId = setInterval(function(contactsSpans) {
    var contactsSpans = contactsSpans;
    console.log(contactsSpans);
    if (m == (20)) clearInterval(timerId);
    // contactsSpans[0].style.opacity = '1';
    m++;
  }, 100);

        contactsTextArray = [];

    }

// function displayLetters(contactsSpans) {
//     var contactsSpans = contactsSpans;

// }
