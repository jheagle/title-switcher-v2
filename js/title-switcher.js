// Created by Joshua Web Strategy

/*********************************************
Title Switcher: to imitate typing and switch to
different titles based on DOM.
Requires titles to be listed as elements
inside a div, pass the class of the div as an
agrumenet to TitleSwitcher.
**********************************************/
var TitleSwitcher = function (titlesContainer, switchStyle) {
	var switchStyle = switchStyle || 'typingEffect';
  this.currentClass = 'displayTitle';
  this.switchStyle = this[typeof this[switchStyle] === 'function' ? switchStyle : 'typingEffect'];
  this.titlesContainer = document.querySelectorAll(titlesContainer)[ 0 ];
  this.titles = this.titlesContainer.children;
	this.active = false;

  /**
	* This is the function to begin the switching titles
	*/
  this.startTitles = function (settings) {
		var settings = settings || {};
    var typeSurface = 'typeSurface';
		this.currentIndex = 0;
		this.delaySwitch = settings.delaySwitch || 400;
		this.delayEffect = settings.delayEffect || 200;
		this.isRandom = settings.isRandom || false;
		this.active = true;
		if (this.isRandom) {
      this.currentIndex = Math.round(Math.random() * (this.titles.length - 2)) + 1;
    }
    var currentTitle = this.titles[this.currentIndex];
    if (currentTitle.classList) {
      currentTitle.classList.add(this.currentClass);
    } else {
      currentTitle.className += ' ' + this.currentClass;
    }
    var self = this;
    var typeElement = this.titles[0].cloneNode(true);
    if (typeElement.classList) {
      typeElement.classList.add(typeSurface);
    } else {
      typeElement.className += ' ' + typeSurface;
    }
    if (typeElement.classList) {
      typeElement.classList.remove(this.currentClass);
    } else {
      typeElement.className = typeElement.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi' ), ' ');
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

	/**
	* This is the function to pause between switching
	*/
	this.pause = function (){
		this.active = false;
	}

	/**
	* This is the function to resume after a pause.
	*/
	this.resume = function (){
		if (!this.active){
			this.active = true;
			this.switchTitle(this.titles[this.currentIndex], this.switchStyle, this);
		}
	}

  /**
	* This is the core function for swtiching titles
	*/
  this.switchTitle = function (currentTitle, callBackFunction, self) {
    var self = self || this;
		var currentIndex = 1;
		var size = self.titles.length;
		for (var i = 1; i < size; ++i){
			if (self.titles[i] === currentTitle){
				currentIndex = i;
				break;
			}
		}
		if(!self.active){
			self.currentIndex = currentIndex;
			return self;
		}
    var maxIndex = self.titles.length - 1;
    var nextIndex = 1;
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

/**
* This is a helper function to improve the default 'typingEffect'
*/
TitleSwitcher.prototype.cursorBlink = function (blinkOn, self) { // display cursor effect
	var self = self || this;
  if (blinkOn) {
    self.typeSurface.innerHTML = self.typeSurface.innerHTML.replace(/\||&nbsp;*(\<\/span\>)?$/, '$1').trim();
    self.typeSurface.innerHTML = self.typeSurface.innerHTML + '<span style="display: inline-block;font-weight: normal; color: black; text-decoration: none">&#124;</span>';
  } else {
    self.typeSurface.innerHTML = self.typeSurface.innerHTML.replace(/\|(\<\/span\>)$/, '&nbsp;$1');
  };
};

/**
* This is the default and example of an effect being implemented when Titles are switched
* These functions take the currentElement in focus, the switchTitle function as a callback
* and an instance of the TitleSwitcher
*/
TitleSwitcher.prototype.typingEffect = function (domObject, callBackFunction, self) {
	var self = self || this;
	var size = self.titles.length;
	var currentIndex = 0;
	for (var i = 1; i < size; ++i){
		if (self.titles[i] === domObject){
			currentIndex = i;
			break;
		}
	}
  var domObject = domObject || self.titles[currentIndex + 1];
  var callBackFunction = callBackFunction || self.switchStyle;
  var blinkOn = true;
  var numBlinks = 4;
  if (self.typeSurface.hasAttribute('style')) {
    self.typeSurface.removeAttribute('style');
  }
  if (domObject.hasAttribute('style')) {
    self.typeSurface.setAttribute('style', domObject.getAttribute('style'));
  }
  self.typeSurface.innerHTML = '';
	self.typeSurface.style.display = 'block';

  for (var i = 0; i < numBlinks; ++i) {
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
          for (var j = 0; j < numBlinks * 2; ++j) {
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
