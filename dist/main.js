'use strict'

// Created by Joshua Heagle

/*********************************************
 Title Switcher: to imitate typing and switch to different titles based on DOM.
 Requires titles to be listed as elements inside a div, pass the class of the div as an argument to TitleSwitcher.
 **********************************************/
require('core-js/modules/es.symbol.to-primitive.js')
require('core-js/modules/es.date.to-primitive.js')
require('core-js/modules/es.symbol.js')
require('core-js/modules/es.symbol.description.js')
require('core-js/modules/es.number.constructor.js')
require('core-js/modules/es.object.define-property.js')
require('core-js/modules/es.symbol.iterator.js')
function _typeof (o) { '@babel/helpers - typeof'; return _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (o) { return typeof o } : function (o) { return o && typeof Symbol === 'function' && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o }, _typeof(o) }
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/es.regexp.exec.js')
require('core-js/modules/es.string.replace.js')
require('core-js/modules/es.regexp.constructor.js')
require('core-js/modules/es.regexp.sticky.js')
require('core-js/modules/es.regexp.to-string.js')
require('core-js/modules/es.array.join.js')
require('core-js/modules/es.array.for-each.js')
require('core-js/modules/es.object.to-string.js')
require('core-js/modules/es.string.trim.js')
require('core-js/modules/web.timers.js')
require('core-js/modules/esnext.async-iterator.for-each.js')
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.for-each.js')
require('core-js/modules/web.dom-collections.for-each.js')
require('core-js/modules/es.array.iterator.js')
require('core-js/modules/es.string.iterator.js')
require('core-js/modules/es.weak-map.js')
require('core-js/modules/esnext.weak-map.delete-all.js')
require('core-js/modules/web.dom-collections.iterator.js')
var _this = void 0
function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }
function _defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor) } }
function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, 'prototype', { writable: false }); return Constructor }
function _toPropertyKey (arg) { var key = _toPrimitive(arg, 'string'); return _typeof(key) === 'symbol' ? key : String(key) }
function _toPrimitive (input, hint) { if (_typeof(input) !== 'object' || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || 'default'); if (_typeof(res) !== 'object') return res; throw new TypeError('@@toPrimitive must return a primitive value.') } return (hint === 'string' ? String : Number)(input) }
function _classPrivateFieldInitSpec (obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value) }
function _checkPrivateRedeclaration (obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError('Cannot initialize the same private elements twice on an object') } }
function _classPrivateFieldGet (receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, 'get'); return _classApplyDescriptorGet(receiver, descriptor) }
function _classApplyDescriptorGet (receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver) } return descriptor.value }
function _classPrivateFieldSet (receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, 'set'); _classApplyDescriptorSet(receiver, descriptor, value); return value }
function _classExtractFieldDescriptor (receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError('attempted to ' + action + ' private field on non-instance') } return privateMap.get(receiver) }
function _classApplyDescriptorSet (receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value) } else { if (!descriptor.writable) { throw new TypeError('attempted to set read only private field') } descriptor.value = value } }
var _active = /* #__PURE__ */new WeakMap()
var _currentClass = /* #__PURE__ */new WeakMap()
var _currentIndex = /* #__PURE__ */new WeakMap()
var _delayEffect = /* #__PURE__ */new WeakMap()
var _delaySwitch = /* #__PURE__ */new WeakMap()
var _isRandom = /* #__PURE__ */new WeakMap()
var _switchStyle = /* #__PURE__ */new WeakMap()
var _titles = /* #__PURE__ */new WeakMap()
var _titlesContainer = /* #__PURE__ */new WeakMap()
var _typeSurface = /* #__PURE__ */new WeakMap()
var TitleSwitcher = /* #__PURE__ */(function () {
  /**
   * Instantiate this as a class to get an instance of TitleSwitcher
   * @param {string} [titlesContainer=''] - The selector where titles are stored
   * @param {Function|string} [switchStyle='typingEffect'] - The function or function name for the effect to apply
   * @constructor
   */
  function TitleSwitcher () {
    var titlesContainer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
    var switchStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'typingEffect'
    _classCallCheck(this, TitleSwitcher)
    _classPrivateFieldInitSpec(this, _active, {
      writable: true,
      value: false
    })
    _classPrivateFieldInitSpec(this, _currentClass, {
      writable: true,
      value: 'displayTitle'
    })
    _classPrivateFieldInitSpec(this, _currentIndex, {
      writable: true,
      value: 0
    })
    _classPrivateFieldInitSpec(this, _delayEffect, {
      writable: true,
      value: 200
    })
    _classPrivateFieldInitSpec(this, _delaySwitch, {
      writable: true,
      value: 400
    })
    _classPrivateFieldInitSpec(this, _isRandom, {
      writable: true,
      value: false
    })
    _classPrivateFieldInitSpec(this, _switchStyle, {
      writable: true,
      value: 'typingEffect'
    })
    _classPrivateFieldInitSpec(this, _titles, {
      writable: true,
      value: []
    })
    _classPrivateFieldInitSpec(this, _titlesContainer, {
      writable: true,
      value: null
    })
    _classPrivateFieldInitSpec(this, _typeSurface, {
      writable: true,
      value: void 0
    })
    _classPrivateFieldSet(this, _currentClass, 'displayTitle')
    _classPrivateFieldSet(this, _switchStyle, this[typeof this[switchStyle] === 'function' ? switchStyle : 'typingEffect'])
    _classPrivateFieldSet(this, _titlesContainer, titlesContainer)
    _classPrivateFieldSet(this, _titles, [])
    var foundContainers = titlesContainer ? document.querySelectorAll(titlesContainer) : []
    if (foundContainers && foundContainers[0]) {
      _classPrivateFieldSet(this, _titlesContainer, foundContainers[0])
      _classPrivateFieldSet(this, _titles, _classPrivateFieldGet(this, _titlesContainer).children)
    }
  }

  /**
   * Retrieve active
   * @return {boolean}
   */
  _createClass(TitleSwitcher, [{
    key: 'active',
    get: function get () {
      return _classPrivateFieldGet(this, _active)
    }

    /**
     * Retrieve currentClass
     * @return {string}
     */
  }, {
    key: 'currentClass',
    get: function get () {
      return _classPrivateFieldGet(this, _currentClass)
    }

    /**
     * Retrieve currentIndex
     * @return {number}
     */
  }, {
    key: 'currentIndex',
    get: function get () {
      return _classPrivateFieldGet(this, _currentIndex)
    }

    /**
     * Retrieve delayEffect
     * @return {number}
     */
  }, {
    key: 'delayEffect',
    get: function get () {
      return _classPrivateFieldGet(this, _delayEffect)
    }

    /**
     * Retrieve delaySwitch
     * @return {number}
     */
  }, {
    key: 'delaySwitch',
    get: function get () {
      return _classPrivateFieldGet(this, _delaySwitch)
    }

    /**
     * Retrieve switchStyle
     * @return {string}
     */
  }, {
    key: 'switchStyle',
    get: function get () {
      return _classPrivateFieldGet(this, _switchStyle)
    }

    /**
     * Retrieve list of titles DOM elements
     * @return {Array|NodeList}
     */
  }, {
    key: 'titles',
    get: function get () {
      return _classPrivateFieldGet(this, _titles)
    }

    /**
     * Retrieve typeSurface used
     * @return {HTMLElement|null}
     */
  }, {
    key: 'typeSurface',
    get: function get () {
      return _classPrivateFieldGet(this, _typeSurface)
    }

    /**
     * This is the function to begin the switching titles
     * @param {Object} [settings={}]
     * @param {number} [settings.delaySwitch=400]
     * @param {number} [settings.delayEffect=200]
     * @param {boolean} [settings.isRandom=false]
     * @param {boolean} [settings.immediatePause=false]
     * @returns {TitleSwitcher}
     */
  }, {
    key: 'startTitles',
    value: function startTitles () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
      var _ref$delaySwitch = _ref.delaySwitch
      var delaySwitch = _ref$delaySwitch === void 0 ? 400 : _ref$delaySwitch
      var _ref$delayEffect = _ref.delayEffect
      var delayEffect = _ref$delayEffect === void 0 ? 200 : _ref$delayEffect
      var _ref$isRandom = _ref.isRandom
      var isRandom = _ref$isRandom === void 0 ? false : _ref$isRandom
      var _ref$immediatePause = _ref.immediatePause
      var immediatePause = _ref$immediatePause === void 0 ? false : _ref$immediatePause
      var typeSurface = 'typeSurface'
      _classPrivateFieldSet(this, _delaySwitch, delaySwitch)
      _classPrivateFieldSet(this, _delayEffect, delayEffect)
      _classPrivateFieldSet(this, _isRandom, isRandom)
      _classPrivateFieldSet(this, _active, !immediatePause)
      if (_classPrivateFieldGet(this, _currentIndex) >= _classPrivateFieldGet(this, _titles).length) {
        _classPrivateFieldSet(this, _active, false)
        console.warn("No titles found for '".concat(_classPrivateFieldGet(this, _titlesContainer), "'"))
        return this
      }
      if (_classPrivateFieldGet(this, _isRandom)) {
        _classPrivateFieldSet(this, _currentIndex, Math.round(Math.random() * (_classPrivateFieldGet(this, _titles).length - 2)) + 1)
      }
      var currentTitle = _classPrivateFieldGet(this, _titles)[_classPrivateFieldGet(this, _currentIndex)]
      if (currentTitle.classList) {
        currentTitle.classList.add(_classPrivateFieldGet(this, _currentClass))
      } else {
        currentTitle.className += ' ' + _classPrivateFieldGet(this, _currentClass)
      }
      var typeElement = _classPrivateFieldGet(this, _titles)[0].cloneNode(true)
      if (typeElement.classList) {
        typeElement.classList.add(typeSurface)
      } else {
        typeElement.className += ' ' + typeSurface
      }
      if (typeElement.classList) {
        typeElement.classList.remove(_classPrivateFieldGet(this, _currentClass))
      } else {
        typeElement.className = typeElement.className.replace(new RegExp('(^|\\b)' + typeElement.className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
      }
      _classPrivateFieldGet(this, _titlesContainer).insertBefore(typeElement, _classPrivateFieldGet(this, _titlesContainer).firstChild)
      _classPrivateFieldSet(this, _typeSurface, _classPrivateFieldGet(this, _titlesContainer).querySelectorAll('.' + typeSurface)[0])
      _classPrivateFieldGet(this, _typeSurface).innerHTML = ''
      _classPrivateFieldGet(this, _typeSurface).style.display = 'block'
      Array.prototype.forEach.call(_classPrivateFieldGet(this, _titles), function (title) {
        title.style.display = 'none'
      })
      return this.switchTitle(_classPrivateFieldGet(this, _titles)[_classPrivateFieldGet(this, _currentIndex)], _classPrivateFieldGet(this, _switchStyle), this)
    }

    /**
     * This is the function to pause between switching
     */
  }, {
    key: 'pause',
    value: function pause () {
      _classPrivateFieldSet(this, _active, false)
    }

    /**
     * This is the function to resume after a pause.
     */
  }, {
    key: 'resume',
    value: function resume () {
      if (!_classPrivateFieldGet(this, _active)) {
        _classPrivateFieldSet(this, _active, true)
        this.switchTitle(_classPrivateFieldGet(this, _titles)[_classPrivateFieldGet(this, _currentIndex)], _classPrivateFieldGet(this, _switchStyle), this)
      }
    }

    /**
     * This is the core function for switching titles
     * @param {HTMLElement} currentTitle
     * @param {Function} callBackFunction
     * @param {TitleSwitcher} self
     * @param {boolean} [runOnce=false]
     * @returns {TitleSwitcher}
     */
  }, {
    key: 'switchTitle',
    value: function switchTitle (currentTitle, callBackFunction, self) {
      var runOnce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false
      self = self || this
      var currentIndex = 1
      var size = _classPrivateFieldGet(self, _titles).length
      for (var i = 1; i < size; ++i) {
        if (_classPrivateFieldGet(self, _titles)[i] === currentTitle) {
          currentIndex = i
          break
        }
      }
      if (!_classPrivateFieldGet(self, _active)) {
        _classPrivateFieldSet(self, _currentIndex, currentIndex)
        return self
      }
      var maxIndex = _classPrivateFieldGet(self, _titles).length - 1
      var nextIndex = 1
      if (maxIndex === 1) {
        return callBackFunction(currentTitle, self.switchTitle, self)
      }
      if (_classPrivateFieldGet(self, _isRandom)) {
        if (!self.typeSurface.textContent.trim()) {
          currentIndex = -1
        }
        do {
          nextIndex = Math.round(Math.random() * (maxIndex - 1)) + 1
        } while (nextIndex === currentIndex)
      } else {
        if (!self.typeSurface.textContent.trim()) {
          currentIndex = maxIndex
        }
        nextIndex = currentIndex < maxIndex ? currentIndex + 1 : 1
      }
      var nextTitle = _classPrivateFieldGet(self, _titles)[nextIndex]
      if (currentTitle.classList) {
        currentTitle.classList.remove(self.currentClass)
      } else {
        currentTitle.className = currentTitle.className.replace(new RegExp('(^|\\b)' + currentTitle.className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
      }
      if (nextTitle.classList) {
        nextTitle.classList.add(self.currentClass)
      } else {
        nextTitle.className += ' ' + self.currentClass
      }
      return callBackFunction(nextTitle, runOnce ? function () {
        return null
      } : self.switchTitle, self, runOnce)
    }
  }])
  return TitleSwitcher
}())
/**
 * This is a helper function to improve the default 'typingEffect'
 * @param {boolean} blinkOn
 * @param {TitleSwitcher} self
 * @return {TitleSwitcher}
 */
TitleSwitcher.prototype.cursorBlink = function (blinkOn, self) {
  // display cursor effect
  self = self || _this
  if (blinkOn) {
    self.typeSurface.innerHTML = self.typeSurface.innerHTML.replace(/\||&nbsp;*(<\/span>)?$/, '$1').trim()
    self.typeSurface.innerHTML = self.typeSurface.innerHTML + '<span style="display: inline-block;font-weight: normal; color: black; text-decoration: none">&#124;</span>'
  } else {
    self.typeSurface.innerHTML = self.typeSurface.innerHTML.replace(/\|(<\/span>)$/, '&nbsp;$1')
  }
  return self
}

/**
 * This is the default and example of an effect being implemented when Titles are switched
 * These functions take the currentElement in focus, the switchTitle function as a callback
 * and an instance of the TitleSwitcher
 * @param {HTMLElement} domObject
 * @param {Function} callBackFunction
 * @param {TitleSwitcher} self
 * @param {boolean} [runOnce=false]
 * @returns {TitleSwitcher}
 */
TitleSwitcher.prototype.typingEffect = function (domObject, callBackFunction, self) {
  var runOnce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false
  self = self || _this
  var size = self.titles.length
  var currentIndex = 0
  for (var i = 1; i < size; ++i) {
    if (self.titles[i] === domObject) {
      currentIndex = i
      break
    }
  }
  domObject = domObject || self.titles[currentIndex + 1]
  callBackFunction = callBackFunction || self.switchStyle
  var blinkOn = true
  var numBlinks = 4
  if (self.typeSurface.hasAttribute('style')) {
    self.typeSurface.removeAttribute('style')
  }
  if (domObject.hasAttribute('style')) {
    self.typeSurface.setAttribute('style', domObject.getAttribute('style'))
  }
  // If we copied the title style, then display:none is set, so we need to ensure the surface is display:block
  self.typeSurface.innerHTML = ''
  self.typeSurface.style.display = 'block'

  // Initialize with a few cursor blinks
  for (var _i = 0; _i < numBlinks; ++_i) {
    setTimeout(function () {
      self.cursorBlink(blinkOn, self)
      blinkOn = !blinkOn
    }, _i * self.delaySwitch)
  }
  setTimeout(function () {
    // Empty the surface, and display the cursor (cursor is always solid while typing / not flashing)
    self.typeSurface.innerHTML = ''
    self.cursorBlink(true, self)
    // Copy each letter from the current title (text only)
    domObject.textContent.split('').forEach(function (letter, i) {
      setTimeout(function () {
        // Remove the previous cursor, place the new letter, then append a formatted cursor on the end
        self.typeSurface.innerHTML = self.typeSurface.textContent.replace('|', '') + letter + '<span style="font-weight: normal; color: black; text-decoration: none">&#124;</span>'
        // If the text content equals the title content with a cursor appended then we reached the end.
        if (domObject.textContent + '|' === self.typeSurface.textContent) {
          // Replace html with old html on last letter, so we get all the html formatting applied
          self.typeSurface.innerHTML = domObject.innerHTML + '<span style="font-weight: normal; color: black; text-decoration: none">&#124;</span>'
          // Run the blinking cursor two times the regular time in order to let the text be readable before switching
          var _loop = function _loop (_j) {
            setTimeout(function () {
              --_j
              self.cursorBlink(blinkOn, self)
              if (_j === 0) {
                callBackFunction(domObject, function () {
                  return null
                }, self, runOnce)
                // callBackFunction(domObject, runOnce ? () => null : self.switchStyle, self, runOnce)
              }
            }, _j * self.delaySwitch)
            j = _j
          }
          for (var j = 0; j < numBlinks * 2; ++j) {
            _loop(j)
          }
        }
      }, i * self.delayEffect)
    })
  }, numBlinks * self.delaySwitch)
  return self
}
var _default = exports.default = TitleSwitcher
if (void 0) {
  (void 0).TitleSwitcher = TitleSwitcher
} else if (typeof window !== 'undefined') {
  window.TitleSwitcher = TitleSwitcher
}
