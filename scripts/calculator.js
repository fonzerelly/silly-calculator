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
    const defaultOperatorFn = () => {
        display.innerHTML = '0'
    }
    const plus = document.querySelector('#plus')
    plus.addEventListener('click', defaultOperatorFn)

    const minus = document.querySelector('#minus')
    minus.addEventListener('click', defaultOperatorFn)
}