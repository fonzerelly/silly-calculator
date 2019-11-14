window.onload = () => {
    const display = document.getElementById('display')
    document.querySelectorAll('button').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (display.innerHTML === '0') {
                display.innerHTML = ''
            }
            display.innerHTML += btn.innerHTML
        })
    })
}