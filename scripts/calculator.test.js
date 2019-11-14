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
            const buttons = document.querySelectorAll('.number')

            buttons.forEach((btn) => {
                btn.click()
            })
            
            expect(display.innerHTML).toMatch(new RegExp(numChar))
        })
    })

    itWill('initial zero', () => {
        const document = dom.window.document
        const display = document.getElementById('display')
        const button = document.querySelector('.number')

        expect(display.innerHTML).toEqual('0')
        button.click()
        expect(display.innerHTML).not.toEqual(button.innerHTML + button.innerHTML)
    })

    itWill('concatenate several number clicks in display', () => {
        const document = dom.window.document
        const display = document.getElementById('display')
        const button = document.querySelector('.number')

        button.click()
        button.click()
        expect(display.innerHTML).toEqual(button.innerHTML + button.innerHTML)
    })

    itWill('set display to zero on plus', () => {
        const document = dom.window.document
        const display = document.getElementById('display')
        const button = document.querySelector('button')
        const plus = document.querySelector('#plus')

        button.click()
        plus.click()
        expect(display.innerHTML).toEqual('0')
    })
})