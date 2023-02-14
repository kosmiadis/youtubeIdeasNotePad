const ideas = document.querySelector('#ideas')
const addBtn = document.querySelector('#add-idea')
const cancelBtn = document.querySelector('#cancel')
const addCont = document.querySelector('.add')
const addIdeaBtn = document.querySelector('#add')
const allInputs = document.querySelectorAll('input')
const textarea = document.querySelector('textarea')


addBtn.addEventListener('click', e => {
    addCont.style.display = 'inline-grid'
})

cancelBtn.addEventListener('click', e => {
    addCont.style.display = 'none'
    allInputs.forEach(inp => inp.value = '')
    textarea.value = ''
})

addIdeaBtn.addEventListener('click', e => {
    
})
