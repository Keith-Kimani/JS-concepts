const parentContainer = document.querySelector('.parent-container')

parentContainer.addEventListener('click', (e)=>{
    console.log(e)
    if (e.target.tagName === 'SPAN') {
        let subContainer = e.target.nextElementSibling
        if(subContainer.classList.contains('hidden')){
            subContainer.classList.remove('hidden')
        } else{
        subContainer.classList.add('hidden')
     }
    }
})