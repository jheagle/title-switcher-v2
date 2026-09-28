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
     * @param titlesContainer - The selector where titles are stored
     * @param switchStyle - The function or function name for the effect to apply
     * @constructor
     */
    constructor(titlesContainer?: string, switchStyle?: switchTitleCallback | keyof TitleSwitcher | string);
    /**
     * Retrieve active
     */
    get active(): boolean;
    /**
     * Retrieve currentClass
     */
    get currentClass(): string;
    /**
     * Retrieve currentIndex
     */
    get currentIndex(): number;
    /**
     * Retrieve delayEffect
     */
    get delayEffect(): number;
    /**
     * Retrieve delaySwitch
     */
    get delaySwitch(): number;
    /**
     * Retrieve switchStyle
     */
    get switchStyle(): Function;
    /**
     * Retrieve list of titles DOM elements
     */
    get titles(): Array<HTMLElement> | HTMLCollection;
    /**
     * Retrieve typeSurface used
     */
    get typeSurface(): HTMLElement | null;
    /**
     * This is the function to begin the switching titles
     * @param settings
     * @param settings.delaySwitch
     * @param settings.delayEffect
     * @param settings.isRandom
     * @param settings.immediatePause
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
     * @param currentTitle
     * @param callBackFunction
     * @param self
     * @param runOnce
     */
    switchTitle(currentTitle: Element, callBackFunction: switchTitleCallback, self: this, runOnce?: boolean): TitleSwitcher;
}
export default TitleSwitcher;
