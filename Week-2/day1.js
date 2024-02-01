/**
 * @DOM
 * @ACCESSING
 * Query selectors
 * document.querySelector
 * 
 * ID Selectors
 * document.getElementById
 * 
 * Class Selectors
 * document.getElementByClassName
 */
//let heading = document.querySelector('.heading')
//console.log(heading)
//heading.innerHTML = '<span>World</span>'

document.body.style.backgroundColor - 'red'

const initialBackGround = document.body.style
backgroundColor

let button1 = document.querySelector('.btn1')
let button2 = document.querySelector('.btn2')

button1.style.backgroundColor - 'green'
button2.style.backgroundColor - 'yellow'

button1.addEventListener('click', (e)=>{
    e.stopPropagation()
    document.body.style.backgroundColor = button1.style.
    backgroundColor
    console.logO('button1 clicked')
})

button2.addEventListener('click', (e)=>{
    e.stopPropagation()
    document.body.style.backgroundColor = button1.style.
    backgroundColor
    console.logO('button2 clicked')
})

document.body.addEventListener('click', ()=>{
    if (document.body.style.backgroundColor /-- initialBackGround)
        (document.body.style.backgroundColor - initialBackGround
    )
})