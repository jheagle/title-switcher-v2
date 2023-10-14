'use strict'

// Created by Joshua Heagle

/*********************************************
 Title Switcher: to imitate typing and switch to different titles based on DOM.
 Requires titles to be listed as elements inside a div, pass the class of the div as an argument to TitleSwitcher.
 **********************************************/

type switchTitleCallback = (domObject: HTMLElement | Element, callBackFunction: Function, self?: TitleSwitcher, runOnce?: boolean) => TitleSwitcher

type switchStyleCallback = (domObject: HTMLElement | Element, callBackFunction: Function, self?: TitleSwitcher, runOnce?: boolean) => TitleSwitcher

class TitleSwitcher {
  #active: boolean = false
  #currentClass: string = 'displayTitle'
  #currentIndex: number = 0
  #delayEffect: number = 200
  #delaySwitch: number = 400
  #isRandom: boolean = false
  #titles: HTMLCollection | HTMLElement[] = []
  #titlesContainer: HTMLElement | null = null
  #switchStyle: switchTitleCallback
  #typeSurface: HTMLElement | null
  cursorBlink: (blinkOn: boolean, self: TitleSwitcher) => TitleSwitcher
  typingEffect: switchTitleCallback

  /**
   * Instantiate this as a class to get an instance of TitleSwitcher
   * @param {string} [titlesContainer=''] - The selector where titles are stored
   * @param {Function|string} [switchStyle='typingEffect'] - The function or function name for the effect to apply
   * @constructor
   */
  constructor (titlesContainer: string = '', switchStyle: switchTitleCallback | keyof TitleSwitcher | string = 'typingEffect') {
    this.#currentClass = 'displayTitle'

    if (typeof switchStyle === 'string') {
      // @ts-ignore Obnoxious error "type 'string' can't be used to index type 'TitleSwitcher'"
      this.#switchStyle = typeof this[switchStyle] === 'function' ? this[switchStyle] : this.typingEffect
    } else {
      this.#switchStyle = switchStyle
    }
    this.#titlesContainer = null
    this.#titles = []
    const foundContainers: any[] | NodeListOf<Element> = titlesContainer ? document.querySelectorAll(titlesContainer) : []
    if (foundContainers && foundContainers[0]) {
      this.#titlesContainer = foundContainers[0]
      this.#titles = this.#titlesContainer.children
    }
  }

  /**
   * Retrieve active
   * @return {boolean}
   */
  get active (): boolean {
    return this.#active
  }

  /**
   * Retrieve currentClass
   * @return {string}
   */
  get currentClass (): string {
    return this.#currentClass
  }

  /**
   * Retrieve currentIndex
   * @return {number}
   */
  get currentIndex (): number {
    return this.#currentIndex
  }

  /**
   * Retrieve delayEffect
   * @return {number}
   */
  get delayEffect (): number {
    return this.#delayEffect
  }

  /**
   * Retrieve delaySwitch
   * @return {number}
   */
  get delaySwitch (): number {
    return this.#delaySwitch
  }

  /**
   * Retrieve switchStyle
   * @return {Function}
   */
  get switchStyle (): Function {
    return this.#switchStyle
  }

  /**
   * Retrieve list of titles DOM elements
   * @return {Array<HTMLElement>|HTMLCollection}
   */
  get titles (): Array<HTMLElement> | HTMLCollection {
    return this.#titles
  }

