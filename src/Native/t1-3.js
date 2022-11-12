const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

const handler1 = (e) => {
    e.stopPropagation()
    alert('yo')
}
const handler2 = (e) => console.log(e)
const handler3 = (e) => console.log(e.currentTarget)
const handler4 = (e) => {
    if (e.currentTarget.id === 'small') {
        alert(e.currentTarget.id)
    }
    const handler5 = (e) => {
        if (e.currentTarget.tagName === 'BUTTON') {
            alert(e.currentTarget.id)
        }
    }

// sm.onclick = handler1
// sm.onclick = handler2
// sm.onclick = null

// sm.addEventListener('click', handler1)
// sm.addEventListener('click', handler2)
// sm.removeEventListener('click', handler1)
// sm.addEventListener('click', handler4)
    sm.addEventListener('click', handler5)

    const a = document.getElementById('a');

    a.addEventListener('click', (e) => {
        e.preventDefault()
        alert('preventDefault')
    })}