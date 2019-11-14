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
    const plus = document.querySelector('#plus')
    plus.addEventListener('click', () => {
        display.innerHTML = '0'
    })
}