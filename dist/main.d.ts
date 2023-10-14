/*********************************************
 Title Switcher: to imitate typing and switch to different titles based on DOM.
 Requires titles to be listed as elements inside a div, pass the class of the div as an argument to TitleSwitcher.
 **********************************************/
type switchTitleCallback = (domObject: HTMLElement | Element, callBackFunction: Function, self?: TitleSwitcher, runOnce?: boolean) => TitleSwitcher;
declare class TitleSwitcher {
    #private;
    cursorBlink: (blinkOn: boolean, self: TitleSwitcher) => TitleSwitcher;
    typingEffect: switchTitleCallback;
    /**
     * Instantiate this as a class to get an instance of TitleSwitcher
     * @param {string} [titlesContainer=''] - The selector where titles are stored
     * @param {Function|string} [switchStyle='typingEffect'] - The function or function name for the effect to apply
     * @constructor
     */
    constructor(titlesContainer?: string, switchStyle?: switchTitleCallback | keyof TitleSwitcher | string);
    /**
     * Retrieve active
     * @return {boolean}
     */
    get active(): boolean;
    /**
     * Retrieve currentClass
     * @return {string}
     */
    get currentClass(): string;
    /**
     * Retrieve currentIndex
     * @return {number}
     */
    get currentIndex(): number;
    /**
     * Retrieve delayEffect
     * @return {number}
     */
    get delayEffect(): number;
    /**
     * Retrieve delaySwitch
     * @return {number}
     */
    get delaySwitch(): number;
    /**
     * Retrieve switchStyle
     * @return {Function}
     */
    get switchStyle(): Function;
    /**
     * Retrieve list of titles DOM elements
     * @return {Array<HTMLElement>|HTMLCollection}
     */
    get titles(): Array<HTMLElement> | HTMLCollection;
    /**
     * Retrieve typeSurface used
     * @return {HTMLElement|null}
     */
    get typeSurface(): HTMLElement | null;
    /**
     * This is the function to begin the switching titles
     * @param {Object} [settings={}]
     * @param {number} [settings.delaySwitch=400]
     * @param {number} [settings.delayEffect=200]
     * @param {boolean} [settings.isRandom=false]
     * @param {boolean} [settings.immediatePause=false]
     * @returns {TitleSwitcher}
     */
    startTitles({ delaySwitch, delayEffect, isRandom, immediatePause }?: {
        delaySwitch?: number;
        delayEffect?: number;
        isRandom?: boolean;
        immediatePause?: boolean;
    }): TitleSwitcher;
    /**
     * This is the function to pause between switching
     */
    pause(): void;
    /**
     * This is the function to resume after a pause.
     */
    resume(): void;
    /**
     * This is the core function for switching titles
     * @param {HTMLElement} currentTitle
     * @param {Function} callBackFunction
     * @param {TitleSwitcher} self
     * @param {boolean} [runOnce=false]
     * @returns {TitleSwitcher}
     */
    switchTitle(currentTitle: Element, callBackFunction: switchTitleCallback, self: this, runOnce?: boolean): TitleSwitcher;
}
export default TitleSwitcher;
