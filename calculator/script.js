let hold_num = 0
let hold_num2 = 0
let func = 'none'

const num = document.querySelectorAll('#num')
const mainNum = document.getElementById('mainNum')
const hnl = document.getElementById('hn')

const clear = document.getElementById('clear')
clear.addEventListener('click', () => {
    mainNum.innerHTML = 0
    func = 'none'
    hold_num = 0
    console.log('holdnum ' + hold_num)
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

const plusMinus = document.getElementById('plusmin') // only works with first number
// not during operations
plusMinus.addEventListener('click', () => {
    mainNum.innerHTML *= -1
})

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

function updateNum2 (num) {
    if (currNum == 0) {
        mainNum.innerHTML = num.target.innerHTML
        currNum = mainNum.innerHTML
        hold_num2 = mainNum.innerHTML
    }
    else {
        mainNum.innerHTML = currNum + num.target.innerHTML
        currNum = mainNum.innerHTML
        hold_num2 = mainNum.innerHTML
    }
}

function updateNum3 (num) {
    if (currNum == 0) {
        mainNum.innerHTML = num.target.innerHTML
        currNum = mainNum.innerHTML
        hold_num2 = mainNum.innerHTML
    }
    else {
        currNum = mainNum.innerHTML
        mainNum.innerHTML = currNum + num.target.innerHTML
        hold_num2 = mainNum.innerHTML
    }
}

for (let i = 0; i < num.length; i++) {
    num[i].addEventListener('click', function (num) {
        if (func == 'add' || func == 'sub') {
            updateNum2(num)
        }
        else if (func == 'eqadd' || func == 'eqsub'){ 
        // probably have to change this for other operators
            updateNum3(num)
        }
        else {
            updateNum(num)
        }
    })
}

const add = document.getElementById('add')
add.addEventListener('click', () => {
    if (func == 'add') {
        currNum = 0
        addFunc()
        hold_num = mainNum.innerHTML
        console.log('holdnum ' + hold_num)
    }
    else {
        currNum = 0
        func = 'add'
        hold_num = mainNum.innerHTML
        console.log('holdnum ' + hold_num)
        mainNum.innerHTML += ' + '
        //mainNum.innerHTML = 0
    }
})

const sub = document.getElementById('sub')
sub.addEventListener('click', () => {
    if (func == 'sub') {
        currNum = 0
        subFunc()
        hold_num = mainNum.innerHTML
        console.log('holdnum ' + hold_num)
    }
    else {
        currNum = 0
        func = 'sub'
        hold_num = mainNum.innerHTML
        console.log('holdnum ' + hold_num)
        mainNum.innerHTML += ' - '
        //mainNum.innerHTML = 0
    }
})

const equal = document.getElementById('equal')
equal.addEventListener('click', () => {
    if (func == 'add') {
        addFunc()
        func = 'eqadd'
        currNum = 0
    }
    else if (func == 'sub') {
        subFunc()
        func = 'eqsub'
        currNum = 0
    }
    else if (func == 'eqadd'){ //same for this
        addFunc()
        currNum = 0
    }
    else if (func == 'eqsub'){ //same for this
        subFunc()
        currNum = 0
    }
})

function addFunc () {
    if (func == 'add') {
        mainNum.innerHTML = parseInt(mainNum.innerHTML) + parseInt(hold_num)
    }
    else {
        mainNum.innerHTML = parseInt(mainNum.innerHTML) + parseInt(hold_num2)
    }
}

function subFunc () {
    if (func == 'sub') {
        mainNum.innerHTML =  parseInt(hold_num) - parseInt(mainNum.innerHTML)
    }
    else {
        mainNum.innerHTML = parseInt(mainNum.innerHTML) - parseInt(hold_num2)
    }
}

