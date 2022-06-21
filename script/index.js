const startButton = document.querySelector('[data-start]')
const playerSelectDiv = document.querySelector('[data-player-select]')
const playerSelect = Array.from(document.querySelectorAll('[data-first-player]'))
const playerX = 'X'
const playerO = 'O'
let currentPlayer

startButton.addEventListener('click', () => {
    startButton.style.display = 'none'
    playerSelectDiv.style.display = 'block'
})

function firstPlayer () {
    for (const selector of playerSelect) {
        selector.addEventListener('click', (event) => {
            if (event.target === playerSelect[0]) {
                currentPlayer = playerX
            }

            if (event.target === playerSelect[1]) {
                currentPlayer = playerO
            }
            
            localStorage.setItem('currentPlayer', currentPlayer)
            window.location.href = 'https://elle008.github.io/tic-tac-toe/game.html'
        })
    }
}

firstPlayer()

