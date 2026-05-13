const learn = document.getElementById('learn')
const chatroom = document.getElementById('chatroom')
const gamepage = document.getElementById('gameplace')

chatroom.addEventListener('click', () => {
    window.open('../chatroom/chatroom.html', "_self")
})

gamepage.addEventListener('click', () => {
    window.open('../gameplay/gameplay.html', "_self")
})

learn.addEventListener('click', () => {
    window.open('../learnmode/learnmode.html', "_self")
})
