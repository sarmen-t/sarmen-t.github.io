const container = document.getElementById('cont')
let color = 0
num = 16

window.onload = function  () {
    createGrid(num)
    }

function createGrid (num) {
    x = num*num
    if (color >= 0 && color <= 2) {
        for (let i = 0; i < x ; i++) {
            createDivs(container)
            }
    }
    else if (color == 3){
        return
    }
    }

function createDivs (container) {
    const boxDiv = document.createElement('div')
    boxDiv.setAttribute('id', 'divBox')
    boxDiv.addEventListener('mouseover', function () {
        if (color == 0) {
            boxDiv.style.backgroundColor = '#000000'
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

function changeEvList () {
    const divBox = document.querySelectorAll('#divBox')
        for (let i = 0; i < divBox.length ; i++) {
            let oldList = divBox[i].onmouseover
            divBox[i].removeEventListener('mouseover', oldList )
            divBox[i].addEventListener('click', function () {
                divBox[i].style.backgroundColor = '#ffffff'
            })
}
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

function whiteOut () {
    color = 3
    changeEvList()
}

function change () {
    let num = 0
    while (num == 0 || num > 60) {
        num = parseFloat(window.prompt("What size (#) grid would you like: (Max: 60):"))
    }
    deleteGrid()
    color = 0
    createGrid (num)
    divBox = document.querySelectorAll('#divBox')
    for (let i = 0; i < divBox.length; i++) {
        divBox[i].style.width = `${700/num}px`
        divBox[i].style.height = `${700/num}px`
        }
}