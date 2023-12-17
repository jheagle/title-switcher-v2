'use strict'

require('core-js/modules/es.symbol.to-primitive.js')
require('core-js/modules/es.date.to-primitive.js')
require('core-js/modules/es.symbol.js')
require('core-js/modules/es.symbol.description.js')
require('core-js/modules/es.number.constructor.js')
require('core-js/modules/es.symbol.iterator.js')
function _typeof (o) { '@babel/helpers - typeof'; return _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (o) { return typeof o } : function (o) { return o && typeof Symbol === 'function' && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o }, _typeof(o) }
require('core-js/modules/es.object.define-property.js')
require('core-js/modules/es.regexp.exec.js')
require('core-js/modules/es.string.replace.js')
require('core-js/modules/es.regexp.constructor.js')
require('core-js/modules/es.regexp.sticky.js')
require('core-js/modules/es.regexp.to-string.js')
require('core-js/modules/es.array.join.js')
require('core-js/modules/es.array.for-each.js')
require('core-js/modules/es.object.to-string.js')
require('core-js/modules/es.string.trim.js')
require('core-js/modules/es.array.iterator.js')
require('core-js/modules/es.string.iterator.js')
require('core-js/modules/es.weak-map.js')
require('core-js/modules/esnext.weak-map.delete-all.js')
require('core-js/modules/web.dom-collections.iterator.js')
require('core-js/modules/web.timers.js')
require('core-js/modules/esnext.async-iterator.for-each.js')
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.for-each.js')
require('core-js/modules/web.dom-collections.for-each.js')
var _this = void 0
function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }
function _defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor) } }
function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, 'prototype', { writable: false }); return Constructor }
function _toPropertyKey (t) { var i = _toPrimitive(t, 'string'); return _typeof(i) == 'symbol' ? i : String(i) }
function _toPrimitive (t, r) { if (_typeof(t) != 'object' || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || 'default'); if (_typeof(i) != 'object') return i; throw new TypeError('@@toPrimitive must return a primitive value.') } return (r === 'string' ? String : Number)(t) }
var __classPrivateFieldSet = void 0 && (void 0).__classPrivateFieldSet || function (receiver, state, value, kind, f) {
  if (kind === 'm') throw new TypeError('Private method is not writable')
  if (kind === 'a' && !f) throw new TypeError('Private accessor was defined without a setter')
  if (typeof state === 'function' ? receiver !== state || !f : !state.has(receiver)) throw new TypeError('Cannot write private member to an object whose class did not declare it')
  return kind === 'a' ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value
}
var __classPrivateFieldGet = void 0 && (void 0).__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === 'a' && !f) throw new TypeError('Private accessor was defined without a getter')
  if (typeof state === 'function' ? receiver !== state || !f : !state.has(receiver)) throw new TypeError('Cannot read private member from an object whose class did not declare it')
  return kind === 'm' ? f : kind === 'a' ? f.call(receiver) : f ? f.value : state.get(receiver)
}
var _TitleSwitcher_active, _TitleSwitcher_currentClass, _TitleSwitcher_currentIndex, _TitleSwitcher_delayEffect, _TitleSwitcher_delaySwitch, _TitleSwitcher_isRandom, _TitleSwitcher_titles, _TitleSwitcher_titlesContainer, _TitleSwitcher_switchStyle, _TitleSwitcher_typeSurface
Object.defineProperty(exports, '__esModule', {
  value: true
})
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
    _TitleSwitcher_active.set(this, false)
    _TitleSwitcher_currentClass.set(this, 'displayTitle')
    _TitleSwitcher_currentIndex.set(this, 0)
    _TitleSwitcher_delayEffect.set(this, 200)
    _TitleSwitcher_delaySwitch.set(this, 400)
    _TitleSwitcher_isRandom.set(this, false)
    _TitleSwitcher_titles.set(this, [])
    _TitleSwitcher_titlesContainer.set(this, '')
    _TitleSwitcher_switchStyle.set(this, void 0)
    _TitleSwitcher_typeSurface.set(this, void 0)
    __classPrivateFieldSet(this, _TitleSwitcher_currentClass, 'displayTitle', 'f')
    if (typeof switchStyle === 'string') {
      // @ts-ignore Obnoxious error "type 'string' can't be used to index type 'TitleSwitcher'"
      __classPrivateFieldSet(this, _TitleSwitcher_switchStyle, typeof this[switchStyle] === 'function' ? this[switchStyle] : this.typingEffect, 'f')
    } else {
      __classPrivateFieldSet(this, _TitleSwitcher_switchStyle, switchStyle, 'f')
    }
    __classPrivateFieldSet(this, _TitleSwitcher_titlesContainer, titlesContainer, 'f')
    __classPrivateFieldSet(this, _TitleSwitcher_titles, [], 'f')
    var foundContainers = titlesContainer ? document.querySelectorAll(titlesContainer) : []
    if (foundContainers && foundContainers[0]) {
      __classPrivateFieldSet(this, _TitleSwitcher_titlesContainer, foundContainers[0], 'f')
      __classPrivateFieldSet(this, _TitleSwitcher_titles, foundContainers[0].children, 'f')
    }
  }
  /**
   * Retrieve active
   * @return {boolean}
   */
  _createClass(TitleSwitcher, [{
    key: 'active',
    get: function get () {
      return __classPrivateFieldGet(this, _TitleSwitcher_active, 'f')
    }
    /**
     * Retrieve currentClass
     * @return {string}
     */
  }, {
    key: 'currentClass',
    get: function get () {
      return __classPrivateFieldGet(this, _TitleSwitcher_currentClass, 'f')
    }
    /**
     * Retrieve currentIndex
     * @return {number}
     */
  }, {
    key: 'currentIndex',
    get: function get () {
      return __classPrivateFieldGet(this, _TitleSwitcher_currentIndex, 'f')
    }
    /**
     * Retrieve delayEffect
     * @return {number}
     */
  }, {
    key: 'delayEffect',
    get: function get () {
      return __classPrivateFieldGet(this, _TitleSwitcher_delayEffect, 'f')
    }
    /**
     * Retrieve delaySwitch
     * @return {number}
     */
  }, {
    key: 'delaySwitch',
    get: function get () {
      return __classPrivateFieldGet(this, _TitleSwitcher_delaySwitch, 'f')
    }
    /**
     * Retrieve switchStyle
     * @return {Function}
     */
  }, {
    key: 'switchStyle',
    get: function get () {
      return __classPrivateFieldGet(this, _TitleSwitcher_switchStyle, 'f')
    }
    /**
     * Retrieve list of titles DOM elements
     * @return {Array<HTMLElement>|HTMLCollection}
     */
  }, {
    key: 'titles',
    get: function get () {
      return __classPrivateFieldGet(this, _TitleSwitcher_titles, 'f')
    }
    /**
     * Retrieve typeSurface used
     * @return {HTMLElement|null}
     */
  }, {
    key: 'typeSurface',
    get: function get () {
      return __classPrivateFieldGet(this, _TitleSwitcher_typeSurface, 'f')
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
      __classPrivateFieldSet(this, _TitleSwitcher_delaySwitch, delaySwitch, 'f')
      __classPrivateFieldSet(this, _TitleSwitcher_delayEffect, delayEffect, 'f')
      __classPrivateFieldSet(this, _TitleSwitcher_isRandom, isRandom, 'f')
      __classPrivateFieldSet(this, _TitleSwitcher_active, !immediatePause, 'f')
      if (__classPrivateFieldGet(this, _TitleSwitcher_currentIndex, 'f') >= __classPrivateFieldGet(this, _TitleSwitcher_titles, 'f').length || typeof __classPrivateFieldGet(this, _TitleSwitcher_titlesContainer, 'f') === 'string') {
        __classPrivateFieldSet(this, _TitleSwitcher_active, false, 'f')
        console.warn("No titles found for '".concat(__classPrivateFieldGet(this, _TitleSwitcher_titlesContainer, 'f'), "'"))
        return this
      }
      if (__classPrivateFieldGet(this, _TitleSwitcher_isRandom, 'f')) {
        __classPrivateFieldSet(this, _TitleSwitcher_currentIndex, Math.round(Math.random() * (__classPrivateFieldGet(this, _TitleSwitcher_titles, 'f').length - 2)) + 1, 'f')
      }
      var currentTitle = __classPrivateFieldGet(this, _TitleSwitcher_titles, 'f')[__classPrivateFieldGet(this, _TitleSwitcher_currentIndex, 'f')]
      if (currentTitle.classList) {
        currentTitle.classList.add(__classPrivateFieldGet(this, _TitleSwitcher_currentClass, 'f'))
      } else {
        currentTitle.className += ' ' + __classPrivateFieldGet(this, _TitleSwitcher_currentClass, 'f')
      }
      // @ts-ignore The Node returned is of type Element, or it should be
      var typeElement = __classPrivateFieldGet(this, _TitleSwitcher_titles, 'f')[0].cloneNode(true)
      if (typeElement.classList) {
        typeElement.classList.add(typeSurface)
      } else {
        typeElement.className += ' ' + typeSurface
      }
      if (typeElement.classList) {
        typeElement.classList.remove(__classPrivateFieldGet(this, _TitleSwitcher_currentClass, 'f'))
      } else {
        typeElement.className = typeElement.className.replace(new RegExp('(^|\\b)' + typeElement.className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
      }
      __classPrivateFieldGet(this, _TitleSwitcher_titlesContainer, 'f').insertBefore(typeElement, __classPrivateFieldGet(this, _TitleSwitcher_titlesContainer, 'f').firstChild)
      // @ts-ignore the returned Node is a type of HTMLElement
      __classPrivateFieldSet(this, _TitleSwitcher_typeSurface, __classPrivateFieldGet(this, _TitleSwitcher_titlesContainer, 'f').querySelectorAll('.' + typeSurface)[0], 'f')
      __classPrivateFieldGet(this, _TitleSwitcher_typeSurface, 'f').innerHTML = ''
      __classPrivateFieldGet(this, _TitleSwitcher_typeSurface, 'f').style.display = 'block'
      Array.prototype.forEach.call(__classPrivateFieldGet(this, _TitleSwitcher_titles, 'f'), function (title) {
        title.style.display = 'none'
      })
      return this.switchTitle(__classPrivateFieldGet(this, _TitleSwitcher_titles, 'f')[__classPrivateFieldGet(this, _TitleSwitcher_currentIndex, 'f')], __classPrivateFieldGet(this, _TitleSwitcher_switchStyle, 'f'), this)
    }
    /**
     * This is the function to pause between switching
     */
  }, {
    key: 'pause',
    value: function pause () {
      __classPrivateFieldSet(this, _TitleSwitcher_active, false, 'f')
    }
    /**
     * This is the function to resume after a pause.
     */
  }, {
    key: 'resume',
    value: function resume () {
      if (!__classPrivateFieldGet(this, _TitleSwitcher_active, 'f')) {
        __classPrivateFieldSet(this, _TitleSwitcher_active, true, 'f')
        this.switchTitle(__classPrivateFieldGet(this, _TitleSwitcher_titles, 'f')[__classPrivateFieldGet(this, _TitleSwitcher_currentIndex, 'f')], __classPrivateFieldGet(this, _TitleSwitcher_switchStyle, 'f'), this)
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
      var size = __classPrivateFieldGet(self, _TitleSwitcher_titles, 'f').length
      for (var i = 1; i < size; ++i) {
        if (__classPrivateFieldGet(self, _TitleSwitcher_titles, 'f')[i] === currentTitle) {
          currentIndex = i
          break
        }
      }
      if (!__classPrivateFieldGet(self, _TitleSwitcher_active, 'f')) {
        __classPrivateFieldSet(self, _TitleSwitcher_currentIndex, currentIndex, 'f')
        return self
      }
      var maxIndex = __classPrivateFieldGet(self, _TitleSwitcher_titles, 'f').length - 1
      var nextIndex = 1
      if (maxIndex === 1) {
        return callBackFunction(currentTitle, runOnce ? function () {
          return self
        } : self.switchTitle, self, runOnce)
      }
      if (__classPrivateFieldGet(self, _TitleSwitcher_isRandom, 'f')) {
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
      var nextTitle = __classPrivateFieldGet(self, _TitleSwitcher_titles, 'f')[nextIndex]
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
        return self
      } : self.switchTitle, self, runOnce)
    }
  }])
  return TitleSwitcher
}())
_TitleSwitcher_active = new WeakMap(), _TitleSwitcher_currentClass = new WeakMap(), _TitleSwitcher_currentIndex = new WeakMap(), _TitleSwitcher_delayEffect = new WeakMap(), _TitleSwitcher_delaySwitch = new WeakMap(), _TitleSwitcher_isRandom = new WeakMap(), _TitleSwitcher_titles = new WeakMap(), _TitleSwitcher_titlesContainer = new WeakMap(), _TitleSwitcher_switchStyle = new WeakMap(), _TitleSwitcher_typeSurface = new WeakMap()
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
                callBackFunction(domObject, runOnce ? function () {
                  return self
                } : self.switchStyle, self, runOnce)
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
exports.default = TitleSwitcher
if (void 0) {
  // @ts-ignore 'this' is used in node as the global, and the key CAN be referenced by string
  (void 0).TitleSwitcher = TitleSwitcher
} else if (typeof window !== 'undefined') {
  // @ts-ignore YES, we can use a string to add a property to Window
  window.TitleSwitcher = TitleSwitcher
}
