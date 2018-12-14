var left = document.getElementsByClassName('left')[0];
var right = document.getElementsByClassName('right')[0];
var imagesArray = Array.from(document.getElementsByClassName('imageItem'));
var indicatorsArray = Array.from(document.getElementsByClassName('indicator'));

// moving to the left
function leftMoove() {
  if (document.getElementsByClassName('active')[0] == imagesArray[imagesArray.length - 1]) {
    imagesArray[0].classList.remove('next');
  } else {
    document.getElementsByClassName('active')[0].nextSibling.classList.remove('next');
  }
  document.getElementsByClassName('active')[0].classList.add('next');
  document.getElementsByClassName('active')[0].classList.remove('active');
  document.getElementsByClassName('previous')[0].classList.add('active');
  document.getElementsByClassName('active')[0].classList.remove('previous');
  if (document.getElementsByClassName('active')[0] == imagesArray[0]) {
    imagesArray[imagesArray.length - 1].classList.add('previous');
  } else {
    document.getElementsByClassName('active')[0].previousSibling.classList.add('previous');
  }
}

// moving to the right
function rightMoove() {
  if (document.getElementsByClassName('active')[0] == imagesArray[0]) {
    imagesArray[imagesArray.length - 1].classList.remove('previous');
  } else {
    document.getElementsByClassName('active')[0].previousElementSibling.classList.remove('previous');
  }
  document.getElementsByClassName('active')[0].classList.add('previous');
  document.getElementsByClassName('active')[0].classList.remove('active');
  document.getElementsByClassName('next')[0].classList.add('active');
  document.getElementsByClassName('active')[0].classList.remove('next');
  if (document.getElementsByClassName('active')[0] == imagesArray[imagesArray.length - 1]) {
    imagesArray[0].classList.add('next');
  } else {
    document.getElementsByClassName('active')[0].nextElementSibling.classList.add('next');
  }
}

// enable unclickable indicators
function enableIndicator() {
  var index = imagesArray.indexOf(document.getElementsByClassName('active')[0]);
  for (var i = 0; i < indicatorsArray.length; i++) {
    if (i == index) {
      indicatorsArray[i].style.backgroundColor = 'rgba(255,255,255, 0.8)';
    } else {
      indicatorsArray[i].style.backgroundColor = 'transparent';
    }
  }
};

// enable clickable indicators
for (var i = 0; i < indicatorsArray.length; i++) {
  indicatorsArray[i].addEventListener('click', function() {
    var indicatorIndex = indicatorsArray.indexOf(this);
    for (var k = 0; k < indicatorsArray.length; k++) {
      indicatorsArray[k].style.backgroundColor = 'transparent';
    }
    this.style.backgroundColor = 'rgba(255,255,255, 0.6)';

    var currentActiveEl = imagesArray.indexOf(document.getElementsByClassName('active')[0]);
    if (currentActiveEl < indicatorIndex) {
      (function rightLoop() {
        rightMoove();
        setTimeout(function() {
          currentActiveEl++;
          if (currentActiveEl < indicatorIndex) {
            rightLoop();
          }
        }, 500);
      })();
    } else if (indicatorIndex < currentActiveEl) {
      (function leftLoop() {
        leftMoove();
        setTimeout(function() {
          currentActiveEl--;
          if (indicatorIndex < currentActiveEl) {
            leftLoop();
          }
        }, 500)
      })();
    }
  });
}

left.addEventListener('click', function() {
  leftMoove();
  enableIndicator();
})

right.addEventListener('click', function() {
  rightMoove();
  enableIndicator();
});

// handling swipes on mobile
var touchstartX = 0,
  touchstartY = 0,
  touchendX = 0,
  touchendY = 0;

var container = document.getElementById('container');

container.addEventListener('touchstart', function(event) {
  touchstartX = event.changedTouches[0].screenX;
  touchstartY = event.changedTouches[0].screenY;
}, false);

container.addEventListener('touchend', function(event) {
  touchendX = event.changedTouches[0].screenX;
  touchendY = event.changedTouches[0].screenY;
  handleSwipe();
}, false);

function handleSwipe() {
  if ((touchendX < touchstartX) && ((touchstartX - touchendX) > 50)) {
    rightMoove();
    enableIndicator();
  }
  if ((touchendX > touchstartX) && ((touchendX - touchstartX) > 50)) {
    leftMoove();
    enableIndicator();
  }
}