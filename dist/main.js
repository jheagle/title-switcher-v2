'use strict'

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
    // currentTitle, not this.#titles[this.#currentIndex]: inserting typeElement above shifted every later index by
    // one, so #currentIndex (computed before that insert) no longer points at the title it was set for - switchTitle
    // would remove the 'displayTitle' class from whatever title now happens to sit at that stale index instead of
    // from currentTitle, leaving more than one title carrying the class at once.
    return this.switchTitle(currentTitle, __classPrivateFieldGet(this, _TitleSwitcher_switchStyle, 'f'), this)
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
 * Build the markup for the first `remaining` characters of domObject's text, keeping whichever
 * of its nested tags (em, strong, ...) that content falls under. This lets the typing effect
 * reveal a title's formatting as each character is typed, instead of only applying it once the
 * whole tag has been typed out.
 * @param domObject
 * @param remaining
 */
const typedPartialHtml = (domObject, remaining) => {
  let html = ''
  const children = Array.prototype.slice.call(domObject.childNodes)
  for (let i = 0; i < children.length && remaining > 0; ++i) {
    const child = children[i]
    if (child.nodeType === 3) {
      const text = child.textContent || ''
      const take = Math.min(remaining, text.length)
      html += text.slice(0, take)
      remaining -= take
    } else if (child.nodeType === 1) {
      const result = typedPartialHtml(child, remaining)
      if (result.html) {
        const wrapper = child.cloneNode(false)
        wrapper.innerHTML = result.html
        html += wrapper.outerHTML
      }
      remaining = result.remaining
    }
  }
  return {
    html,
    remaining
  }
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
    // Copy each letter from the current title, keeping whichever tags (em, strong, ...) it falls under
    const totalLength = domObject.textContent.length
    for (let i = 0; i < totalLength; ++i) {
      setTimeout(() => {
        // Reveal one more character, wrapped in whatever tags its position in the title falls under,
        // then append a formatted cursor on the end
        self.typeSurface.innerHTML = typedPartialHtml(domObject, i + 1).html + '<span style="font-weight: normal; color: black; text-decoration: none">&#124;</span>'
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
    }
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
