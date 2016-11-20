// Created by Joshua Web Strategy

/*********************************************
Title Switcher: to imitate typing and switch to
different titles based on DOM.
Requires titles to be listed as elements
inside a div, pass the class of the div as an
agrumenet to TitleSwitcher.
**********************************************/
var TitleSwitcher = function (titlesContainer, switchStyle) {
	switchStyle = switchStyle || 'typingEffect';
  this.currentClass = 'displayTitle';
  this.switchStyle = this[typeof this[switchStyle] === 'function' ? switchStyle : 'typingEffect'];
  this.titlesContainer = document.querySelectorAll( titlesContainer )[ 0 ];
  this.titles = this.titlesContainer.children;
  this.typeSurface = {};
  this.isRandom = false;
  this.delaySwitch = 400;
  this.delayEffect = 200;

  this.startTitles = function (settings) {
		this.delaySwitch = settings.delaySwitch || 400;
		this.delayEffect = settings.delayEffect || 200;
		this.isRandom = settings.isRandom || false;
		var currentIndex = 0;
		if (this.isRandom) {
      currentIndex = Math.round(Math.random() * (this.titles.length - 2)) + 1;
    }
    let typeSurface = 'typeSurface';
    let currentTitle = this.titles[currentIndex];
    if (currentTitle.classList) {
      currentTitle.classList.add(this.currentClass);
    } else {
      currentTitle.className += ' ' + this.currentClass;
    }
    let self = this;
    let typeElement = this.titles[0].cloneNode(true);
    if (typeElement.classList) {
      typeElement.classList.add(typeSurface);
    } else {
      typeElement.className += ' ' + typeSurface;
    }
    if (typeElement.classList) {
      typeElement.classList.remove(this.currentClass);
    } else {
      typeElement.className = typeElement.className.replace(new RegExp( '(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi' ), ' ');
    }
    this.titlesContainer.insertBefore(typeElement, this.titlesContainer.firstChild);
    this.typeSurface = this.titlesContainer.querySelectorAll('.' + typeSurface)[0];
    this.typeSurface.innerHTML = '';
    this.typeSurface.style.display = 'block';
    Array.prototype.forEach.call( this.titles, function (title, i) {
      title.style.display = 'none';
    });
    self.switchStyle(currentTitle, this.switchTitle, this);
  };

  this.switchTitle = function (currentTitle, callBackFunction, self) {
    var self = self || this;
		let currentIndex = 1;
		let size = self.titles.length;
		for (let i = 1; i < size; ++i){
			if (self.titles[i] === currentTitle){
				currentIndex = i;
				break;
			}
		}
    let maxIndex = self.titles.length - 1;
    let nextIndex = 1;
    if (maxIndex === 1) {
      return callBackFunction(currentTitle, self.switchTitle, self);
    }
    if (self.isRandom) {
      if (!self.typeSurface.textContent.trim()) {
        currentIndex = -1;
      }
      do {
        nextIndex = Math.round(Math.random() * (maxIndex - 1)) + 1;
      } while (nextIndex === currentIndex);
    } else {
      if (!self.typeSurface.textContent.trim()) {
        currentIndex = maxIndex;
      }
      nextIndex = currentIndex < maxIndex ? currentIndex + 1 : 1;
    }
    var nextTitle = self.titles[nextIndex];
    if (currentTitle.classList) {
      currentTitle.classList.remove(this.currentClass);
    } else {
      currentTitle.className = currentTitle.className.replace(new RegExp( '(^|\\b)' + className.split( ' ' ).join( '|' ) + '(\\b|$)', 'gi' ), ' ');
    }
    if (nextIndex.classList) {
      nextIndex.classList.add(this.currentClass);
    } else {
      nextIndex.className += ' ' + this.currentClass;
    }
    return callBackFunction(nextTitle, self.switchTitle, self);
  };
}

TitleSwitcher.prototype.cursorBlink = function (blinkOn, self) { // display cursor effect
	var self = self || this;
  if (blinkOn) {
    self.typeSurface.innerHTML = self.typeSurface.innerHTML.replace(/\||&nbsp;*(\<\/span\>)?$/, '$1').trim();
    self.typeSurface.innerHTML = self.typeSurface.innerHTML + '<span style="display: inline-block;font-weight: normal; color: black; text-decoration: none">&#124;</span>';
  } else {
    self.typeSurface.innerHTML = self.typeSurface.innerHTML.replace(/\|(\<\/span\>)$/, '&nbsp;$1');
  };
};

TitleSwitcher.prototype.typingEffect = function (domObject, callBackFunction, self) {
	var self = self || this;
	let size = self.titles.length;
	let currentIndex = 0;
	for (let i = 1; i < size; ++i){
		if (self.titles[i] === domObject){
			currentIndex = i;
			break;
		}
	}
  var domObject = domObject || self.titles[currentIndex + 1];
  var callBackFunction = callBackFunction || self.switchStyle;
  let blinkOn = true;
  let numBlinks = 4;
  if (self.typeSurface.hasAttribute('style')) {
    self.typeSurface.removeAttribute('style');
  }
  if (domObject.hasAttribute('style')) {
    self.typeSurface.setAttribute('style', domObject.getAttribute('style'));
  }
  self.typeSurface.innerHTML = '';
	self.typeSurface.style.display = 'block';

  for (let i = 0; i < numBlinks; ++i) {
    setTimeout(function () {
      self.cursorBlink(blinkOn, self);
      blinkOn = !blinkOn;
    }, i * self.delaySwitch);
  }

  setTimeout(function () {
    self.typeSurface.innerHTML = '';
    self.typeSurface.innerHTML = self.typeSurface.innerHTML + '<span style="font-weight: normal; color: black; text-decoration: none">&#124;</span>';
		domObject.textContent.split('').forEach(function(letter, i) {
      setTimeout(function() {
        self.typeSurface.innerHTML = self.typeSurface.textContent.replace('|', '') + letter + '<span style="font-weight: normal; color: black; text-decoration: none">&#124;</span>';
        // Replace html with old html on last letter
        if (domObject.textContent + '|' === self.typeSurface.textContent) {
          self.typeSurface.innerHTML = domObject.innerHTML + '<span style="font-weight: normal; color: black; text-decoration: none">&#124;</span>';
          for (let j = 0; j < numBlinks * 2; ++j) {
            setTimeout(function () {
              --j;
              self.cursorBlink(blinkOn, self);
              // blinkOn = !blinkOn;
              if (j === 0) {
                callBackFunction(domObject, self.switchStyle, self);
              }
            }, j * self.delaySwitch);
          }
        }
      }, i * self.delayEffect);
    });
  }, numBlinks * self.delaySwitch);
};
