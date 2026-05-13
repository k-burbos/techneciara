const addGame = document.getElementById('add')
const gamepage = document.getElementById('gameplace')
const learn = document.getElementById('learn')

addGame.addEventListener('click', ()=> {
    window.open('../create/create.html', "_self")
})

gamepage.addEventListener('click', () => {
    window.open('../gameplay/gameplay.html', "_self")
})

learn.addEventListener('click', () => {
    window.open('../learnmode/learnmode.html', "_self")
})
