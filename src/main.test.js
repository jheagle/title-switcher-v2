/**
 * @jest-environment jsdom
 */
jest.useFakeTimers()
import TitleSwitcher from './main'
import { logObject } from 'js-build-tools/dist/testHelpers'

beforeEach(() => {
  jest.clearAllMocks()
  jest.clearAllTimers()
})

describe('TitleSwitcher', () => {
  test('create instance with no titles', () => {
    expect.assertions(3)
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {})
    const titleSwitcher = new TitleSwitcher()
    expect(titleSwitcher.titles.length).toBe(0)
    titleSwitcher.startTitles()
    expect(warn).toBeCalledWith(`No titles found for ''`)
    expect(titleSwitcher.active).toBeFalsy()
  })

  test('detect some titles and setup type surface', () => {
    jest.spyOn(global, 'setTimeout')
    expect.assertions(9)
    document.body.innerHTML = '<div class=\'titles\'>\n' +
      '        <h4>One</h4>\n' +
      '        <h4>Two</h4>\n' +
      '    </div>'
    const titleSwitcher = new TitleSwitcher('.titles')
    expect(titleSwitcher.titles.length).toBe(2)
    titleSwitcher.startTitles({ immediatePause: true })
    expect(titleSwitcher.active).toBeFalsy()
    expect(titleSwitcher.titles.length).toBe(3)
    // typeSurface was created
    expect(titleSwitcher.titles[0].className).toBe('typeSurface')
    expect(titleSwitcher.titles[0]).toBe(titleSwitcher.typeSurface)
    expect(titleSwitcher.currentIndex).toBe(1)
    // The first title is set as current
    expect(titleSwitcher.titles[1].className).toBe('displayTitle')
    expect(titleSwitcher.titles[1].style.display).toBe('none')
    expect(titleSwitcher.titles[2].style.display).toBe('none')
  })

  test('cursor blink adds and removes cursor', () => {
    expect.assertions(5)
    document.body.innerHTML = '<div class=\'titles\'>\n' +
      '        <h4>One</h4>\n' +
      '        <h4>Two</h4>\n' +
      '    </div>'
    const titleSwitcher = new TitleSwitcher('.titles')
    expect(titleSwitcher.titles.length).toBe(2)
    titleSwitcher.startTitles({ immediatePause: true })
    titleSwitcher.cursorBlink(true, titleSwitcher)
    // Adds the cursor
    expect(titleSwitcher.typeSurface.innerHTML).toContain('|')
    expect(titleSwitcher.typeSurface.innerHTML).not.toContain('&nbsp;')
    titleSwitcher.cursorBlink(false, titleSwitcher)
    // Removes the cursor
    expect(titleSwitcher.typeSurface.innerHTML).not.toContain('|')
    expect(titleSwitcher.typeSurface.innerHTML).toContain('&nbsp;')
  })

  test('switchTitle swaps to next titles', done => {
    expect.assertions(6)
    document.body.innerHTML = '<div class=\'titles\'>\n' +
      '        <h4>One</h4>\n' +
      '        <h4>Two</h4>\n' +
      '    </div>'
    const titleSwitcher = new TitleSwitcher('.titles')
    titleSwitcher.startTitles()
    expect(titleSwitcher.titles[1].className).toBe('displayTitle')
    expect(titleSwitcher.titles[2].className).toBeFalsy()
    titleSwitcher.typeSurface.innerHTML = 'Some content must exist here to switch titles, otherwise default to first'
    // The current title is set to first one, so the switchTitle will swap to the next title (second title)
    titleSwitcher.switchTitle(titleSwitcher.titles[1], () => {
      expect(titleSwitcher.titles[1].className).toBeFalsy()
      expect(titleSwitcher.titles[2].className).toBe('displayTitle')
    }, titleSwitcher)
    // The current title has been set to the second one, so switchTitle will overflow and swap back the first title
    titleSwitcher.switchTitle(titleSwitcher.titles[2], () => {
      expect(titleSwitcher.titles[1].className).toBe('displayTitle')
      expect(titleSwitcher.titles[2].className).toBeFalsy()
      done()
    }, titleSwitcher)
  })

  test('applies typingEffect by filling typing surface with text followed by cursor', done => {
    jest.spyOn(global, 'setTimeout');
    expect.assertions(7)
    document.body.innerHTML = '<div class=\'titles\'>\n' +
      '        <h4 style="color:purple"><strong>One</strong></h4>\n' +
      '        <h4 style="color:red"><em>Two</em></h4>\n' +
      '    </div>'
    const titleSwitcher = new TitleSwitcher('.titles')
    titleSwitcher.startTitles({ immediatePause: true })
    expect(titleSwitcher.titles[1].className).toBe('displayTitle')
    expect(titleSwitcher.titles[2].className).toBeFalsy()
    titleSwitcher.typingEffect(titleSwitcher.titles[1], () => {
      // The first title style has been applied
      expect(titleSwitcher.typeSurface.style.color).toBe(titleSwitcher.titles[1].style.color)
      // The first title has been placed with a cursor at the end
      expect(titleSwitcher.typeSurface.textContent).toBe(titleSwitcher.titles[1].textContent + '|')
    }, titleSwitcher, true)
    jest.runAllTimers()
    titleSwitcher.typingEffect(titleSwitcher.titles[2], () => {
      // The second title style has been applied
      expect(titleSwitcher.typeSurface.style.color).toBe(titleSwitcher.titles[2].style.color)
      // The second title has been placed with a cursor at the end
      expect(titleSwitcher.typeSurface.textContent).toBe(titleSwitcher.titles[2].textContent + '|')
      done()
    }, titleSwitcher, true)
    jest.runAllTimers()
    // 4 blinks to start
    // 1 timeout after blinks
    // 3 times for timeout for each letter
    // 8 blinks after complete
    // total of 16 timeouts for each title, and ran on two titles
    // grand total of 32 after running both titles
    let expectedTimes = 32
    expect(setTimeout).toHaveBeenCalledTimes(expectedTimes);
  })

  test('applies typingEffect, including adding html', done => {
    jest.spyOn(global, 'setTimeout');
    expect.assertions(5)
    document.body.innerHTML = '<div class=\'titles\'>\n' +
      '        <h4><strong>One</strong></h4>\n' +
      '        <h4><em>Two</em></h4>\n' +
      '    </div>'
    const titleSwitcher = new TitleSwitcher('.titles')
    titleSwitcher.startTitles({ immediatePause: true })
    expect(titleSwitcher.titles[1].className).toBe('displayTitle')
    expect(titleSwitcher.titles[2].className).toBeFalsy()
    const endCursorBlink = '<span style="font-weight: normal; color: black; text-decoration: none"></span><span style="display: inline-block;font-weight: normal; color: black; text-decoration: none"></span><span style="display: inline-block;font-weight: normal; color: black; text-decoration: none">|</span>'
    titleSwitcher.typingEffect(titleSwitcher.titles[1], () => {
      // The first title has been placed with a cursor at the end
      expect(titleSwitcher.typeSurface.innerHTML).toBe(titleSwitcher.titles[1].innerHTML + endCursorBlink)
    }, titleSwitcher, true)
    jest.runAllTimers()
    titleSwitcher.typingEffect(titleSwitcher.titles[2], () => {
      // The second title has been placed with a cursor at the end
      expect(titleSwitcher.typeSurface.innerHTML).toBe(titleSwitcher.titles[2].innerHTML + endCursorBlink)
      done()
    }, titleSwitcher, true)
    jest.runAllTimers()
    // 4 blinks to start
    // 1 timeout after blinks
    // 3 times for timeout for each letter
    // 8 blinks after complete
    // total of 16 timeouts for each title, and ran on two titles
    // grand total of 32 after running both titles
    expect(setTimeout).toHaveBeenCalledTimes(32);
  })
})