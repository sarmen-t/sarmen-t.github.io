const container = document.getElementById('cont')
let color = 0

window.onload = function  () {
    createGrid(16)
    }

function createGrid (num) {
    x = num*num
    for (let i = 0; i < x ; i++) {
        createDivs(container, i)
        }
    }

function createDivs (container, i) {
    const boxDiv = document.createElement('div')
    boxDiv.setAttribute('id', 'divBox')
    boxDiv.addEventListener('mouseover', function () {
        if (color == 0) {
            boxDiv.style.backgroundColor = '#202020'
        }
        else if (color == 1) {
            boxDiv.style.backgroundColor = '#' + getColor()
        }
        else if (color == 2) {
            col = window.getComputedStyle(boxDiv).getPropertyValue('background-color')
            curCol = col.split("(")[1].split(")")[0]
            curCol = curCol.split(",")
            for (let j = 0; j < curCol.length; j ++){
                curCol[j] -= 25
            }
            curCol = "rgb(" + curCol.join(",") + ")"
            boxDiv.style.backgroundColor = curCol
        }
    })
    container.append(boxDiv)
    }

function deleteGrid () {
    const divBox = document.querySelectorAll('#divBox')
    for (let i = 0; i < divBox.length ; i++) {
        divBox[i].remove()
    }
}

function resetGrid () {
    const divBox = document.querySelectorAll('#divBox')
    for (let i = 0; i < divBox.length ; i++) {
        divBox[i].style.backgroundColor = 'white'
    }
}

function getColor () {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor
}


function setBlack () {
    color = 0
}

function setRainbow () {
    color = 1
}

function darken () {
    color = 2
}

function change () {
    let num = 0
    while (num == 0 || num > 60) {
        num = parseFloat(window.prompt("What size (#) grid would you like: (Max: 60):"))
    }
    deleteGrid()
    createGrid (num)
    divBox = document.querySelectorAll('#divBox')
    for (let i = 0; i < divBox.length; i++) {
        divBox[i].style.width = `${960/num}px`
        divBox[i].style.height = `${960/num}px`
        }
}