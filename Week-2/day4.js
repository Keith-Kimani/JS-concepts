const parentContainer = document.querySelector('.parent')

const childContainer = document.createElement('div')
childContainer.classList.add('child')

childContainer.innerText = "I am a child"
parentContainer.appendChild(childContainer)
console.log(childContainer)

const innerChildContainer = document.createElement('div')
innerChildContainer
childContainer.appendInnerChild(innerChildContainer)
console.log(innerChildContainer)