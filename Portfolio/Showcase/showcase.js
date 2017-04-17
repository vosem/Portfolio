(function () {

    var enlargeButtonArr = document.getElementsByClassName('enlarge_button');
    var overlayPreviewPhotoArr = document.getElementsByClassName('overlay-preview_photo');
    var closeButtonArr = document.getElementsByClassName('close_button');

    for (var i = 0; i < enlargeButtonArr.length; i++) {
        
        enlargeButtonArr[i].onclick = function () {
            var index = [].indexOf.call(enlargeButtonArr, this);
            for (var j = 0; j <= overlayPreviewPhotoArr.length; j++) {
                overlayPreviewPhotoArr[index].style.display = 'block';
//                var elem = document.querySelectorAll('')
//                console.log()
            }
        };
        
        closeButtonArr[i].onclick = function () {
            var index = [].indexOf.call(closeButtonArr, this);
            for (var j = 0; j <= overlayPreviewPhotoArr.length; j++) {
                if (overlayPreviewPhotoArr[j] === overlayPreviewPhotoArr[index]) {
                    overlayPreviewPhotoArr[index].style.display = 'none';
                }
            }
        };
    }
    
   
    
})();