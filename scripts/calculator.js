window.onload = () => {
    const display = document.getElementById('display')
    document.querySelectorAll('button').forEach((btn) => {
        btn.addEventListener('click', () => {
            display.innerHTML += btn.innerHTML
        })
    })
}