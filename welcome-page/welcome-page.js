const gamemode = document.getElementById('gamemode');
const gamemodeBg = document.querySelector('.gamemode-background')

gamemode.addEventListener('mousedown', () => {
    gamemodeBg.classList.add('active')
})

gamemode.addEventListener('mouseup', () => {
        gamemode.classList.add('load')
        setTimeout(() => {
            window.location.href = "../game-page/game-page.html";
        }, 200); 
})