  /**
   * Retrieve typeSurface used
   * @return {HTMLElement|null}
   */
  get typeSurface (): HTMLElement | null {
    return this.#typeSurface
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
  startTitles ({ delaySwitch = 400, delayEffect = 200, isRandom = false, immediatePause = false }: {
    delaySwitch?: number;
    delayEffect?: number;
    isRandom?: boolean;
    immediatePause?: boolean
  } = {}): TitleSwitcher {
    const typeSurface = 'typeSurface'
    this.#delaySwitch = delaySwitch
    this.#delayEffect = delayEffect
    this.#isRandom = isRandom
    this.#active = !immediatePause
    if (this.#currentIndex >= this.#titles.length) {
      this.#active = false
      console.warn(`No titles found for '${this.#titlesContainer}'`)
      return this
    }
    if (this.#isRandom) {
      this.#currentIndex = Math.round(Math.random() * (this.#titles.length - 2)) + 1
    }
    const currentTitle = this.#titles[this.#currentIndex]
    if (currentTitle.classList) {
      currentTitle.classList.add(this.#currentClass)
    } else {
      currentTitle.className += ' ' + this.#currentClass
    }
    // @ts-ignore The Node returned is of type Element, or it should be
    const typeElement: Element = this.#titles[0].cloneNode(true)
    if (typeElement.classList) {
      typeElement.classList.add(typeSurface)
    } else {
      typeElement.className += ' ' + typeSurface
    }
    if (typeElement.classList) {
      typeElement.classList.remove(this.#currentClass)
    } else {
      typeElement.className = typeElement.className.replace(new RegExp('(^|\\b)' + typeElement.className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
    }
    this.#titlesContainer.insertBefore(typeElement, this.#titlesContainer.firstChild)
    // @ts-ignore the returned Node is a type of HTMLElement
    this.#typeSurface = this.#titlesContainer.querySelectorAll('.' + typeSurface)[0]
    this.#typeSurface.innerHTML = ''
    this.#typeSurface.style.display = 'block'
    Array.prototype.forEach.call(this.#titles, function (title: HTMLElement) {
      title.style.display = 'none'
    })
    return this.switchTitle(this.#titles[this.#currentIndex], this.#switchStyle, this)
  }

  /**
   * This is the function to pause between switching
   */
  pause (): void {
    this.#active = false
  }

  /**
   * This is the function to resume after a pause.
   */
  resume (): void {
    if (!this.#active) {
      this.#active = true
      this.switchTitle(this.#titles[this.#currentIndex], this.#switchStyle, this)
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
  switchTitle (currentTitle: Element, callBackFunction: switchTitleCallback, self: this, runOnce: boolean = false): TitleSwitcher {
    self = self || this
    let currentIndex = 1
    const size = self.#titles.length
    for (let i = 1; i < size; ++i) {
      if (self.#titles[i] === currentTitle) {
        currentIndex = i
        break
      }
    }
    if (!self.#active) {
      self.#currentIndex = currentIndex
      return self
    }
    const maxIndex = self.#titles.length - 1
    let nextIndex = 1
    if (maxIndex === 1) {
      return callBackFunction(currentTitle, runOnce ? (): TitleSwitcher => self : self.switchTitle, self, runOnce)
    }
    if (self.#isRandom) {
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
    const nextTitle = self.#titles[nextIndex]
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
    return callBackFunction(nextTitle, runOnce ? (): TitleSwitcher => self : self.switchTitle, self, runOnce)
  }
}

/**
 * This is a helper function to improve the default 'typingEffect'
 * @param {boolean} blinkOn
 * @param {TitleSwitcher} self
 * @return {TitleSwitcher}
 */
TitleSwitcher.prototype.cursorBlink = (blinkOn: boolean, self: TitleSwitcher): TitleSwitcher => {
  // display cursor effect
  self = self || this
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
TitleSwitcher.prototype.typingEffect = (domObject: HTMLElement | Element, callBackFunction: switchStyleCallback, self: TitleSwitcher, runOnce: boolean = false): TitleSwitcher => {
  self = self || this
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
                callBackFunction(domObject, (): TitleSwitcher => self, self, runOnce)
                // callBackFunction(domObject, runOnce ? () => null : self.switchStyle, self, runOnce)
              }
            }, j * self.delaySwitch)
          }
        }
      }, i * self.delayEffect)
    })
  }, numBlinks * self.delaySwitch)
  return self
}

export default TitleSwitcher

if (this) {
  // @ts-ignore 'this' is used in node as the global, and the key CAN be referenced by string
  this['TitleSwitcher'] = TitleSwitcher
} else if (typeof window !== 'undefined') {
  // @ts-ignore YES, we can use a string to add a property to Window
  window['TitleSwitcher'] = TitleSwitcher
}