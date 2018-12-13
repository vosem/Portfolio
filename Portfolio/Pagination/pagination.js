var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
                  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
                  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
                  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
                  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
                  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
                  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
                  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
                  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
                  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
                 ];

var itemsNumber = 15,
  displayedItemsNumber = 5,
  submitLayout = document.getElementsByClassName('submitLayout')[0],
  container = document.getElementById('container'),
  pagesContainer = document.getElementsByClassName('pages')[0],
  toPage = document.getElementsByClassName('toPage')[0],
  pageEntered = 1,
  pagesArray = [],
  itemsArray = [],
  submitPage = document.getElementsByClassName('submitPage')[0],
  activePageIndex = 0,
  spans = document.getElementsByTagName('span');

function paginate() {
  // creating items
  container.style.height = 'calc(' + displayedItemsNumber + '*45px + 9px)';
  for (var k = 0; k < itemsNumber; k++) {
    var div = document.createElement("div");
    div.innerHTML = k + 1;
    container.appendChild(div).classList.add('item');
  }

  var colorItem = 0;
  itemsArray = document.getElementsByClassName('item');
  for (var i = 0; i < itemsArray.length; i++) {
    itemsArray[i].style.backgroundColor = colorArray[colorItem];
    colorItem++;
    if (colorItem == colorArray.length - 1) {
      colorItem = 0;
    }
  }

  renderItems(0);

  // creating pages
  var pagesNumber = Math.ceil(itemsNumber / displayedItemsNumber);

  for (var n = 0; n < pagesNumber; n++) {
    var button = document.createElement("button");
    button.innerHTML = n + 1;
    pagesContainer.appendChild(button).classList.add('page');
  }

  pagesArray = Array.from(document.getElementsByClassName('page'));
  pagesArray[0].classList.add('active', 'shown');

  renderPages();
};

function renderPages() {
  for (var z = 0; z < pagesArray.length; z++) {
    pagesArray[z].classList.remove('shown');
  }
  while (spans[0]) {
    spans[0].parentElement.removeChild(spans[0]);
  }
  if (pagesArray.length <= 7) {
    console.log('starting function renderPages. Less tahn 8 pages');
    for (var d = 0; d < pagesArray.length; d++) {
      pagesArray[d].classList.add('shown');
    }
  } else if (pagesArray.length > 7) {
    console.log('starting function renderPages. More tahn 8 pages');
    for (var i = 0; i < 3; i++) {
      pagesArray[i].classList.add('shown');
    }

    activePageIndex = pagesArray.indexOf(document.getElementsByClassName('active')[0]);
    if ((activePageIndex > 2) && (activePageIndex < pagesArray.length - 3)) {
      for (var a = activePageIndex - 1; a <= activePageIndex + 1; a++) {
        pagesArray[a].classList.add('shown');
      }
      renderDots(pagesArray[activePageIndex - 1]);
    }

    var c = pagesArray.length - 3;
    var dotsSpot = pagesArray[c];
    renderDots(dotsSpot);

    for (c; c < pagesArray.length; c++) {
      pagesArray[c].classList.add('shown');
    }
  }
  removeDotsBetweenSiblings();
  removeDots();
}

function togglePages(context) {
  var currentButton = context;
  document.getElementsByClassName('active')[0].classList.remove('active');
  currentButton.classList.add('active');

  // toggling to the right
  if ((pagesArray.indexOf(currentButton) >= 0) && (pagesArray.indexOf(currentButton) < 5)) {
    for (var m = 4; m < pagesArray.length - 3; m++) {
      pagesArray[m].classList.remove('shown');
    }
    pagesArray[pagesArray.indexOf(currentButton)].classList.add('shown');
    if(pagesArray[pagesArray.indexOf(currentButton) + 1]) { pagesArray[pagesArray.indexOf(currentButton) + 1].classList.add('shown');}
  } else if ((pagesArray.indexOf(currentButton) >= 5) && (pagesArray.indexOf(currentButton) < pagesArray.length - 1)) {
    pagesArray[pagesArray.indexOf(currentButton) + 1].classList.add('shown');
    pagesArray[pagesArray.indexOf(currentButton) - 2].classList.remove('shown');
    for (var h = 2; h < pagesArray.indexOf(currentButton); h++) {
      if (pagesArray[h].nextElementSibling.tagName == 'SPAN') {
        pagesArray[h].parentElement.removeChild(pagesArray[h].nextElementSibling);

      };
    }
    renderDots(pagesArray[pagesArray.indexOf(currentButton) - 2]);
  }

  // toggling to the left
  if ((pagesArray.indexOf(currentButton) < pagesArray.length) && (pagesArray.indexOf(currentButton) > pagesArray.length - 6)) {
    for (var m = 3; m <= (pagesArray.length - 5); m++) {
      pagesArray[m].classList.remove('shown');
    }
    pagesArray[pagesArray.indexOf(currentButton)].classList.add('shown');
    if(pagesArray[pagesArray.indexOf(currentButton) - 1]) { pagesArray[pagesArray.indexOf(currentButton) - 1].classList.add('shown'); };
  } else if ((pagesArray.indexOf(currentButton) <= pagesArray.length - 6) && (pagesArray.indexOf(currentButton) > 1)) {
    pagesArray[pagesArray.indexOf(currentButton) - 1].classList.add('shown');
    pagesArray[pagesArray.indexOf(currentButton) + 2].classList.remove('shown');
    for (var h = pagesArray.length - 3; h > pagesArray.indexOf(currentButton); h--) {
      if (pagesArray[h].previousElementSibling.tagName == 'SPAN') {
        pagesArray[h].parentElement.removeChild(pagesArray[h].previousElementSibling);
      };
    }
    renderDots(pagesArray[pagesArray.indexOf(currentButton) + 2]);
  }

  removeDotsBetweenSiblings();
  removeDots();
  var pageIndex = pagesArray.indexOf(currentButton);
  renderItems(pageIndex);
};

