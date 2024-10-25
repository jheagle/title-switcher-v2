(function () { function r (e, n, t) { function o (i, f) { if (!n[i]) { if (!e[i]) { var c = typeof require === 'function' && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = 'MODULE_NOT_FOUND', a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = typeof require === 'function' && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
  1: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.symbol.js')
    require('core-js/modules/es.symbol.description.js')
    require('core-js/modules/es.symbol.iterator.js')
    require('core-js/modules/es.symbol.to-primitive.js')
    require('core-js/modules/es.date.to-primitive.js')
    require('core-js/modules/es.number.constructor.js')
    function _typeof (o) { '@babel/helpers - typeof'; return _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (o) { return typeof o } : function (o) { return o && typeof Symbol === 'function' && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o }, _typeof(o) }
    require('core-js/modules/es.array.for-each.js')
    require('core-js/modules/es.array.iterator.js')
    require('core-js/modules/es.array.join.js')
    require('core-js/modules/es.object.define-property.js')
    require('core-js/modules/es.object.to-string.js')
    require('core-js/modules/es.regexp.constructor.js')
    require('core-js/modules/es.regexp.exec.js')
    require('core-js/modules/es.regexp.sticky.js')
    require('core-js/modules/es.regexp.to-string.js')
    require('core-js/modules/es.string.iterator.js')
    require('core-js/modules/es.string.replace.js')
    require('core-js/modules/es.string.trim.js')
    require('core-js/modules/es.weak-map.js')
    require('core-js/modules/esnext.async-iterator.for-each.js')
    require('core-js/modules/esnext.iterator.constructor.js')
    require('core-js/modules/esnext.iterator.for-each.js')
    require('core-js/modules/esnext.weak-map.delete-all.js')
    require('core-js/modules/web.dom-collections.for-each.js')
    require('core-js/modules/web.dom-collections.iterator.js')
    require('core-js/modules/web.timers.js')
    var _this = void 0
    function _classCallCheck (a, n) { if (!(a instanceof n)) throw new TypeError('Cannot call a class as a function') }
    function _defineProperties (e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o) } }
    function _createClass (e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e }
    function _toPropertyKey (t) { var i = _toPrimitive(t, 'string'); return _typeof(i) == 'symbol' ? i : i + '' }
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
      return _createClass(TitleSwitcher, [{
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
  }, { 'core-js/modules/es.array.for-each.js': 153, 'core-js/modules/es.array.iterator.js': 154, 'core-js/modules/es.array.join.js': 155, 'core-js/modules/es.date.to-primitive.js': 156, 'core-js/modules/es.number.constructor.js': 158, 'core-js/modules/es.object.define-property.js': 159, 'core-js/modules/es.object.to-string.js': 161, 'core-js/modules/es.regexp.constructor.js': 162, 'core-js/modules/es.regexp.exec.js': 163, 'core-js/modules/es.regexp.sticky.js': 164, 'core-js/modules/es.regexp.to-string.js': 165, 'core-js/modules/es.string.iterator.js': 166, 'core-js/modules/es.string.replace.js': 167, 'core-js/modules/es.string.trim.js': 168, 'core-js/modules/es.symbol.description.js': 170, 'core-js/modules/es.symbol.iterator.js': 172, 'core-js/modules/es.symbol.js': 173, 'core-js/modules/es.symbol.to-primitive.js': 175, 'core-js/modules/es.weak-map.js': 177, 'core-js/modules/esnext.async-iterator.for-each.js': 178, 'core-js/modules/esnext.iterator.constructor.js': 179, 'core-js/modules/esnext.iterator.for-each.js': 180, 'core-js/modules/esnext.weak-map.delete-all.js': 181, 'core-js/modules/web.dom-collections.for-each.js': 182, 'core-js/modules/web.dom-collections.iterator.js': 183, 'core-js/modules/web.timers.js': 186 }],
  2: [function (require, module, exports) {
    'use strict'
    var isCallable = require('../internals/is-callable')
    var tryToString = require('../internals/try-to-string')

    var $TypeError = TypeError

    // `Assert: IsCallable(argument) is true`
    module.exports = function (argument) {
      if (isCallable(argument)) return argument
      throw new $TypeError(tryToString(argument) + ' is not a function')
    }
  }, { '../internals/is-callable': 75, '../internals/try-to-string': 142 }],
  3: [function (require, module, exports) {
    'use strict'
    var isPossiblePrototype = require('../internals/is-possible-prototype')

    var $String = String
    var $TypeError = TypeError

    module.exports = function (argument) {
      if (isPossiblePrototype(argument)) return argument
      throw new $TypeError("Can't set " + $String(argument) + ' as a prototype')
    }
  }, { '../internals/is-possible-prototype': 80 }],
  4: [function (require, module, exports) {
    'use strict'
    var has = require('../internals/weak-map-helpers').has

    // Perform ? RequireInternalSlot(M, [[WeakMapData]])
    module.exports = function (it) {
      has(it)
      return it
    }
  }, { '../internals/weak-map-helpers': 148 }],
  5: [function (require, module, exports) {
    'use strict'
    var wellKnownSymbol = require('../internals/well-known-symbol')
    var create = require('../internals/object-create')
    var defineProperty = require('../internals/object-define-property').f

    var UNSCOPABLES = wellKnownSymbol('unscopables')
    var ArrayPrototype = Array.prototype

    // Array.prototype[@@unscopables]
    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    if (ArrayPrototype[UNSCOPABLES] === undefined) {
      defineProperty(ArrayPrototype, UNSCOPABLES, {
        configurable: true,
        value: create(null)
      })
    }

    // add a key to Array.prototype[@@unscopables]
    module.exports = function (key) {
      ArrayPrototype[UNSCOPABLES][key] = true
    }
  }, { '../internals/object-create': 93, '../internals/object-define-property': 95, '../internals/well-known-symbol': 151 }],
  6: [function (require, module, exports) {
    'use strict'
    var charAt = require('../internals/string-multibyte').charAt

    // `AdvanceStringIndex` abstract operation
    // https://tc39.es/ecma262/#sec-advancestringindex
    module.exports = function (S, index, unicode) {
      return index + (unicode ? charAt(S, index).length : 1)
    }
  }, { '../internals/string-multibyte': 126 }],
  7: [function (require, module, exports) {
    'use strict'
    var isPrototypeOf = require('../internals/object-is-prototype-of')

    var $TypeError = TypeError

    module.exports = function (it, Prototype) {
      if (isPrototypeOf(Prototype, it)) return it
      throw new $TypeError('Incorrect invocation')
    }
  }, { '../internals/object-is-prototype-of': 102 }],
  8: [function (require, module, exports) {
    'use strict'
    var isObject = require('../internals/is-object')

    var $String = String
    var $TypeError = TypeError

    // `Assert: Type(argument) is Object`
    module.exports = function (argument) {
      if (isObject(argument)) return argument
      throw new $TypeError($String(argument) + ' is not an object')
    }
  }, { '../internals/is-object': 79 }],
  9: [function (require, module, exports) {
    'use strict'
    // FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
    var fails = require('../internals/fails')

    module.exports = fails(function () {
      if (typeof ArrayBuffer === 'function') {
        var buffer = new ArrayBuffer(8)
        // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
        if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 })
      }
    })
  }, { '../internals/fails': 45 }],
  10: [function (require, module, exports) {
    'use strict'
    var $forEach = require('../internals/array-iteration').forEach
    var arrayMethodIsStrict = require('../internals/array-method-is-strict')

    var STRICT_METHOD = arrayMethodIsStrict('forEach')

    // `Array.prototype.forEach` method implementation
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    module.exports = !STRICT_METHOD ? function forEach (callbackfn /* , thisArg */) {
      return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
      // eslint-disable-next-line es/no-array-prototype-foreach -- safe
    } : [].forEach
  }, { '../internals/array-iteration': 12, '../internals/array-method-is-strict': 13 }],
  11: [function (require, module, exports) {
    'use strict'
    var toIndexedObject = require('../internals/to-indexed-object')
    var toAbsoluteIndex = require('../internals/to-absolute-index')
    var lengthOfArrayLike = require('../internals/length-of-array-like')

    // `Array.prototype.{ indexOf, includes }` methods implementation
    var createMethod = function (IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = toIndexedObject($this)
        var length = lengthOfArrayLike(O)
        if (length === 0) return !IS_INCLUDES && -1
        var index = toAbsoluteIndex(fromIndex, length)
        var value
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el !== el) {
          while (length > index) {
            value = O[index++]
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value !== value) return true
          // Array#indexOf ignores holes, Array#includes - not
          }
        } else {
          for (;length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0
          }
        } return !IS_INCLUDES && -1
      }
    }

    module.exports = {
      // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    }
  }, { '../internals/length-of-array-like': 90, '../internals/to-absolute-index': 133, '../internals/to-indexed-object': 134 }],
  12: [function (require, module, exports) {
    'use strict'
    var bind = require('../internals/function-bind-context')
    var uncurryThis = require('../internals/function-uncurry-this')
    var IndexedObject = require('../internals/indexed-object')
    var toObject = require('../internals/to-object')
    var lengthOfArrayLike = require('../internals/length-of-array-like')
    var arraySpeciesCreate = require('../internals/array-species-create')

    var push = uncurryThis([].push)

    // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
    var createMethod = function (TYPE) {
      var IS_MAP = TYPE === 1
      var IS_FILTER = TYPE === 2
      var IS_SOME = TYPE === 3
      var IS_EVERY = TYPE === 4
      var IS_FIND_INDEX = TYPE === 6
      var IS_FILTER_REJECT = TYPE === 7
      var NO_HOLES = TYPE === 5 || IS_FIND_INDEX
      return function ($this, callbackfn, that, specificCreate) {
        var O = toObject($this)
        var self = IndexedObject(O)
        var length = lengthOfArrayLike(self)
        var boundFunction = bind(callbackfn, that)
        var index = 0
        var create = specificCreate || arraySpeciesCreate
        var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined
        var value, result
        for (;length > index; index++) {
          if (NO_HOLES || index in self) {
            value = self[index]
            result = boundFunction(value, index, O)
            if (TYPE) {
              if (IS_MAP) target[index] = result // map
              else if (result) {
                switch (TYPE) {
                  case 3: return true // some
                  case 5: return value // find
                  case 6: return index // findIndex
                  case 2: push(target, value) // filter
                }
              } else {
                switch (TYPE) {
                  case 4: return false // every
                  case 7: push(target, value) // filterReject
                }
              }
            }
          }
        }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target
      }
    }

    module.exports = {
      // `Array.prototype.forEach` method
      // https://tc39.es/ecma262/#sec-array.prototype.foreach
      forEach: createMethod(0),
      // `Array.prototype.map` method
      // https://tc39.es/ecma262/#sec-array.prototype.map
      map: createMethod(1),
      // `Array.prototype.filter` method
      // https://tc39.es/ecma262/#sec-array.prototype.filter
      filter: createMethod(2),
      // `Array.prototype.some` method
      // https://tc39.es/ecma262/#sec-array.prototype.some
      some: createMethod(3),
      // `Array.prototype.every` method
      // https://tc39.es/ecma262/#sec-array.prototype.every
      every: createMethod(4),
      // `Array.prototype.find` method
      // https://tc39.es/ecma262/#sec-array.prototype.find
      find: createMethod(5),
      // `Array.prototype.findIndex` method
      // https://tc39.es/ecma262/#sec-array.prototype.findIndex
      findIndex: createMethod(6),
      // `Array.prototype.filterReject` method
      // https://github.com/tc39/proposal-array-filtering
      filterReject: createMethod(7)
    }
  }, { '../internals/array-species-create': 16, '../internals/function-bind-context': 49, '../internals/function-uncurry-this': 55, '../internals/indexed-object': 68, '../internals/length-of-array-like': 90, '../internals/to-object': 137 }],
  13: [function (require, module, exports) {
    'use strict'
    var fails = require('../internals/fails')

    module.exports = function (METHOD_NAME, argument) {
      var method = [][METHOD_NAME]
      return !!method && fails(function () {
        // eslint-disable-next-line no-useless-call -- required for testing
        method.call(null, argument || function () { return 1 }, 1)
      })
    }
  }, { '../internals/fails': 45 }],
  14: [function (require, module, exports) {
    'use strict'
    var uncurryThis = require('../internals/function-uncurry-this')

    module.exports = uncurryThis([].slice)
  }, { '../internals/function-uncurry-this': 55 }],
  15: [function (require, module, exports) {
    'use strict'
    var isArray = require('../internals/is-array')
    var isConstructor = require('../internals/is-constructor')
    var isObject = require('../internals/is-object')
    var wellKnownSymbol = require('../internals/well-known-symbol')

    var SPECIES = wellKnownSymbol('species')
    var $Array = Array

    // a part of `ArraySpeciesCreate` abstract operation
    // https://tc39.es/ecma262/#sec-arrayspeciescreate
    module.exports = function (originalArray) {
      var C
      if (isArray(originalArray)) {
        C = originalArray.constructor
        // cross-realm fallback
        if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined
        else if (isObject(C)) {
          C = C[SPECIES]
          if (C === null) C = undefined
        }
      } return C === undefined ? $Array : C
    }
  }, { '../internals/is-array': 74, '../internals/is-constructor': 76, '../internals/is-object': 79, '../internals/well-known-symbol': 151 }],
  16: [function (require, module, exports) {
    'use strict'
    var arraySpeciesConstructor = require('../internals/array-species-constructor')

    // `ArraySpeciesCreate` abstract operation
    // https://tc39.es/ecma262/#sec-arrayspeciescreate
    module.exports = function (originalArray, length) {
      return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length)
    }
  }, { '../internals/array-species-constructor': 15 }],
  17: [function (require, module, exports) {
    'use strict'
    var call = require('../internals/function-call')
    var getBuiltIn = require('../internals/get-built-in')
    var getMethod = require('../internals/get-method')

    module.exports = function (iterator, method, argument, reject) {
      try {
        var returnMethod = getMethod(iterator, 'return')
        if (returnMethod) {
          return getBuiltIn('Promise').resolve(call(returnMethod, iterator)).then(function () {
            method(argument)
          }, function (error) {
            reject(error)
          })
        }
      } catch (error2) {
        return reject(error2)
      } method(argument)
    }
  }, { '../internals/function-call': 51, '../internals/get-built-in': 56, '../internals/get-method': 61 }],
  18: [function (require, module, exports) {
    'use strict'
    // https://github.com/tc39/proposal-iterator-helpers
    // https://github.com/tc39/proposal-array-from-async
    var call = require('../internals/function-call')
    var aCallable = require('../internals/a-callable')
    var anObject = require('../internals/an-object')
    var isObject = require('../internals/is-object')
    var doesNotExceedSafeInteger = require('../internals/does-not-exceed-safe-integer')
    var getBuiltIn = require('../internals/get-built-in')
    var getIteratorDirect = require('../internals/get-iterator-direct')
    var closeAsyncIteration = require('../internals/async-iterator-close')

    var createMethod = function (TYPE) {
      var IS_TO_ARRAY = TYPE === 0
      var IS_FOR_EACH = TYPE === 1
      var IS_EVERY = TYPE === 2
      var IS_SOME = TYPE === 3
      return function (object, fn, target) {
        anObject(object)
        var MAPPING = fn !== undefined
        if (MAPPING || !IS_TO_ARRAY) aCallable(fn)
        var record = getIteratorDirect(object)
        var Promise = getBuiltIn('Promise')
        var iterator = record.iterator
        var next = record.next
        var counter = 0

        return new Promise(function (resolve, reject) {
          var ifAbruptCloseAsyncIterator = function (error) {
            closeAsyncIteration(iterator, reject, error, reject)
          }

          var loop = function () {
            try {
              if (MAPPING) {
                try {
                  doesNotExceedSafeInteger(counter)
                } catch (error5) { ifAbruptCloseAsyncIterator(error5) }
              }
              Promise.resolve(anObject(call(next, iterator))).then(function (step) {
                try {
                  if (anObject(step).done) {
                    if (IS_TO_ARRAY) {
                      target.length = counter
                      resolve(target)
                    } else resolve(IS_SOME ? false : IS_EVERY || undefined)
                  } else {
                    var value = step.value
                    try {
                      if (MAPPING) {
                        var result = fn(value, counter)

                        var handler = function ($result) {
                          if (IS_FOR_EACH) {
                            loop()
                          } else if (IS_EVERY) {
                            $result ? loop() : closeAsyncIteration(iterator, resolve, false, reject)
                          } else if (IS_TO_ARRAY) {
                            try {
                              target[counter++] = $result
                              loop()
                            } catch (error4) { ifAbruptCloseAsyncIterator(error4) }
                          } else {
                            $result ? closeAsyncIteration(iterator, resolve, IS_SOME || value, reject) : loop()
                          }
                        }

                        if (isObject(result)) Promise.resolve(result).then(handler, ifAbruptCloseAsyncIterator)
                        else handler(result)
                      } else {
                        target[counter++] = value
                        loop()
                      }
                    } catch (error3) { ifAbruptCloseAsyncIterator(error3) }
                  }
                } catch (error2) { reject(error2) }
              }, reject)
            } catch (error) { reject(error) }
          }

          loop()
        })
      }
    }

    module.exports = {
      toArray: createMethod(0),
      forEach: createMethod(1),
      every: createMethod(2),
      some: createMethod(3),
      find: createMethod(4)
    }
  }, { '../internals/a-callable': 2, '../internals/an-object': 8, '../internals/async-iterator-close': 17, '../internals/does-not-exceed-safe-integer': 37, '../internals/function-call': 51, '../internals/get-built-in': 56, '../internals/get-iterator-direct': 57, '../internals/is-object': 79 }],
  19: [function (require, module, exports) {
    'use strict'
    var wellKnownSymbol = require('../internals/well-known-symbol')

    var ITERATOR = wellKnownSymbol('iterator')
    var SAFE_CLOSING = false

    try {
      var called = 0
      var iteratorWithReturn = {
        next: function () {
          return { done: !!called++ }
        },
        return: function () {
          SAFE_CLOSING = true
        }
      }
      iteratorWithReturn[ITERATOR] = function () {
        return this
      }
      // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
      Array.from(iteratorWithReturn, function () { throw 2 })
    } catch (error) { /* empty */ }

    module.exports = function (exec, SKIP_CLOSING) {
      try {
        if (!SKIP_CLOSING && !SAFE_CLOSING) return false
      } catch (error) { return false } // workaround of old WebKit + `eval` bug
      var ITERATION_SUPPORT = false
      try {
        var object = {}
        object[ITERATOR] = function () {
          return {
            next: function () {
              return { done: ITERATION_SUPPORT = true }
            }
          }
        }
        exec(object)
      } catch (error) { /* empty */ }
      return ITERATION_SUPPORT
    }
  }, { '../internals/well-known-symbol': 151 }],
  20: [function (require, module, exports) {
    'use strict'
    var uncurryThis = require('../internals/function-uncurry-this')

    var toString = uncurryThis({}.toString)
    var stringSlice = uncurryThis(''.slice)

    module.exports = function (it) {
      return stringSlice(toString(it), 8, -1)
    }
  }, { '../internals/function-uncurry-this': 55 }],
  21: [function (require, module, exports) {
    'use strict'
    var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support')
    var isCallable = require('../internals/is-callable')
    var classofRaw = require('../internals/classof-raw')
    var wellKnownSymbol = require('../internals/well-known-symbol')

    var TO_STRING_TAG = wellKnownSymbol('toStringTag')
    var $Object = Object

    // ES3 wrong here
    var CORRECT_ARGUMENTS = classofRaw(function () { return arguments }()) === 'Arguments'

    // fallback for IE11 Script Access Denied error
    var tryGet = function (it, key) {
      try {
        return it[key]
      } catch (error) { /* empty */ }
    }

    // getting tag from ES6+ `Object.prototype.toString`
    module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
      var O, tag, result
      return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
        : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) === 'string' ? tag
        // builtinTag case
          : CORRECT_ARGUMENTS ? classofRaw(O)
          // ES3 arguments fallback
            : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result
    }
  }, { '../internals/classof-raw': 20, '../internals/is-callable': 75, '../internals/to-string-tag-support': 140, '../internals/well-known-symbol': 151 }],
  22: [function (require, module, exports) {
    'use strict'
    var uncurryThis = require('../internals/function-uncurry-this')
    var defineBuiltIns = require('../internals/define-built-ins')
    var getWeakData = require('../internals/internal-metadata').getWeakData
    var anInstance = require('../internals/an-instance')
    var anObject = require('../internals/an-object')
    var isNullOrUndefined = require('../internals/is-null-or-undefined')
    var isObject = require('../internals/is-object')
    var iterate = require('../internals/iterate')
    var ArrayIterationModule = require('../internals/array-iteration')
    var hasOwn = require('../internals/has-own-property')
    var InternalStateModule = require('../internals/internal-state')

    var setInternalState = InternalStateModule.set
    var internalStateGetterFor = InternalStateModule.getterFor
    var find = ArrayIterationModule.find
    var findIndex = ArrayIterationModule.findIndex
    var splice = uncurryThis([].splice)
    var id = 0

    // fallback for uncaught frozen keys
    var uncaughtFrozenStore = function (state) {
      return state.frozen || (state.frozen = new UncaughtFrozenStore())
    }

    var UncaughtFrozenStore = function () {
      this.entries = []
    }

    var findUncaughtFrozen = function (store, key) {
      return find(store.entries, function (it) {
        return it[0] === key
      })
    }

    UncaughtFrozenStore.prototype = {
      get: function (key) {
        var entry = findUncaughtFrozen(this, key)
        if (entry) return entry[1]
      },
      has: function (key) {
        return !!findUncaughtFrozen(this, key)
      },
      set: function (key, value) {
        var entry = findUncaughtFrozen(this, key)
        if (entry) entry[1] = value
        else this.entries.push([key, value])
      },
      delete: function (key) {
        var index = findIndex(this.entries, function (it) {
          return it[0] === key
        })
        if (~index) splice(this.entries, index, 1)
        return !!~index
      }
    }

    module.exports = {
      getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
        var Constructor = wrapper(function (that, iterable) {
          anInstance(that, Prototype)
          setInternalState(that, {
            type: CONSTRUCTOR_NAME,
            id: id++,
            frozen: null
          })
          if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP })
        })

        var Prototype = Constructor.prototype

        var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME)

        var define = function (that, key, value) {
          var state = getInternalState(that)
          var data = getWeakData(anObject(key), true)
          if (data === true) uncaughtFrozenStore(state).set(key, value)
          else data[state.id] = value
          return that
        }

        defineBuiltIns(Prototype, {
          // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
          // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
          // https://tc39.es/ecma262/#sec-weakset.prototype.delete
          delete: function (key) {
            var state = getInternalState(this)
            if (!isObject(key)) return false
            var data = getWeakData(key)
            if (data === true) return uncaughtFrozenStore(state).delete(key)
            return data && hasOwn(data, state.id) && delete data[state.id]
          },
          // `{ WeakMap, WeakSet }.prototype.has(key)` methods
          // https://tc39.es/ecma262/#sec-weakmap.prototype.has
          // https://tc39.es/ecma262/#sec-weakset.prototype.has
          has: function has (key) {
            var state = getInternalState(this)
            if (!isObject(key)) return false
            var data = getWeakData(key)
            if (data === true) return uncaughtFrozenStore(state).has(key)
            return data && hasOwn(data, state.id)
          }
        })

        defineBuiltIns(Prototype, IS_MAP ? {
          // `WeakMap.prototype.get(key)` method
          // https://tc39.es/ecma262/#sec-weakmap.prototype.get
          get: function get (key) {
            var state = getInternalState(this)
            if (isObject(key)) {
              var data = getWeakData(key)
              if (data === true) return uncaughtFrozenStore(state).get(key)
              if (data) return data[state.id]
            }
          },
          // `WeakMap.prototype.set(key, value)` method
          // https://tc39.es/ecma262/#sec-weakmap.prototype.set
          set: function set (key, value) {
            return define(this, key, value)
          }
        } : {
          // `WeakSet.prototype.add(value)` method
          // https://tc39.es/ecma262/#sec-weakset.prototype.add
          add: function add (value) {
            return define(this, value, true)
          }
        })

        return Constructor
      }
    }
  }, { '../internals/an-instance': 7, '../internals/an-object': 8, '../internals/array-iteration': 12, '../internals/define-built-ins': 33, '../internals/function-uncurry-this': 55, '../internals/has-own-property': 64, '../internals/internal-metadata': 71, '../internals/internal-state': 72, '../internals/is-null-or-undefined': 78, '../internals/is-object': 79, '../internals/iterate': 84 }],
  23: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var globalThis = require('../internals/global-this')
    var uncurryThis = require('../internals/function-uncurry-this')
    var isForced = require('../internals/is-forced')
    var defineBuiltIn = require('../internals/define-built-in')
    var InternalMetadataModule = require('../internals/internal-metadata')
    var iterate = require('../internals/iterate')
    var anInstance = require('../internals/an-instance')
    var isCallable = require('../internals/is-callable')
    var isNullOrUndefined = require('../internals/is-null-or-undefined')
    var isObject = require('../internals/is-object')
    var fails = require('../internals/fails')
    var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration')
    var setToStringTag = require('../internals/set-to-string-tag')
    var inheritIfRequired = require('../internals/inherit-if-required')

    module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
      var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1
      var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1
      var ADDER = IS_MAP ? 'set' : 'add'
      var NativeConstructor = globalThis[CONSTRUCTOR_NAME]
      var NativePrototype = NativeConstructor && NativeConstructor.prototype
      var Constructor = NativeConstructor
      var exported = {}

      var fixMethod = function (KEY) {
        var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY])
        defineBuiltIn(NativePrototype, KEY,
          KEY === 'add' ? function add (value) {
            uncurriedNativeMethod(this, value === 0 ? 0 : value)
            return this
          } : KEY === 'delete' ? function (key) {
            return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key)
          } : KEY === 'get' ? function get (key) {
            return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key)
          } : KEY === 'has' ? function has (key) {
            return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key)
          } : function set (key, value) {
            uncurriedNativeMethod(this, key === 0 ? 0 : key, value)
            return this
          }
        )
      }

      var REPLACE = isForced(
        CONSTRUCTOR_NAME,
        !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
          new NativeConstructor().entries().next()
        }))
      )

      if (REPLACE) {
        // create collection constructor
        Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER)
        InternalMetadataModule.enable()
      } else if (isForced(CONSTRUCTOR_NAME, true)) {
        var instance = new Constructor()
        // early implementations not supports chaining
        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance
        // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
        var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1) })
        // most early implementations doesn't supports iterables, most modern - not close it correctly
        // eslint-disable-next-line no-new -- required for testing
        var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable) })
        // for early implementations -0 and +0 not the same
        var BUGGY_ZERO = !IS_WEAK && fails(function () {
          // V8 ~ Chromium 42- fails only with 5+ elements
          var $instance = new NativeConstructor()
          var index = 5
          while (index--) $instance[ADDER](index, index)
          return !$instance.has(-0)
        })

        if (!ACCEPT_ITERABLES) {
          Constructor = wrapper(function (dummy, iterable) {
            anInstance(dummy, NativePrototype)
            var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor)
            if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP })
            return that
          })
          Constructor.prototype = NativePrototype
          NativePrototype.constructor = Constructor
        }

        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
          fixMethod('delete')
          fixMethod('has')
          IS_MAP && fixMethod('get')
        }

        if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER)

        // weak collections should not contains .clear method
        if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear
      }

      exported[CONSTRUCTOR_NAME] = Constructor
      $({ global: true, constructor: true, forced: Constructor !== NativeConstructor }, exported)

      setToStringTag(Constructor, CONSTRUCTOR_NAME)

      if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP)

      return Constructor
    }
  }, { '../internals/an-instance': 7, '../internals/check-correctness-of-iteration': 19, '../internals/define-built-in': 32, '../internals/export': 44, '../internals/fails': 45, '../internals/function-uncurry-this': 55, '../internals/global-this': 63, '../internals/inherit-if-required': 69, '../internals/internal-metadata': 71, '../internals/is-callable': 75, '../internals/is-forced': 77, '../internals/is-null-or-undefined': 78, '../internals/is-object': 79, '../internals/iterate': 84, '../internals/set-to-string-tag': 122 }],
  24: [function (require, module, exports) {
    'use strict'
    var hasOwn = require('../internals/has-own-property')
    var ownKeys = require('../internals/own-keys')
    var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor')
    var definePropertyModule = require('../internals/object-define-property')

    module.exports = function (target, source, exceptions) {
      var keys = ownKeys(source)
      var defineProperty = definePropertyModule.f
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i]
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
          defineProperty(target, key, getOwnPropertyDescriptor(source, key))
        }
      }
    }
  }, { '../internals/has-own-property': 64, '../internals/object-define-property': 95, '../internals/object-get-own-property-descriptor': 96, '../internals/own-keys': 109 }],
  25: [function (require, module, exports) {
    'use strict'
    var fails = require('../internals/fails')

    module.exports = !fails(function () {
      function F () { /* empty */ }
      F.prototype.constructor = null
      // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
      return Object.getPrototypeOf(new F()) !== F.prototype
    })
  }, { '../internals/fails': 45 }],
  26: [function (require, module, exports) {
    'use strict'
    // `CreateIterResultObject` abstract operation
    // https://tc39.es/ecma262/#sec-createiterresultobject
    module.exports = function (value, done) {
      return { value: value, done: done }
    }
  }, {}],
  27: [function (require, module, exports) {
    'use strict'
    var DESCRIPTORS = require('../internals/descriptors')
    var definePropertyModule = require('../internals/object-define-property')
    var createPropertyDescriptor = require('../internals/create-property-descriptor')

    module.exports = DESCRIPTORS ? function (object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value))
    } : function (object, key, value) {
      object[key] = value
      return object
    }
  }, { '../internals/create-property-descriptor': 28, '../internals/descriptors': 35, '../internals/object-define-property': 95 }],
  28: [function (require, module, exports) {
    'use strict'
    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      }
    }
  }, {}],
  29: [function (require, module, exports) {
    'use strict'
    var DESCRIPTORS = require('../internals/descriptors')
    var definePropertyModule = require('../internals/object-define-property')
    var createPropertyDescriptor = require('../internals/create-property-descriptor')

    module.exports = function (object, key, value) {
      if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value))
      else object[key] = value
    }
  }, { '../internals/create-property-descriptor': 28, '../internals/descriptors': 35, '../internals/object-define-property': 95 }],
  30: [function (require, module, exports) {
    'use strict'
    var anObject = require('../internals/an-object')
    var ordinaryToPrimitive = require('../internals/ordinary-to-primitive')

    var $TypeError = TypeError

    // `Date.prototype[@@toPrimitive](hint)` method implementation
    // https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
    module.exports = function (hint) {
      anObject(this)
      if (hint === 'string' || hint === 'default') hint = 'string'
      else if (hint !== 'number') throw new $TypeError('Incorrect hint')
      return ordinaryToPrimitive(this, hint)
    }
  }, { '../internals/an-object': 8, '../internals/ordinary-to-primitive': 108 }],
  31: [function (require, module, exports) {
    'use strict'
    var makeBuiltIn = require('../internals/make-built-in')
    var defineProperty = require('../internals/object-define-property')

    module.exports = function (target, name, descriptor) {
      if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true })
      if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true })
      return defineProperty.f(target, name, descriptor)
    }
  }, { '../internals/make-built-in': 91, '../internals/object-define-property': 95 }],
  32: [function (require, module, exports) {
    'use strict'
    var isCallable = require('../internals/is-callable')
    var definePropertyModule = require('../internals/object-define-property')
    var makeBuiltIn = require('../internals/make-built-in')
    var defineGlobalProperty = require('../internals/define-global-property')

    module.exports = function (O, key, value, options) {
      if (!options) options = {}
      var simple = options.enumerable
      var name = options.name !== undefined ? options.name : key
      if (isCallable(value)) makeBuiltIn(value, name, options)
      if (options.global) {
        if (simple) O[key] = value
        else defineGlobalProperty(key, value)
      } else {
        try {
          if (!options.unsafe) delete O[key]
          else if (O[key]) simple = true
        } catch (error) { /* empty */ }
        if (simple) O[key] = value
        else {
          definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
          })
        }
      } return O
    }
  }, { '../internals/define-global-property': 34, '../internals/is-callable': 75, '../internals/make-built-in': 91, '../internals/object-define-property': 95 }],
  33: [function (require, module, exports) {
    'use strict'
    var defineBuiltIn = require('../internals/define-built-in')

    module.exports = function (target, src, options) {
      for (var key in src) defineBuiltIn(target, key, src[key], options)
      return target
    }
  }, { '../internals/define-built-in': 32 }],
  34: [function (require, module, exports) {
    'use strict'
    var globalThis = require('../internals/global-this')

    // eslint-disable-next-line es/no-object-defineproperty -- safe
    var defineProperty = Object.defineProperty

    module.exports = function (key, value) {
      try {
        defineProperty(globalThis, key, { value: value, configurable: true, writable: true })
      } catch (error) {
        globalThis[key] = value
      } return value
    }
  }, { '../internals/global-this': 63 }],
  35: [function (require, module, exports) {
    'use strict'
    var fails = require('../internals/fails')

    // Detect IE8's incomplete defineProperty implementation
    module.exports = !fails(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return Object.defineProperty({}, 1, { get: function () { return 7 } })[1] !== 7
    })
  }, { '../internals/fails': 45 }],
  36: [function (require, module, exports) {
    'use strict'
    var globalThis = require('../internals/global-this')
    var isObject = require('../internals/is-object')

    var document = globalThis.document
    // typeof document.createElement is 'object' in old IE
    var EXISTS = isObject(document) && isObject(document.createElement)

    module.exports = function (it) {
      return EXISTS ? document.createElement(it) : {}
    }
  }, { '../internals/global-this': 63, '../internals/is-object': 79 }],
  37: [function (require, module, exports) {
    'use strict'
    var $TypeError = TypeError
    var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF // 2 ** 53 - 1 == 9007199254740991

    module.exports = function (it) {
      if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded')
      return it
    }
  }, {}],
  38: [function (require, module, exports) {
    'use strict'
    // iterable DOM collections
    // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
    module.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    }
  }, {}],
  39: [function (require, module, exports) {
    'use strict'
    // in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
    var documentCreateElement = require('../internals/document-create-element')

    var classList = documentCreateElement('span').classList
    var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype

    module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype
  }, { '../internals/document-create-element': 36 }],
  40: [function (require, module, exports) {
    'use strict'
    // IE8- don't enum bug keys
    module.exports = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf'
    ]
  }, {}],
  41: [function (require, module, exports) {
    'use strict'
    var globalThis = require('../internals/global-this')

    var navigator = globalThis.navigator
    var userAgent = navigator && navigator.userAgent

    module.exports = userAgent ? String(userAgent) : ''
  }, { '../internals/global-this': 63 }],
  42: [function (require, module, exports) {
    'use strict'
    var globalThis = require('../internals/global-this')
    var userAgent = require('../internals/environment-user-agent')

    var process = globalThis.process
    var Deno = globalThis.Deno
    var versions = process && process.versions || Deno && Deno.version
    var v8 = versions && versions.v8
    var match, version

    if (v8) {
      match = v8.split('.')
      // in old Chrome, versions of V8 isn't V8 = Chrome / 10
      // but their correct versions are not interesting for us
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1])
    }

    // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
    // so check `userAgent` even if `.v8` exists, but 0
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/)
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/)
        if (match) version = +match[1]
      }
    }

    module.exports = version
  }, { '../internals/environment-user-agent': 41, '../internals/global-this': 63 }],
  43: [function (require, module, exports) {
    'use strict'
    /* global Bun, Deno -- detection */
    var globalThis = require('../internals/global-this')
    var userAgent = require('../internals/environment-user-agent')
    var classof = require('../internals/classof-raw')

    var userAgentStartsWith = function (string) {
      return userAgent.slice(0, string.length) === string
    }

    module.exports = (function () {
      if (userAgentStartsWith('Bun/')) return 'BUN'
      if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE'
      if (userAgentStartsWith('Deno/')) return 'DENO'
      if (userAgentStartsWith('Node.js/')) return 'NODE'
      if (globalThis.Bun && typeof Bun.version === 'string') return 'BUN'
      if (globalThis.Deno && typeof Deno.version === 'object') return 'DENO'
      if (classof(globalThis.process) === 'process') return 'NODE'
      if (globalThis.window && globalThis.document) return 'BROWSER'
      return 'REST'
    })()
  }, { '../internals/classof-raw': 20, '../internals/environment-user-agent': 41, '../internals/global-this': 63 }],
  44: [function (require, module, exports) {
    'use strict'
    var globalThis = require('../internals/global-this')
    var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f
    var createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    var defineBuiltIn = require('../internals/define-built-in')
    var defineGlobalProperty = require('../internals/define-global-property')
    var copyConstructorProperties = require('../internals/copy-constructor-properties')
    var isForced = require('../internals/is-forced')

    /*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
    module.exports = function (options, source) {
      var TARGET = options.target
      var GLOBAL = options.global
      var STATIC = options.stat
      var FORCED, target, key, targetProperty, sourceProperty, descriptor
      if (GLOBAL) {
        target = globalThis
      } else if (STATIC) {
        target = globalThis[TARGET] || defineGlobalProperty(TARGET, {})
      } else {
        target = globalThis[TARGET] && globalThis[TARGET].prototype
      }
      if (target) {
        for (key in source) {
          sourceProperty = source[key]
          if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key)
            targetProperty = descriptor && descriptor.value
          } else targetProperty = target[key]
          FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced)
          // contained in target
          if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty === typeof targetProperty) continue
            copyConstructorProperties(sourceProperty, targetProperty)
          }
          // add a flag to not completely full polyfills
          if (options.sham || (targetProperty && targetProperty.sham)) {
            createNonEnumerableProperty(sourceProperty, 'sham', true)
          }
          defineBuiltIn(target, key, sourceProperty, options)
        }
      }
    }
  }, { '../internals/copy-constructor-properties': 24, '../internals/create-non-enumerable-property': 27, '../internals/define-built-in': 32, '../internals/define-global-property': 34, '../internals/global-this': 63, '../internals/is-forced': 77, '../internals/object-get-own-property-descriptor': 96 }],
  45: [function (require, module, exports) {
    'use strict'
    module.exports = function (exec) {
      try {
        return !!exec()
      } catch (error) {
        return true
      }
    }
  }, {}],
  46: [function (require, module, exports) {
    'use strict'
    // TODO: Remove from `core-js@4` since it's moved to entry points
    require('../modules/es.regexp.exec')
    var call = require('../internals/function-call')
    var defineBuiltIn = require('../internals/define-built-in')
    var regexpExec = require('../internals/regexp-exec')
    var fails = require('../internals/fails')
    var wellKnownSymbol = require('../internals/well-known-symbol')
    var createNonEnumerableProperty = require('../internals/create-non-enumerable-property')

    var SPECIES = wellKnownSymbol('species')
    var RegExpPrototype = RegExp.prototype

    module.exports = function (KEY, exec, FORCED, SHAM) {
      var SYMBOL = wellKnownSymbol(KEY)

      var DELEGATES_TO_SYMBOL = !fails(function () {
        // String methods call symbol-named RegExp methods
        var O = {}
        O[SYMBOL] = function () { return 7 }
        return ''[KEY](O) !== 7
      })

      var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
        // Symbol-named RegExp methods call .exec
        var execCalled = false
        var re = /a/

        if (KEY === 'split') {
          // We can't use real regex here since it causes deoptimization
          // and serious performance degradation in V8
          // https://github.com/zloirock/core-js/issues/306
          re = {}
          // RegExp[@@split] doesn't call the regex's exec method, but first creates
          // a new one. We need to return the patched regex when creating the new one.
          re.constructor = {}
          re.constructor[SPECIES] = function () { return re }
          re.flags = ''
          re[SYMBOL] = /./[SYMBOL]
        }

        re.exec = function () {
          execCalled = true
          return null
        }

        re[SYMBOL]('')
        return !execCalled
      })

      if (
        !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
      ) {
        var nativeRegExpMethod = /./[SYMBOL]
        var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
          var $exec = regexp.exec
          if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
            if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
              // The native String method already delegates to @@method (this
              // polyfilled function), leasing to infinite recursion.
              // We avoid it by directly calling the native @@method method.
              return { done: true, value: call(nativeRegExpMethod, regexp, str, arg2) }
            }
            return { done: true, value: call(nativeMethod, str, regexp, arg2) }
          }
          return { done: false }
        })

        defineBuiltIn(String.prototype, KEY, methods[0])
        defineBuiltIn(RegExpPrototype, SYMBOL, methods[1])
      }

      if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true)
    }
  }, { '../internals/create-non-enumerable-property': 27, '../internals/define-built-in': 32, '../internals/fails': 45, '../internals/function-call': 51, '../internals/regexp-exec': 113, '../internals/well-known-symbol': 151, '../modules/es.regexp.exec': 163 }],
  47: [function (require, module, exports) {
    'use strict'
    var fails = require('../internals/fails')

    module.exports = !fails(function () {
      // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
      return Object.isExtensible(Object.preventExtensions({}))
    })
  }, { '../internals/fails': 45 }],
  48: [function (require, module, exports) {
    'use strict'
    var NATIVE_BIND = require('../internals/function-bind-native')

    var FunctionPrototype = Function.prototype
    var apply = FunctionPrototype.apply
    var call = FunctionPrototype.call

    // eslint-disable-next-line es/no-reflect -- safe
    module.exports = typeof Reflect === 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
      return call.apply(apply, arguments)
    })
  }, { '../internals/function-bind-native': 50 }],
  49: [function (require, module, exports) {
    'use strict'
    var uncurryThis = require('../internals/function-uncurry-this-clause')
    var aCallable = require('../internals/a-callable')
    var NATIVE_BIND = require('../internals/function-bind-native')

    var bind = uncurryThis(uncurryThis.bind)

    // optional / simple context binding
    module.exports = function (fn, that) {
      aCallable(fn)
      return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
        return fn.apply(that, arguments)
      }
    }
  }, { '../internals/a-callable': 2, '../internals/function-bind-native': 50, '../internals/function-uncurry-this-clause': 54 }],
  50: [function (require, module, exports) {
    'use strict'
    var fails = require('../internals/fails')

    module.exports = !fails(function () {
      // eslint-disable-next-line es/no-function-prototype-bind -- safe
      var test = function () { /* empty */ }.bind()
      // eslint-disable-next-line no-prototype-builtins -- safe
      return typeof test !== 'function' || test.hasOwnProperty('prototype')
    })
  }, { '../internals/fails': 45 }],
  51: [function (require, module, exports) {
    'use strict'
    var NATIVE_BIND = require('../internals/function-bind-native')

    var call = Function.prototype.call

    module.exports = NATIVE_BIND ? call.bind(call) : function () {
      return call.apply(call, arguments)
    }
  }, { '../internals/function-bind-native': 50 }],
  52: [function (require, module, exports) {
    'use strict'
    var DESCRIPTORS = require('../internals/descriptors')
    var hasOwn = require('../internals/has-own-property')

    var FunctionPrototype = Function.prototype
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor

    var EXISTS = hasOwn(FunctionPrototype, 'name')
    // additional protection from minified / mangled / dropped function names
    var PROPER = EXISTS && function something () { /* empty */ }.name === 'something'
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable))

    module.exports = {
      EXISTS: EXISTS,
      PROPER: PROPER,
      CONFIGURABLE: CONFIGURABLE
    }
  }, { '../internals/descriptors': 35, '../internals/has-own-property': 64 }],
  53: [function (require, module, exports) {
    'use strict'
    var uncurryThis = require('../internals/function-uncurry-this')
    var aCallable = require('../internals/a-callable')

    module.exports = function (object, key, method) {
      try {
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]))
      } catch (error) { /* empty */ }
    }
  }, { '../internals/a-callable': 2, '../internals/function-uncurry-this': 55 }],
  54: [function (require, module, exports) {
    'use strict'
    var classofRaw = require('../internals/classof-raw')
    var uncurryThis = require('../internals/function-uncurry-this')

    module.exports = function (fn) {
      // Nashorn bug:
      //   https://github.com/zloirock/core-js/issues/1128
      //   https://github.com/zloirock/core-js/issues/1130
      if (classofRaw(fn) === 'Function') return uncurryThis(fn)
    }
  }, { '../internals/classof-raw': 20, '../internals/function-uncurry-this': 55 }],
  55: [function (require, module, exports) {
    'use strict'
    var NATIVE_BIND = require('../internals/function-bind-native')

    var FunctionPrototype = Function.prototype
    var call = FunctionPrototype.call
    var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call)

    module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
      return function () {
        return call.apply(fn, arguments)
      }
    }
  }, { '../internals/function-bind-native': 50 }],
  56: [function (require, module, exports) {
    'use strict'
    var globalThis = require('../internals/global-this')
    var isCallable = require('../internals/is-callable')

    var aFunction = function (argument) {
      return isCallable(argument) ? argument : undefined
    }

    module.exports = function (namespace, method) {
      return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method]
    }
  }, { '../internals/global-this': 63, '../internals/is-callable': 75 }],
  57: [function (require, module, exports) {
    'use strict'
    // `GetIteratorDirect(obj)` abstract operation
    // https://tc39.es/proposal-iterator-helpers/#sec-getiteratordirect
    module.exports = function (obj) {
      return {
        iterator: obj,
        next: obj.next,
        done: false
      }
    }
  }, {}],
  58: [function (require, module, exports) {
    'use strict'
    var classof = require('../internals/classof')
    var getMethod = require('../internals/get-method')
    var isNullOrUndefined = require('../internals/is-null-or-undefined')
    var Iterators = require('../internals/iterators')
    var wellKnownSymbol = require('../internals/well-known-symbol')

    var ITERATOR = wellKnownSymbol('iterator')

    module.exports = function (it) {
      if (!isNullOrUndefined(it)) {
        return getMethod(it, ITERATOR) ||
    getMethod(it, '@@iterator') ||
    Iterators[classof(it)]
      }
    }
  }, { '../internals/classof': 21, '../internals/get-method': 61, '../internals/is-null-or-undefined': 78, '../internals/iterators': 89, '../internals/well-known-symbol': 151 }],
  59: [function (require, module, exports) {
    'use strict'
    var call = require('../internals/function-call')
    var aCallable = require('../internals/a-callable')
    var anObject = require('../internals/an-object')
    var tryToString = require('../internals/try-to-string')
    var getIteratorMethod = require('../internals/get-iterator-method')

    var $TypeError = TypeError

    module.exports = function (argument, usingIterator) {
      var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator
      if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument))
      throw new $TypeError(tryToString(argument) + ' is not iterable')
    }
  }, { '../internals/a-callable': 2, '../internals/an-object': 8, '../internals/function-call': 51, '../internals/get-iterator-method': 58, '../internals/try-to-string': 142 }],
  60: [function (require, module, exports) {
    'use strict'
    var uncurryThis = require('../internals/function-uncurry-this')
    var isArray = require('../internals/is-array')
    var isCallable = require('../internals/is-callable')
    var classof = require('../internals/classof-raw')
    var toString = require('../internals/to-string')

    var push = uncurryThis([].push)

    module.exports = function (replacer) {
      if (isCallable(replacer)) return replacer
      if (!isArray(replacer)) return
      var rawLength = replacer.length
      var keys = []
      for (var i = 0; i < rawLength; i++) {
        var element = replacer[i]
        if (typeof element === 'string') push(keys, element)
        else if (typeof element === 'number' || classof(element) === 'Number' || classof(element) === 'String') push(keys, toString(element))
      }
      var keysLength = keys.length
      var root = true
      return function (key, value) {
        if (root) {
          root = false
          return value
        }
        if (isArray(this)) return value
        for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value
      }
    }
  }, { '../internals/classof-raw': 20, '../internals/function-uncurry-this': 55, '../internals/is-array': 74, '../internals/is-callable': 75, '../internals/to-string': 141 }],
  61: [function (require, module, exports) {
    'use strict'
    var aCallable = require('../internals/a-callable')
    var isNullOrUndefined = require('../internals/is-null-or-undefined')

    // `GetMethod` abstract operation
    // https://tc39.es/ecma262/#sec-getmethod
    module.exports = function (V, P) {
      var func = V[P]
      return isNullOrUndefined(func) ? undefined : aCallable(func)
    }
  }, { '../internals/a-callable': 2, '../internals/is-null-or-undefined': 78 }],
  62: [function (require, module, exports) {
    'use strict'
    var uncurryThis = require('../internals/function-uncurry-this')
    var toObject = require('../internals/to-object')

    var floor = Math.floor
    var charAt = uncurryThis(''.charAt)
    var replace = uncurryThis(''.replace)
    var stringSlice = uncurryThis(''.slice)
    // eslint-disable-next-line redos/no-vulnerable -- safe
    var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g
    var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g

    // `GetSubstitution` abstract operation
    // https://tc39.es/ecma262/#sec-getsubstitution
    module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length
      var m = captures.length
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED
      if (namedCaptures !== undefined) {
        namedCaptures = toObject(namedCaptures)
        symbols = SUBSTITUTION_SYMBOLS
      }
      return replace(replacement, symbols, function (match, ch) {
        var capture
        switch (charAt(ch, 0)) {
          case '$': return '$'
          case '&': return matched
          case '`': return stringSlice(str, 0, position)
          case "'": return stringSlice(str, tailPos)
          case '<':
            capture = namedCaptures[stringSlice(ch, 1, -1)]
            break
          default: // \d\d?
            var n = +ch
            if (n === 0) return match
            if (n > m) {
              var f = floor(n / 10)
              if (f === 0) return match
              if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1)
              return match
            }
            capture = captures[n - 1]
        }
        return capture === undefined ? '' : capture
      })
    }
  }, { '../internals/function-uncurry-this': 55, '../internals/to-object': 137 }],
  63: [function (require, module, exports) {
    (function (global) {
      (function () {
        'use strict'
        var check = function (it) {
          return it && it.Math === Math && it
        }

        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis === 'object' && globalThis) ||
  check(typeof window === 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self === 'object' && self) ||
  check(typeof global === 'object' && global) ||
  check(typeof this === 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this })() || Function('return this')()
      }).call(this)
    }).call(this, typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {})
  }, {}],
  64: [function (require, module, exports) {
    'use strict'
    var uncurryThis = require('../internals/function-uncurry-this')
    var toObject = require('../internals/to-object')

    var hasOwnProperty = uncurryThis({}.hasOwnProperty)

    // `HasOwnProperty` abstract operation
    // https://tc39.es/ecma262/#sec-hasownproperty
    // eslint-disable-next-line es/no-object-hasown -- safe
    module.exports = Object.hasOwn || function hasOwn (it, key) {
      return hasOwnProperty(toObject(it), key)
    }
  }, { '../internals/function-uncurry-this': 55, '../internals/to-object': 137 }],
  65: [function (require, module, exports) {
    'use strict'
    module.exports = {}
  }, {}],
  66: [function (require, module, exports) {
    'use strict'
    var getBuiltIn = require('../internals/get-built-in')

    module.exports = getBuiltIn('document', 'documentElement')
  }, { '../internals/get-built-in': 56 }],
  67: [function (require, module, exports) {
    'use strict'
    var DESCRIPTORS = require('../internals/descriptors')
    var fails = require('../internals/fails')
    var createElement = require('../internals/document-create-element')

    // Thanks to IE8 for its funny defineProperty
    module.exports = !DESCRIPTORS && !fails(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return Object.defineProperty(createElement('div'), 'a', {
        get: function () { return 7 }
      }).a !== 7
    })
  }, { '../internals/descriptors': 35, '../internals/document-create-element': 36, '../internals/fails': 45 }],
  68: [function (require, module, exports) {
    'use strict'
    var uncurryThis = require('../internals/function-uncurry-this')
    var fails = require('../internals/fails')
    var classof = require('../internals/classof-raw')

    var $Object = Object
    var split = uncurryThis(''.split)

    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    module.exports = fails(function () {
      // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
      // eslint-disable-next-line no-prototype-builtins -- safe
      return !$Object('z').propertyIsEnumerable(0)
    }) ? function (it) {
        return classof(it) === 'String' ? split(it, '') : $Object(it)
      } : $Object
  }, { '../internals/classof-raw': 20, '../internals/fails': 45, '../internals/function-uncurry-this': 55 }],
  69: [function (require, module, exports) {
    'use strict'
    var isCallable = require('../internals/is-callable')
    var isObject = require('../internals/is-object')
    var setPrototypeOf = require('../internals/object-set-prototype-of')

    // makes subclassing work correct for wrapped built-ins
    module.exports = function ($this, dummy, Wrapper) {
      var NewTarget, NewTargetPrototype
      if (
      // it can work only with native `setPrototypeOf`
        setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
      ) setPrototypeOf($this, NewTargetPrototype)
      return $this
    }
  }, { '../internals/is-callable': 75, '../internals/is-object': 79, '../internals/object-set-prototype-of': 106 }],
  70: [function (require, module, exports) {
    'use strict'
    var uncurryThis = require('../internals/function-uncurry-this')
    var isCallable = require('../internals/is-callable')
    var store = require('../internals/shared-store')

    var functionToString = uncurryThis(Function.toString)

    // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function (it) {
        return functionToString(it)
      }
    }

    module.exports = store.inspectSource
  }, { '../internals/function-uncurry-this': 55, '../internals/is-callable': 75, '../internals/shared-store': 124 }],
  71: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var uncurryThis = require('../internals/function-uncurry-this')
    var hiddenKeys = require('../internals/hidden-keys')
    var isObject = require('../internals/is-object')
    var hasOwn = require('../internals/has-own-property')
    var defineProperty = require('../internals/object-define-property').f
    var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names')
    var getOwnPropertyNamesExternalModule = require('../internals/object-get-own-property-names-external')
    var isExtensible = require('../internals/object-is-extensible')
    var uid = require('../internals/uid')
    var FREEZING = require('../internals/freezing')

    var REQUIRED = false
    var METADATA = uid('meta')
    var id = 0

    var setMetadata = function (it) {
      defineProperty(it, METADATA, {
        value: {
          objectID: 'O' + id++, // object ID
          weakData: {} // weak collections IDs
        }
      })
    }

    var fastKey = function (it, create) {
      // return a primitive with prefix
      if (!isObject(it)) return typeof it === 'symbol' ? it : (typeof it === 'string' ? 'S' : 'P') + it
      if (!hasOwn(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F'
        // not necessary to add metadata
        if (!create) return 'E'
        // add missing metadata
        setMetadata(it)
        // return object ID
      } return it[METADATA].objectID
    }

    var getWeakData = function (it, create) {
      if (!hasOwn(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true
        // not necessary to add metadata
        if (!create) return false
        // add missing metadata
        setMetadata(it)
        // return the store of weak collections IDs
      } return it[METADATA].weakData
    }

    // add metadata on freeze-family methods calling
    var onFreeze = function (it) {
      if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it)
      return it
    }

    var enable = function () {
      meta.enable = function () { /* empty */ }
      REQUIRED = true
      var getOwnPropertyNames = getOwnPropertyNamesModule.f
      var splice = uncurryThis([].splice)
      var test = {}
      test[METADATA] = 1

      // prevent exposing of metadata key
      if (getOwnPropertyNames(test).length) {
        getOwnPropertyNamesModule.f = function (it) {
          var result = getOwnPropertyNames(it)
          for (var i = 0, length = result.length; i < length; i++) {
            if (result[i] === METADATA) {
              splice(result, i, 1)
              break
            }
          } return result
        }

        $({ target: 'Object', stat: true, forced: true }, {
          getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
        })
      }
    }

    var meta = module.exports = {
      enable: enable,
      fastKey: fastKey,
      getWeakData: getWeakData,
      onFreeze: onFreeze
    }

    hiddenKeys[METADATA] = true
  }, { '../internals/export': 44, '../internals/freezing': 47, '../internals/function-uncurry-this': 55, '../internals/has-own-property': 64, '../internals/hidden-keys': 65, '../internals/is-object': 79, '../internals/object-define-property': 95, '../internals/object-get-own-property-names': 98, '../internals/object-get-own-property-names-external': 97, '../internals/object-is-extensible': 101, '../internals/uid': 143 }],
  72: [function (require, module, exports) {
    'use strict'
    var NATIVE_WEAK_MAP = require('../internals/weak-map-basic-detection')
    var globalThis = require('../internals/global-this')
    var isObject = require('../internals/is-object')
    var createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    var hasOwn = require('../internals/has-own-property')
    var shared = require('../internals/shared-store')
    var sharedKey = require('../internals/shared-key')
    var hiddenKeys = require('../internals/hidden-keys')

    var OBJECT_ALREADY_INITIALIZED = 'Object already initialized'
    var TypeError = globalThis.TypeError
    var WeakMap = globalThis.WeakMap
    var set, get, has

    var enforce = function (it) {
      return has(it) ? get(it) : set(it, {})
    }

    var getterFor = function (TYPE) {
      return function (it) {
        var state
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw new TypeError('Incompatible receiver, ' + TYPE + ' required')
        } return state
      }
    }

    if (NATIVE_WEAK_MAP || shared.state) {
      var store = shared.state || (shared.state = new WeakMap())
      /* eslint-disable no-self-assign -- prototype methods protection */
      store.get = store.get
      store.has = store.has
      store.set = store.set
      /* eslint-enable no-self-assign -- prototype methods protection */
      set = function (it, metadata) {
        if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED)
        metadata.facade = it
        store.set(it, metadata)
        return metadata
      }
      get = function (it) {
        return store.get(it) || {}
      }
      has = function (it) {
        return store.has(it)
      }
    } else {
      var STATE = sharedKey('state')
      hiddenKeys[STATE] = true
      set = function (it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED)
        metadata.facade = it
        createNonEnumerableProperty(it, STATE, metadata)
        return metadata
      }
      get = function (it) {
        return hasOwn(it, STATE) ? it[STATE] : {}
      }
      has = function (it) {
        return hasOwn(it, STATE)
      }
    }

    module.exports = {
      set: set,
      get: get,
      has: has,
      enforce: enforce,
      getterFor: getterFor
    }
  }, { '../internals/create-non-enumerable-property': 27, '../internals/global-this': 63, '../internals/has-own-property': 64, '../internals/hidden-keys': 65, '../internals/is-object': 79, '../internals/shared-key': 123, '../internals/shared-store': 124, '../internals/weak-map-basic-detection': 147 }],
  73: [function (require, module, exports) {
    'use strict'
    var wellKnownSymbol = require('../internals/well-known-symbol')
    var Iterators = require('../internals/iterators')

    var ITERATOR = wellKnownSymbol('iterator')
    var ArrayPrototype = Array.prototype

    // check on default Array iterator
    module.exports = function (it) {
      return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it)
    }
  }, { '../internals/iterators': 89, '../internals/well-known-symbol': 151 }],
  74: [function (require, module, exports) {
    'use strict'
    var classof = require('../internals/classof-raw')

    // `IsArray` abstract operation
    // https://tc39.es/ecma262/#sec-isarray
    // eslint-disable-next-line es/no-array-isarray -- safe
    module.exports = Array.isArray || function isArray (argument) {
      return classof(argument) === 'Array'
    }
  }, { '../internals/classof-raw': 20 }],
  75: [function (require, module, exports) {
    'use strict'
    // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
    var documentAll = typeof document === 'object' && document.all

    // `IsCallable` abstract operation
    // https://tc39.es/ecma262/#sec-iscallable
    // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
    module.exports = typeof documentAll === 'undefined' && documentAll !== undefined ? function (argument) {
      return typeof argument === 'function' || argument === documentAll
    } : function (argument) {
      return typeof argument === 'function'
    }
  }, {}],
  76: [function (require, module, exports) {
    'use strict'
    var uncurryThis = require('../internals/function-uncurry-this')
    var fails = require('../internals/fails')
    var isCallable = require('../internals/is-callable')
    var classof = require('../internals/classof')
    var getBuiltIn = require('../internals/get-built-in')
    var inspectSource = require('../internals/inspect-source')

    var noop = function () { /* empty */ }
    var construct = getBuiltIn('Reflect', 'construct')
    var constructorRegExp = /^\s*(?:class|function)\b/
    var exec = uncurryThis(constructorRegExp.exec)
    var INCORRECT_TO_STRING = !constructorRegExp.test(noop)

    var isConstructorModern = function isConstructor (argument) {
      if (!isCallable(argument)) return false
      try {
        construct(noop, [], argument)
        return true
      } catch (error) {
        return false
      }
    }

    var isConstructorLegacy = function isConstructor (argument) {
      if (!isCallable(argument)) return false
      switch (classof(argument)) {
        case 'AsyncFunction':
        case 'GeneratorFunction':
        case 'AsyncGeneratorFunction': return false
      }
      try {
        // we can't check .prototype since constructors produced by .bind haven't it
        // `Function#toString` throws on some built-it function in some legacy engines
        // (for example, `DOMQuad` and similar in FF41-)
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument))
      } catch (error) {
        return true
      }
    }

    isConstructorLegacy.sham = true

    // `IsConstructor` abstract operation
    // https://tc39.es/ecma262/#sec-isconstructor
    module.exports = !construct || fails(function () {
      var called
      return isConstructorModern(isConstructorModern.call) ||
    !isConstructorModern(Object) ||
    !isConstructorModern(function () { called = true }) ||
    called
    }) ? isConstructorLegacy : isConstructorModern
  }, { '../internals/classof': 21, '../internals/fails': 45, '../internals/function-uncurry-this': 55, '../internals/get-built-in': 56, '../internals/inspect-source': 70, '../internals/is-callable': 75 }],
  77: [function (require, module, exports) {
    'use strict'
    var fails = require('../internals/fails')
    var isCallable = require('../internals/is-callable')

    var replacement = /#|\.prototype\./

    var isForced = function (feature, detection) {
      var value = data[normalize(feature)]
      return value === POLYFILL ? true
        : value === NATIVE ? false
          : isCallable(detection) ? fails(detection)
            : !!detection
    }

    var normalize = isForced.normalize = function (string) {
      return String(string).replace(replacement, '.').toLowerCase()
    }

    var data = isForced.data = {}
    var NATIVE = isForced.NATIVE = 'N'
    var POLYFILL = isForced.POLYFILL = 'P'

    module.exports = isForced
  }, { '../internals/fails': 45, '../internals/is-callable': 75 }],
  78: [function (require, module, exports) {
    'use strict'
    // we can't use just `it == null` since of `document.all` special case
    // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
    module.exports = function (it) {
      return it === null || it === undefined
    }
  }, {}],
  79: [function (require, module, exports) {
    'use strict'
    var isCallable = require('../internals/is-callable')

    module.exports = function (it) {
      return typeof it === 'object' ? it !== null : isCallable(it)
    }
  }, { '../internals/is-callable': 75 }],
  80: [function (require, module, exports) {
    'use strict'
    var isObject = require('../internals/is-object')

    module.exports = function (argument) {
      return isObject(argument) || argument === null
    }
  }, { '../internals/is-object': 79 }],
  81: [function (require, module, exports) {
    'use strict'
    module.exports = false
  }, {}],
  82: [function (require, module, exports) {
    'use strict'
    var isObject = require('../internals/is-object')
    var classof = require('../internals/classof-raw')
    var wellKnownSymbol = require('../internals/well-known-symbol')

    var MATCH = wellKnownSymbol('match')

    // `IsRegExp` abstract operation
    // https://tc39.es/ecma262/#sec-isregexp
    module.exports = function (it) {
      var isRegExp
      return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === 'RegExp')
    }
  }, { '../internals/classof-raw': 20, '../internals/is-object': 79, '../internals/well-known-symbol': 151 }],
  83: [function (require, module, exports) {
    'use strict'
    var getBuiltIn = require('../internals/get-built-in')
    var isCallable = require('../internals/is-callable')
    var isPrototypeOf = require('../internals/object-is-prototype-of')
    var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid')

    var $Object = Object

    module.exports = USE_SYMBOL_AS_UID ? function (it) {
      return typeof it === 'symbol'
    } : function (it) {
      var $Symbol = getBuiltIn('Symbol')
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it))
    }
  }, { '../internals/get-built-in': 56, '../internals/is-callable': 75, '../internals/object-is-prototype-of': 102, '../internals/use-symbol-as-uid': 144 }],
  84: [function (require, module, exports) {
    'use strict'
    var bind = require('../internals/function-bind-context')
    var call = require('../internals/function-call')
    var anObject = require('../internals/an-object')
    var tryToString = require('../internals/try-to-string')
    var isArrayIteratorMethod = require('../internals/is-array-iterator-method')
    var lengthOfArrayLike = require('../internals/length-of-array-like')
    var isPrototypeOf = require('../internals/object-is-prototype-of')
    var getIterator = require('../internals/get-iterator')
    var getIteratorMethod = require('../internals/get-iterator-method')
    var iteratorClose = require('../internals/iterator-close')

    var $TypeError = TypeError

    var Result = function (stopped, result) {
      this.stopped = stopped
      this.result = result
    }

    var ResultPrototype = Result.prototype

    module.exports = function (iterable, unboundFunction, options) {
      var that = options && options.that
      var AS_ENTRIES = !!(options && options.AS_ENTRIES)
      var IS_RECORD = !!(options && options.IS_RECORD)
      var IS_ITERATOR = !!(options && options.IS_ITERATOR)
      var INTERRUPTED = !!(options && options.INTERRUPTED)
      var fn = bind(unboundFunction, that)
      var iterator, iterFn, index, length, result, next, step

      var stop = function (condition) {
        if (iterator) iteratorClose(iterator, 'normal', condition)
        return new Result(true, condition)
      }

      var callFn = function (value) {
        if (AS_ENTRIES) {
          anObject(value)
          return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1])
        } return INTERRUPTED ? fn(value, stop) : fn(value)
      }

      if (IS_RECORD) {
        iterator = iterable.iterator
      } else if (IS_ITERATOR) {
        iterator = iterable
      } else {
        iterFn = getIteratorMethod(iterable)
        if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable')
        // optimisation for array iterators
        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
            result = callFn(iterable[index])
            if (result && isPrototypeOf(ResultPrototype, result)) return result
          } return new Result(false)
        }
        iterator = getIterator(iterable, iterFn)
      }

      next = IS_RECORD ? iterable.next : iterator.next
      while (!(step = call(next, iterator)).done) {
        try {
          result = callFn(step.value)
        } catch (error) {
          iteratorClose(iterator, 'throw', error)
        }
        if (typeof result === 'object' && result && isPrototypeOf(ResultPrototype, result)) return result
      } return new Result(false)
    }
  }, { '../internals/an-object': 8, '../internals/function-bind-context': 49, '../internals/function-call': 51, '../internals/get-iterator': 59, '../internals/get-iterator-method': 58, '../internals/is-array-iterator-method': 73, '../internals/iterator-close': 85, '../internals/length-of-array-like': 90, '../internals/object-is-prototype-of': 102, '../internals/try-to-string': 142 }],
  85: [function (require, module, exports) {
    'use strict'
    var call = require('../internals/function-call')
    var anObject = require('../internals/an-object')
    var getMethod = require('../internals/get-method')

    module.exports = function (iterator, kind, value) {
      var innerResult, innerError
      anObject(iterator)
      try {
        innerResult = getMethod(iterator, 'return')
        if (!innerResult) {
          if (kind === 'throw') throw value
          return value
        }
        innerResult = call(innerResult, iterator)
      } catch (error) {
        innerError = true
        innerResult = error
      }
      if (kind === 'throw') throw value
      if (innerError) throw innerResult
      anObject(innerResult)
      return value
    }
  }, { '../internals/an-object': 8, '../internals/function-call': 51, '../internals/get-method': 61 }],
  86: [function (require, module, exports) {
    'use strict'
    var IteratorPrototype = require('../internals/iterators-core').IteratorPrototype
    var create = require('../internals/object-create')
    var createPropertyDescriptor = require('../internals/create-property-descriptor')
    var setToStringTag = require('../internals/set-to-string-tag')
    var Iterators = require('../internals/iterators')

    var returnThis = function () { return this }

    module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
      var TO_STRING_TAG = NAME + ' Iterator'
      IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) })
      setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true)
      Iterators[TO_STRING_TAG] = returnThis
      return IteratorConstructor
    }
  }, { '../internals/create-property-descriptor': 28, '../internals/iterators': 89, '../internals/iterators-core': 88, '../internals/object-create': 93, '../internals/set-to-string-tag': 122 }],
  87: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var call = require('../internals/function-call')
    var IS_PURE = require('../internals/is-pure')
    var FunctionName = require('../internals/function-name')
    var isCallable = require('../internals/is-callable')
    var createIteratorConstructor = require('../internals/iterator-create-constructor')
    var getPrototypeOf = require('../internals/object-get-prototype-of')
    var setPrototypeOf = require('../internals/object-set-prototype-of')
    var setToStringTag = require('../internals/set-to-string-tag')
    var createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    var defineBuiltIn = require('../internals/define-built-in')
    var wellKnownSymbol = require('../internals/well-known-symbol')
    var Iterators = require('../internals/iterators')
    var IteratorsCore = require('../internals/iterators-core')

    var PROPER_FUNCTION_NAME = FunctionName.PROPER
    var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE
    var IteratorPrototype = IteratorsCore.IteratorPrototype
    var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS
    var ITERATOR = wellKnownSymbol('iterator')
    var KEYS = 'keys'
    var VALUES = 'values'
    var ENTRIES = 'entries'

    var returnThis = function () { return this }

    module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
      createIteratorConstructor(IteratorConstructor, NAME, next)

      var getIterationMethod = function (KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator
        if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND]

        switch (KIND) {
          case KEYS: return function keys () { return new IteratorConstructor(this, KIND) }
          case VALUES: return function values () { return new IteratorConstructor(this, KIND) }
          case ENTRIES: return function entries () { return new IteratorConstructor(this, KIND) }
        }

        return function () { return new IteratorConstructor(this) }
      }

      var TO_STRING_TAG = NAME + ' Iterator'
      var INCORRECT_VALUES_NAME = false
      var IterablePrototype = Iterable.prototype
      var nativeIterator = IterablePrototype[ITERATOR] ||
    IterablePrototype['@@iterator'] ||
    DEFAULT && IterablePrototype[DEFAULT]
      var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT)
      var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator
      var CurrentIteratorPrototype, methods, KEY

      // fix native
      if (anyNativeIterator) {
        CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()))
        if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
          if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
            if (setPrototypeOf) {
              setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype)
            } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
              defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis)
            }
          }
          // Set @@toStringTag to native iterators
          setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true)
          if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis
        }
      }

      // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
      if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
          createNonEnumerableProperty(IterablePrototype, 'name', VALUES)
        } else {
          INCORRECT_VALUES_NAME = true
          defaultIterator = function values () { return call(nativeIterator, this) }
        }
      }

      // export additional methods
      if (DEFAULT) {
        methods = {
          values: getIterationMethod(VALUES),
          keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
          entries: getIterationMethod(ENTRIES)
        }
        if (FORCED) {
          for (KEY in methods) {
            if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
              defineBuiltIn(IterablePrototype, KEY, methods[KEY])
            }
          }
        } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods)
      }

      // define iterator
      if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
        defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT })
      }
      Iterators[NAME] = defaultIterator

      return methods
    }
  }, { '../internals/create-non-enumerable-property': 27, '../internals/define-built-in': 32, '../internals/export': 44, '../internals/function-call': 51, '../internals/function-name': 52, '../internals/is-callable': 75, '../internals/is-pure': 81, '../internals/iterator-create-constructor': 86, '../internals/iterators': 89, '../internals/iterators-core': 88, '../internals/object-get-prototype-of': 100, '../internals/object-set-prototype-of': 106, '../internals/set-to-string-tag': 122, '../internals/well-known-symbol': 151 }],
  88: [function (require, module, exports) {
    'use strict'
    var fails = require('../internals/fails')
    var isCallable = require('../internals/is-callable')
    var isObject = require('../internals/is-object')
    var create = require('../internals/object-create')
    var getPrototypeOf = require('../internals/object-get-prototype-of')
    var defineBuiltIn = require('../internals/define-built-in')
    var wellKnownSymbol = require('../internals/well-known-symbol')
    var IS_PURE = require('../internals/is-pure')

    var ITERATOR = wellKnownSymbol('iterator')
    var BUGGY_SAFARI_ITERATORS = false

    // `%IteratorPrototype%` object
    // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
    var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator

    /* eslint-disable es/no-array-prototype-keys -- safe */
    if ([].keys) {
      arrayIterator = [].keys()
      // Safari 8 has buggy iterators w/o `next`
      if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true
      else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator))
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype
      }
    }

    var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
      var test = {}
      // FF44- legacy iterators case
      return IteratorPrototype[ITERATOR].call(test) !== test
    })

    if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {}
    else if (IS_PURE) IteratorPrototype = create(IteratorPrototype)

    // `%IteratorPrototype%[@@iterator]()` method
    // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
    if (!isCallable(IteratorPrototype[ITERATOR])) {
      defineBuiltIn(IteratorPrototype, ITERATOR, function () {
        return this
      })
    }

    module.exports = {
      IteratorPrototype: IteratorPrototype,
      BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
    }
  }, { '../internals/define-built-in': 32, '../internals/fails': 45, '../internals/is-callable': 75, '../internals/is-object': 79, '../internals/is-pure': 81, '../internals/object-create': 93, '../internals/object-get-prototype-of': 100, '../internals/well-known-symbol': 151 }],
  89: [function (require, module, exports) {
    arguments[4][65][0].apply(exports, arguments)
  }, { dup: 65 }],
  90: [function (require, module, exports) {
    'use strict'
    var toLength = require('../internals/to-length')

    // `LengthOfArrayLike` abstract operation
    // https://tc39.es/ecma262/#sec-lengthofarraylike
    module.exports = function (obj) {
      return toLength(obj.length)
    }
  }, { '../internals/to-length': 136 }],
  91: [function (require, module, exports) {
    'use strict'
    var uncurryThis = require('../internals/function-uncurry-this')
    var fails = require('../internals/fails')
    var isCallable = require('../internals/is-callable')
    var hasOwn = require('../internals/has-own-property')
    var DESCRIPTORS = require('../internals/descriptors')
    var CONFIGURABLE_FUNCTION_NAME = require('../internals/function-name').CONFIGURABLE
    var inspectSource = require('../internals/inspect-source')
    var InternalStateModule = require('../internals/internal-state')

    var enforceInternalState = InternalStateModule.enforce
    var getInternalState = InternalStateModule.get
    var $String = String
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    var defineProperty = Object.defineProperty
    var stringSlice = uncurryThis(''.slice)
    var replace = uncurryThis(''.replace)
    var join = uncurryThis([].join)

    var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
      return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8
    })

    var TEMPLATE = String(String).split('String')

    var makeBuiltIn = module.exports = function (value, name, options) {
      if (stringSlice($String(name), 0, 7) === 'Symbol(') {
        name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']'
      }
      if (options && options.getter) name = 'get ' + name
      if (options && options.setter) name = 'set ' + name
      if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
        if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true })
        else value.name = name
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
        defineProperty(value, 'length', { value: options.arity })
      }
      try {
        if (options && hasOwn(options, 'constructor') && options.constructor) {
          if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false })
          // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
        } else if (value.prototype) value.prototype = undefined
      } catch (error) { /* empty */ }
      var state = enforceInternalState(value)
      if (!hasOwn(state, 'source')) {
        state.source = join(TEMPLATE, typeof name === 'string' ? name : '')
      } return value
    }

    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    // eslint-disable-next-line no-extend-native -- required
    Function.prototype.toString = makeBuiltIn(function toString () {
      return isCallable(this) && getInternalState(this).source || inspectSource(this)
    }, 'toString')
  }, { '../internals/descriptors': 35, '../internals/fails': 45, '../internals/function-name': 52, '../internals/function-uncurry-this': 55, '../internals/has-own-property': 64, '../internals/inspect-source': 70, '../internals/internal-state': 72, '../internals/is-callable': 75 }],
  92: [function (require, module, exports) {
    'use strict'
    var ceil = Math.ceil
    var floor = Math.floor

    // `Math.trunc` method
    // https://tc39.es/ecma262/#sec-math.trunc
    // eslint-disable-next-line es/no-math-trunc -- safe
    module.exports = Math.trunc || function trunc (x) {
      var n = +x
      return (n > 0 ? floor : ceil)(n)
    }
  }, {}],
  93: [function (require, module, exports) {
    'use strict'
    /* global ActiveXObject -- old IE, WSH */
    var anObject = require('../internals/an-object')
    var definePropertiesModule = require('../internals/object-define-properties')
    var enumBugKeys = require('../internals/enum-bug-keys')
    var hiddenKeys = require('../internals/hidden-keys')
    var html = require('../internals/html')
    var documentCreateElement = require('../internals/document-create-element')
    var sharedKey = require('../internals/shared-key')

    var GT = '>'
    var LT = '<'
    var PROTOTYPE = 'prototype'
    var SCRIPT = 'script'
    var IE_PROTO = sharedKey('IE_PROTO')

    var EmptyConstructor = function () { /* empty */ }

    var scriptTag = function (content) {
      return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT
    }

    // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
    var NullProtoObjectViaActiveX = function (activeXDocument) {
      activeXDocument.write(scriptTag(''))
      activeXDocument.close()
      var temp = activeXDocument.parentWindow.Object
      // eslint-disable-next-line no-useless-assignment -- avoid memory leak
      activeXDocument = null
      return temp
    }

    // Create object with fake `null` prototype: use iframe Object with cleared prototype
    var NullProtoObjectViaIFrame = function () {
      // Thrash, waste and sodomy: IE GC bug
      var iframe = documentCreateElement('iframe')
      var JS = 'java' + SCRIPT + ':'
      var iframeDocument
      iframe.style.display = 'none'
      html.appendChild(iframe)
      // https://github.com/zloirock/core-js/issues/475
      iframe.src = String(JS)
      iframeDocument = iframe.contentWindow.document
      iframeDocument.open()
      iframeDocument.write(scriptTag('document.F=Object'))
      iframeDocument.close()
      return iframeDocument.F
    }

    // Check for document.domain and active x support
    // No need to use active x approach when document.domain is not set
    // see https://github.com/es-shims/es5-shim/issues/150
    // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
    // avoid IE GC bug
    var activeXDocument
    var NullProtoObject = function () {
      try {
        activeXDocument = new ActiveXObject('htmlfile')
      } catch (error) { /* ignore */ }
      NullProtoObject = typeof document !== 'undefined'
        ? document.domain && activeXDocument
          ? NullProtoObjectViaActiveX(activeXDocument) // old IE
          : NullProtoObjectViaIFrame()
        : NullProtoObjectViaActiveX(activeXDocument) // WSH
      var length = enumBugKeys.length
      while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]]
      return NullProtoObject()
    }

    hiddenKeys[IE_PROTO] = true

    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    // eslint-disable-next-line es/no-object-create -- safe
    module.exports = Object.create || function create (O, Properties) {
      var result
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O)
        result = new EmptyConstructor()
        EmptyConstructor[PROTOTYPE] = null
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O
      } else result = NullProtoObject()
      return Properties === undefined ? result : definePropertiesModule.f(result, Properties)
    }
  }, { '../internals/an-object': 8, '../internals/document-create-element': 36, '../internals/enum-bug-keys': 40, '../internals/hidden-keys': 65, '../internals/html': 66, '../internals/object-define-properties': 94, '../internals/shared-key': 123 }],
  94: [function (require, module, exports) {
    'use strict'
    var DESCRIPTORS = require('../internals/descriptors')
    var V8_PROTOTYPE_DEFINE_BUG = require('../internals/v8-prototype-define-bug')
    var definePropertyModule = require('../internals/object-define-property')
    var anObject = require('../internals/an-object')
    var toIndexedObject = require('../internals/to-indexed-object')
    var objectKeys = require('../internals/object-keys')

    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    // eslint-disable-next-line es/no-object-defineproperties -- safe
    exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties (O, Properties) {
      anObject(O)
      var props = toIndexedObject(Properties)
      var keys = objectKeys(Properties)
      var length = keys.length
      var index = 0
      var key
      while (length > index) definePropertyModule.f(O, key = keys[index++], props[key])
      return O
    }
  }, { '../internals/an-object': 8, '../internals/descriptors': 35, '../internals/object-define-property': 95, '../internals/object-keys': 104, '../internals/to-indexed-object': 134, '../internals/v8-prototype-define-bug': 145 }],
  95: [function (require, module, exports) {
    'use strict'
    var DESCRIPTORS = require('../internals/descriptors')
    var IE8_DOM_DEFINE = require('../internals/ie8-dom-define')
    var V8_PROTOTYPE_DEFINE_BUG = require('../internals/v8-prototype-define-bug')
    var anObject = require('../internals/an-object')
    var toPropertyKey = require('../internals/to-property-key')

    var $TypeError = TypeError
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    var $defineProperty = Object.defineProperty
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
    var ENUMERABLE = 'enumerable'
    var CONFIGURABLE = 'configurable'
    var WRITABLE = 'writable'

    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty (O, P, Attributes) {
      anObject(O)
      P = toPropertyKey(P)
      anObject(Attributes)
      if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P)
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          }
        }
      } return $defineProperty(O, P, Attributes)
    } : $defineProperty : function defineProperty (O, P, Attributes) {
      anObject(O)
      P = toPropertyKey(P)
      anObject(Attributes)
      if (IE8_DOM_DEFINE) {
        try {
          return $defineProperty(O, P, Attributes)
        } catch (error) { /* empty */ }
      }
      if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported')
      if ('value' in Attributes) O[P] = Attributes.value
      return O
    }
  }, { '../internals/an-object': 8, '../internals/descriptors': 35, '../internals/ie8-dom-define': 67, '../internals/to-property-key': 139, '../internals/v8-prototype-define-bug': 145 }],
  96: [function (require, module, exports) {
    'use strict'
    var DESCRIPTORS = require('../internals/descriptors')
    var call = require('../internals/function-call')
    var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable')
    var createPropertyDescriptor = require('../internals/create-property-descriptor')
    var toIndexedObject = require('../internals/to-indexed-object')
    var toPropertyKey = require('../internals/to-property-key')
    var hasOwn = require('../internals/has-own-property')
    var IE8_DOM_DEFINE = require('../internals/ie8-dom-define')

    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor (O, P) {
      O = toIndexedObject(O)
      P = toPropertyKey(P)
      if (IE8_DOM_DEFINE) {
        try {
          return $getOwnPropertyDescriptor(O, P)
        } catch (error) { /* empty */ }
      }
      if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P])
    }
  }, { '../internals/create-property-descriptor': 28, '../internals/descriptors': 35, '../internals/function-call': 51, '../internals/has-own-property': 64, '../internals/ie8-dom-define': 67, '../internals/object-property-is-enumerable': 105, '../internals/to-indexed-object': 134, '../internals/to-property-key': 139 }],
  97: [function (require, module, exports) {
    'use strict'
    /* eslint-disable es/no-object-getownpropertynames -- safe */
    var classof = require('../internals/classof-raw')
    var toIndexedObject = require('../internals/to-indexed-object')
    var $getOwnPropertyNames = require('../internals/object-get-own-property-names').f
    var arraySlice = require('../internals/array-slice')

    var windowNames = typeof window === 'object' && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window) : []

    var getWindowNames = function (it) {
      try {
        return $getOwnPropertyNames(it)
      } catch (error) {
        return arraySlice(windowNames)
      }
    }

    // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
    module.exports.f = function getOwnPropertyNames (it) {
      return windowNames && classof(it) === 'Window'
        ? getWindowNames(it)
        : $getOwnPropertyNames(toIndexedObject(it))
    }
  }, { '../internals/array-slice': 14, '../internals/classof-raw': 20, '../internals/object-get-own-property-names': 98, '../internals/to-indexed-object': 134 }],
  98: [function (require, module, exports) {
    'use strict'
    var internalObjectKeys = require('../internals/object-keys-internal')
    var enumBugKeys = require('../internals/enum-bug-keys')

    var hiddenKeys = enumBugKeys.concat('length', 'prototype')

    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    // eslint-disable-next-line es/no-object-getownpropertynames -- safe
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames (O) {
      return internalObjectKeys(O, hiddenKeys)
    }
  }, { '../internals/enum-bug-keys': 40, '../internals/object-keys-internal': 103 }],
  99: [function (require, module, exports) {
    'use strict'
    // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
    exports.f = Object.getOwnPropertySymbols
  }, {}],
  100: [function (require, module, exports) {
    'use strict'
    var hasOwn = require('../internals/has-own-property')
    var isCallable = require('../internals/is-callable')
    var toObject = require('../internals/to-object')
    var sharedKey = require('../internals/shared-key')
    var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter')

    var IE_PROTO = sharedKey('IE_PROTO')
    var $Object = Object
    var ObjectPrototype = $Object.prototype

    // `Object.getPrototypeOf` method
    // https://tc39.es/ecma262/#sec-object.getprototypeof
    // eslint-disable-next-line es/no-object-getprototypeof -- safe
    module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
      var object = toObject(O)
      if (hasOwn(object, IE_PROTO)) return object[IE_PROTO]
      var constructor = object.constructor
      if (isCallable(constructor) && object instanceof constructor) {
        return constructor.prototype
      } return object instanceof $Object ? ObjectPrototype : null
    }
  }, { '../internals/correct-prototype-getter': 25, '../internals/has-own-property': 64, '../internals/is-callable': 75, '../internals/shared-key': 123, '../internals/to-object': 137 }],
  101: [function (require, module, exports) {
    'use strict'
    var fails = require('../internals/fails')
    var isObject = require('../internals/is-object')
    var classof = require('../internals/classof-raw')
    var ARRAY_BUFFER_NON_EXTENSIBLE = require('../internals/array-buffer-non-extensible')

    // eslint-disable-next-line es/no-object-isextensible -- safe
    var $isExtensible = Object.isExtensible
    var FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1) })

    // `Object.isExtensible` method
    // https://tc39.es/ecma262/#sec-object.isextensible
    module.exports = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible (it) {
      if (!isObject(it)) return false
      if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === 'ArrayBuffer') return false
      return $isExtensible ? $isExtensible(it) : true
    } : $isExtensible
  }, { '../internals/array-buffer-non-extensible': 9, '../internals/classof-raw': 20, '../internals/fails': 45, '../internals/is-object': 79 }],
  102: [function (require, module, exports) {
    'use strict'
    var uncurryThis = require('../internals/function-uncurry-this')

    module.exports = uncurryThis({}.isPrototypeOf)
  }, { '../internals/function-uncurry-this': 55 }],
  103: [function (require, module, exports) {
    'use strict'
    var uncurryThis = require('../internals/function-uncurry-this')
    var hasOwn = require('../internals/has-own-property')
    var toIndexedObject = require('../internals/to-indexed-object')
    var indexOf = require('../internals/array-includes').indexOf
    var hiddenKeys = require('../internals/hidden-keys')

    var push = uncurryThis([].push)

    module.exports = function (object, names) {
      var O = toIndexedObject(object)
      var i = 0
      var result = []
      var key
      for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key)
      // Don't enum bug & hidden keys
      while (names.length > i) {
        if (hasOwn(O, key = names[i++])) {
          ~indexOf(result, key) || push(result, key)
        }
      }
      return result
    }
  }, { '../internals/array-includes': 11, '../internals/function-uncurry-this': 55, '../internals/has-own-property': 64, '../internals/hidden-keys': 65, '../internals/to-indexed-object': 134 }],
  104: [function (require, module, exports) {
    'use strict'
    var internalObjectKeys = require('../internals/object-keys-internal')
    var enumBugKeys = require('../internals/enum-bug-keys')

    // `Object.keys` method
    // https://tc39.es/ecma262/#sec-object.keys
    // eslint-disable-next-line es/no-object-keys -- safe
    module.exports = Object.keys || function keys (O) {
      return internalObjectKeys(O, enumBugKeys)
    }
  }, { '../internals/enum-bug-keys': 40, '../internals/object-keys-internal': 103 }],
  105: [function (require, module, exports) {
    'use strict'
    var $propertyIsEnumerable = {}.propertyIsEnumerable
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

    // Nashorn ~ JDK8 bug
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1)

    // `Object.prototype.propertyIsEnumerable` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
    exports.f = NASHORN_BUG ? function propertyIsEnumerable (V) {
      var descriptor = getOwnPropertyDescriptor(this, V)
      return !!descriptor && descriptor.enumerable
    } : $propertyIsEnumerable
  }, {}],
  106: [function (require, module, exports) {
    'use strict'
    /* eslint-disable no-proto -- safe */
    var uncurryThisAccessor = require('../internals/function-uncurry-this-accessor')
    var isObject = require('../internals/is-object')
    var requireObjectCoercible = require('../internals/require-object-coercible')
    var aPossiblePrototype = require('../internals/a-possible-prototype')

    // `Object.setPrototypeOf` method
    // https://tc39.es/ecma262/#sec-object.setprototypeof
    // Works with __proto__ only. Old v8 can't work with null proto objects.
    // eslint-disable-next-line es/no-object-setprototypeof -- safe
    module.exports = Object.setPrototypeOf || ('__proto__' in {} ? (function () {
      var CORRECT_SETTER = false
      var test = {}
      var setter
      try {
        setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set')
        setter(test, [])
        CORRECT_SETTER = test instanceof Array
      } catch (error) { /* empty */ }
      return function setPrototypeOf (O, proto) {
        requireObjectCoercible(O)
        aPossiblePrototype(proto)
        if (!isObject(O)) return O
        if (CORRECT_SETTER) setter(O, proto)
        else O.__proto__ = proto
        return O
      }
    }()) : undefined)
  }, { '../internals/a-possible-prototype': 3, '../internals/function-uncurry-this-accessor': 53, '../internals/is-object': 79, '../internals/require-object-coercible': 119 }],
  107: [function (require, module, exports) {
    'use strict'
    var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support')
    var classof = require('../internals/classof')

    // `Object.prototype.toString` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.tostring
    module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString () {
      return '[object ' + classof(this) + ']'
    }
  }, { '../internals/classof': 21, '../internals/to-string-tag-support': 140 }],
  108: [function (require, module, exports) {
    'use strict'
    var call = require('../internals/function-call')
    var isCallable = require('../internals/is-callable')
    var isObject = require('../internals/is-object')

    var $TypeError = TypeError

    // `OrdinaryToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-ordinarytoprimitive
    module.exports = function (input, pref) {
      var fn, val
      if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val
      if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val
      if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val
      throw new $TypeError("Can't convert object to primitive value")
    }
  }, { '../internals/function-call': 51, '../internals/is-callable': 75, '../internals/is-object': 79 }],
  109: [function (require, module, exports) {
    'use strict'
    var getBuiltIn = require('../internals/get-built-in')
    var uncurryThis = require('../internals/function-uncurry-this')
    var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names')
    var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols')
    var anObject = require('../internals/an-object')

    var concat = uncurryThis([].concat)

    // all object keys, includes non-enumerable and symbols
    module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys (it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it))
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys
    }
  }, { '../internals/an-object': 8, '../internals/function-uncurry-this': 55, '../internals/get-built-in': 56, '../internals/object-get-own-property-names': 98, '../internals/object-get-own-property-symbols': 99 }],
  110: [function (require, module, exports) {
    'use strict'
    var globalThis = require('../internals/global-this')

    module.exports = globalThis
  }, { '../internals/global-this': 63 }],
  111: [function (require, module, exports) {
    'use strict'
    var defineProperty = require('../internals/object-define-property').f

    module.exports = function (Target, Source, key) {
      key in Target || defineProperty(Target, key, {
        configurable: true,
        get: function () { return Source[key] },
        set: function (it) { Source[key] = it }
      })
    }
  }, { '../internals/object-define-property': 95 }],
  112: [function (require, module, exports) {
    'use strict'
    var call = require('../internals/function-call')
    var anObject = require('../internals/an-object')
    var isCallable = require('../internals/is-callable')
    var classof = require('../internals/classof-raw')
    var regexpExec = require('../internals/regexp-exec')

    var $TypeError = TypeError

    // `RegExpExec` abstract operation
    // https://tc39.es/ecma262/#sec-regexpexec
    module.exports = function (R, S) {
      var exec = R.exec
      if (isCallable(exec)) {
        var result = call(exec, R, S)
        if (result !== null) anObject(result)
        return result
      }
      if (classof(R) === 'RegExp') return call(regexpExec, R, S)
      throw new $TypeError('RegExp#exec called on incompatible receiver')
    }
  }, { '../internals/an-object': 8, '../internals/classof-raw': 20, '../internals/function-call': 51, '../internals/is-callable': 75, '../internals/regexp-exec': 113 }],
  113: [function (require, module, exports) {
    'use strict'
    /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
    /* eslint-disable regexp/no-useless-quantifier -- testing */
    var call = require('../internals/function-call')
    var uncurryThis = require('../internals/function-uncurry-this')
    var toString = require('../internals/to-string')
    var regexpFlags = require('../internals/regexp-flags')
    var stickyHelpers = require('../internals/regexp-sticky-helpers')
    var shared = require('../internals/shared')
    var create = require('../internals/object-create')
    var getInternalState = require('../internals/internal-state').get
    var UNSUPPORTED_DOT_ALL = require('../internals/regexp-unsupported-dot-all')
    var UNSUPPORTED_NCG = require('../internals/regexp-unsupported-ncg')

    var nativeReplace = shared('native-string-replace', String.prototype.replace)
    var nativeExec = RegExp.prototype.exec
    var patchedExec = nativeExec
    var charAt = uncurryThis(''.charAt)
    var indexOf = uncurryThis(''.indexOf)
    var replace = uncurryThis(''.replace)
    var stringSlice = uncurryThis(''.slice)

    var UPDATES_LAST_INDEX_WRONG = (function () {
      var re1 = /a/
      var re2 = /b*/g
      call(nativeExec, re1, 'a')
      call(nativeExec, re2, 'a')
      return re1.lastIndex !== 0 || re2.lastIndex !== 0
    })()

    var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET

    // nonparticipating capturing group, copied from es5-shim's String#split patch.
    var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined

    var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG

    if (PATCH) {
      patchedExec = function exec (string) {
        var re = this
        var state = getInternalState(re)
        var str = toString(string)
        var raw = state.raw
        var result, reCopy, lastIndex, match, i, object, group

        if (raw) {
          raw.lastIndex = re.lastIndex
          result = call(patchedExec, raw, str)
          re.lastIndex = raw.lastIndex
          return result
        }

        var groups = state.groups
        var sticky = UNSUPPORTED_Y && re.sticky
        var flags = call(regexpFlags, re)
        var source = re.source
        var charsAdded = 0
        var strCopy = str

        if (sticky) {
          flags = replace(flags, 'y', '')
          if (indexOf(flags, 'g') === -1) {
            flags += 'g'
          }

          strCopy = stringSlice(str, re.lastIndex)
          // Support anchored sticky behavior.
          if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
            source = '(?: ' + source + ')'
            strCopy = ' ' + strCopy
            charsAdded++
          }
          // ^(? + rx + ) is needed, in combination with some str slicing, to
          // simulate the 'y' flag.
          reCopy = new RegExp('^(?:' + source + ')', flags)
        }

        if (NPCG_INCLUDED) {
          reCopy = new RegExp('^' + source + '$(?!\\s)', flags)
        }
        if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex

        match = call(nativeExec, sticky ? reCopy : re, strCopy)

        if (sticky) {
          if (match) {
            match.input = stringSlice(match.input, charsAdded)
            match[0] = stringSlice(match[0], charsAdded)
            match.index = re.lastIndex
            re.lastIndex += match[0].length
          } else re.lastIndex = 0
        } else if (UPDATES_LAST_INDEX_WRONG && match) {
          re.lastIndex = re.global ? match.index + match[0].length : lastIndex
        }
        if (NPCG_INCLUDED && match && match.length > 1) {
          // Fix browsers whose `exec` methods don't consistently return `undefined`
          // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
          call(nativeReplace, match[0], reCopy, function () {
            for (i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === undefined) match[i] = undefined
            }
          })
        }

        if (match && groups) {
          match.groups = object = create(null)
          for (i = 0; i < groups.length; i++) {
            group = groups[i]
            object[group[0]] = match[group[1]]
          }
        }

        return match
      }
    }

    module.exports = patchedExec
  }, { '../internals/function-call': 51, '../internals/function-uncurry-this': 55, '../internals/internal-state': 72, '../internals/object-create': 93, '../internals/regexp-flags': 114, '../internals/regexp-sticky-helpers': 116, '../internals/regexp-unsupported-dot-all': 117, '../internals/regexp-unsupported-ncg': 118, '../internals/shared': 125, '../internals/to-string': 141 }],
  114: [function (require, module, exports) {
    'use strict'
    var anObject = require('../internals/an-object')

    // `RegExp.prototype.flags` getter implementation
    // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
    module.exports = function () {
      var that = anObject(this)
      var result = ''
      if (that.hasIndices) result += 'd'
      if (that.global) result += 'g'
      if (that.ignoreCase) result += 'i'
      if (that.multiline) result += 'm'
      if (that.dotAll) result += 's'
      if (that.unicode) result += 'u'
      if (that.unicodeSets) result += 'v'
      if (that.sticky) result += 'y'
      return result
    }
  }, { '../internals/an-object': 8 }],
  115: [function (require, module, exports) {
    'use strict'
    var call = require('../internals/function-call')
    var hasOwn = require('../internals/has-own-property')
    var isPrototypeOf = require('../internals/object-is-prototype-of')
    var regExpFlags = require('../internals/regexp-flags')

    var RegExpPrototype = RegExp.prototype

    module.exports = function (R) {
      var flags = R.flags
      return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
        ? call(regExpFlags, R) : flags
    }
  }, { '../internals/function-call': 51, '../internals/has-own-property': 64, '../internals/object-is-prototype-of': 102, '../internals/regexp-flags': 114 }],
  116: [function (require, module, exports) {
    'use strict'
    var fails = require('../internals/fails')
    var globalThis = require('../internals/global-this')

    // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
    var $RegExp = globalThis.RegExp

    var UNSUPPORTED_Y = fails(function () {
      var re = $RegExp('a', 'y')
      re.lastIndex = 2
      return re.exec('abcd') !== null
    })

    // UC Browser bug
    // https://github.com/zloirock/core-js/issues/1008
    var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
      return !$RegExp('a', 'y').sticky
    })

    var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
      // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
      var re = $RegExp('^r', 'gy')
      re.lastIndex = 2
      return re.exec('str') !== null
    })

    module.exports = {
      BROKEN_CARET: BROKEN_CARET,
      MISSED_STICKY: MISSED_STICKY,
      UNSUPPORTED_Y: UNSUPPORTED_Y
    }
  }, { '../internals/fails': 45, '../internals/global-this': 63 }],
  117: [function (require, module, exports) {
    'use strict'
    var fails = require('../internals/fails')
    var globalThis = require('../internals/global-this')

    // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
    var $RegExp = globalThis.RegExp

    module.exports = fails(function () {
      var re = $RegExp('.', 's')
      return !(re.dotAll && re.test('\n') && re.flags === 's')
    })
  }, { '../internals/fails': 45, '../internals/global-this': 63 }],
  118: [function (require, module, exports) {
    'use strict'
    var fails = require('../internals/fails')
    var globalThis = require('../internals/global-this')

    // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
    var $RegExp = globalThis.RegExp

    module.exports = fails(function () {
      var re = $RegExp('(?<a>b)', 'g')
      return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc'
    })
  }, { '../internals/fails': 45, '../internals/global-this': 63 }],
  119: [function (require, module, exports) {
    'use strict'
    var isNullOrUndefined = require('../internals/is-null-or-undefined')

    var $TypeError = TypeError

    // `RequireObjectCoercible` abstract operation
    // https://tc39.es/ecma262/#sec-requireobjectcoercible
    module.exports = function (it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it)
      return it
    }
  }, { '../internals/is-null-or-undefined': 78 }],
  120: [function (require, module, exports) {
    'use strict'
    var globalThis = require('../internals/global-this')
    var apply = require('../internals/function-apply')
    var isCallable = require('../internals/is-callable')
    var ENVIRONMENT = require('../internals/environment')
    var USER_AGENT = require('../internals/environment-user-agent')
    var arraySlice = require('../internals/array-slice')
    var validateArgumentsLength = require('../internals/validate-arguments-length')

    var Function = globalThis.Function
    // dirty IE9- and Bun 0.3.0- checks
    var WRAP = /MSIE .\./.test(USER_AGENT) || ENVIRONMENT === 'BUN' && (function () {
      var version = globalThis.Bun.version.split('.')
      return version.length < 3 || version[0] === '0' && (version[1] < 3 || version[1] === '3' && version[2] === '0')
    })()

    // IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
    // https://github.com/oven-sh/bun/issues/1633
    module.exports = function (scheduler, hasTimeArg) {
      var firstParamIndex = hasTimeArg ? 2 : 1
      return WRAP ? function (handler, timeout /* , ...arguments */) {
        var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex
        var fn = isCallable(handler) ? handler : Function(handler)
        var params = boundArgs ? arraySlice(arguments, firstParamIndex) : []
        var callback = boundArgs ? function () {
          apply(fn, this, params)
        } : fn
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback)
      } : scheduler
    }
  }, { '../internals/array-slice': 14, '../internals/environment': 43, '../internals/environment-user-agent': 41, '../internals/function-apply': 48, '../internals/global-this': 63, '../internals/is-callable': 75, '../internals/validate-arguments-length': 146 }],
  121: [function (require, module, exports) {
    'use strict'
    var getBuiltIn = require('../internals/get-built-in')
    var defineBuiltInAccessor = require('../internals/define-built-in-accessor')
    var wellKnownSymbol = require('../internals/well-known-symbol')
    var DESCRIPTORS = require('../internals/descriptors')

    var SPECIES = wellKnownSymbol('species')

    module.exports = function (CONSTRUCTOR_NAME) {
      var Constructor = getBuiltIn(CONSTRUCTOR_NAME)

      if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
        defineBuiltInAccessor(Constructor, SPECIES, {
          configurable: true,
          get: function () { return this }
        })
      }
    }
  }, { '../internals/define-built-in-accessor': 31, '../internals/descriptors': 35, '../internals/get-built-in': 56, '../internals/well-known-symbol': 151 }],
  122: [function (require, module, exports) {
    'use strict'
    var defineProperty = require('../internals/object-define-property').f
    var hasOwn = require('../internals/has-own-property')
    var wellKnownSymbol = require('../internals/well-known-symbol')

    var TO_STRING_TAG = wellKnownSymbol('toStringTag')

    module.exports = function (target, TAG, STATIC) {
      if (target && !STATIC) target = target.prototype
      if (target && !hasOwn(target, TO_STRING_TAG)) {
        defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG })
      }
    }
  }, { '../internals/has-own-property': 64, '../internals/object-define-property': 95, '../internals/well-known-symbol': 151 }],
  123: [function (require, module, exports) {
    'use strict'
    var shared = require('../internals/shared')
    var uid = require('../internals/uid')

    var keys = shared('keys')

    module.exports = function (key) {
      return keys[key] || (keys[key] = uid(key))
    }
  }, { '../internals/shared': 125, '../internals/uid': 143 }],
  124: [function (require, module, exports) {
    'use strict'
    var IS_PURE = require('../internals/is-pure')
    var globalThis = require('../internals/global-this')
    var defineGlobalProperty = require('../internals/define-global-property')

    var SHARED = '__core-js_shared__'
    var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

    (store.versions || (store.versions = [])).push({
      version: '3.38.1',
      mode: IS_PURE ? 'pure' : 'global',
      copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
      license: 'https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE',
      source: 'https://github.com/zloirock/core-js'
    })
  }, { '../internals/define-global-property': 34, '../internals/global-this': 63, '../internals/is-pure': 81 }],
  125: [function (require, module, exports) {
    'use strict'
    var store = require('../internals/shared-store')

    module.exports = function (key, value) {
      return store[key] || (store[key] = value || {})
    }
  }, { '../internals/shared-store': 124 }],
  126: [function (require, module, exports) {
    'use strict'
    var uncurryThis = require('../internals/function-uncurry-this')
    var toIntegerOrInfinity = require('../internals/to-integer-or-infinity')
    var toString = require('../internals/to-string')
    var requireObjectCoercible = require('../internals/require-object-coercible')

    var charAt = uncurryThis(''.charAt)
    var charCodeAt = uncurryThis(''.charCodeAt)
    var stringSlice = uncurryThis(''.slice)

    var createMethod = function (CONVERT_TO_STRING) {
      return function ($this, pos) {
        var S = toString(requireObjectCoercible($this))
        var position = toIntegerOrInfinity(pos)
        var size = S.length
        var first, second
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined
        first = charCodeAt(S, position)
        return first < 0xD800 || first > 0xDBFF || position + 1 === size ||
      (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING
            ? charAt(S, position)
            : first
          : CONVERT_TO_STRING
            ? stringSlice(S, position, position + 2)
            : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000
      }
    }

    module.exports = {
      // `String.prototype.codePointAt` method
      // https://tc39.es/ecma262/#sec-string.prototype.codepointat
      codeAt: createMethod(false),
      // `String.prototype.at` method
      // https://github.com/mathiasbynens/String.prototype.at
      charAt: createMethod(true)
    }
  }, { '../internals/function-uncurry-this': 55, '../internals/require-object-coercible': 119, '../internals/to-integer-or-infinity': 135, '../internals/to-string': 141 }],
  127: [function (require, module, exports) {
    'use strict'
    var PROPER_FUNCTION_NAME = require('../internals/function-name').PROPER
    var fails = require('../internals/fails')
    var whitespaces = require('../internals/whitespaces')

    var non = '\u200B\u0085\u180E'

    // check that a method works with the correct list
    // of whitespaces and has a correct name
    module.exports = function (METHOD_NAME) {
      return fails(function () {
        return !!whitespaces[METHOD_NAME]() ||
      non[METHOD_NAME]() !== non ||
      (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME)
      })
    }
  }, { '../internals/fails': 45, '../internals/function-name': 52, '../internals/whitespaces': 152 }],
  128: [function (require, module, exports) {
    'use strict'
    var uncurryThis = require('../internals/function-uncurry-this')
    var requireObjectCoercible = require('../internals/require-object-coercible')
    var toString = require('../internals/to-string')
    var whitespaces = require('../internals/whitespaces')

    var replace = uncurryThis(''.replace)
    var ltrim = RegExp('^[' + whitespaces + ']+')
    var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$')

    // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
    var createMethod = function (TYPE) {
      return function ($this) {
        var string = toString(requireObjectCoercible($this))
        if (TYPE & 1) string = replace(string, ltrim, '')
        if (TYPE & 2) string = replace(string, rtrim, '$1')
        return string
      }
    }

    module.exports = {
      // `String.prototype.{ trimLeft, trimStart }` methods
      // https://tc39.es/ecma262/#sec-string.prototype.trimstart
      start: createMethod(1),
      // `String.prototype.{ trimRight, trimEnd }` methods
      // https://tc39.es/ecma262/#sec-string.prototype.trimend
      end: createMethod(2),
      // `String.prototype.trim` method
      // https://tc39.es/ecma262/#sec-string.prototype.trim
      trim: createMethod(3)
    }
  }, { '../internals/function-uncurry-this': 55, '../internals/require-object-coercible': 119, '../internals/to-string': 141, '../internals/whitespaces': 152 }],
  129: [function (require, module, exports) {
    'use strict'
    /* eslint-disable es/no-symbol -- required for testing */
    var V8_VERSION = require('../internals/environment-v8-version')
    var fails = require('../internals/fails')
    var globalThis = require('../internals/global-this')

    var $String = globalThis.String

    // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
    module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
      var symbol = Symbol('symbol detection')
      // Chrome 38 Symbol has incorrect toString conversion
      // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
      // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
      // of course, fail.
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41
    })
  }, { '../internals/environment-v8-version': 42, '../internals/fails': 45, '../internals/global-this': 63 }],
  130: [function (require, module, exports) {
    'use strict'
    var call = require('../internals/function-call')
    var getBuiltIn = require('../internals/get-built-in')
    var wellKnownSymbol = require('../internals/well-known-symbol')
    var defineBuiltIn = require('../internals/define-built-in')

    module.exports = function () {
      var Symbol = getBuiltIn('Symbol')
      var SymbolPrototype = Symbol && Symbol.prototype
      var valueOf = SymbolPrototype && SymbolPrototype.valueOf
      var TO_PRIMITIVE = wellKnownSymbol('toPrimitive')

      if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
        // `Symbol.prototype[@@toPrimitive]` method
        // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
        // eslint-disable-next-line no-unused-vars -- required for .length
        defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function (hint) {
          return call(valueOf, this)
        }, { arity: 1 })
      }
    }
  }, { '../internals/define-built-in': 32, '../internals/function-call': 51, '../internals/get-built-in': 56, '../internals/well-known-symbol': 151 }],
  131: [function (require, module, exports) {
    'use strict'
    var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection')

    /* eslint-disable es/no-symbol -- safe */
    module.exports = NATIVE_SYMBOL && !!Symbol.for && !!Symbol.keyFor
  }, { '../internals/symbol-constructor-detection': 129 }],
  132: [function (require, module, exports) {
    'use strict'
    var uncurryThis = require('../internals/function-uncurry-this')

    // `thisNumberValue` abstract operation
    // https://tc39.es/ecma262/#sec-thisnumbervalue
    module.exports = uncurryThis(1.0.valueOf)
  }, { '../internals/function-uncurry-this': 55 }],
  133: [function (require, module, exports) {
    'use strict'
    var toIntegerOrInfinity = require('../internals/to-integer-or-infinity')

    var max = Math.max
    var min = Math.min

    // Helper for a popular repeating case of the spec:
    // Let integer be ? ToInteger(index).
    // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
    module.exports = function (index, length) {
      var integer = toIntegerOrInfinity(index)
      return integer < 0 ? max(integer + length, 0) : min(integer, length)
    }
  }, { '../internals/to-integer-or-infinity': 135 }],
  134: [function (require, module, exports) {
    'use strict'
    // toObject with fallback for non-array-like ES3 strings
    var IndexedObject = require('../internals/indexed-object')
    var requireObjectCoercible = require('../internals/require-object-coercible')

    module.exports = function (it) {
      return IndexedObject(requireObjectCoercible(it))
    }
  }, { '../internals/indexed-object': 68, '../internals/require-object-coercible': 119 }],
  135: [function (require, module, exports) {
    'use strict'
    var trunc = require('../internals/math-trunc')

    // `ToIntegerOrInfinity` abstract operation
    // https://tc39.es/ecma262/#sec-tointegerorinfinity
    module.exports = function (argument) {
      var number = +argument
      // eslint-disable-next-line no-self-compare -- NaN check
      return number !== number || number === 0 ? 0 : trunc(number)
    }
  }, { '../internals/math-trunc': 92 }],
  136: [function (require, module, exports) {
    'use strict'
    var toIntegerOrInfinity = require('../internals/to-integer-or-infinity')

    var min = Math.min

    // `ToLength` abstract operation
    // https://tc39.es/ecma262/#sec-tolength
    module.exports = function (argument) {
      var len = toIntegerOrInfinity(argument)
      return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0 // 2 ** 53 - 1 == 9007199254740991
    }
  }, { '../internals/to-integer-or-infinity': 135 }],
  137: [function (require, module, exports) {
    'use strict'
    var requireObjectCoercible = require('../internals/require-object-coercible')

    var $Object = Object

    // `ToObject` abstract operation
    // https://tc39.es/ecma262/#sec-toobject
    module.exports = function (argument) {
      return $Object(requireObjectCoercible(argument))
    }
  }, { '../internals/require-object-coercible': 119 }],
  138: [function (require, module, exports) {
    'use strict'
    var call = require('../internals/function-call')
    var isObject = require('../internals/is-object')
    var isSymbol = require('../internals/is-symbol')
    var getMethod = require('../internals/get-method')
    var ordinaryToPrimitive = require('../internals/ordinary-to-primitive')
    var wellKnownSymbol = require('../internals/well-known-symbol')

    var $TypeError = TypeError
    var TO_PRIMITIVE = wellKnownSymbol('toPrimitive')

    // `ToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-toprimitive
    module.exports = function (input, pref) {
      if (!isObject(input) || isSymbol(input)) return input
      var exoticToPrim = getMethod(input, TO_PRIMITIVE)
      var result
      if (exoticToPrim) {
        if (pref === undefined) pref = 'default'
        result = call(exoticToPrim, input, pref)
        if (!isObject(result) || isSymbol(result)) return result
        throw new $TypeError("Can't convert object to primitive value")
      }
      if (pref === undefined) pref = 'number'
      return ordinaryToPrimitive(input, pref)
    }
  }, { '../internals/function-call': 51, '../internals/get-method': 61, '../internals/is-object': 79, '../internals/is-symbol': 83, '../internals/ordinary-to-primitive': 108, '../internals/well-known-symbol': 151 }],
  139: [function (require, module, exports) {
    'use strict'
    var toPrimitive = require('../internals/to-primitive')
    var isSymbol = require('../internals/is-symbol')

    // `ToPropertyKey` abstract operation
    // https://tc39.es/ecma262/#sec-topropertykey
    module.exports = function (argument) {
      var key = toPrimitive(argument, 'string')
      return isSymbol(key) ? key : key + ''
    }
  }, { '../internals/is-symbol': 83, '../internals/to-primitive': 138 }],
  140: [function (require, module, exports) {
    'use strict'
    var wellKnownSymbol = require('../internals/well-known-symbol')

    var TO_STRING_TAG = wellKnownSymbol('toStringTag')
    var test = {}

    test[TO_STRING_TAG] = 'z'

    module.exports = String(test) === '[object z]'
  }, { '../internals/well-known-symbol': 151 }],
  141: [function (require, module, exports) {
    'use strict'
    var classof = require('../internals/classof')

    var $String = String

    module.exports = function (argument) {
      if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string')
      return $String(argument)
    }
  }, { '../internals/classof': 21 }],
  142: [function (require, module, exports) {
    'use strict'
    var $String = String

    module.exports = function (argument) {
      try {
        return $String(argument)
      } catch (error) {
        return 'Object'
      }
    }
  }, {}],
  143: [function (require, module, exports) {
    'use strict'
    var uncurryThis = require('../internals/function-uncurry-this')

    var id = 0
    var postfix = Math.random()
    var toString = uncurryThis(1.0.toString)

    module.exports = function (key) {
      return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36)
    }
  }, { '../internals/function-uncurry-this': 55 }],
  144: [function (require, module, exports) {
    'use strict'
    /* eslint-disable es/no-symbol -- required for testing */
    var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection')

    module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator === 'symbol'
  }, { '../internals/symbol-constructor-detection': 129 }],
  145: [function (require, module, exports) {
    'use strict'
    var DESCRIPTORS = require('../internals/descriptors')
    var fails = require('../internals/fails')

    // V8 ~ Chrome 36-
    // https://bugs.chromium.org/p/v8/issues/detail?id=3334
    module.exports = DESCRIPTORS && fails(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return Object.defineProperty(function () { /* empty */ }, 'prototype', {
        value: 42,
        writable: false
      }).prototype !== 42
    })
  }, { '../internals/descriptors': 35, '../internals/fails': 45 }],
  146: [function (require, module, exports) {
    'use strict'
    var $TypeError = TypeError

    module.exports = function (passed, required) {
      if (passed < required) throw new $TypeError('Not enough arguments')
      return passed
    }
  }, {}],
  147: [function (require, module, exports) {
    'use strict'
    var globalThis = require('../internals/global-this')
    var isCallable = require('../internals/is-callable')

    var WeakMap = globalThis.WeakMap

    module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap))
  }, { '../internals/global-this': 63, '../internals/is-callable': 75 }],
  148: [function (require, module, exports) {
    'use strict'
    var uncurryThis = require('../internals/function-uncurry-this')

    // eslint-disable-next-line es/no-weak-map -- safe
    var WeakMapPrototype = WeakMap.prototype

    module.exports = {
      // eslint-disable-next-line es/no-weak-map -- safe
      WeakMap: WeakMap,
      set: uncurryThis(WeakMapPrototype.set),
      get: uncurryThis(WeakMapPrototype.get),
      has: uncurryThis(WeakMapPrototype.has),
      remove: uncurryThis(WeakMapPrototype.delete)
    }
  }, { '../internals/function-uncurry-this': 55 }],
  149: [function (require, module, exports) {
    'use strict'
    var path = require('../internals/path')
    var hasOwn = require('../internals/has-own-property')
    var wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped')
    var defineProperty = require('../internals/object-define-property').f

    module.exports = function (NAME) {
      var Symbol = path.Symbol || (path.Symbol = {})
      if (!hasOwn(Symbol, NAME)) {
        defineProperty(Symbol, NAME, {
          value: wrappedWellKnownSymbolModule.f(NAME)
        })
      }
    }
  }, { '../internals/has-own-property': 64, '../internals/object-define-property': 95, '../internals/path': 110, '../internals/well-known-symbol-wrapped': 150 }],
  150: [function (require, module, exports) {
    'use strict'
    var wellKnownSymbol = require('../internals/well-known-symbol')

    exports.f = wellKnownSymbol
  }, { '../internals/well-known-symbol': 151 }],
  151: [function (require, module, exports) {
    'use strict'
    var globalThis = require('../internals/global-this')
    var shared = require('../internals/shared')
    var hasOwn = require('../internals/has-own-property')
    var uid = require('../internals/uid')
    var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection')
    var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid')

    var Symbol = globalThis.Symbol
    var WellKnownSymbolsStore = shared('wks')
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol.for || Symbol : Symbol && Symbol.withoutSetter || uid

    module.exports = function (name) {
      if (!hasOwn(WellKnownSymbolsStore, name)) {
        WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
          ? Symbol[name]
          : createWellKnownSymbol('Symbol.' + name)
      } return WellKnownSymbolsStore[name]
    }
  }, { '../internals/global-this': 63, '../internals/has-own-property': 64, '../internals/shared': 125, '../internals/symbol-constructor-detection': 129, '../internals/uid': 143, '../internals/use-symbol-as-uid': 144 }],
  152: [function (require, module, exports) {
    'use strict'
    // a string of all valid unicode whitespaces
    module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
  }, {}],
  153: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var forEach = require('../internals/array-for-each')

    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    // eslint-disable-next-line es/no-array-prototype-foreach -- safe
    $({ target: 'Array', proto: true, forced: [].forEach !== forEach }, {
      forEach: forEach
    })
  }, { '../internals/array-for-each': 10, '../internals/export': 44 }],
  154: [function (require, module, exports) {
    'use strict'
    var toIndexedObject = require('../internals/to-indexed-object')
    var addToUnscopables = require('../internals/add-to-unscopables')
    var Iterators = require('../internals/iterators')
    var InternalStateModule = require('../internals/internal-state')
    var defineProperty = require('../internals/object-define-property').f
    var defineIterator = require('../internals/iterator-define')
    var createIterResultObject = require('../internals/create-iter-result-object')
    var IS_PURE = require('../internals/is-pure')
    var DESCRIPTORS = require('../internals/descriptors')

    var ARRAY_ITERATOR = 'Array Iterator'
    var setInternalState = InternalStateModule.set
    var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR)

    // `Array.prototype.entries` method
    // https://tc39.es/ecma262/#sec-array.prototype.entries
    // `Array.prototype.keys` method
    // https://tc39.es/ecma262/#sec-array.prototype.keys
    // `Array.prototype.values` method
    // https://tc39.es/ecma262/#sec-array.prototype.values
    // `Array.prototype[@@iterator]` method
    // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
    // `CreateArrayIterator` internal method
    // https://tc39.es/ecma262/#sec-createarrayiterator
    module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
      setInternalState(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated), // target
        index: 0, // next index
        kind: kind // kind
      })
      // `%ArrayIteratorPrototype%.next` method
      // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
    }, function () {
      var state = getInternalState(this)
      var target = state.target
      var index = state.index++
      if (!target || index >= target.length) {
        state.target = null
        return createIterResultObject(undefined, true)
      }
      switch (state.kind) {
        case 'keys': return createIterResultObject(index, false)
        case 'values': return createIterResultObject(target[index], false)
      } return createIterResultObject([index, target[index]], false)
    }, 'values')

    // argumentsList[@@iterator] is %ArrayProto_values%
    // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
    // https://tc39.es/ecma262/#sec-createmappedargumentsobject
    var values = Iterators.Arguments = Iterators.Array

    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables('keys')
    addToUnscopables('values')
    addToUnscopables('entries')

    // V8 ~ Chrome 45- bug
    if (!IS_PURE && DESCRIPTORS && values.name !== 'values') {
      try {
        defineProperty(values, 'name', { value: 'values' })
      } catch (error) { /* empty */ }
    }
  }, { '../internals/add-to-unscopables': 5, '../internals/create-iter-result-object': 26, '../internals/descriptors': 35, '../internals/internal-state': 72, '../internals/is-pure': 81, '../internals/iterator-define': 87, '../internals/iterators': 89, '../internals/object-define-property': 95, '../internals/to-indexed-object': 134 }],
  155: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var uncurryThis = require('../internals/function-uncurry-this')
    var IndexedObject = require('../internals/indexed-object')
    var toIndexedObject = require('../internals/to-indexed-object')
    var arrayMethodIsStrict = require('../internals/array-method-is-strict')

    var nativeJoin = uncurryThis([].join)

    var ES3_STRINGS = IndexedObject !== Object
    var FORCED = ES3_STRINGS || !arrayMethodIsStrict('join', ',')

    // `Array.prototype.join` method
    // https://tc39.es/ecma262/#sec-array.prototype.join
    $({ target: 'Array', proto: true, forced: FORCED }, {
      join: function join (separator) {
        return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator)
      }
    })
  }, { '../internals/array-method-is-strict': 13, '../internals/export': 44, '../internals/function-uncurry-this': 55, '../internals/indexed-object': 68, '../internals/to-indexed-object': 134 }],
  156: [function (require, module, exports) {
    'use strict'
    var hasOwn = require('../internals/has-own-property')
    var defineBuiltIn = require('../internals/define-built-in')
    var dateToPrimitive = require('../internals/date-to-primitive')
    var wellKnownSymbol = require('../internals/well-known-symbol')

    var TO_PRIMITIVE = wellKnownSymbol('toPrimitive')
    var DatePrototype = Date.prototype

    // `Date.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
    if (!hasOwn(DatePrototype, TO_PRIMITIVE)) {
      defineBuiltIn(DatePrototype, TO_PRIMITIVE, dateToPrimitive)
    }
  }, { '../internals/date-to-primitive': 30, '../internals/define-built-in': 32, '../internals/has-own-property': 64, '../internals/well-known-symbol': 151 }],
  157: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var getBuiltIn = require('../internals/get-built-in')
    var apply = require('../internals/function-apply')
    var call = require('../internals/function-call')
    var uncurryThis = require('../internals/function-uncurry-this')
    var fails = require('../internals/fails')
    var isCallable = require('../internals/is-callable')
    var isSymbol = require('../internals/is-symbol')
    var arraySlice = require('../internals/array-slice')
    var getReplacerFunction = require('../internals/get-json-replacer-function')
    var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection')

    var $String = String
    var $stringify = getBuiltIn('JSON', 'stringify')
    var exec = uncurryThis(/./.exec)
    var charAt = uncurryThis(''.charAt)
    var charCodeAt = uncurryThis(''.charCodeAt)
    var replace = uncurryThis(''.replace)
    var numberToString = uncurryThis(1.0.toString)

    var tester = /[\uD800-\uDFFF]/g
    var low = /^[\uD800-\uDBFF]$/
    var hi = /^[\uDC00-\uDFFF]$/

    var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
      var symbol = getBuiltIn('Symbol')('stringify detection')
      // MS Edge converts symbol values to JSON as {}
      return $stringify([symbol]) !== '[null]' ||
    // WebKit converts symbol values to JSON as null
    $stringify({ a: symbol }) !== '{}' ||
    // V8 throws on boxed symbols
    $stringify(Object(symbol)) !== '{}'
    })

    // https://github.com/tc39/proposal-well-formed-stringify
    var ILL_FORMED_UNICODE = fails(function () {
      return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"' ||
    $stringify('\uDEAD') !== '"\\udead"'
    })

    var stringifyWithSymbolsFix = function (it, replacer) {
      var args = arraySlice(arguments)
      var $replacer = getReplacerFunction(replacer)
      if (!isCallable($replacer) && (it === undefined || isSymbol(it))) return // IE8 returns string on undefined
      args[1] = function (key, value) {
        // some old implementations (like WebKit) could pass numbers as keys
        if (isCallable($replacer)) value = call($replacer, this, $String(key), value)
        if (!isSymbol(value)) return value
      }
      return apply($stringify, null, args)
    }

    var fixIllFormed = function (match, offset, string) {
      var prev = charAt(string, offset - 1)
      var next = charAt(string, offset + 1)
      if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
        return '\\u' + numberToString(charCodeAt(match, 0), 16)
      } return match
    }

    if ($stringify) {
      // `JSON.stringify` method
      // https://tc39.es/ecma262/#sec-json.stringify
      $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        stringify: function stringify (it, replacer, space) {
          var args = arraySlice(arguments)
          var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args)
          return ILL_FORMED_UNICODE && typeof result === 'string' ? replace(result, tester, fixIllFormed) : result
        }
      })
    }
  }, { '../internals/array-slice': 14, '../internals/export': 44, '../internals/fails': 45, '../internals/function-apply': 48, '../internals/function-call': 51, '../internals/function-uncurry-this': 55, '../internals/get-built-in': 56, '../internals/get-json-replacer-function': 60, '../internals/is-callable': 75, '../internals/is-symbol': 83, '../internals/symbol-constructor-detection': 129 }],
  158: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var IS_PURE = require('../internals/is-pure')
    var DESCRIPTORS = require('../internals/descriptors')
    var globalThis = require('../internals/global-this')
    var path = require('../internals/path')
    var uncurryThis = require('../internals/function-uncurry-this')
    var isForced = require('../internals/is-forced')
    var hasOwn = require('../internals/has-own-property')
    var inheritIfRequired = require('../internals/inherit-if-required')
    var isPrototypeOf = require('../internals/object-is-prototype-of')
    var isSymbol = require('../internals/is-symbol')
    var toPrimitive = require('../internals/to-primitive')
    var fails = require('../internals/fails')
    var getOwnPropertyNames = require('../internals/object-get-own-property-names').f
    var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f
    var defineProperty = require('../internals/object-define-property').f
    var thisNumberValue = require('../internals/this-number-value')
    var trim = require('../internals/string-trim').trim

    var NUMBER = 'Number'
    var NativeNumber = globalThis[NUMBER]
    var PureNumberNamespace = path[NUMBER]
    var NumberPrototype = NativeNumber.prototype
    var TypeError = globalThis.TypeError
    var stringSlice = uncurryThis(''.slice)
    var charCodeAt = uncurryThis(''.charCodeAt)

    // `ToNumeric` abstract operation
    // https://tc39.es/ecma262/#sec-tonumeric
    var toNumeric = function (value) {
      var primValue = toPrimitive(value, 'number')
      return typeof primValue === 'bigint' ? primValue : toNumber(primValue)
    }

    // `ToNumber` abstract operation
    // https://tc39.es/ecma262/#sec-tonumber
    var toNumber = function (argument) {
      var it = toPrimitive(argument, 'number')
      var first, third, radix, maxCode, digits, length, index, code
      if (isSymbol(it)) throw new TypeError('Cannot convert a Symbol value to a number')
      if (typeof it === 'string' && it.length > 2) {
        it = trim(it)
        first = charCodeAt(it, 0)
        if (first === 43 || first === 45) {
          third = charCodeAt(it, 2)
          if (third === 88 || third === 120) return NaN // Number('+0x1') should be NaN, old V8 fix
        } else if (first === 48) {
          switch (charCodeAt(it, 1)) {
            // fast equal of /^0b[01]+$/i
            case 66:
            case 98:
              radix = 2
              maxCode = 49
              break
            // fast equal of /^0o[0-7]+$/i
            case 79:
            case 111:
              radix = 8
              maxCode = 55
              break
            default:
              return +it
          }
          digits = stringSlice(it, 2)
          length = digits.length
          for (index = 0; index < length; index++) {
            code = charCodeAt(digits, index)
            // parseInt parses a string to a first unavailable symbol
            // but ToNumber should return NaN if a string contains unavailable symbols
            if (code < 48 || code > maxCode) return NaN
          } return parseInt(digits, radix)
        }
      } return +it
    }

    var FORCED = isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))

    var calledWithNew = function (dummy) {
      // includes check on 1..constructor(foo) case
      return isPrototypeOf(NumberPrototype, dummy) && fails(function () { thisNumberValue(dummy) })
    }

    // `Number` constructor
    // https://tc39.es/ecma262/#sec-number-constructor
    var NumberWrapper = function Number (value) {
      var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value))
      return calledWithNew(this) ? inheritIfRequired(Object(n), this, NumberWrapper) : n
    }

    NumberWrapper.prototype = NumberPrototype
    if (FORCED && !IS_PURE) NumberPrototype.constructor = NumberWrapper

    $({ global: true, constructor: true, wrap: true, forced: FORCED }, {
      Number: NumberWrapper
    })

    // Use `internal/copy-constructor-properties` helper in `core-js@4`
    var copyConstructorProperties = function (target, source) {
      for (var keys = DESCRIPTORS ? getOwnPropertyNames(source) : (
        // ES3:
          'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
        ).split(','), j = 0, key; keys.length > j; j++) {
        if (hasOwn(source, key = keys[j]) && !hasOwn(target, key)) {
          defineProperty(target, key, getOwnPropertyDescriptor(source, key))
        }
      }
    }

    if (IS_PURE && PureNumberNamespace) copyConstructorProperties(path[NUMBER], PureNumberNamespace)
    if (FORCED || IS_PURE) copyConstructorProperties(path[NUMBER], NativeNumber)
  }, { '../internals/descriptors': 35, '../internals/export': 44, '../internals/fails': 45, '../internals/function-uncurry-this': 55, '../internals/global-this': 63, '../internals/has-own-property': 64, '../internals/inherit-if-required': 69, '../internals/is-forced': 77, '../internals/is-pure': 81, '../internals/is-symbol': 83, '../internals/object-define-property': 95, '../internals/object-get-own-property-descriptor': 96, '../internals/object-get-own-property-names': 98, '../internals/object-is-prototype-of': 102, '../internals/path': 110, '../internals/string-trim': 128, '../internals/this-number-value': 132, '../internals/to-primitive': 138 }],
  159: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var DESCRIPTORS = require('../internals/descriptors')
    var defineProperty = require('../internals/object-define-property').f

    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    $({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {
      defineProperty: defineProperty
    })
  }, { '../internals/descriptors': 35, '../internals/export': 44, '../internals/object-define-property': 95 }],
  160: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection')
    var fails = require('../internals/fails')
    var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols')
    var toObject = require('../internals/to-object')

    // V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
    // https://bugs.chromium.org/p/v8/issues/detail?id=3443
    var FORCED = !NATIVE_SYMBOL || fails(function () { getOwnPropertySymbolsModule.f(1) })

    // `Object.getOwnPropertySymbols` method
    // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
    $({ target: 'Object', stat: true, forced: FORCED }, {
      getOwnPropertySymbols: function getOwnPropertySymbols (it) {
        var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f
        return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : []
      }
    })
  }, { '../internals/export': 44, '../internals/fails': 45, '../internals/object-get-own-property-symbols': 99, '../internals/symbol-constructor-detection': 129, '../internals/to-object': 137 }],
  161: [function (require, module, exports) {
    'use strict'
    var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support')
    var defineBuiltIn = require('../internals/define-built-in')
    var toString = require('../internals/object-to-string')

    // `Object.prototype.toString` method
    // https://tc39.es/ecma262/#sec-object.prototype.tostring
    if (!TO_STRING_TAG_SUPPORT) {
      defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true })
    }
  }, { '../internals/define-built-in': 32, '../internals/object-to-string': 107, '../internals/to-string-tag-support': 140 }],
  162: [function (require, module, exports) {
    'use strict'
    var DESCRIPTORS = require('../internals/descriptors')
    var globalThis = require('../internals/global-this')
    var uncurryThis = require('../internals/function-uncurry-this')
    var isForced = require('../internals/is-forced')
    var inheritIfRequired = require('../internals/inherit-if-required')
    var createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    var create = require('../internals/object-create')
    var getOwnPropertyNames = require('../internals/object-get-own-property-names').f
    var isPrototypeOf = require('../internals/object-is-prototype-of')
    var isRegExp = require('../internals/is-regexp')
    var toString = require('../internals/to-string')
    var getRegExpFlags = require('../internals/regexp-get-flags')
    var stickyHelpers = require('../internals/regexp-sticky-helpers')
    var proxyAccessor = require('../internals/proxy-accessor')
    var defineBuiltIn = require('../internals/define-built-in')
    var fails = require('../internals/fails')
    var hasOwn = require('../internals/has-own-property')
    var enforceInternalState = require('../internals/internal-state').enforce
    var setSpecies = require('../internals/set-species')
    var wellKnownSymbol = require('../internals/well-known-symbol')
    var UNSUPPORTED_DOT_ALL = require('../internals/regexp-unsupported-dot-all')
    var UNSUPPORTED_NCG = require('../internals/regexp-unsupported-ncg')

    var MATCH = wellKnownSymbol('match')
    var NativeRegExp = globalThis.RegExp
    var RegExpPrototype = NativeRegExp.prototype
    var SyntaxError = globalThis.SyntaxError
    var exec = uncurryThis(RegExpPrototype.exec)
    var charAt = uncurryThis(''.charAt)
    var replace = uncurryThis(''.replace)
    var stringIndexOf = uncurryThis(''.indexOf)
    var stringSlice = uncurryThis(''.slice)
    // TODO: Use only proper RegExpIdentifierName
    var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/
    var re1 = /a/g
    var re2 = /a/g

    // "new" should create a new object, old webkit bug
    var CORRECT_NEW = new NativeRegExp(re1) !== re1

    var MISSED_STICKY = stickyHelpers.MISSED_STICKY
    var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y

    var BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
    re2[MATCH] = false
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    // eslint-disable-next-line sonar/inconsistent-function-call -- required for testing
    return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, 'i')) !== '/a/i'
  }))

    var handleDotAll = function (string) {
      var length = string.length
      var index = 0
      var result = ''
      var brackets = false
      var chr
      for (; index <= length; index++) {
        chr = charAt(string, index)
        if (chr === '\\') {
          result += chr + charAt(string, ++index)
          continue
        }
        if (!brackets && chr === '.') {
          result += '[\\s\\S]'
        } else {
          if (chr === '[') {
            brackets = true
          } else if (chr === ']') {
            brackets = false
          } result += chr
        }
      } return result
    }

    var handleNCG = function (string) {
      var length = string.length
      var index = 0
      var result = ''
      var named = []
      var names = create(null)
      var brackets = false
      var ncg = false
      var groupid = 0
      var groupname = ''
      var chr
      for (; index <= length; index++) {
        chr = charAt(string, index)
        if (chr === '\\') {
          chr += charAt(string, ++index)
        } else if (chr === ']') {
          brackets = false
        } else if (!brackets) {
          switch (true) {
            case chr === '[':
              brackets = true
              break
            case chr === '(':
              result += chr
              // ignore non-capturing groups
              if (stringSlice(string, index + 1, index + 3) === '?:') {
                continue
              }
              if (exec(IS_NCG, stringSlice(string, index + 1))) {
                index += 2
                ncg = true
              }
              groupid++
              continue
            case chr === '>' && ncg:
              if (groupname === '' || hasOwn(names, groupname)) {
                throw new SyntaxError('Invalid capture group name')
              }
              names[groupname] = true
              named[named.length] = [groupname, groupid]
              ncg = false
              groupname = ''
              continue
          }
        }
        if (ncg) groupname += chr
        else result += chr
      } return [result, named]
    }

    // `RegExp` constructor
    // https://tc39.es/ecma262/#sec-regexp-constructor
    if (isForced('RegExp', BASE_FORCED)) {
      var RegExpWrapper = function RegExp (pattern, flags) {
        var thisIsRegExp = isPrototypeOf(RegExpPrototype, this)
        var patternIsRegExp = isRegExp(pattern)
        var flagsAreUndefined = flags === undefined
        var groups = []
        var rawPattern = pattern
        var rawFlags, dotAll, sticky, handled, result, state

        if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
          return pattern
        }

        if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
          pattern = pattern.source
          if (flagsAreUndefined) flags = getRegExpFlags(rawPattern)
        }

        pattern = pattern === undefined ? '' : toString(pattern)
        flags = flags === undefined ? '' : toString(flags)
        rawPattern = pattern

        if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
          dotAll = !!flags && stringIndexOf(flags, 's') > -1
          if (dotAll) flags = replace(flags, /s/g, '')
        }

        rawFlags = flags

        if (MISSED_STICKY && 'sticky' in re1) {
          sticky = !!flags && stringIndexOf(flags, 'y') > -1
          if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '')
        }

        if (UNSUPPORTED_NCG) {
          handled = handleNCG(pattern)
          pattern = handled[0]
          groups = handled[1]
        }

        result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper)

        if (dotAll || sticky || groups.length) {
          state = enforceInternalState(result)
          if (dotAll) {
            state.dotAll = true
            state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags)
          }
          if (sticky) state.sticky = true
          if (groups.length) state.groups = groups
        }

        if (pattern !== rawPattern) {
          try {
          // fails in old engines, but we have no alternatives for unsupported regex syntax
            createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern)
          } catch (error) { /* empty */ }
        }

        return result
      }

      for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
        proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++])
      }

      RegExpPrototype.constructor = RegExpWrapper
      RegExpWrapper.prototype = RegExpPrototype
      defineBuiltIn(globalThis, 'RegExp', RegExpWrapper, { constructor: true })
    }

    // https://tc39.es/ecma262/#sec-get-regexp-@@species
    setSpecies('RegExp')
  }, { '../internals/create-non-enumerable-property': 27, '../internals/define-built-in': 32, '../internals/descriptors': 35, '../internals/fails': 45, '../internals/function-uncurry-this': 55, '../internals/global-this': 63, '../internals/has-own-property': 64, '../internals/inherit-if-required': 69, '../internals/internal-state': 72, '../internals/is-forced': 77, '../internals/is-regexp': 82, '../internals/object-create': 93, '../internals/object-get-own-property-names': 98, '../internals/object-is-prototype-of': 102, '../internals/proxy-accessor': 111, '../internals/regexp-get-flags': 115, '../internals/regexp-sticky-helpers': 116, '../internals/regexp-unsupported-dot-all': 117, '../internals/regexp-unsupported-ncg': 118, '../internals/set-species': 121, '../internals/to-string': 141, '../internals/well-known-symbol': 151 }],
  163: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var exec = require('../internals/regexp-exec')

    // `RegExp.prototype.exec` method
    // https://tc39.es/ecma262/#sec-regexp.prototype.exec
    $({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
      exec: exec
    })
  }, { '../internals/export': 44, '../internals/regexp-exec': 113 }],
  164: [function (require, module, exports) {
    'use strict'
    var DESCRIPTORS = require('../internals/descriptors')
    var MISSED_STICKY = require('../internals/regexp-sticky-helpers').MISSED_STICKY
    var classof = require('../internals/classof-raw')
    var defineBuiltInAccessor = require('../internals/define-built-in-accessor')
    var getInternalState = require('../internals/internal-state').get

    var RegExpPrototype = RegExp.prototype
    var $TypeError = TypeError

    // `RegExp.prototype.sticky` getter
    // https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
    if (DESCRIPTORS && MISSED_STICKY) {
      defineBuiltInAccessor(RegExpPrototype, 'sticky', {
        configurable: true,
        get: function sticky () {
          if (this === RegExpPrototype) return
          // We can't use InternalStateModule.getterFor because
          // we don't add metadata for regexps created by a literal.
          if (classof(this) === 'RegExp') {
            return !!getInternalState(this).sticky
          }
          throw new $TypeError('Incompatible receiver, RegExp required')
        }
      })
    }
  }, { '../internals/classof-raw': 20, '../internals/define-built-in-accessor': 31, '../internals/descriptors': 35, '../internals/internal-state': 72, '../internals/regexp-sticky-helpers': 116 }],
  165: [function (require, module, exports) {
    'use strict'
    var PROPER_FUNCTION_NAME = require('../internals/function-name').PROPER
    var defineBuiltIn = require('../internals/define-built-in')
    var anObject = require('../internals/an-object')
    var $toString = require('../internals/to-string')
    var fails = require('../internals/fails')
    var getRegExpFlags = require('../internals/regexp-get-flags')

    var TO_STRING = 'toString'
    var RegExpPrototype = RegExp.prototype
    var nativeToString = RegExpPrototype[TO_STRING]

    var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) !== '/a/b' })
    // FF44- RegExp#toString has a wrong name
    var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING

    // `RegExp.prototype.toString` method
    // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
    if (NOT_GENERIC || INCORRECT_NAME) {
      defineBuiltIn(RegExpPrototype, TO_STRING, function toString () {
        var R = anObject(this)
        var pattern = $toString(R.source)
        var flags = $toString(getRegExpFlags(R))
        return '/' + pattern + '/' + flags
      }, { unsafe: true })
    }
  }, { '../internals/an-object': 8, '../internals/define-built-in': 32, '../internals/fails': 45, '../internals/function-name': 52, '../internals/regexp-get-flags': 115, '../internals/to-string': 141 }],
  166: [function (require, module, exports) {
    'use strict'
    var charAt = require('../internals/string-multibyte').charAt
    var toString = require('../internals/to-string')
    var InternalStateModule = require('../internals/internal-state')
    var defineIterator = require('../internals/iterator-define')
    var createIterResultObject = require('../internals/create-iter-result-object')

    var STRING_ITERATOR = 'String Iterator'
    var setInternalState = InternalStateModule.set
    var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR)

    // `String.prototype[@@iterator]` method
    // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
    defineIterator(String, 'String', function (iterated) {
      setInternalState(this, {
        type: STRING_ITERATOR,
        string: toString(iterated),
        index: 0
      })
      // `%StringIteratorPrototype%.next` method
      // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
    }, function next () {
      var state = getInternalState(this)
      var string = state.string
      var index = state.index
      var point
      if (index >= string.length) return createIterResultObject(undefined, true)
      point = charAt(string, index)
      state.index += point.length
      return createIterResultObject(point, false)
    })
  }, { '../internals/create-iter-result-object': 26, '../internals/internal-state': 72, '../internals/iterator-define': 87, '../internals/string-multibyte': 126, '../internals/to-string': 141 }],
  167: [function (require, module, exports) {
    'use strict'
    var apply = require('../internals/function-apply')
    var call = require('../internals/function-call')
    var uncurryThis = require('../internals/function-uncurry-this')
    var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic')
    var fails = require('../internals/fails')
    var anObject = require('../internals/an-object')
    var isCallable = require('../internals/is-callable')
    var isNullOrUndefined = require('../internals/is-null-or-undefined')
    var toIntegerOrInfinity = require('../internals/to-integer-or-infinity')
    var toLength = require('../internals/to-length')
    var toString = require('../internals/to-string')
    var requireObjectCoercible = require('../internals/require-object-coercible')
    var advanceStringIndex = require('../internals/advance-string-index')
    var getMethod = require('../internals/get-method')
    var getSubstitution = require('../internals/get-substitution')
    var regExpExec = require('../internals/regexp-exec-abstract')
    var wellKnownSymbol = require('../internals/well-known-symbol')

    var REPLACE = wellKnownSymbol('replace')
    var max = Math.max
    var min = Math.min
    var concat = uncurryThis([].concat)
    var push = uncurryThis([].push)
    var stringIndexOf = uncurryThis(''.indexOf)
    var stringSlice = uncurryThis(''.slice)

    var maybeToString = function (it) {
      return it === undefined ? it : String(it)
    }

    // IE <= 11 replaces $0 with the whole match, as if it was $&
    // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
    var REPLACE_KEEPS_$0 = (function () {
      // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
      return 'a'.replace(/./, '$0') === '$0'
    })()

    // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
    var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
      if (/./[REPLACE]) {
        return /./[REPLACE]('a', '$0') === ''
      }
      return false
    })()

    var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
      var re = /./
      re.exec = function () {
        var result = []
        result.groups = { a: '7' }
        return result
      }
      // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
      return ''.replace(re, '$<a>') !== '7'
    })

    // @@replace logic
    fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
      var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0'

      return [
        // `String.prototype.replace` method
        // https://tc39.es/ecma262/#sec-string.prototype.replace
        function replace (searchValue, replaceValue) {
          var O = requireObjectCoercible(this)
          var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE)
          return replacer
            ? call(replacer, searchValue, O, replaceValue)
            : call(nativeReplace, toString(O), searchValue, replaceValue)
        },
        // `RegExp.prototype[@@replace]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
        function (string, replaceValue) {
          var rx = anObject(this)
          var S = toString(string)

          if (
            typeof replaceValue === 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
          ) {
            var res = maybeCallNative(nativeReplace, rx, S, replaceValue)
            if (res.done) return res.value
          }

          var functionalReplace = isCallable(replaceValue)
          if (!functionalReplace) replaceValue = toString(replaceValue)

          var global = rx.global
          var fullUnicode
          if (global) {
            fullUnicode = rx.unicode
            rx.lastIndex = 0
          }

          var results = []
          var result
          while (true) {
            result = regExpExec(rx, S)
            if (result === null) break

            push(results, result)
            if (!global) break

            var matchStr = toString(result[0])
            if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode)
          }

          var accumulatedResult = ''
          var nextSourcePosition = 0
          for (var i = 0; i < results.length; i++) {
            result = results[i]

            var matched = toString(result[0])
            var position = max(min(toIntegerOrInfinity(result.index), S.length), 0)
            var captures = []
            var replacement
            // NOTE: This is equivalent to
            //   captures = result.slice(1).map(maybeToString)
            // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
            // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
            // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
            for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]))
            var namedCaptures = result.groups
            if (functionalReplace) {
              var replacerArgs = concat([matched], captures, position, S)
              if (namedCaptures !== undefined) push(replacerArgs, namedCaptures)
              replacement = toString(apply(replaceValue, undefined, replacerArgs))
            } else {
              replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue)
            }
            if (position >= nextSourcePosition) {
              accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement
              nextSourcePosition = position + matched.length
            }
          }

          return accumulatedResult + stringSlice(S, nextSourcePosition)
        }
      ]
    }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE)
  }, { '../internals/advance-string-index': 6, '../internals/an-object': 8, '../internals/fails': 45, '../internals/fix-regexp-well-known-symbol-logic': 46, '../internals/function-apply': 48, '../internals/function-call': 51, '../internals/function-uncurry-this': 55, '../internals/get-method': 61, '../internals/get-substitution': 62, '../internals/is-callable': 75, '../internals/is-null-or-undefined': 78, '../internals/regexp-exec-abstract': 112, '../internals/require-object-coercible': 119, '../internals/to-integer-or-infinity': 135, '../internals/to-length': 136, '../internals/to-string': 141, '../internals/well-known-symbol': 151 }],
  168: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var $trim = require('../internals/string-trim').trim
    var forcedStringTrimMethod = require('../internals/string-trim-forced')

    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    $({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
      trim: function trim () {
        return $trim(this)
      }
    })
  }, { '../internals/export': 44, '../internals/string-trim': 128, '../internals/string-trim-forced': 127 }],
  169: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var globalThis = require('../internals/global-this')
    var call = require('../internals/function-call')
    var uncurryThis = require('../internals/function-uncurry-this')
    var IS_PURE = require('../internals/is-pure')
    var DESCRIPTORS = require('../internals/descriptors')
    var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection')
    var fails = require('../internals/fails')
    var hasOwn = require('../internals/has-own-property')
    var isPrototypeOf = require('../internals/object-is-prototype-of')
    var anObject = require('../internals/an-object')
    var toIndexedObject = require('../internals/to-indexed-object')
    var toPropertyKey = require('../internals/to-property-key')
    var $toString = require('../internals/to-string')
    var createPropertyDescriptor = require('../internals/create-property-descriptor')
    var nativeObjectCreate = require('../internals/object-create')
    var objectKeys = require('../internals/object-keys')
    var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names')
    var getOwnPropertyNamesExternal = require('../internals/object-get-own-property-names-external')
    var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols')
    var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor')
    var definePropertyModule = require('../internals/object-define-property')
    var definePropertiesModule = require('../internals/object-define-properties')
    var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable')
    var defineBuiltIn = require('../internals/define-built-in')
    var defineBuiltInAccessor = require('../internals/define-built-in-accessor')
    var shared = require('../internals/shared')
    var sharedKey = require('../internals/shared-key')
    var hiddenKeys = require('../internals/hidden-keys')
    var uid = require('../internals/uid')
    var wellKnownSymbol = require('../internals/well-known-symbol')
    var wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped')
    var defineWellKnownSymbol = require('../internals/well-known-symbol-define')
    var defineSymbolToPrimitive = require('../internals/symbol-define-to-primitive')
    var setToStringTag = require('../internals/set-to-string-tag')
    var InternalStateModule = require('../internals/internal-state')
    var $forEach = require('../internals/array-iteration').forEach

    var HIDDEN = sharedKey('hidden')
    var SYMBOL = 'Symbol'
    var PROTOTYPE = 'prototype'

    var setInternalState = InternalStateModule.set
    var getInternalState = InternalStateModule.getterFor(SYMBOL)

    var ObjectPrototype = Object[PROTOTYPE]
    var $Symbol = globalThis.Symbol
    var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE]
    var RangeError = globalThis.RangeError
    var TypeError = globalThis.TypeError
    var QObject = globalThis.QObject
    var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f
    var nativeDefineProperty = definePropertyModule.f
    var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f
    var nativePropertyIsEnumerable = propertyIsEnumerableModule.f
    var push = uncurryThis([].push)

    var AllSymbols = shared('symbols')
    var ObjectPrototypeSymbols = shared('op-symbols')
    var WellKnownSymbolsStore = shared('wks')

    // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
    var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild

    // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
    var fallbackDefineProperty = function (O, P, Attributes) {
      var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P)
      if (ObjectPrototypeDescriptor) delete ObjectPrototype[P]
      nativeDefineProperty(O, P, Attributes)
      if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
        nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor)
      }
    }

    var setSymbolDescriptor = DESCRIPTORS && fails(function () {
      return nativeObjectCreate(nativeDefineProperty({}, 'a', {
        get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a }
      })).a !== 7
    }) ? fallbackDefineProperty : nativeDefineProperty

    var wrap = function (tag, description) {
      var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype)
      setInternalState(symbol, {
        type: SYMBOL,
        tag: tag,
        description: description
      })
      if (!DESCRIPTORS) symbol.description = description
      return symbol
    }

    var $defineProperty = function defineProperty (O, P, Attributes) {
      if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes)
      anObject(O)
      var key = toPropertyKey(P)
      anObject(Attributes)
      if (hasOwn(AllSymbols, key)) {
        if (!Attributes.enumerable) {
          if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, nativeObjectCreate(null)))
          O[HIDDEN][key] = true
        } else {
          if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false
          Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) })
        } return setSymbolDescriptor(O, key, Attributes)
      } return nativeDefineProperty(O, key, Attributes)
    }

    var $defineProperties = function defineProperties (O, Properties) {
      anObject(O)
      var properties = toIndexedObject(Properties)
      var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties))
      $forEach(keys, function (key) {
        if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key])
      })
      return O
    }

    var $create = function create (O, Properties) {
      return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties)
    }

    var $propertyIsEnumerable = function propertyIsEnumerable (V) {
      var P = toPropertyKey(V)
      var enumerable = call(nativePropertyIsEnumerable, this, P)
      if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false
      return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
        ? enumerable : true
    }

    var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor (O, P) {
      var it = toIndexedObject(O)
      var key = toPropertyKey(P)
      if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return
      var descriptor = nativeGetOwnPropertyDescriptor(it, key)
      if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
        descriptor.enumerable = true
      }
      return descriptor
    }

    var $getOwnPropertyNames = function getOwnPropertyNames (O) {
      var names = nativeGetOwnPropertyNames(toIndexedObject(O))
      var result = []
      $forEach(names, function (key) {
        if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key)
      })
      return result
    }

    var $getOwnPropertySymbols = function (O) {
      var IS_OBJECT_PROTOTYPE = O === ObjectPrototype
      var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O))
      var result = []
      $forEach(names, function (key) {
        if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
          push(result, AllSymbols[key])
        }
      })
      return result
    }

    // `Symbol` constructor
    // https://tc39.es/ecma262/#sec-symbol-constructor
    if (!NATIVE_SYMBOL) {
      $Symbol = function Symbol () {
        if (isPrototypeOf(SymbolPrototype, this)) throw new TypeError('Symbol is not a constructor')
        var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0])
        var tag = uid(description)
        var setter = function (value) {
          var $this = this === undefined ? globalThis : this
          if ($this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value)
          if (hasOwn($this, HIDDEN) && hasOwn($this[HIDDEN], tag)) $this[HIDDEN][tag] = false
          var descriptor = createPropertyDescriptor(1, value)
          try {
            setSymbolDescriptor($this, tag, descriptor)
          } catch (error) {
            if (!(error instanceof RangeError)) throw error
            fallbackDefineProperty($this, tag, descriptor)
          }
        }
        if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter })
        return wrap(tag, description)
      }

      SymbolPrototype = $Symbol[PROTOTYPE]

      defineBuiltIn(SymbolPrototype, 'toString', function toString () {
        return getInternalState(this).tag
      })

      defineBuiltIn($Symbol, 'withoutSetter', function (description) {
        return wrap(uid(description), description)
      })

      propertyIsEnumerableModule.f = $propertyIsEnumerable
      definePropertyModule.f = $defineProperty
      definePropertiesModule.f = $defineProperties
      getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor
      getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames
      getOwnPropertySymbolsModule.f = $getOwnPropertySymbols

      wrappedWellKnownSymbolModule.f = function (name) {
        return wrap(wellKnownSymbol(name), name)
      }

      if (DESCRIPTORS) {
        // https://github.com/tc39/proposal-Symbol-description
        defineBuiltInAccessor(SymbolPrototype, 'description', {
          configurable: true,
          get: function description () {
            return getInternalState(this).description
          }
        })
        if (!IS_PURE) {
          defineBuiltIn(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true })
        }
      }
    }

    $({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
      Symbol: $Symbol
    })

    $forEach(objectKeys(WellKnownSymbolsStore), function (name) {
      defineWellKnownSymbol(name)
    })

    $({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
      useSetter: function () { USE_SETTER = true },
      useSimple: function () { USE_SETTER = false }
    })

    $({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
      // `Object.create` method
      // https://tc39.es/ecma262/#sec-object.create
      create: $create,
      // `Object.defineProperty` method
      // https://tc39.es/ecma262/#sec-object.defineproperty
      defineProperty: $defineProperty,
      // `Object.defineProperties` method
      // https://tc39.es/ecma262/#sec-object.defineproperties
      defineProperties: $defineProperties,
      // `Object.getOwnPropertyDescriptor` method
      // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor
    })

    $({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
      // `Object.getOwnPropertyNames` method
      // https://tc39.es/ecma262/#sec-object.getownpropertynames
      getOwnPropertyNames: $getOwnPropertyNames
    })

    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    defineSymbolToPrimitive()

    // `Symbol.prototype[@@toStringTag]` property
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
    setToStringTag($Symbol, SYMBOL)

    hiddenKeys[HIDDEN] = true
  }, { '../internals/an-object': 8, '../internals/array-iteration': 12, '../internals/create-property-descriptor': 28, '../internals/define-built-in': 32, '../internals/define-built-in-accessor': 31, '../internals/descriptors': 35, '../internals/export': 44, '../internals/fails': 45, '../internals/function-call': 51, '../internals/function-uncurry-this': 55, '../internals/global-this': 63, '../internals/has-own-property': 64, '../internals/hidden-keys': 65, '../internals/internal-state': 72, '../internals/is-pure': 81, '../internals/object-create': 93, '../internals/object-define-properties': 94, '../internals/object-define-property': 95, '../internals/object-get-own-property-descriptor': 96, '../internals/object-get-own-property-names': 98, '../internals/object-get-own-property-names-external': 97, '../internals/object-get-own-property-symbols': 99, '../internals/object-is-prototype-of': 102, '../internals/object-keys': 104, '../internals/object-property-is-enumerable': 105, '../internals/set-to-string-tag': 122, '../internals/shared': 125, '../internals/shared-key': 123, '../internals/symbol-constructor-detection': 129, '../internals/symbol-define-to-primitive': 130, '../internals/to-indexed-object': 134, '../internals/to-property-key': 139, '../internals/to-string': 141, '../internals/uid': 143, '../internals/well-known-symbol': 151, '../internals/well-known-symbol-define': 149, '../internals/well-known-symbol-wrapped': 150 }],
  170: [function (require, module, exports) {
    // `Symbol.prototype.description` getter
    // https://tc39.es/ecma262/#sec-symbol.prototype.description
    'use strict'
    var $ = require('../internals/export')
    var DESCRIPTORS = require('../internals/descriptors')
    var globalThis = require('../internals/global-this')
    var uncurryThis = require('../internals/function-uncurry-this')
    var hasOwn = require('../internals/has-own-property')
    var isCallable = require('../internals/is-callable')
    var isPrototypeOf = require('../internals/object-is-prototype-of')
    var toString = require('../internals/to-string')
    var defineBuiltInAccessor = require('../internals/define-built-in-accessor')
    var copyConstructorProperties = require('../internals/copy-constructor-properties')

    var NativeSymbol = globalThis.Symbol
    var SymbolPrototype = NativeSymbol && NativeSymbol.prototype

    if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
    )) {
      var EmptyStringDescriptionStore = {}
      // wrap Symbol constructor for correct work with undefined description
      var SymbolWrapper = function Symbol () {
        var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0])
        var result = isPrototypeOf(SymbolPrototype, this)
        // eslint-disable-next-line sonar/inconsistent-function-call -- ok
          ? new NativeSymbol(description)
        // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
          : description === undefined ? NativeSymbol() : NativeSymbol(description)
        if (description === '') EmptyStringDescriptionStore[result] = true
        return result
      }

      copyConstructorProperties(SymbolWrapper, NativeSymbol)
      SymbolWrapper.prototype = SymbolPrototype
      SymbolPrototype.constructor = SymbolWrapper

      var NATIVE_SYMBOL = String(NativeSymbol('description detection')) === 'Symbol(description detection)'
      var thisSymbolValue = uncurryThis(SymbolPrototype.valueOf)
      var symbolDescriptiveString = uncurryThis(SymbolPrototype.toString)
      var regexp = /^Symbol\((.*)\)[^)]+$/
      var replace = uncurryThis(''.replace)
      var stringSlice = uncurryThis(''.slice)

      defineBuiltInAccessor(SymbolPrototype, 'description', {
        configurable: true,
        get: function description () {
          var symbol = thisSymbolValue(this)
          if (hasOwn(EmptyStringDescriptionStore, symbol)) return ''
          var string = symbolDescriptiveString(symbol)
          var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1')
          return desc === '' ? undefined : desc
        }
      })

      $({ global: true, constructor: true, forced: true }, {
        Symbol: SymbolWrapper
      })
    }
  }, { '../internals/copy-constructor-properties': 24, '../internals/define-built-in-accessor': 31, '../internals/descriptors': 35, '../internals/export': 44, '../internals/function-uncurry-this': 55, '../internals/global-this': 63, '../internals/has-own-property': 64, '../internals/is-callable': 75, '../internals/object-is-prototype-of': 102, '../internals/to-string': 141 }],
  171: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var getBuiltIn = require('../internals/get-built-in')
    var hasOwn = require('../internals/has-own-property')
    var toString = require('../internals/to-string')
    var shared = require('../internals/shared')
    var NATIVE_SYMBOL_REGISTRY = require('../internals/symbol-registry-detection')

    var StringToSymbolRegistry = shared('string-to-symbol-registry')
    var SymbolToStringRegistry = shared('symbol-to-string-registry')

    // `Symbol.for` method
    // https://tc39.es/ecma262/#sec-symbol.for
    $({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
      for: function (key) {
        var string = toString(key)
        if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string]
        var symbol = getBuiltIn('Symbol')(string)
        StringToSymbolRegistry[string] = symbol
        SymbolToStringRegistry[symbol] = string
        return symbol
      }
    })
  }, { '../internals/export': 44, '../internals/get-built-in': 56, '../internals/has-own-property': 64, '../internals/shared': 125, '../internals/symbol-registry-detection': 131, '../internals/to-string': 141 }],
  172: [function (require, module, exports) {
    'use strict'
    var defineWellKnownSymbol = require('../internals/well-known-symbol-define')

    // `Symbol.iterator` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.iterator
    defineWellKnownSymbol('iterator')
  }, { '../internals/well-known-symbol-define': 149 }],
  173: [function (require, module, exports) {
    'use strict'
    // TODO: Remove this module from `core-js@4` since it's split to modules listed below
    require('../modules/es.symbol.constructor')
    require('../modules/es.symbol.for')
    require('../modules/es.symbol.key-for')
    require('../modules/es.json.stringify')
    require('../modules/es.object.get-own-property-symbols')
  }, { '../modules/es.json.stringify': 157, '../modules/es.object.get-own-property-symbols': 160, '../modules/es.symbol.constructor': 169, '../modules/es.symbol.for': 171, '../modules/es.symbol.key-for': 174 }],
  174: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var hasOwn = require('../internals/has-own-property')
    var isSymbol = require('../internals/is-symbol')
    var tryToString = require('../internals/try-to-string')
    var shared = require('../internals/shared')
    var NATIVE_SYMBOL_REGISTRY = require('../internals/symbol-registry-detection')

    var SymbolToStringRegistry = shared('symbol-to-string-registry')

    // `Symbol.keyFor` method
    // https://tc39.es/ecma262/#sec-symbol.keyfor
    $({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
      keyFor: function keyFor (sym) {
        if (!isSymbol(sym)) throw new TypeError(tryToString(sym) + ' is not a symbol')
        if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym]
      }
    })
  }, { '../internals/export': 44, '../internals/has-own-property': 64, '../internals/is-symbol': 83, '../internals/shared': 125, '../internals/symbol-registry-detection': 131, '../internals/try-to-string': 142 }],
  175: [function (require, module, exports) {
    'use strict'
    var defineWellKnownSymbol = require('../internals/well-known-symbol-define')
    var defineSymbolToPrimitive = require('../internals/symbol-define-to-primitive')

    // `Symbol.toPrimitive` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.toprimitive
    defineWellKnownSymbol('toPrimitive')

    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    defineSymbolToPrimitive()
  }, { '../internals/symbol-define-to-primitive': 130, '../internals/well-known-symbol-define': 149 }],
  176: [function (require, module, exports) {
    'use strict'
    var FREEZING = require('../internals/freezing')
    var globalThis = require('../internals/global-this')
    var uncurryThis = require('../internals/function-uncurry-this')
    var defineBuiltIns = require('../internals/define-built-ins')
    var InternalMetadataModule = require('../internals/internal-metadata')
    var collection = require('../internals/collection')
    var collectionWeak = require('../internals/collection-weak')
    var isObject = require('../internals/is-object')
    var enforceInternalState = require('../internals/internal-state').enforce
    var fails = require('../internals/fails')
    var NATIVE_WEAK_MAP = require('../internals/weak-map-basic-detection')

    var $Object = Object
    // eslint-disable-next-line es/no-array-isarray -- safe
    var isArray = Array.isArray
    // eslint-disable-next-line es/no-object-isextensible -- safe
    var isExtensible = $Object.isExtensible
    // eslint-disable-next-line es/no-object-isfrozen -- safe
    var isFrozen = $Object.isFrozen
    // eslint-disable-next-line es/no-object-issealed -- safe
    var isSealed = $Object.isSealed
    // eslint-disable-next-line es/no-object-freeze -- safe
    var freeze = $Object.freeze
    // eslint-disable-next-line es/no-object-seal -- safe
    var seal = $Object.seal

    var IS_IE11 = !globalThis.ActiveXObject && 'ActiveXObject' in globalThis
    var InternalWeakMap

    var wrapper = function (init) {
      return function WeakMap () {
        return init(this, arguments.length ? arguments[0] : undefined)
      }
    }

    // `WeakMap` constructor
    // https://tc39.es/ecma262/#sec-weakmap-constructor
    var $WeakMap = collection('WeakMap', wrapper, collectionWeak)
    var WeakMapPrototype = $WeakMap.prototype
    var nativeSet = uncurryThis(WeakMapPrototype.set)

    // Chakra Edge bug: adding frozen arrays to WeakMap unfreeze them
    var hasMSEdgeFreezingBug = function () {
      return FREEZING && fails(function () {
        var frozenArray = freeze([])
        nativeSet(new $WeakMap(), frozenArray, 1)
        return !isFrozen(frozenArray)
      })
    }

    // IE11 WeakMap frozen keys fix
    // We can't use feature detection because it crash some old IE builds
    // https://github.com/zloirock/core-js/issues/485
    if (NATIVE_WEAK_MAP) {
      if (IS_IE11) {
        InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true)
        InternalMetadataModule.enable()
        var nativeDelete = uncurryThis(WeakMapPrototype.delete)
        var nativeHas = uncurryThis(WeakMapPrototype.has)
        var nativeGet = uncurryThis(WeakMapPrototype.get)
        defineBuiltIns(WeakMapPrototype, {
          delete: function (key) {
            if (isObject(key) && !isExtensible(key)) {
              var state = enforceInternalState(this)
              if (!state.frozen) state.frozen = new InternalWeakMap()
              return nativeDelete(this, key) || state.frozen.delete(key)
            } return nativeDelete(this, key)
          },
          has: function has (key) {
            if (isObject(key) && !isExtensible(key)) {
              var state = enforceInternalState(this)
              if (!state.frozen) state.frozen = new InternalWeakMap()
              return nativeHas(this, key) || state.frozen.has(key)
            } return nativeHas(this, key)
          },
          get: function get (key) {
            if (isObject(key) && !isExtensible(key)) {
              var state = enforceInternalState(this)
              if (!state.frozen) state.frozen = new InternalWeakMap()
              return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key)
            } return nativeGet(this, key)
          },
          set: function set (key, value) {
            if (isObject(key) && !isExtensible(key)) {
              var state = enforceInternalState(this)
              if (!state.frozen) state.frozen = new InternalWeakMap()
              nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value)
            } else nativeSet(this, key, value)
            return this
          }
        })
      // Chakra Edge frozen keys fix
      } else if (hasMSEdgeFreezingBug()) {
        defineBuiltIns(WeakMapPrototype, {
          set: function set (key, value) {
            var arrayIntegrityLevel
            if (isArray(key)) {
              if (isFrozen(key)) arrayIntegrityLevel = freeze
              else if (isSealed(key)) arrayIntegrityLevel = seal
            }
            nativeSet(this, key, value)
            if (arrayIntegrityLevel) arrayIntegrityLevel(key)
            return this
          }
        })
      }
    }
  }, { '../internals/collection': 23, '../internals/collection-weak': 22, '../internals/define-built-ins': 33, '../internals/fails': 45, '../internals/freezing': 47, '../internals/function-uncurry-this': 55, '../internals/global-this': 63, '../internals/internal-metadata': 71, '../internals/internal-state': 72, '../internals/is-object': 79, '../internals/weak-map-basic-detection': 147 }],
  177: [function (require, module, exports) {
    'use strict'
    // TODO: Remove this module from `core-js@4` since it's replaced to module below
    require('../modules/es.weak-map.constructor')
  }, { '../modules/es.weak-map.constructor': 176 }],
  178: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var $forEach = require('../internals/async-iterator-iteration').forEach

    // `AsyncIterator.prototype.forEach` method
    // https://github.com/tc39/proposal-async-iterator-helpers
    $({ target: 'AsyncIterator', proto: true, real: true }, {
      forEach: function forEach (fn) {
        return $forEach(this, fn)
      }
    })
  }, { '../internals/async-iterator-iteration': 18, '../internals/export': 44 }],
  179: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var globalThis = require('../internals/global-this')
    var anInstance = require('../internals/an-instance')
    var anObject = require('../internals/an-object')
    var isCallable = require('../internals/is-callable')
    var getPrototypeOf = require('../internals/object-get-prototype-of')
    var defineBuiltInAccessor = require('../internals/define-built-in-accessor')
    var createProperty = require('../internals/create-property')
    var fails = require('../internals/fails')
    var hasOwn = require('../internals/has-own-property')
    var wellKnownSymbol = require('../internals/well-known-symbol')
    var IteratorPrototype = require('../internals/iterators-core').IteratorPrototype
    var DESCRIPTORS = require('../internals/descriptors')
    var IS_PURE = require('../internals/is-pure')

    var CONSTRUCTOR = 'constructor'
    var ITERATOR = 'Iterator'
    var TO_STRING_TAG = wellKnownSymbol('toStringTag')

    var $TypeError = TypeError
    var NativeIterator = globalThis[ITERATOR]

    // FF56- have non-standard global helper `Iterator`
    var FORCED = IS_PURE ||
  !isCallable(NativeIterator) ||
  NativeIterator.prototype !== IteratorPrototype ||
  // FF44- non-standard `Iterator` passes previous tests
  !fails(function () { NativeIterator({}) })

    var IteratorConstructor = function Iterator () {
      anInstance(this, IteratorPrototype)
      if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError('Abstract class Iterator not directly constructable')
    }

    var defineIteratorPrototypeAccessor = function (key, value) {
      if (DESCRIPTORS) {
        defineBuiltInAccessor(IteratorPrototype, key, {
          configurable: true,
          get: function () {
            return value
          },
          set: function (replacement) {
            anObject(this)
            if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property")
            if (hasOwn(this, key)) this[key] = replacement
            else createProperty(this, key, replacement)
          }
        })
      } else IteratorPrototype[key] = value
    }

    if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR)

    if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
      defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor)
    }

    IteratorConstructor.prototype = IteratorPrototype

    // `Iterator` constructor
    // https://github.com/tc39/proposal-iterator-helpers
    $({ global: true, constructor: true, forced: FORCED }, {
      Iterator: IteratorConstructor
    })
  }, { '../internals/an-instance': 7, '../internals/an-object': 8, '../internals/create-property': 29, '../internals/define-built-in-accessor': 31, '../internals/descriptors': 35, '../internals/export': 44, '../internals/fails': 45, '../internals/global-this': 63, '../internals/has-own-property': 64, '../internals/is-callable': 75, '../internals/is-pure': 81, '../internals/iterators-core': 88, '../internals/object-get-prototype-of': 100, '../internals/well-known-symbol': 151 }],
  180: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var iterate = require('../internals/iterate')
    var aCallable = require('../internals/a-callable')
    var anObject = require('../internals/an-object')
    var getIteratorDirect = require('../internals/get-iterator-direct')

    // `Iterator.prototype.forEach` method
    // https://github.com/tc39/proposal-iterator-helpers
    $({ target: 'Iterator', proto: true, real: true }, {
      forEach: function forEach (fn) {
        anObject(this)
        aCallable(fn)
        var record = getIteratorDirect(this)
        var counter = 0
        iterate(record, function (value) {
          fn(value, counter++)
        }, { IS_RECORD: true })
      }
    })
  }, { '../internals/a-callable': 2, '../internals/an-object': 8, '../internals/export': 44, '../internals/get-iterator-direct': 57, '../internals/iterate': 84 }],
  181: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var aWeakMap = require('../internals/a-weak-map')
    var remove = require('../internals/weak-map-helpers').remove

    // `WeakMap.prototype.deleteAll` method
    // https://github.com/tc39/proposal-collection-methods
    $({ target: 'WeakMap', proto: true, real: true, forced: true }, {
      deleteAll: function deleteAll (/* ...elements */) {
        var collection = aWeakMap(this)
        var allDeleted = true
        var wasDeleted
        for (var k = 0, len = arguments.length; k < len; k++) {
          wasDeleted = remove(collection, arguments[k])
          allDeleted = allDeleted && wasDeleted
        } return !!allDeleted
      }
    })
  }, { '../internals/a-weak-map': 4, '../internals/export': 44, '../internals/weak-map-helpers': 148 }],
  182: [function (require, module, exports) {
    'use strict'
    var globalThis = require('../internals/global-this')
    var DOMIterables = require('../internals/dom-iterables')
    var DOMTokenListPrototype = require('../internals/dom-token-list-prototype')
    var forEach = require('../internals/array-for-each')
    var createNonEnumerableProperty = require('../internals/create-non-enumerable-property')

    var handlePrototype = function (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype && CollectionPrototype.forEach !== forEach) {
        try {
          createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach)
        } catch (error) {
          CollectionPrototype.forEach = forEach
        }
      }
    }

    for (var COLLECTION_NAME in DOMIterables) {
      if (DOMIterables[COLLECTION_NAME]) {
        handlePrototype(globalThis[COLLECTION_NAME] && globalThis[COLLECTION_NAME].prototype)
      }
    }

    handlePrototype(DOMTokenListPrototype)
  }, { '../internals/array-for-each': 10, '../internals/create-non-enumerable-property': 27, '../internals/dom-iterables': 38, '../internals/dom-token-list-prototype': 39, '../internals/global-this': 63 }],
  183: [function (require, module, exports) {
    'use strict'
    var globalThis = require('../internals/global-this')
    var DOMIterables = require('../internals/dom-iterables')
    var DOMTokenListPrototype = require('../internals/dom-token-list-prototype')
    var ArrayIteratorMethods = require('../modules/es.array.iterator')
    var createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    var setToStringTag = require('../internals/set-to-string-tag')
    var wellKnownSymbol = require('../internals/well-known-symbol')

    var ITERATOR = wellKnownSymbol('iterator')
    var ArrayValues = ArrayIteratorMethods.values

    var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
      if (CollectionPrototype) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[ITERATOR] !== ArrayValues) {
          try {
            createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues)
          } catch (error) {
            CollectionPrototype[ITERATOR] = ArrayValues
          }
        }
        setToStringTag(CollectionPrototype, COLLECTION_NAME, true)
        if (DOMIterables[COLLECTION_NAME]) {
          for (var METHOD_NAME in ArrayIteratorMethods) {
          // some Chrome versions have non-configurable methods on DOMTokenList
            if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) {
              try {
                createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME])
              } catch (error) {
                CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME]
              }
            }
          }
        }
      }
    }

    for (var COLLECTION_NAME in DOMIterables) {
      handlePrototype(globalThis[COLLECTION_NAME] && globalThis[COLLECTION_NAME].prototype, COLLECTION_NAME)
    }

    handlePrototype(DOMTokenListPrototype, 'DOMTokenList')
  }, { '../internals/create-non-enumerable-property': 27, '../internals/dom-iterables': 38, '../internals/dom-token-list-prototype': 39, '../internals/global-this': 63, '../internals/set-to-string-tag': 122, '../internals/well-known-symbol': 151, '../modules/es.array.iterator': 154 }],
  184: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var globalThis = require('../internals/global-this')
    var schedulersFix = require('../internals/schedulers-fix')

    var setInterval = schedulersFix(globalThis.setInterval, true)

    // Bun / IE9- setInterval additional parameters fix
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
    $({ global: true, bind: true, forced: globalThis.setInterval !== setInterval }, {
      setInterval: setInterval
    })
  }, { '../internals/export': 44, '../internals/global-this': 63, '../internals/schedulers-fix': 120 }],
  185: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var globalThis = require('../internals/global-this')
    var schedulersFix = require('../internals/schedulers-fix')

    var setTimeout = schedulersFix(globalThis.setTimeout, true)

    // Bun / IE9- setTimeout additional parameters fix
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
    $({ global: true, bind: true, forced: globalThis.setTimeout !== setTimeout }, {
      setTimeout: setTimeout
    })
  }, { '../internals/export': 44, '../internals/global-this': 63, '../internals/schedulers-fix': 120 }],
  186: [function (require, module, exports) {
    'use strict'
    // TODO: Remove this module from `core-js@4` since it's split to modules listed below
    require('../modules/web.set-interval')
    require('../modules/web.set-timeout')
  }, { '../modules/web.set-interval': 184, '../modules/web.set-timeout': 185 }]
}, {}, [1])
