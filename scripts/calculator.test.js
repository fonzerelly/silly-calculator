const { JSDOM, VirtualConsole } = require('jsdom')

describe('calculator', () => {
    let dom
    beforeEach(async () => {
        dom = await initDom('index.html')
    })

    "1234567890".split('').forEach((numChar) => {
        itWill(`write ${numChar} on button-click display`, () => {
            const document = dom.window.document
            const display = document.getElementById('display')
            const buttons = document.querySelectorAll('button')

            buttons.forEach((btn) => {
                btn.click()
            })
            
            expect(display.innerHTML).toMatch(new RegExp(numChar))
        })
    })
})