function removeDots() {
  console.log('starting function removeDots');
  spansArray = Array.from(spans);
  var shownPages = [];
  if (spansArray.length > 1) {
    var firstPage,
      lastPage;
    for (var f = 0; f < spansArray.length; f++) {
      firstPage = pagesArray.indexOf(spansArray[f].nextElementSibling);
      if (spansArray[f + 1] == undefined) {
        continue;
      };
      lastPage = pagesArray.indexOf(spansArray[f + 1].previousElementSibling);
      for (var m = firstPage; m <= lastPage; m++) {
        if (pagesArray[m].classList.contains('shown')) {
          shownPages.push(pagesArray[m]);
        }
      }
      if (shownPages.length == 0) {
        spansArray[0].parentElement.removeChild(spansArray[0])
      };
    }
  }
};

function removeDotsBetweenSiblings() {
  console.log('starting function removeDotsBetweenSiblings');
  var pagesElement = Array.from(document.getElementsByClassName('pages'));
  var shownPages = document.getElementsByClassName('shown');
  for (var p = 0; p < spans.length; p++) {
    if (spans[p].previousSibling.classList.contains('shown') && spans[p].nextSibling.classList.contains('shown')) {
      spans[p].parentElement.removeChild(spans[p]);
    }
  }
}

function setPage() {
  console.log('starting function setPage');
  itemsArray = document.getElementsByClassName('item');
  pageEntered = Number(toPage.value) - 1;
  console.log(pageEntered);
  if ( pageEntered >= pagesArray.length ) {
    pageEntered = pagesArray.length-1; 
  } else if ( pageEntered < 1 ) {
    pageEntered = 0;
  } else if ( isNaN(pageEntered) ) {
    alert('There should be a number.');
    pageEntered = 0;
  };
  document.getElementsByClassName('active')[0].classList.remove('active');
  pagesArray[pageEntered].classList.add('active', 'shown');
  renderPages();
  // renderDots (pagesArray[pageEntered-1]);
  renderItems(pageEntered);
};

function renderItems(value) {
  var displayedFirstItemNumber = (value) * displayedItemsNumber,
    displayedLastItemNumber = (value) * displayedItemsNumber + displayedItemsNumber;
  for (var s = 0; s < itemsArray.length; s++) {
    itemsArray[s].style.display = 'none';
  }
  for (var q = displayedFirstItemNumber;
    (q < displayedLastItemNumber) && (q < itemsArray.length); q++) {
    itemsArray[q].style.display = 'block';
  }
};

function renderDots(refEl) {
  console.log('starting function renderDots');
  var dots = document.createElement("span");
  dots.innerHTML = '...';
  pagesContainer.insertBefore(dots, refEl);
  return dots;
};

function clear() {
  itemsArray = [];
  pagesArray = [];
  container.innerHTML = '';
  pagesContainer.innerHTML = '';
};


paginate();

submitLayout.addEventListener('click', function(e) {
  e.preventDefault();
  itemsNumber = Number(document.getElementsByClassName('elTotal')[0].value);
  displayedItemsNumber = Number(document.getElementsByClassName('elPerPage')[0].value);
  if (isNaN(itemsNumber) || itemsNumber < 1 || itemsNumber > 1000 || isNaN(displayedItemsNumber) || displayedItemsNumber < 1 || displayedItemsNumber > 1000) {
    alert('Oops! There shoul be a number between 1 and 1000.');
    itemsNumber = 1;
    displayedItemsNumber = 1;
  }
  if (itemsNumber < displayedItemsNumber) {
    displayedItemsNumber = itemsNumber;
  }
  clear();
  paginate();

  for (var l = 0; l < pagesArray.length; l++) {
    pagesArray[l].addEventListener('click', function() {
      togglePages(this);
    });
  };
});

// submitPage.addEventListener('click', function(e) {
//   e.preventDefault();
//   setPage();
//   document.getElementsByClassName('toPageForm')[0].reset();
// });

toPage.addEventListener('keypress', function(e) {
  console.log(toPage.value);
  console.log(e.keyCode);
  if( e.keyCode == 13) {
    e.preventDefault();
    setPage();
    document.getElementsByClassName('toPageForm')[0].reset();
  }
});

for (var l = 0; l < pagesArray.length; l++) {
  pagesArray[l].addEventListener('click', function() {
    togglePages(this);
  });
};