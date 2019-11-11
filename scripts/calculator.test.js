const {JSDOM, VirtualConsole}  = require('jsdom')

describe('calculator', () => {
    let document, mockLog
    beforeEach( async () => {
        // preparation of piping all loging inside the jsdom instance to a mock function
        mockLog = jest.fn(() => {})
        const virtualConsole = new VirtualConsole()
        virtualConsole.on('log', mockLog)
        
        // instantiate window (asynchronously since it loads from a file)
        const { window } = await JSDOM.fromFile('./index.html', { 
            virtualConsole, 
            runScripts: 'dangerously' // read https://github.com/jsdom/jsdom#executing-scripts
        })
        document = window.document
    })
    it('should recognize click in jsdom resulting in a console.log output', () => {
        const btn = document.querySelector('button')
        btn.click()
        expect(spy.mock.calls[0][0]).toEqual('click')
    })
})