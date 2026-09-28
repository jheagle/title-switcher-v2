(function () { function r (e, n, t) { function o (i, f) { if (!n[i]) { if (!e[i]) { const c = typeof require === 'function' && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); const a = new Error("Cannot find module '" + i + "'"); throw a.code = 'MODULE_NOT_FOUND', a } const p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { const n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = typeof require === 'function' && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
  1: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/esnext.iterator.constructor.js')
    require('core-js/modules/esnext.iterator.for-each.js')
    require('core-js/modules/esnext.weak-map.delete-all.js')
    const __classPrivateFieldSet = void 0 && (void 0).__classPrivateFieldSet || function (receiver, state, value, kind, f) {
      if (kind === 'm') throw new TypeError('Private method is not writable')
      if (kind === 'a' && !f) throw new TypeError('Private accessor was defined without a setter')
      if (typeof state === 'function' ? receiver !== state || !f : !state.has(receiver)) throw new TypeError('Cannot write private member to an object whose class did not declare it')
      return kind === 'a' ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value
    }
    const __classPrivateFieldGet = void 0 && (void 0).__classPrivateFieldGet || function (receiver, state, kind, f) {
      if (kind === 'a' && !f) throw new TypeError('Private accessor was defined without a getter')
      if (typeof state === 'function' ? receiver !== state || !f : !state.has(receiver)) throw new TypeError('Cannot read private member from an object whose class did not declare it')
      return kind === 'm' ? f : kind === 'a' ? f.call(receiver) : f ? f.value : state.get(receiver)
    }
    let _TitleSwitcher_active, _TitleSwitcher_currentClass, _TitleSwitcher_currentIndex, _TitleSwitcher_delayEffect, _TitleSwitcher_delaySwitch, _TitleSwitcher_isRandom, _TitleSwitcher_titles, _TitleSwitcher_titlesContainer, _TitleSwitcher_switchStyle, _TitleSwitcher_typeSurface
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    class TitleSwitcher {
      /**
   * Instantiate this as a class to get an instance of TitleSwitcher
   * @param titlesContainer - The selector where titles are stored
   * @param switchStyle - The function or function name for the effect to apply
   * @constructor
   */
      constructor (titlesContainer = '', switchStyle = 'typingEffect') {
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
        const foundContainers = titlesContainer ? document.querySelectorAll(titlesContainer) : []
        if (foundContainers && foundContainers[0]) {
          __classPrivateFieldSet(this, _TitleSwitcher_titlesContainer, foundContainers[0], 'f')
          __classPrivateFieldSet(this, _TitleSwitcher_titles, foundContainers[0].children, 'f')
        }
      }

      /**
   * Retrieve active
   */
      get active () {
        return __classPrivateFieldGet(this, _TitleSwitcher_active, 'f')
      }

      /**
   * Retrieve currentClass
   */
      get currentClass () {
        return __classPrivateFieldGet(this, _TitleSwitcher_currentClass, 'f')
      }

      /**
   * Retrieve currentIndex
   */
      get currentIndex () {
        return __classPrivateFieldGet(this, _TitleSwitcher_currentIndex, 'f')
      }

      /**
   * Retrieve delayEffect
   */
      get delayEffect () {
        return __classPrivateFieldGet(this, _TitleSwitcher_delayEffect, 'f')
      }

      /**
   * Retrieve delaySwitch
   */
      get delaySwitch () {
        return __classPrivateFieldGet(this, _TitleSwitcher_delaySwitch, 'f')
      }

      /**
   * Retrieve switchStyle
   */
      get switchStyle () {
        return __classPrivateFieldGet(this, _TitleSwitcher_switchStyle, 'f')
      }

      /**
   * Retrieve list of titles DOM elements
   */
      get titles () {
        return __classPrivateFieldGet(this, _TitleSwitcher_titles, 'f')
      }

      /**
   * Retrieve typeSurface used
   */
      get typeSurface () {
        return __classPrivateFieldGet(this, _TitleSwitcher_typeSurface, 'f')
      }

      /**
   * This is the function to begin the switching titles
   * @param settings
   * @param settings.delaySwitch
   * @param settings.delayEffect
   * @param settings.isRandom
   * @param settings.immediatePause
   */
      startTitles ({
        delaySwitch = 400,
        delayEffect = 200,
        isRandom = false,
        immediatePause = false
      } = {}) {
        const typeSurface = 'typeSurface'
        __classPrivateFieldSet(this, _TitleSwitcher_delaySwitch, delaySwitch, 'f')
        __classPrivateFieldSet(this, _TitleSwitcher_delayEffect, delayEffect, 'f')
        __classPrivateFieldSet(this, _TitleSwitcher_isRandom, isRandom, 'f')
        __classPrivateFieldSet(this, _TitleSwitcher_active, !immediatePause, 'f')
        if (__classPrivateFieldGet(this, _TitleSwitcher_currentIndex, 'f') >= __classPrivateFieldGet(this, _TitleSwitcher_titles, 'f').length || typeof __classPrivateFieldGet(this, _TitleSwitcher_titlesContainer, 'f') === 'string') {
          __classPrivateFieldSet(this, _TitleSwitcher_active, false, 'f')
          console.warn(`No titles found for '${__classPrivateFieldGet(this, _TitleSwitcher_titlesContainer, 'f')}'`)
          return this
        }
        if (__classPrivateFieldGet(this, _TitleSwitcher_isRandom, 'f')) {
          __classPrivateFieldSet(this, _TitleSwitcher_currentIndex, Math.round(Math.random() * (__classPrivateFieldGet(this, _TitleSwitcher_titles, 'f').length - 2)) + 1, 'f')
        }
        const currentTitle = __classPrivateFieldGet(this, _TitleSwitcher_titles, 'f')[__classPrivateFieldGet(this, _TitleSwitcher_currentIndex, 'f')]
        if (currentTitle.classList) {
          currentTitle.classList.add(__classPrivateFieldGet(this, _TitleSwitcher_currentClass, 'f'))
        } else {
          currentTitle.className += ' ' + __classPrivateFieldGet(this, _TitleSwitcher_currentClass, 'f')
        }
        // @ts-ignore The Node returned is of type Element, or it should be
        const typeElement = __classPrivateFieldGet(this, _TitleSwitcher_titles, 'f')[0].cloneNode(true)
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
      pause () {
        __classPrivateFieldSet(this, _TitleSwitcher_active, false, 'f')
      }

      /**
   * This is the function to resume after a pause.
   */
      resume () {
        if (!__classPrivateFieldGet(this, _TitleSwitcher_active, 'f')) {
          __classPrivateFieldSet(this, _TitleSwitcher_active, true, 'f')
          this.switchTitle(__classPrivateFieldGet(this, _TitleSwitcher_titles, 'f')[__classPrivateFieldGet(this, _TitleSwitcher_currentIndex, 'f')], __classPrivateFieldGet(this, _TitleSwitcher_switchStyle, 'f'), this)
        }
      }

      /**
   * This is the core function for switching titles
   * @param currentTitle
   * @param callBackFunction
   * @param self
   * @param runOnce
   */
      switchTitle (currentTitle, callBackFunction, self, runOnce = false) {
        self = self || this
        let currentIndex = 1
        const size = __classPrivateFieldGet(self, _TitleSwitcher_titles, 'f').length
        for (let i = 1; i < size; ++i) {
          if (__classPrivateFieldGet(self, _TitleSwitcher_titles, 'f')[i] === currentTitle) {
            currentIndex = i
            break
          }
        }
        if (!__classPrivateFieldGet(self, _TitleSwitcher_active, 'f')) {
          __classPrivateFieldSet(self, _TitleSwitcher_currentIndex, currentIndex, 'f')
          return self
        }
        const maxIndex = __classPrivateFieldGet(self, _TitleSwitcher_titles, 'f').length - 1
        let nextIndex = 1
        if (maxIndex === 1) {
          return callBackFunction(currentTitle, runOnce ? () => self : self.switchTitle, self, runOnce)
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
        const nextTitle = __classPrivateFieldGet(self, _TitleSwitcher_titles, 'f')[nextIndex]
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
        return callBackFunction(nextTitle, runOnce ? () => self : self.switchTitle, self, runOnce)
      }
    }
    _TitleSwitcher_active = new WeakMap(), _TitleSwitcher_currentClass = new WeakMap(), _TitleSwitcher_currentIndex = new WeakMap(), _TitleSwitcher_delayEffect = new WeakMap(), _TitleSwitcher_delaySwitch = new WeakMap(), _TitleSwitcher_isRandom = new WeakMap(), _TitleSwitcher_titles = new WeakMap(), _TitleSwitcher_titlesContainer = new WeakMap(), _TitleSwitcher_switchStyle = new WeakMap(), _TitleSwitcher_typeSurface = new WeakMap()
    /**
 * This is a helper function to improve the default 'typingEffect'
 * @param blinkOn
 * @param self
 */
    TitleSwitcher.prototype.cursorBlink = (blinkOn, self) => {
      // display cursor effect
      self = self || void 0
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
 * @param domObject
 * @param callBackFunction
 * @param self
 * @param runOnce
 */
    TitleSwitcher.prototype.typingEffect = (domObject, callBackFunction, self, runOnce = false) => {
      self = self || void 0
      const size = self.titles.length
      let currentIndex = 0
      for (let i = 1; i < size; ++i) {
        if (self.titles[i] === domObject) {
          currentIndex = i
          break
        }
      }
      domObject = domObject || self.titles[currentIndex + 1]
      let blinkOn = true
      const numBlinks = 4
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
      for (let i = 0; i < numBlinks; ++i) {
        setTimeout(() => {
          self.cursorBlink(blinkOn, self)
          blinkOn = !blinkOn
        }, i * self.delaySwitch)
      }
      setTimeout(() => {
        // Empty the surface, and display the cursor (cursor is always solid while typing / not flashing)
        self.typeSurface.innerHTML = ''
        self.cursorBlink(true, self)
        // Copy each letter from the current title (text only)
        domObject.textContent.split('').forEach((letter, i) => {
          setTimeout(() => {
            // Remove the previous cursor, place the new letter, then append a formatted cursor on the end
            self.typeSurface.innerHTML = self.typeSurface.textContent.replace('|', '') + letter + '<span style="font-weight: normal; color: black; text-decoration: none">&#124;</span>'
            // If the text content equals the title content with a cursor appended then we reached the end.
            if (domObject.textContent + '|' === self.typeSurface.textContent) {
              // Replace html with old html on last letter, so we get all the html formatting applied
              self.typeSurface.innerHTML = domObject.innerHTML + '<span style="font-weight: normal; color: black; text-decoration: none">&#124;</span>'
              // Run the blinking cursor two times the regular time in order to let the text be readable before switching
              for (let j = 0; j < numBlinks * 2; ++j) {
                setTimeout(() => {
                  --j
                  self.cursorBlink(blinkOn, self)
                  if (j === 0) {
                    callBackFunction(domObject, runOnce ? () => self : self.switchStyle, self, runOnce)
                  }
                }, j * self.delaySwitch)
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
  }, { 'core-js/modules/esnext.iterator.constructor.js': 91, 'core-js/modules/esnext.iterator.for-each.js': 92, 'core-js/modules/esnext.weak-map.delete-all.js': 93 }],
  2: [function (require, module, exports) {
    'use strict'
    const isCallable = require('../internals/is-callable')
    const tryToString = require('../internals/try-to-string')

    const $TypeError = TypeError

    // `Assert: IsCallable(argument) is true`
    module.exports = function (argument) {
      if (isCallable(argument)) return argument
      throw new $TypeError(tryToString(argument) + ' is not a function')
    }
  }, { '../internals/is-callable': 43, '../internals/try-to-string': 82 }],
  3: [function (require, module, exports) {
    'use strict'
    const has = require('../internals/weak-map-helpers').has

    // Perform ? RequireInternalSlot(M, [[WeakMapData]])
    module.exports = function (it) {
      has(it)
      return it
    }
  }, { '../internals/weak-map-helpers': 87 }],
  4: [function (require, module, exports) {
    'use strict'
    const isPrototypeOf = require('../internals/object-is-prototype-of')

    const $TypeError = TypeError

    module.exports = function (it, Prototype) {
      if (isPrototypeOf(Prototype, it)) return it
      throw new $TypeError('Incorrect invocation')
    }
  }, { '../internals/object-is-prototype-of': 64 }],
  5: [function (require, module, exports) {
    'use strict'
    const isObject = require('../internals/is-object')

    const $String = String
    const $TypeError = TypeError

    // `Assert: Type(argument) is Object`
    module.exports = function (argument) {
      if (isObject(argument)) return argument
      throw new $TypeError($String(argument) + ' is not an object')
    }
  }, { '../internals/is-object': 46 }],
  6: [function (require, module, exports) {
    'use strict'
    const toIndexedObject = require('../internals/to-indexed-object')
    const toAbsoluteIndex = require('../internals/to-absolute-index')
    const lengthOfArrayLike = require('../internals/length-of-array-like')

    // `Array.prototype.{ indexOf, includes }` methods implementation
    const createMethod = function (IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        const O = toIndexedObject($this)
        const length = lengthOfArrayLike(O)
        if (length === 0) return !IS_INCLUDES && -1
        let index = toAbsoluteIndex(fromIndex, length)
        let value
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
  }, { '../internals/length-of-array-like': 54, '../internals/to-absolute-index': 75, '../internals/to-indexed-object': 76 }],
  7: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')

    const toString = uncurryThis({}.toString)
    const stringSlice = uncurryThis(''.slice)

    module.exports = function (it) {
      return stringSlice(toString(it), 8, -1)
    }
  }, { '../internals/function-uncurry-this': 28 }],
  8: [function (require, module, exports) {
    'use strict'
    const hasOwn = require('../internals/has-own-property')
    const ownKeys = require('../internals/own-keys')
    const getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor')
    const definePropertyModule = require('../internals/object-define-property')

    module.exports = function (target, source, exceptions) {
      const keys = ownKeys(source)
      const defineProperty = definePropertyModule.f
      const getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
          defineProperty(target, key, getOwnPropertyDescriptor(source, key))
        }
      }
    }
  }, { '../internals/has-own-property': 35, '../internals/object-define-property': 59, '../internals/object-get-own-property-descriptor': 60, '../internals/own-keys': 69 }],
  9: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')

    module.exports = !fails(function () {
      function F () { /* empty */ }
      F.prototype.constructor = null
      // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
      return Object.getPrototypeOf(new F()) !== F.prototype
    })
  }, { '../internals/fails': 22 }],
  10: [function (require, module, exports) {
    'use strict'
    const DESCRIPTORS = require('../internals/descriptors')
    const definePropertyModule = require('../internals/object-define-property')
    const createPropertyDescriptor = require('../internals/create-property-descriptor')

    module.exports = DESCRIPTORS
      ? function (object, key, value) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value))
      }
      : function (object, key, value) {
        object[key] = value
        return object
      }
  }, { '../internals/create-property-descriptor': 11, '../internals/descriptors': 16, '../internals/object-define-property': 59 }],
  11: [function (require, module, exports) {
    'use strict'
    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      }
    }
  }, {}],
  12: [function (require, module, exports) {
    'use strict'
    const DESCRIPTORS = require('../internals/descriptors')
    const definePropertyModule = require('../internals/object-define-property')
    const createPropertyDescriptor = require('../internals/create-property-descriptor')

    module.exports = function (object, key, value) {
      if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value))
      else object[key] = value
    }
  }, { '../internals/create-property-descriptor': 11, '../internals/descriptors': 16, '../internals/object-define-property': 59 }],
  13: [function (require, module, exports) {
    'use strict'
    const makeBuiltIn = require('../internals/make-built-in')
    const defineProperty = require('../internals/object-define-property')

    module.exports = function (target, name, descriptor) {
      if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true })
      if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true })
      return defineProperty.f(target, name, descriptor)
    }
  }, { '../internals/make-built-in': 55, '../internals/object-define-property': 59 }],
  14: [function (require, module, exports) {
    'use strict'
    const isCallable = require('../internals/is-callable')
    const definePropertyModule = require('../internals/object-define-property')
    const makeBuiltIn = require('../internals/make-built-in')
    const defineGlobalProperty = require('../internals/define-global-property')

    module.exports = function (O, key, value, options) {
      if (!options) options = {}
      let simple = options.enumerable
      const name = options.name !== undefined ? options.name : key
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
            value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
          })
        }
      } return O
    }
  }, { '../internals/define-global-property': 15, '../internals/is-callable': 43, '../internals/make-built-in': 55, '../internals/object-define-property': 59 }],
  15: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')

    // eslint-disable-next-line es/no-object-defineproperty -- safe
    const defineProperty = Object.defineProperty

    module.exports = function (key, value) {
      try {
        defineProperty(globalThis, key, { value, configurable: true, writable: true })
      } catch (error) {
        globalThis[key] = value
      } return value
    }
  }, { '../internals/global-this': 34 }],
  16: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')

    // Detect IE8's incomplete defineProperty implementation
    module.exports = !fails(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return Object.defineProperty({}, 1, { get: function () { return 7 } })[1] !== 7
    })
  }, { '../internals/fails': 22 }],
  17: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')
    const isObject = require('../internals/is-object')

    const document = globalThis.document
    // typeof document.createElement is 'object' in old IE
    const EXISTS = isObject(document) && isObject(document.createElement)

    module.exports = function (it) {
      return EXISTS ? document.createElement(it) : {}
    }
  }, { '../internals/global-this': 34, '../internals/is-object': 46 }],
  18: [function (require, module, exports) {
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
  19: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')

    const navigator = globalThis.navigator
    const userAgent = navigator && navigator.userAgent

    module.exports = userAgent ? String(userAgent) : ''
  }, { '../internals/global-this': 34 }],
  20: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')
    const userAgent = require('../internals/environment-user-agent')

    const process = globalThis.process
    const Deno = globalThis.Deno
    const versions = process && process.versions || Deno && Deno.version
    const v8 = versions && versions.v8
    let match, version

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
  }, { '../internals/environment-user-agent': 19, '../internals/global-this': 34 }],
  21: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')
    const getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f
    const createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    const defineBuiltIn = require('../internals/define-built-in')
    const defineGlobalProperty = require('../internals/define-global-property')
    const copyConstructorProperties = require('../internals/copy-constructor-properties')
    const isForced = require('../internals/is-forced')

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
      const TARGET = options.target
      const GLOBAL = options.global
      const STATIC = options.stat
      let FORCED, target, key, targetProperty, sourceProperty, descriptor
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
  }, { '../internals/copy-constructor-properties': 8, '../internals/create-non-enumerable-property': 10, '../internals/define-built-in': 14, '../internals/define-global-property': 15, '../internals/global-this': 34, '../internals/is-forced': 44, '../internals/object-get-own-property-descriptor': 60 }],
  22: [function (require, module, exports) {
    'use strict'
    module.exports = function (exec) {
      try {
        return !!exec()
      } catch (error) {
        return true
      }
    }
  }, {}],
  23: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this-clause')
    const aCallable = require('../internals/a-callable')
    const NATIVE_BIND = require('../internals/function-bind-native')

    const bind = uncurryThis(uncurryThis.bind)

    // optional / simple context binding
    module.exports = function (fn, that) {
      aCallable(fn)
      return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
        return fn.apply(that, arguments)
      }
    }
  }, { '../internals/a-callable': 2, '../internals/function-bind-native': 24, '../internals/function-uncurry-this-clause': 27 }],
  24: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')

    module.exports = !fails(function () {
      // eslint-disable-next-line es/no-function-prototype-bind -- safe
      const test = function () { /* empty */ }.bind()
      // eslint-disable-next-line no-prototype-builtins -- safe
      return typeof test !== 'function' || test.hasOwnProperty('prototype')
    })
  }, { '../internals/fails': 22 }],
  25: [function (require, module, exports) {
    'use strict'
    const NATIVE_BIND = require('../internals/function-bind-native')

    const call = Function.prototype.call
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    module.exports = NATIVE_BIND
      ? call.bind(call)
      : function () {
        return call.apply(call, arguments)
      }
  }, { '../internals/function-bind-native': 24 }],
  26: [function (require, module, exports) {
    'use strict'
    const DESCRIPTORS = require('../internals/descriptors')
    const hasOwn = require('../internals/has-own-property')

    const FunctionPrototype = Function.prototype
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    const getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor

    const EXISTS = hasOwn(FunctionPrototype, 'name')
    // additional protection from minified / mangled / dropped function names
    const PROPER = EXISTS && function something () { /* empty */ }.name === 'something'
    const CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable))

    module.exports = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    }
  }, { '../internals/descriptors': 16, '../internals/has-own-property': 35 }],
  27: [function (require, module, exports) {
    'use strict'
    const classofRaw = require('../internals/classof-raw')
    const uncurryThis = require('../internals/function-uncurry-this')

    module.exports = function (fn) {
      // Nashorn bug:
      //   https://github.com/zloirock/core-js/issues/1128
      //   https://github.com/zloirock/core-js/issues/1130
      if (classofRaw(fn) === 'Function') return uncurryThis(fn)
    }
  }, { '../internals/classof-raw': 7, '../internals/function-uncurry-this': 28 }],
  28: [function (require, module, exports) {
    'use strict'
    const NATIVE_BIND = require('../internals/function-bind-native')

    const FunctionPrototype = Function.prototype
    const call = FunctionPrototype.call
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    const uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call)

    module.exports = NATIVE_BIND
      ? uncurryThisWithBind
      : function (fn) {
        return function () {
          return call.apply(fn, arguments)
        }
      }
  }, { '../internals/function-bind-native': 24 }],
  29: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')
    const isCallable = require('../internals/is-callable')

    const aFunction = function (argument) {
      return isCallable(argument) ? argument : undefined
    }

    module.exports = function (namespace, method) {
      return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method]
    }
  }, { '../internals/global-this': 34, '../internals/is-callable': 43 }],
  30: [function (require, module, exports) {
    'use strict'
    // `GetIteratorDirect(obj)` abstract operation
    // https://tc39.es/ecma262/#sec-getiteratordirect
    module.exports = function (obj) {
      return {
        iterator: obj,
        next: obj.next,
        done: false
      }
    }
  }, {}],
  31: [function (require, module, exports) {
    'use strict'
    const call = require('../internals/function-call')
    const isCallable = require('../internals/is-callable')
    const anObject = require('../internals/an-object')
    const tryToString = require('../internals/try-to-string')
    const getIteratorMethod = require('../internals/get-iterator-method-internal')

    const $TypeError = TypeError

    module.exports = function (argument, usingIterator) {
      const iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator
      if (isCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument))
      throw new $TypeError(tryToString(argument) + ' is not iterable')
    }
  }, { '../internals/an-object': 5, '../internals/function-call': 25, '../internals/get-iterator-method-internal': 32, '../internals/is-callable': 43, '../internals/try-to-string': 82 }],
  32: [function (require, module, exports) {
    'use strict'
    const classof = require('../internals/classof-raw')
    const isNullOrUndefined = require('../internals/is-null-or-undefined')
    const getMethod = require('../internals/get-method')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const ITERATOR = wellKnownSymbol('iterator')
    const ArrayPrototype = Array.prototype

    module.exports = function (it) {
      if (!isNullOrUndefined(it)) {
        return getMethod(it, ITERATOR) ||
    getMethod(it, '@@iterator') ||
    (classof(it) === 'Arguments' ? ArrayPrototype[ITERATOR] : undefined)
      }
    }
  }, { '../internals/classof-raw': 7, '../internals/get-method': 33, '../internals/is-null-or-undefined': 45, '../internals/well-known-symbol': 88 }],
  33: [function (require, module, exports) {
    'use strict'
    const aCallable = require('../internals/a-callable')
    const isNullOrUndefined = require('../internals/is-null-or-undefined')

    // `GetMethod` abstract operation
    // https://tc39.es/ecma262/#sec-getmethod
    module.exports = function (V, P) {
      const func = V[P]
      return isNullOrUndefined(func) ? undefined : aCallable(func)
    }
  }, { '../internals/a-callable': 2, '../internals/is-null-or-undefined': 45 }],
  34: [function (require, module, exports) {
    (function (global) {
      (function () {
        'use strict'
        const check = function (it) {
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
  35: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')
    const toObject = require('../internals/to-object')

    const hasOwnProperty = uncurryThis({}.hasOwnProperty)

    // `HasOwnProperty` abstract operation
    // https://tc39.es/ecma262/#sec-hasownproperty
    // eslint-disable-next-line es/no-object-hasown -- safe
    module.exports = Object.hasOwn || function hasOwn (it, key) {
      return hasOwnProperty(toObject(it), key)
    }
  }, { '../internals/function-uncurry-this': 28, '../internals/to-object': 79 }],
  36: [function (require, module, exports) {
    'use strict'
    module.exports = {}
  }, {}],
  37: [function (require, module, exports) {
    'use strict'
    const getBuiltIn = require('../internals/get-built-in')

    module.exports = getBuiltIn('document', 'documentElement')
  }, { '../internals/get-built-in': 29 }],
  38: [function (require, module, exports) {
    'use strict'
    const DESCRIPTORS = require('../internals/descriptors')
    const fails = require('../internals/fails')
    const createElement = require('../internals/document-create-element')

    // Thanks to IE8 for its funny defineProperty
    module.exports = !DESCRIPTORS && !fails(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return Object.defineProperty(createElement('div'), 'a', {
        get: function () { return 7 }
      }).a !== 7
    })
  }, { '../internals/descriptors': 16, '../internals/document-create-element': 17, '../internals/fails': 22 }],
  39: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')
    const fails = require('../internals/fails')
    const classof = require('../internals/classof-raw')

    const $Object = Object
    const split = uncurryThis(''.split)

    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    module.exports = fails(function () {
      // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
      // eslint-disable-next-line no-prototype-builtins -- safe
      return !$Object('z').propertyIsEnumerable(0)
    }) ? function (it) {
        return classof(it) === 'String' ? split(it, '') : $Object(it)
      } : $Object
  }, { '../internals/classof-raw': 7, '../internals/fails': 22, '../internals/function-uncurry-this': 28 }],
  40: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')
    const isCallable = require('../internals/is-callable')
    const store = require('../internals/shared-store')

    const functionToString = uncurryThis(Function.toString)

    // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function (it) {
        return functionToString(it)
      }
    }

    module.exports = store.inspectSource
  }, { '../internals/function-uncurry-this': 28, '../internals/is-callable': 43, '../internals/shared-store': 72 }],
  41: [function (require, module, exports) {
    'use strict'
    const NATIVE_WEAK_MAP = require('../internals/weak-map-basic-detection')
    const globalThis = require('../internals/global-this')
    const isObject = require('../internals/is-object')
    const createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    const hasOwn = require('../internals/has-own-property')
    const shared = require('../internals/shared-store')
    const sharedKey = require('../internals/shared-key')
    const hiddenKeys = require('../internals/hidden-keys')

    const OBJECT_ALREADY_INITIALIZED = 'Object already initialized'
    const TypeError = globalThis.TypeError
    const WeakMap = globalThis.WeakMap
    let set, get, has

    const enforce = function (it) {
      return has(it) ? get(it) : set(it, {})
    }

    const getterFor = function (TYPE) {
      return function (it) {
        let state
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw new TypeError('Incompatible receiver, ' + TYPE + ' required')
        } return state
      }
    }

    if (NATIVE_WEAK_MAP || shared.state) {
      const store = shared.state || (shared.state = new WeakMap())
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
      const STATE = sharedKey('state')
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
      set,
      get,
      has,
      enforce,
      getterFor
    }
  }, { '../internals/create-non-enumerable-property': 10, '../internals/global-this': 34, '../internals/has-own-property': 35, '../internals/hidden-keys': 36, '../internals/is-object': 46, '../internals/shared-key': 71, '../internals/shared-store': 72, '../internals/weak-map-basic-detection': 86 }],
  42: [function (require, module, exports) {
    'use strict'
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const Iterators = require('../internals/iterators')

    const ITERATOR = wellKnownSymbol('iterator')
    const ArrayPrototype = Array.prototype

    // check on default Array iterator
    module.exports = function (it) {
      return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it)
    }
  }, { '../internals/iterators': 53, '../internals/well-known-symbol': 88 }],
  43: [function (require, module, exports) {
    'use strict'
    // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
    const documentAll = typeof document === 'object' && document.all

    // `IsCallable` abstract operation
    // https://tc39.es/ecma262/#sec-iscallable
    // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
    module.exports = typeof documentAll === 'undefined' && documentAll !== undefined
      ? function (argument) {
        return typeof argument === 'function' || argument === documentAll
      }
      : function (argument) {
        return typeof argument === 'function'
      }
  }, {}],
  44: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')
    const isCallable = require('../internals/is-callable')

    const replacement = /#|\.prototype\./

    const isForced = function (feature, detection) {
      const value = data[normalize(feature)]
      return value === POLYFILL
        ? true
        : value === NATIVE
          ? false
          : isCallable(detection)
            ? fails(detection)
            : !!detection
    }

    var normalize = isForced.normalize = function (string) {
      return String(string).replace(replacement, '.').toLowerCase()
    }

    var data = isForced.data = {}
    var NATIVE = isForced.NATIVE = 'N'
    var POLYFILL = isForced.POLYFILL = 'P'

    module.exports = isForced
  }, { '../internals/fails': 22, '../internals/is-callable': 43 }],
  45: [function (require, module, exports) {
    'use strict'
    // we can't use just `it == null` since of `document.all` special case
    // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
    module.exports = function (it) {
      return it === null || it === undefined
    }
  }, {}],
  46: [function (require, module, exports) {
    'use strict'
    const isCallable = require('../internals/is-callable')

    module.exports = function (it) {
      return typeof it === 'object' ? it !== null : isCallable(it)
    }
  }, { '../internals/is-callable': 43 }],
  47: [function (require, module, exports) {
    'use strict'
    module.exports = false
  }, {}],
  48: [function (require, module, exports) {
    'use strict'
    const getBuiltIn = require('../internals/get-built-in')
    const isCallable = require('../internals/is-callable')
    const isPrototypeOf = require('../internals/object-is-prototype-of')
    const USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid')

    const $Object = Object

    module.exports = USE_SYMBOL_AS_UID
      ? function (it) {
        return typeof it === 'symbol'
      }
      : function (it) {
        const $Symbol = getBuiltIn('Symbol')
        return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it))
      }
  }, { '../internals/get-built-in': 29, '../internals/is-callable': 43, '../internals/object-is-prototype-of': 64, '../internals/use-symbol-as-uid': 84 }],
  49: [function (require, module, exports) {
    'use strict'
    const bind = require('../internals/function-bind-context')
    const call = require('../internals/function-call')
    const anObject = require('../internals/an-object')
    const tryToString = require('../internals/try-to-string')
    const isArrayIteratorMethod = require('../internals/is-array-iterator-method')
    const lengthOfArrayLike = require('../internals/length-of-array-like')
    const isPrototypeOf = require('../internals/object-is-prototype-of')
    const getIterator = require('../internals/get-iterator-internal')
    const getIteratorMethod = require('../internals/get-iterator-method-internal')
    const iteratorClose = require('../internals/iterator-close')

    const $TypeError = TypeError

    const Result = function (stopped, result) {
      this.stopped = stopped
      this.result = result
    }

    const ResultPrototype = Result.prototype

    module.exports = function (iterable, unboundFunction, options) {
      const that = options && options.that
      const AS_ENTRIES = !!(options && options.AS_ENTRIES)
      const IS_RECORD = !!(options && options.IS_RECORD)
      const IS_ITERATOR = !!(options && options.IS_ITERATOR)
      const INTERRUPTED = !!(options && options.INTERRUPTED)
      const fn = bind(unboundFunction, that)
      let iterator, iterFn, index, length, result, next, step

      const stop = function (condition) {
        const $iterator = iterator
        iterator = undefined
        if ($iterator) iteratorClose($iterator, 'normal')
        return new Result(true, condition)
      }

      const callFn = function (value) {
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
        // `IteratorValue` errors should propagate without closing the iterator
        const value = step.value
        try {
          result = callFn(value)
        } catch (error) {
          if (iterator) iteratorClose(iterator, 'throw', error)
          else throw error
        }
        if (typeof result === 'object' && result && isPrototypeOf(ResultPrototype, result)) return result
      } return new Result(false)
    }
  }, { '../internals/an-object': 5, '../internals/function-bind-context': 23, '../internals/function-call': 25, '../internals/get-iterator-internal': 31, '../internals/get-iterator-method-internal': 32, '../internals/is-array-iterator-method': 42, '../internals/iterator-close': 50, '../internals/length-of-array-like': 54, '../internals/object-is-prototype-of': 64, '../internals/try-to-string': 82 }],
  50: [function (require, module, exports) {
    'use strict'
    const call = require('../internals/function-call')
    const anObject = require('../internals/an-object')
    const getMethod = require('../internals/get-method')

    module.exports = function (iterator, kind, value) {
      let innerResult, innerError
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
  }, { '../internals/an-object': 5, '../internals/function-call': 25, '../internals/get-method': 33 }],
  51: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')

    // https://github.com/tc39/ecma262/pull/3467
    module.exports = function (METHOD_NAME, ExpectedError) {
      const Iterator = globalThis.Iterator
      const IteratorPrototype = Iterator && Iterator.prototype
      const method = IteratorPrototype && IteratorPrototype[METHOD_NAME]

      let CLOSED = false

      if (method) {
        try {
          method.call({
            next: function () { return { done: true } },
            return: function () { CLOSED = true }
          }, -1)
        } catch (error) {
        // https://bugs.webkit.org/show_bug.cgi?id=291195
          if (!(error instanceof ExpectedError)) CLOSED = false
        }
      }

      if (!CLOSED) return method
    }
  }, { '../internals/global-this': 34 }],
  52: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')
    const isCallable = require('../internals/is-callable')
    const isObject = require('../internals/is-object')
    const create = require('../internals/object-create')
    const getPrototypeOf = require('../internals/object-get-prototype-of')
    const defineBuiltIn = require('../internals/define-built-in')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const IS_PURE = require('../internals/is-pure')

    const ITERATOR = wellKnownSymbol('iterator')
    let BUGGY_SAFARI_ITERATORS = false

    // `%IteratorPrototype%` object
    // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
    let IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator

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

    const NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
      const test = {}
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
      IteratorPrototype,
      BUGGY_SAFARI_ITERATORS
    }
  }, { '../internals/define-built-in': 14, '../internals/fails': 22, '../internals/is-callable': 43, '../internals/is-object': 46, '../internals/is-pure': 47, '../internals/object-create': 57, '../internals/object-get-prototype-of': 63, '../internals/well-known-symbol': 88 }],
  53: [function (require, module, exports) {
    'use strict'
    module.exports = Object.create ? Object.create(null) : {}
  }, {}],
  54: [function (require, module, exports) {
    'use strict'
    const toLength = require('../internals/to-length')

    // `LengthOfArrayLike` abstract operation
    // https://tc39.es/ecma262/#sec-lengthofarraylike
    module.exports = function (obj) {
      return toLength(obj.length)
    }
  }, { '../internals/to-length': 78 }],
  55: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')
    const fails = require('../internals/fails')
    const isCallable = require('../internals/is-callable')
    const hasOwn = require('../internals/has-own-property')
    const DESCRIPTORS = require('../internals/descriptors')
    const CONFIGURABLE_FUNCTION_NAME = require('../internals/function-name').CONFIGURABLE
    const inspectSource = require('../internals/inspect-source')
    const InternalStateModule = require('../internals/internal-state')

    const enforceInternalState = InternalStateModule.enforce
    const getInternalState = InternalStateModule.get
    const $String = String
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    const defineProperty = Object.defineProperty
    const stringSlice = uncurryThis(''.slice)
    const replace = uncurryThis(''.replace)
    const join = uncurryThis([].join)

    const CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
      return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8
    })

    const TEMPLATE = String(String).split('String')

    const makeBuiltIn = module.exports = function (value, name, options) {
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
      const state = enforceInternalState(value)
      if (!hasOwn(state, 'source')) {
        state.source = join(TEMPLATE, typeof name === 'string' ? name : '')
      } return value
    }

    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    // eslint-disable-next-line no-extend-native -- required
    Function.prototype.toString = makeBuiltIn(function toString () {
      return isCallable(this) && getInternalState(this).source || inspectSource(this)
    }, 'toString')
  }, { '../internals/descriptors': 16, '../internals/fails': 22, '../internals/function-name': 26, '../internals/function-uncurry-this': 28, '../internals/has-own-property': 35, '../internals/inspect-source': 40, '../internals/internal-state': 41, '../internals/is-callable': 43 }],
  56: [function (require, module, exports) {
    'use strict'
    const ceil = Math.ceil
    const floor = Math.floor

    // `Math.trunc` method
    // https://tc39.es/ecma262/#sec-math.trunc
    // eslint-disable-next-line es/no-math-trunc -- safe
    module.exports = Math.trunc || function trunc (x) {
      const n = +x
      return (n > 0 ? floor : ceil)(n)
    }
  }, {}],
  57: [function (require, module, exports) {
    'use strict'
    /* global ActiveXObject -- old IE, WSH */
    const anObject = require('../internals/an-object')
    const definePropertiesModule = require('../internals/object-define-properties')
    const enumBugKeys = require('../internals/enum-bug-keys')
    const hiddenKeys = require('../internals/hidden-keys')
    const html = require('../internals/html')
    const documentCreateElement = require('../internals/document-create-element')
    const sharedKey = require('../internals/shared-key')

    const GT = '>'
    const LT = '<'
    const PROTOTYPE = 'prototype'
    const SCRIPT = 'script'
    const IE_PROTO = sharedKey('IE_PROTO')

    const EmptyConstructor = function () { /* empty */ }

    const scriptTag = function (content) {
      return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT
    }

    // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
    const NullProtoObjectViaActiveX = function (activeXDocument) {
      activeXDocument.write(scriptTag(''))
      activeXDocument.close()
      const temp = activeXDocument.parentWindow.Object
      // eslint-disable-next-line no-useless-assignment -- avoid memory leak
      activeXDocument = null
      return temp
    }

    // Create object with fake `null` prototype: use iframe Object with cleared prototype
    const NullProtoObjectViaIFrame = function () {
      // Thrash, waste and sodomy: IE GC bug
      const iframe = documentCreateElement('iframe')
      const JS = 'java' + SCRIPT + ':'
      let iframeDocument
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
    let activeXDocument
    let NullProtoObject = function () {
      try {
        activeXDocument = new ActiveXObject('htmlfile')
      } catch (error) { /* ignore */ }
      NullProtoObject = typeof document !== 'undefined'
        ? document.domain && activeXDocument
          ? NullProtoObjectViaActiveX(activeXDocument) // old IE
          : NullProtoObjectViaIFrame()
        : NullProtoObjectViaActiveX(activeXDocument) // WSH
      let length = enumBugKeys.length
      while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]]
      return NullProtoObject()
    }

    hiddenKeys[IE_PROTO] = true

    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    // eslint-disable-next-line es/no-object-create -- safe
    module.exports = Object.create || function create (O, Properties) {
      let result
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O)
        result = new EmptyConstructor()
        EmptyConstructor[PROTOTYPE] = null
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O
      } else result = NullProtoObject()
      return Properties === undefined ? result : definePropertiesModule.f(result, Properties)
    }
  }, { '../internals/an-object': 5, '../internals/document-create-element': 17, '../internals/enum-bug-keys': 18, '../internals/hidden-keys': 36, '../internals/html': 37, '../internals/object-define-properties': 58, '../internals/shared-key': 71 }],
  58: [function (require, module, exports) {
    'use strict'
    const DESCRIPTORS = require('../internals/descriptors')
    const V8_PROTOTYPE_DEFINE_BUG = require('../internals/v8-prototype-define-bug')
    const definePropertyModule = require('../internals/object-define-property')
    const anObject = require('../internals/an-object')
    const toIndexedObject = require('../internals/to-indexed-object')
    const objectKeys = require('../internals/object-keys')

    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    // eslint-disable-next-line es/no-object-defineproperties -- safe
    exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG
      ? Object.defineProperties
      : function defineProperties (O, Properties) {
        anObject(O)
        const props = toIndexedObject(Properties)
        const keys = objectKeys(Properties)
        const length = keys.length
        let index = 0
        let key
        while (length > index) definePropertyModule.f(O, key = keys[index++], props[key])
        return O
      }
  }, { '../internals/an-object': 5, '../internals/descriptors': 16, '../internals/object-define-property': 59, '../internals/object-keys': 66, '../internals/to-indexed-object': 76, '../internals/v8-prototype-define-bug': 85 }],
  59: [function (require, module, exports) {
    'use strict'
    const DESCRIPTORS = require('../internals/descriptors')
    const IE8_DOM_DEFINE = require('../internals/ie8-dom-define')
    const V8_PROTOTYPE_DEFINE_BUG = require('../internals/v8-prototype-define-bug')
    const anObject = require('../internals/an-object')
    const toPropertyKey = require('../internals/to-property-key')

    const $TypeError = TypeError
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    const $defineProperty = Object.defineProperty
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    const $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
    const ENUMERABLE = 'enumerable'
    const CONFIGURABLE = 'configurable'
    const WRITABLE = 'writable'

    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG
      ? function defineProperty (O, P, Attributes) {
        anObject(O)
        P = toPropertyKey(P)
        anObject(Attributes)
        if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
          const current = $getOwnPropertyDescriptor(O, P)
          if (current && current[WRITABLE]) {
            O[P] = Attributes.value
            Attributes = {
              configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
              enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
              writable: false
            }
          }
        } return $defineProperty(O, P, Attributes)
      }
      : $defineProperty : function defineProperty (O, P, Attributes) {
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
  }, { '../internals/an-object': 5, '../internals/descriptors': 16, '../internals/ie8-dom-define': 38, '../internals/to-property-key': 81, '../internals/v8-prototype-define-bug': 85 }],
  60: [function (require, module, exports) {
    'use strict'
    const DESCRIPTORS = require('../internals/descriptors')
    const call = require('../internals/function-call')
    const propertyIsEnumerableModule = require('../internals/object-property-is-enumerable')
    const createPropertyDescriptor = require('../internals/create-property-descriptor')
    const toIndexedObject = require('../internals/to-indexed-object')
    const toPropertyKey = require('../internals/to-property-key')
    const hasOwn = require('../internals/has-own-property')
    const IE8_DOM_DEFINE = require('../internals/ie8-dom-define')

    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    const $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

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
  }, { '../internals/create-property-descriptor': 11, '../internals/descriptors': 16, '../internals/function-call': 25, '../internals/has-own-property': 35, '../internals/ie8-dom-define': 38, '../internals/object-property-is-enumerable': 67, '../internals/to-indexed-object': 76, '../internals/to-property-key': 81 }],
  61: [function (require, module, exports) {
    'use strict'
    const internalObjectKeys = require('../internals/object-keys-internal')
    const enumBugKeys = require('../internals/enum-bug-keys')

    const hiddenKeys = enumBugKeys.concat('length', 'prototype')

    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    // eslint-disable-next-line es/no-object-getownpropertynames -- safe
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames (O) {
      return internalObjectKeys(O, hiddenKeys)
    }
  }, { '../internals/enum-bug-keys': 18, '../internals/object-keys-internal': 65 }],
  62: [function (require, module, exports) {
    'use strict'
    // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
    exports.f = Object.getOwnPropertySymbols
  }, {}],
  63: [function (require, module, exports) {
    'use strict'
    const hasOwn = require('../internals/has-own-property')
    const isCallable = require('../internals/is-callable')
    const toObject = require('../internals/to-object')
    const sharedKey = require('../internals/shared-key')
    const CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter')

    const IE_PROTO = sharedKey('IE_PROTO')
    const $Object = Object
    const ObjectPrototype = $Object.prototype

    // `Object.getPrototypeOf` method
    // https://tc39.es/ecma262/#sec-object.getprototypeof
    // eslint-disable-next-line es/no-object-getprototypeof -- safe
    module.exports = CORRECT_PROTOTYPE_GETTER
      ? $Object.getPrototypeOf
      : function (O) {
        const object = toObject(O)
        if (hasOwn(object, IE_PROTO)) return object[IE_PROTO]
        const constructor = object.constructor
        if (isCallable(constructor) && object instanceof constructor) {
          return constructor.prototype
        } return object instanceof $Object ? ObjectPrototype : null
      }
  }, { '../internals/correct-prototype-getter': 9, '../internals/has-own-property': 35, '../internals/is-callable': 43, '../internals/shared-key': 71, '../internals/to-object': 79 }],
  64: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')

    module.exports = uncurryThis({}.isPrototypeOf)
  }, { '../internals/function-uncurry-this': 28 }],
  65: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')
    const hasOwn = require('../internals/has-own-property')
    const toIndexedObject = require('../internals/to-indexed-object')
    const indexOf = require('../internals/array-includes').indexOf
    const hiddenKeys = require('../internals/hidden-keys')

    const push = uncurryThis([].push)

    module.exports = function (object, names) {
      const O = toIndexedObject(object)
      let i = 0
      const result = []
      let key
      for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key)
      // Don't enum bug & hidden keys
      while (names.length > i) {
        if (hasOwn(O, key = names[i++])) {
          ~indexOf(result, key) || push(result, key)
        }
      }
      return result
    }
  }, { '../internals/array-includes': 6, '../internals/function-uncurry-this': 28, '../internals/has-own-property': 35, '../internals/hidden-keys': 36, '../internals/to-indexed-object': 76 }],
  66: [function (require, module, exports) {
    'use strict'
    const internalObjectKeys = require('../internals/object-keys-internal')
    const enumBugKeys = require('../internals/enum-bug-keys')

    // `Object.keys` method
    // https://tc39.es/ecma262/#sec-object.keys
    // eslint-disable-next-line es/no-object-keys -- safe
    module.exports = Object.keys || function keys (O) {
      return internalObjectKeys(O, enumBugKeys)
    }
  }, { '../internals/enum-bug-keys': 18, '../internals/object-keys-internal': 65 }],
  67: [function (require, module, exports) {
    'use strict'
    const $propertyIsEnumerable = {}.propertyIsEnumerable
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

    // Nashorn ~ JDK8 bug
    const NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1)

    // `Object.prototype.propertyIsEnumerable` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
    exports.f = NASHORN_BUG
      ? function propertyIsEnumerable (V) {
        const descriptor = getOwnPropertyDescriptor(this, V)
        return !!descriptor && descriptor.enumerable
      }
      : $propertyIsEnumerable
  }, {}],
  68: [function (require, module, exports) {
    'use strict'
    const call = require('../internals/function-call')
    const isCallable = require('../internals/is-callable')
    const isObject = require('../internals/is-object')

    const $TypeError = TypeError

    // `OrdinaryToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-ordinarytoprimitive
    module.exports = function (input, pref) {
      let fn, val
      if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val
      if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val
      if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val
      throw new $TypeError("Can't convert object to primitive value")
    }
  }, { '../internals/function-call': 25, '../internals/is-callable': 43, '../internals/is-object': 46 }],
  69: [function (require, module, exports) {
    'use strict'
    const getBuiltIn = require('../internals/get-built-in')
    const uncurryThis = require('../internals/function-uncurry-this')
    const getOwnPropertyNamesModule = require('../internals/object-get-own-property-names')
    const getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols')
    const anObject = require('../internals/an-object')

    const concat = uncurryThis([].concat)

    // all object keys, includes non-enumerable and symbols
    module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys (it) {
      const keys = getOwnPropertyNamesModule.f(anObject(it))
      const getOwnPropertySymbols = getOwnPropertySymbolsModule.f
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys
    }
  }, { '../internals/an-object': 5, '../internals/function-uncurry-this': 28, '../internals/get-built-in': 29, '../internals/object-get-own-property-names': 61, '../internals/object-get-own-property-symbols': 62 }],
  70: [function (require, module, exports) {
    'use strict'
    const isNullOrUndefined = require('../internals/is-null-or-undefined')

    const $TypeError = TypeError

    // `RequireObjectCoercible` abstract operation
    // https://tc39.es/ecma262/#sec-requireobjectcoercible
    module.exports = function (it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it)
      return it
    }
  }, { '../internals/is-null-or-undefined': 45 }],
  71: [function (require, module, exports) {
    'use strict'
    const shared = require('../internals/shared')
    const uid = require('../internals/uid')

    const keys = shared('keys')

    module.exports = function (key) {
      return keys[key] || (keys[key] = uid(key))
    }
  }, { '../internals/shared': 73, '../internals/uid': 83 }],
  72: [function (require, module, exports) {
    'use strict'
    const IS_PURE = require('../internals/is-pure')
    const globalThis = require('../internals/global-this')
    const defineGlobalProperty = require('../internals/define-global-property')

    const SHARED = '__core-js_shared__'
    const store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

    (store.versions || (store.versions = [])).push({
      version: '3.50.0',
      mode: IS_PURE ? 'pure' : 'global',
      copyright: '© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.',
      license: 'https://github.com/zloirock/core-js/blob/v3.50.0/LICENSE',
      source: 'https://github.com/zloirock/core-js'
    })
  }, { '../internals/define-global-property': 15, '../internals/global-this': 34, '../internals/is-pure': 47 }],
  73: [function (require, module, exports) {
    'use strict'
    const store = require('../internals/shared-store')
    // eslint-disable-next-line es/no-object-create -- safe
    const create = Object.create || Object

    module.exports = function (key, value) {
      return store[key] || (store[key] = value || create(null))
    }
  }, { '../internals/shared-store': 72 }],
  74: [function (require, module, exports) {
    'use strict'
    /* eslint-disable es/no-symbol -- required for testing */
    const V8_VERSION = require('../internals/environment-v8-version')
    const fails = require('../internals/fails')
    const globalThis = require('../internals/global-this')

    const $String = globalThis.String

    // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
    module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
      const symbol = Symbol('symbol detection')
      // Chrome 38 Symbol has incorrect toString conversion
      // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
      // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
      // of course, fail.
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41
    })
  }, { '../internals/environment-v8-version': 20, '../internals/fails': 22, '../internals/global-this': 34 }],
  75: [function (require, module, exports) {
    'use strict'
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')

    const max = Math.max
    const min = Math.min

    // Helper for a popular repeating case of the spec:
    // Let integer be ? ToInteger(index).
    // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
    module.exports = function (index, length) {
      const integer = toIntegerOrInfinity(index)
      return integer < 0 ? max(integer + length, 0) : min(integer, length)
    }
  }, { '../internals/to-integer-or-infinity': 77 }],
  76: [function (require, module, exports) {
    'use strict'
    // toObject with fallback for non-array-like ES3 strings
    const IndexedObject = require('../internals/indexed-object')
    const requireObjectCoercible = require('../internals/require-object-coercible')

    module.exports = function (it) {
      return IndexedObject(requireObjectCoercible(it))
    }
  }, { '../internals/indexed-object': 39, '../internals/require-object-coercible': 70 }],
  77: [function (require, module, exports) {
    'use strict'
    const trunc = require('../internals/math-trunc')

    // `ToIntegerOrInfinity` abstract operation
    // https://tc39.es/ecma262/#sec-tointegerorinfinity
    module.exports = function (argument) {
      const number = +argument
      // eslint-disable-next-line no-self-compare -- NaN check
      return number !== number || number === 0 ? 0 : trunc(number)
    }
  }, { '../internals/math-trunc': 56 }],
  78: [function (require, module, exports) {
    'use strict'
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')

    const min = Math.min

    // `ToLength` abstract operation
    // https://tc39.es/ecma262/#sec-tolength
    module.exports = function (argument) {
      const len = toIntegerOrInfinity(argument)
      return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0 // 2 ** 53 - 1 == 9007199254740991
    }
  }, { '../internals/to-integer-or-infinity': 77 }],
  79: [function (require, module, exports) {
    'use strict'
    const requireObjectCoercible = require('../internals/require-object-coercible')

    const $Object = Object

    // `ToObject` abstract operation
    // https://tc39.es/ecma262/#sec-toobject
    module.exports = function (argument) {
      return $Object(requireObjectCoercible(argument))
    }
  }, { '../internals/require-object-coercible': 70 }],
  80: [function (require, module, exports) {
    'use strict'
    const call = require('../internals/function-call')
    const isObject = require('../internals/is-object')
    const isSymbol = require('../internals/is-symbol')
    const getMethod = require('../internals/get-method')
    const ordinaryToPrimitive = require('../internals/ordinary-to-primitive')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const $TypeError = TypeError
    const TO_PRIMITIVE = wellKnownSymbol('toPrimitive')

    // `ToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-toprimitive
    module.exports = function (input, pref) {
      if (!isObject(input) || isSymbol(input)) return input
      const exoticToPrim = getMethod(input, TO_PRIMITIVE)
      let result
      if (exoticToPrim) {
        if (pref === undefined) pref = 'default'
        result = call(exoticToPrim, input, pref)
        if (!isObject(result) || isSymbol(result)) return result
        throw new $TypeError("Can't convert object to primitive value")
      }
      if (pref === undefined) pref = 'number'
      return ordinaryToPrimitive(input, pref)
    }
  }, { '../internals/function-call': 25, '../internals/get-method': 33, '../internals/is-object': 46, '../internals/is-symbol': 48, '../internals/ordinary-to-primitive': 68, '../internals/well-known-symbol': 88 }],
  81: [function (require, module, exports) {
    'use strict'
    const toPrimitive = require('../internals/to-primitive')
    const isSymbol = require('../internals/is-symbol')

    // `ToPropertyKey` abstract operation
    // https://tc39.es/ecma262/#sec-topropertykey
    module.exports = function (argument) {
      const key = toPrimitive(argument, 'string')
      return isSymbol(key) ? key : key + ''
    }
  }, { '../internals/is-symbol': 48, '../internals/to-primitive': 80 }],
  82: [function (require, module, exports) {
    'use strict'
    const $String = String

    module.exports = function (argument) {
      try {
        return $String(argument)
      } catch (error) {
        return 'Object'
      }
    }
  }, {}],
  83: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')

    let id = 0
    const postfix = Math.random()
    const toString = uncurryThis(1.1.toString)

    module.exports = function (key) {
      return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36)
    }
  }, { '../internals/function-uncurry-this': 28 }],
  84: [function (require, module, exports) {
    'use strict'
    /* eslint-disable es/no-symbol -- required for testing */
    const NATIVE_SYMBOL = require('../internals/symbol-constructor-detection')

    module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator === 'symbol'
  }, { '../internals/symbol-constructor-detection': 74 }],
  85: [function (require, module, exports) {
    'use strict'
    const DESCRIPTORS = require('../internals/descriptors')
    const fails = require('../internals/fails')

    // V8 ~ Chrome 36-
    // https://bugs.chromium.org/p/v8/issues/detail?id=3334
    module.exports = DESCRIPTORS && fails(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return Object.defineProperty(function () { /* empty */ }, 'prototype', {
        value: 42,
        writable: false
      }).prototype !== 42
    })
  }, { '../internals/descriptors': 16, '../internals/fails': 22 }],
  86: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')
    const isCallable = require('../internals/is-callable')

    const WeakMap = globalThis.WeakMap

    module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap))
  }, { '../internals/global-this': 34, '../internals/is-callable': 43 }],
  87: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')

    // eslint-disable-next-line es/no-weak-map -- safe
    const WeakMapPrototype = WeakMap.prototype

    module.exports = {
      // eslint-disable-next-line es/no-weak-map -- safe
      WeakMap,
      set: uncurryThis(WeakMapPrototype.set),
      get: uncurryThis(WeakMapPrototype.get),
      has: uncurryThis(WeakMapPrototype.has),
      remove: uncurryThis(WeakMapPrototype.delete)
    }
  }, { '../internals/function-uncurry-this': 28 }],
  88: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')
    const shared = require('../internals/shared')
    const hasOwn = require('../internals/has-own-property')
    const uid = require('../internals/uid')
    const NATIVE_SYMBOL = require('../internals/symbol-constructor-detection')
    const USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid')

    const Symbol = globalThis.Symbol
    const WellKnownSymbolsStore = shared('wks')
    const createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol.for || Symbol : Symbol && Symbol.withoutSetter || uid

    module.exports = function (name) {
      if (!hasOwn(WellKnownSymbolsStore, name)) {
        WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
          ? Symbol[name]
          : createWellKnownSymbol('Symbol.' + name)
      } return WellKnownSymbolsStore[name]
    }
  }, { '../internals/global-this': 34, '../internals/has-own-property': 35, '../internals/shared': 73, '../internals/symbol-constructor-detection': 74, '../internals/uid': 83, '../internals/use-symbol-as-uid': 84 }],
  89: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const globalThis = require('../internals/global-this')
    const anInstance = require('../internals/an-instance')
    const anObject = require('../internals/an-object')
    const isCallable = require('../internals/is-callable')
    const getPrototypeOf = require('../internals/object-get-prototype-of')
    const defineBuiltInAccessor = require('../internals/define-built-in-accessor')
    const createProperty = require('../internals/create-property')
    const fails = require('../internals/fails')
    const hasOwn = require('../internals/has-own-property')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const IteratorPrototype = require('../internals/iterators-core').IteratorPrototype
    const DESCRIPTORS = require('../internals/descriptors')
    const IS_PURE = require('../internals/is-pure')

    const CONSTRUCTOR = 'constructor'
    const ITERATOR = 'Iterator'
    const TO_STRING_TAG = wellKnownSymbol('toStringTag')

    const $TypeError = TypeError
    const NativeIterator = globalThis[ITERATOR]

    // FF56- have non-standard global helper `Iterator`
    const FORCED = IS_PURE ||
  !isCallable(NativeIterator) ||
  NativeIterator.prototype !== IteratorPrototype ||
  // FF44- non-standard `Iterator` passes previous tests
  !fails(function () { NativeIterator({}) })

    const IteratorConstructor = function Iterator () {
      anInstance(this, IteratorPrototype)
      if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError('Abstract class Iterator not directly constructable')
    }

    const defineIteratorPrototypeAccessor = function (key, value) {
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
    // https://tc39.es/ecma262/#sec-iterator
    $({ global: true, constructor: true, forced: FORCED }, {
      Iterator: IteratorConstructor
    })
  }, { '../internals/an-instance': 4, '../internals/an-object': 5, '../internals/create-property': 12, '../internals/define-built-in-accessor': 13, '../internals/descriptors': 16, '../internals/export': 21, '../internals/fails': 22, '../internals/global-this': 34, '../internals/has-own-property': 35, '../internals/is-callable': 43, '../internals/is-pure': 47, '../internals/iterators-core': 52, '../internals/object-get-prototype-of': 63, '../internals/well-known-symbol': 88 }],
  90: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const call = require('../internals/function-call')
    const iterate = require('../internals/iterate')
    const aCallable = require('../internals/a-callable')
    const anObject = require('../internals/an-object')
    const getIteratorDirect = require('../internals/get-iterator-direct')
    const iteratorClose = require('../internals/iterator-close')
    const iteratorHelperWithoutClosingOnEarlyError = require('../internals/iterator-helper-without-closing-on-early-error')

    const forEachWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError('forEach', TypeError)

    // `Iterator.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-iterator.prototype.foreach
    $({ target: 'Iterator', proto: true, real: true, forced: forEachWithoutClosingOnEarlyError }, {
      forEach: function forEach (fn) {
        anObject(this)
        try {
          aCallable(fn)
        } catch (error) {
          iteratorClose(this, 'throw', error)
        }

        if (forEachWithoutClosingOnEarlyError) return call(forEachWithoutClosingOnEarlyError, this, fn)

        const record = getIteratorDirect(this)
        let counter = 0
        iterate(record, function (value) {
          fn(value, counter++)
        }, { IS_RECORD: true })
      }
    })
  }, { '../internals/a-callable': 2, '../internals/an-object': 5, '../internals/export': 21, '../internals/function-call': 25, '../internals/get-iterator-direct': 30, '../internals/iterate': 49, '../internals/iterator-close': 50, '../internals/iterator-helper-without-closing-on-early-error': 51 }],
  91: [function (require, module, exports) {
    'use strict'
    // TODO: Remove from `core-js@4`
    require('../modules/es.iterator.constructor')
  }, { '../modules/es.iterator.constructor': 89 }],
  92: [function (require, module, exports) {
    'use strict'
    // TODO: Remove from `core-js@4`
    require('../modules/es.iterator.for-each')
  }, { '../modules/es.iterator.for-each': 90 }],
  93: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const aWeakMap = require('../internals/a-weak-map')
    const remove = require('../internals/weak-map-helpers').remove

    // `WeakMap.prototype.deleteAll` method
    // https://github.com/tc39/proposal-collection-methods
    $({ target: 'WeakMap', proto: true, real: true, forced: true }, {
      deleteAll: function deleteAll (/* ...elements */) {
        const collection = aWeakMap(this)
        let allDeleted = true
        let wasDeleted
        for (let k = 0, len = arguments.length; k < len; k++) {
          wasDeleted = remove(collection, arguments[k])
          allDeleted = allDeleted && wasDeleted
        } return !!allDeleted
      }
    })
  }, { '../internals/a-weak-map': 3, '../internals/export': 21, '../internals/weak-map-helpers': 87 }]
}, {}, [1])
