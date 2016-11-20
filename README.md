title-switcher-v2.1.0
==============

This is the updated title-switcher which takes a more object-oriented
approach and improves many deficiencies of the original title-switcher.

Add typing effect to titles and also switch through several titles.

This project can be used as a plugin with limited set-up requirements.
No need to change the code in the title-switcher.js file except for
customization.

Add the titles to the DOM beside each other as child elements of a wrapper element (ex. div). Pass in an identifying attribute for the wrapper such as a class name. The other sample
code such as style can be used to improve how it displays.

NO need for any additional library, this runs as is. Compatible in modern browsers from IE9+.

If there are any problems contact me, but set-up should be done based on
the sample code for best results.

Changes from 2.0.1 to 2.1.0
- Remove all dependencies on jQuery, this is now written in pure JavaScript.
- Remove jQuery libraries.
- Added pause and resume functions.
- Separate cursorBlink and typingEffect out of the main TitleSwitcher class body to indicate that these are defaults but not core functions.
- Replace arguments for startTitles with a settings object for clearer implementation.

Live example at http://projects.joshuaheagle.com/js/title-switcher. Enjoy!
