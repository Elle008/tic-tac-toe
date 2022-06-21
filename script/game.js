import { highlightCells, nextButton, prevButton } from "./styles.js"

const playerX = 'X'
const playerO = 'O'
const playerIcon = document.querySelector('[data-player-icon]')
const playerName = document.querySelector('[data-player-name]')
const yourTurn = document.querySelector('[data-yourturn]')
const stars = document.querySelector('[data-stars]')
const draw = document.querySelector('[data-draw]')
const board = document.querySelector('[data-board]')
const resetButton = document.querySelector('[data-reset]')
const movesList = document.querySelector('[data-moves-list]')

let numberOfClicks = 0
let currentPlayer = localStorage.getItem('currentPlayer')
let result = ''
let moveHistory =  []
let boardState = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

function playerTurn () {

    if (currentPlayer === playerX) {
        playerIcon.src = '../assets/x.svg'
        playerName.textContent = 'Player 1'
        return playerX
    }

    if (currentPlayer === playerO) {
        playerIcon.src = '../assets/o.svg'
        playerName.textContent = 'Player 2'
        return playerO
    }
}

playerTurn()

function addMark (cellClicked, playerTurn) {
    return cellClicked.textContent = playerTurn
}

function updateBoardState(rowIndex, colIndex, player) {
    boardState[rowIndex][colIndex] = player

}

function switchTurns() {
    if (currentPlayer === playerX) {
       currentPlayer = playerO 
    }
    else {
        currentPlayer = playerX
    }
}

function winValidation() {

    if (
        (boardState[0][0] != '' && boardState[0][0] === boardState[0][1] && boardState[0][1] === boardState[0][2]) ||
        (boardState[1][0] != '' && boardState[1][0] === boardState[1][1] && boardState[1][1] === boardState[1][2]) ||
        (boardState[2][0] != '' && boardState[2][0] === boardState[2][1] && boardState[2][1] === boardState[2][2]) ||
        (boardState[0][0] != '' && boardState[0][0] === boardState[1][0] && boardState[1][0] === boardState[2][0]) ||
        (boardState[0][1] != '' && boardState[0][1] === boardState[1][1] && boardState[1][1] === boardState[2][1]) ||
        (boardState[0][2] != '' && boardState[0][2] === boardState[1][2] && boardState[1][2] === boardState[2][2]) ||
        (boardState[0][0] != '' && boardState[0][0] === boardState[1][1] && boardState[1][1] === boardState[2][2]) ||
        (boardState[0][2] != '' && boardState[0][2] === boardState[1][1] && boardState[1][1] === boardState[2][0])
    ) {

        result = currentPlayer
        
    }

    if (!boardState.flat().includes('') && result === '') {
        
        result = 'draw'
    }
}

function showResult () {
    yourTurn.style.display = 'none'
    stars.style.display = 'block'
    board.style['pointer-events'] = 'none'
    nextButton.style['pointer-events'] = 'auto'
    prevButton.style['pointer-events'] = 'auto'

    if (result === playerX) {
        playerName.textContent = 'Player 1 Wins'
    }

    if (result === playerO) {
        playerName.textContent = 'Player 2 Wins'
    }

    if (result === 'draw') {
        playerIcon.style.visibility = 'hidden'
        playerName.style.visibility = 'hidden'
        draw.style.visibility = 'visible'
    }

    highlightCells()
}

const move = (cellClicked, rowIndex, colIndex) => {
    cellClicked.style.backgroundColor = '#6BB8FE'

    addMark(cellClicked, playerTurn())
    logMoves(cellClicked, rowIndex, colIndex, playerTurn())
    updateBoardState(rowIndex, colIndex, playerTurn())
    winValidation()
    if (result != '') {
        showResult()
    }

    else {
        switchTurns()
        playerTurn()
    }
    
}

boardState.forEach((row, rowIndex) => {
    const rowDiv = document.createElement('div')
    board.appendChild(rowDiv)
    rowDiv.classList.add('row')

    row.forEach((col, colIndex) => {
        const colDiv = document.createElement('div')

        rowDiv.appendChild(colDiv)
        colDiv.classList.add('cell', colIndex)
        
        

        colDiv.addEventListener('click', (event) => {
            const cellClicked = event.target
            move(cellClicked, rowIndex, colIndex)
        })
    })
})

function logMoves (cellClicked, rowIndex, colIndex, playerTurn) {
   let cellPosition = ''
   let rowPosition = ''
   let colPosition = ''

   if (rowIndex === 0) {
    rowPosition = 'top-'
   }

   if (rowIndex === 2) {
    rowPosition = 'bottom-'
   }

   if (colIndex === 0) {
    colPosition = 'left'
   }

   if (colIndex === 1) {
    colPosition = 'center'
   }

   if (colIndex === 2) {
    colPosition = 'right'
   }

   cellPosition = `${rowPosition}${colPosition}`
   
   const moveItem = document.createElement('li')
   const position = document.createElement('p')
   const mark = document.createElement('p')

   position.textContent = cellPosition
   mark.textContent = playerTurn

   movesList.appendChild(moveItem)
   moveItem.appendChild(position)
   moveItem.appendChild(mark)


   moveHistory.push(cellClicked)

   moveItem.addEventListener('mouseover', () => {
    cellClicked.style.opacity = '50%'
   })

   moveItem.addEventListener('mouseout', () => {
    cellClicked.style.opacity = '100%'
   })
}

resetButton.addEventListener('click', () => {
    window.location.reload()

})

prevButton.addEventListener('click', () => {
    if (numberOfClicks < moveHistory.length) {
        numberOfClicks += 1
        let prevMove = moveHistory[moveHistory.length-numberOfClicks]
        prevMove.style.color = 'rgba(255, 255, 255, 0.25)'
    }
    
    else {
        prevButton.style.opacity = '50%'
    }  
})

nextButton.addEventListener('click', () => {
    if (numberOfClicks > 0) {
        let nextMove = moveHistory[moveHistory.length-numberOfClicks]
        nextMove.style.color = '#fff'
        numberOfClicks -= 1 
    }

})








