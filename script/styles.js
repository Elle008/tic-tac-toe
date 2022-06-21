
const historyDiv = document.querySelector('[data-history]')
const showHistory = document.querySelector('[data-show-history]')
const exitHistory = document.querySelector('[data-exit]')
export const prevButton = document.querySelector('[data-prev]')
export const nextButton = document.querySelector('[data-next]')

export function highlightCells() {
    const cells = Array.from(document.querySelectorAll('.cell'))

    if (cells[0].textContent != '' && cells[0].textContent === cells[1].textContent && cells[1].textContent === cells[2].textContent){
        for (let i = 0; i < 3; i++) {
            cells[i].style.backgroundColor= '#FFDE17'
            cells[i].style.borderColor= '#E18C04'
        }
    }

    else if (cells[3].textContent != '' && cells[3].textContent === cells[4].textContent && cells[4].textContent === cells[5].textContent){
        for (let i = 3; i < 6; i++) {
            cells[i].style.backgroundColor= '#FFDE17'
            cells[i].style.borderColor= '#E18C04'
        }
    }

    else if (cells[6].textContent != '' && cells[6].textContent === cells[7].textContent && cells[7].textContent === cells[8].textContent){
        for (let i = 6; i < 9; i++) {
            cells[i].style.backgroundColor= '#FFDE17'
            cells[i].style.borderColor= '#E18C04'
        }
    }
    
    else if (cells[0].textContent != '' && cells[0].textContent === cells[4].textContent && cells[4].textContent === cells[8].textContent){
        for (let i = 0; i < 9; i+=4) {
            cells[i].style.backgroundColor= '#FFDE17'
            cells[i].style.borderColor= '#E18C04'
        }
    }
    
    else if (cells[2].textContent != '' && cells[2].textContent === cells[4].textContent && cells[4].textContent === cells[6].textContent){
        for (let i = 2; i < 7; i+=2) {
            cells[i].style.backgroundColor= '#FFDE17'
            cells[i].style.borderColor= '#E18C04'
        }
    }

    else if (cells[0].textContent != '' && cells[0].textContent === cells[3].textContent && cells[3].textContent === cells[6].textContent){
        for (let i = 0; i < 7; i+=3) {
            cells[i].style.backgroundColor= '#FFDE17'
            cells[i].style.borderColor= '#E18C04'
        }
    }

    else if (cells[1].textContent != '' && cells[1].textContent === cells[4].textContent && cells[4].textContent === cells[7].textContent){
        for (let i = 1; i < 8; i+=3) {
            cells[i].style.backgroundColor= '#FFDE17'
            cells[i].style.borderColor= '#E18C04'
        }
    }

    else if (cells[2].textContent != '' && cells[2].textContent === cells[5].textContent && cells[5].textContent === cells[8].textContent){
        for (let i = 2; i < 9; i+=3) {
            cells[i].style.backgroundColor= '#FFDE17'
            cells[i].style.borderColor= '#E18C04'
        }
    }

    else {
        for (let i = 0; i < 9; i++) {
            cells[i].style.backgroundColor= '#FFDE17'
            cells[i].style.borderColor= '#E18C04'
        }
    }
}

showHistory.addEventListener('click', () => {
    historyDiv.style.display = 'flex'
})

exitHistory.addEventListener('click', () => {
    historyDiv.style.display = 'none'
})

nextButton.style['pointer-events'] = 'none'
prevButton.style['pointer-events'] = 'none'