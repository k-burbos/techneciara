const addGame = document.getElementById('add')
const chatroom = document.getElementById('chatroom')
const gamepage = document.getElementById('gameplace')

chatroom.addEventListener('click', () => {
    window.open('../chatroom/chatroom.html', "_self")
})

gamepage.addEventListener('click', () => {
    window.open('../gameplay/gameplay.html', "_self")
})

addGame.addEventListener('click', ()=> {
    window.open('../create/create.html', "_self")
})
