(function () {
    var openingButton = document.getElementsByClassName('button1')[0];
    var enlarged = document.getElementsByClassName('overlay-preview_photos')[0];
    console.log(openingButton);
    console.log(enlarged);
    openingButton.onclick = function() {
        enlarged.style.display = 'block';
    };
    document.getElementsByClassName('close_button')[0].onclick = function () {
        enlarged.style.display = 'none';
    }
})();
