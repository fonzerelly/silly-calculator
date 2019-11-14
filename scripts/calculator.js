window.onload = () => {
    const display = document.getElementById('display')
    document.querySelectorAll('.number').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (display.innerHTML === '0') {
                display.innerHTML = ''
            }
            display.innerHTML += btn.innerHTML
        })
    })

    let term =''
    const createDefaultOperatorFn = (operator) => {
        return () => {
            term += display.innerHTML + operator
            display.innerHTML = '0'
        }
    }
    const plus = document.querySelector('#plus')
    plus.addEventListener('click', createDefaultOperatorFn('+'))

    const minus = document.querySelector('#minus')
    minus.addEventListener('click', createDefaultOperatorFn('-'))

    const equals = document.querySelector('#equals')
    equals.addEventListener('click', () => {
        term += display.innerHTML
        display.innerHTML = eval(term)
        term = ''
    })
}