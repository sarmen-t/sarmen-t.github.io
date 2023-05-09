let hold_num = 0
let hold_num2 = 0
let func = 'none'

const num = document.querySelectorAll('#num')
const mainNum = document.getElementById('mainNum')
const hnl = document.getElementById('hn')


for (let i = 0; i < num.length; i++) {
    num[i].addEventListener('click', function (num) {
        if (func == 'add') {
            mainNum.innerHTML = num.target.innerHTML
        }
        else if (func == 'eq'){
            mainNum.innerHTML = num.target.innerHTML
        }
        else {
            updateNum(num)
        }
    })
}

function updateNum (num) {
    currNum = mainNum.innerHTML
    if (currNum == 0) {
        mainNum.innerHTML = num.target.innerHTML
        hold_num2 = mainNum.innerHTML
    }
    else { 
        mainNum.innerHTML = currNum + num.target.innerHTML
        hold_num2 = mainNum.innerHTML
    }
}

const clear = document.getElementById('clear')
clear.addEventListener('click', () => {
    mainNum.innerHTML = 0
    func = 'none'
    console.clear()
})

const back = document.getElementById('back')
back.addEventListener('click', () => {
    if (mainNum.innerHTML == 0){}
    else if (mainNum.innerHTML < 10){
        mainNum.innerHTML = 0
    }
    else {
        let hold = mainNum.innerHTML
        hold = hold.slice(0, -1)
        mainNum.innerHTML = hold
    }
})

const add = document.getElementById('add')
add.addEventListener('click', () => {
    if (func == 'add') {
        addFunc()
        hold_num = mainNum.innerHTML
        hnl.innerHTML = `hold num: ${hold_num}`
    }
    else {
        func = 'add'
        hold_num = mainNum.innerHTML
        hnl.innerHTML = `hold num: ${hold_num}`
        mainNum.innerHTML += ' +'
        //mainNum.innerHTML = 0
    }
})

const equal = document.getElementById('equal')
equal.addEventListener('click', () => {
    if (func == 'add') {
        addFunc()
        func = 'eq'
        //hold_num = mainNum.innerHTML
    }
    else if (func == 'eq'){
        console.log('test')
        addFunc()
    }
})

function addFunc () {
    if (func == 'add') {
        console.log('oldnum ' + mainNum.innerHTML + ' hn ' + hold_num)
        mainNum.innerHTML = parseInt(mainNum.innerHTML) + parseInt(hold_num)
    }
    else {
        mainNum.innerHTML = parseInt(mainNum.innerHTML) + parseInt(hold_num2)
    }
}

