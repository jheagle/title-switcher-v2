title-switcher-v2
==============

This is the updated title-switcher which takes a simpler approach and improves many deficiencies of the original title-switcher.

Add typing effect to titles and also switch through several titles.

This project can be used as a plugin with limited set-up requirements.
No need to change the code in the title-switcher.js file except for
customization.

Add the titles to the DOM beside each other as child elements of a wrapper element (ex. div). Pass in an identifying attribute for the wrapper such as a class name. The other sample
code such as style can be used to improve how it displays.

NO need for any additional library, this runs as is. Compatible in modern browsers from IE9+.

If there are any problems contact me, but set-up should be done based on
the sample code for best results.

Live example at https://joshuaheagle.com/projects/title-switcher. Enjoy!

<a name="TitleSwitcher"></a>

## TitleSwitcher
**Kind**: global class  

* [TitleSwitcher](#TitleSwitcher)
    * [new TitleSwitcher([titlesContainer], [switchStyle])](#new_TitleSwitcher_new)
    * [.active](#TitleSwitcher+active) ⇒ <code>boolean</code>
    * [.currentClass](#TitleSwitcher+currentClass) ⇒ <code>string</code>
    * [.currentIndex](#TitleSwitcher+currentIndex) ⇒ <code>number</code>
    * [.delayEffect](#TitleSwitcher+delayEffect) ⇒ <code>number</code>
    * [.delaySwitch](#TitleSwitcher+delaySwitch) ⇒ <code>number</code>
    * [.switchStyle](#TitleSwitcher+switchStyle) ⇒ <code>string</code>
    * [.titles](#TitleSwitcher+titles) ⇒ <code>Array</code> \| <code>NodeList</code>
    * [.typeSurface](#TitleSwitcher+typeSurface) ⇒ <code>HTMLElement</code> \| <code>null</code>
    * [.startTitles([settings])](#TitleSwitcher+startTitles) ⇒ [<code>TitleSwitcher</code>](#TitleSwitcher)
    * [.pause()](#TitleSwitcher+pause)
    * [.resume()](#TitleSwitcher+resume)
    * [.switchTitle(currentTitle, callBackFunction, self, [runOnce])](#TitleSwitcher+switchTitle) ⇒ [<code>TitleSwitcher</code>](#TitleSwitcher)
    * [.cursorBlink(blinkOn, self)](#TitleSwitcher+cursorBlink) ⇒ [<code>TitleSwitcher</code>](#TitleSwitcher)
    * [.typingEffect(domObject, callBackFunction, self, [runOnce])](#TitleSwitcher+typingEffect) ⇒ [<code>TitleSwitcher</code>](#TitleSwitcher)

<a name="new_TitleSwitcher_new"></a>

### new TitleSwitcher([titlesContainer], [switchStyle])
Instantiate this as a class to get an instance of TitleSwitcher


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [titlesContainer] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The selector where titles are stored |
| [switchStyle] | <code>function</code> \| <code>string</code> | <code>&#x27;typingEffect&#x27;</code> | The function or function name for the effect to apply |

<a name="TitleSwitcher+active"></a>

### titleSwitcher.active ⇒ <code>boolean</code>
Retrieve active

**Kind**: instance property of [<code>TitleSwitcher</code>](#TitleSwitcher)  
<a name="TitleSwitcher+currentClass"></a>

### titleSwitcher.currentClass ⇒ <code>string</code>
Retrieve currentClass

**Kind**: instance property of [<code>TitleSwitcher</code>](#TitleSwitcher)  
<a name="TitleSwitcher+currentIndex"></a>

### titleSwitcher.currentIndex ⇒ <code>number</code>
Retrieve currentIndex

**Kind**: instance property of [<code>TitleSwitcher</code>](#TitleSwitcher)  
<a name="TitleSwitcher+delayEffect"></a>

### titleSwitcher.delayEffect ⇒ <code>number</code>
Retrieve delayEffect

**Kind**: instance property of [<code>TitleSwitcher</code>](#TitleSwitcher)  
<a name="TitleSwitcher+delaySwitch"></a>

### titleSwitcher.delaySwitch ⇒ <code>number</code>
Retrieve delaySwitch

**Kind**: instance property of [<code>TitleSwitcher</code>](#TitleSwitcher)  
<a name="TitleSwitcher+switchStyle"></a>

### titleSwitcher.switchStyle ⇒ <code>string</code>
Retrieve switchStyle

**Kind**: instance property of [<code>TitleSwitcher</code>](#TitleSwitcher)  
<a name="TitleSwitcher+titles"></a>

### titleSwitcher.titles ⇒ <code>Array</code> \| <code>NodeList</code>
Retrieve list of titles DOM elements

**Kind**: instance property of [<code>TitleSwitcher</code>](#TitleSwitcher)  
<a name="TitleSwitcher+typeSurface"></a>

### titleSwitcher.typeSurface ⇒ <code>HTMLElement</code> \| <code>null</code>
Retrieve typeSurface used

**Kind**: instance property of [<code>TitleSwitcher</code>](#TitleSwitcher)  
<a name="TitleSwitcher+startTitles"></a>

### titleSwitcher.startTitles([settings]) ⇒ [<code>TitleSwitcher</code>](#TitleSwitcher)
This is the function to begin the switching titles

**Kind**: instance method of [<code>TitleSwitcher</code>](#TitleSwitcher)  

| Param | Type | Default |
| --- | --- | --- |
| [settings] | <code>Object</code> | <code>{}</code> | 
| [settings.delaySwitch] | <code>number</code> | <code>400</code> | 
| [settings.delayEffect] | <code>number</code> | <code>200</code> | 
| [settings.isRandom] | <code>boolean</code> | <code>false</code> | 
| [settings.immediatePause] | <code>boolean</code> | <code>false</code> | 

<a name="TitleSwitcher+pause"></a>

### titleSwitcher.pause()
This is the function to pause between switching

**Kind**: instance method of [<code>TitleSwitcher</code>](#TitleSwitcher)  
<a name="TitleSwitcher+resume"></a>

### titleSwitcher.resume()
This is the function to resume after a pause.

**Kind**: instance method of [<code>TitleSwitcher</code>](#TitleSwitcher)  
<a name="TitleSwitcher+switchTitle"></a>

### titleSwitcher.switchTitle(currentTitle, callBackFunction, self, [runOnce]) ⇒ [<code>TitleSwitcher</code>](#TitleSwitcher)
This is the core function for switching titles

**Kind**: instance method of [<code>TitleSwitcher</code>](#TitleSwitcher)  

| Param | Type | Default |
| --- | --- | --- |
| currentTitle | <code>HTMLElement</code> |  | 
| callBackFunction | <code>function</code> |  | 
| self | [<code>TitleSwitcher</code>](#TitleSwitcher) |  | 
| [runOnce] | <code>boolean</code> | <code>false</code> | 

<a name="TitleSwitcher+cursorBlink"></a>

### titleSwitcher.cursorBlink(blinkOn, self) ⇒ [<code>TitleSwitcher</code>](#TitleSwitcher)
This is a helper function to improve the default 'typingEffect'

**Kind**: instance method of [<code>TitleSwitcher</code>](#TitleSwitcher)  

| Param | Type |
| --- | --- |
| blinkOn | <code>boolean</code> | 
| self | [<code>TitleSwitcher</code>](#TitleSwitcher) | 

<a name="TitleSwitcher+typingEffect"></a>

### titleSwitcher.typingEffect(domObject, callBackFunction, self, [runOnce]) ⇒ [<code>TitleSwitcher</code>](#TitleSwitcher)
This is the default and example of an effect being implemented when Titles are switchedThese functions take the currentElement in focus, the switchTitle function as a callbackand an instance of the TitleSwitcher

**Kind**: instance method of [<code>TitleSwitcher</code>](#TitleSwitcher)  

| Param | Type | Default |
| --- | --- | --- |
| domObject | <code>HTMLElement</code> |  | 
| callBackFunction | <code>function</code> |  | 
| self | [<code>TitleSwitcher</code>](#TitleSwitcher) |  | 
| [runOnce] | <code>boolean</code> | <code>false</code> | 

