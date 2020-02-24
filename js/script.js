const colors= ['red', 'orange', 'pink', 'black', 'white', 'yellow', 'blue']

const body= document.querySelector('body')
const button=document.querySelector('button')

body.style.backgroundColor= 'purple'
button.addEventListener('click', changeBackground)

function changeBackground() {
    const colorsindex = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorsindex]
}
