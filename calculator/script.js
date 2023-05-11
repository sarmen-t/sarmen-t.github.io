let hold_num = 0
let hold_num2 = 0
let func = 'none'
let currNum = 0

const num = document.querySelectorAll('#num')
const mainNum = document.getElementById('mainNum')
const hnl = document.getElementById('hn')

const clear = document.getElementById('clear')
clear.addEventListener('click', () => {
    mainNum.innerHTML = 0
    //mainNum.style.fontSize = '3em'
    func = 'none'
    hold_num = 0
    currNum = 0
    console.clear()
})
const back = document.getElementById('back')
back.addEventListener('click', () => {
    if (mainNum.innerHTML == 0){}
    else if (mainNum.innerHTML == '-'){
        mainNum.innerHTML = 0
        hold_num2 = 0
    }
    else if (mainNum.innerHTML > -10 && mainNum.innerHTML < 0) {
        let hold = mainNum.innerHTML
        hold = hold.slice(0, -1)
        mainNum.innerHTML = hold
    }
    else if (mainNum.innerHTML < 10 && mainNum.innerHTML > 0) {
        mainNum.innerHTML = 0
        hold_num2 = 0
    }
    else {
        let hold = mainNum.innerHTML
        hold = hold.slice(0, -1)
        mainNum.innerHTML = hold
    }
})

const plusMinus = document.getElementById('plusmin')
plusMinus.addEventListener('click', () => {
    if (mainNum.innerHTML != 0) {
        mainNum.innerHTML *= -1
        hold_num2 *= -1
    }
    else {
        currNum = '-'
        mainNum.innerHTML = '-'
    }
})

function updateNum (num) {
    console.log('updateNum')
    console.log(currNum)
    currNum = mainNum.innerHTML
    if (currNum == 0 && !mainNum.innerHTML.includes('.')) {
        mainNum.innerHTML = num.target.innerHTML
        hold_num2 = mainNum.innerHTML
    }
    else if (mainNum.innerHTML.includes('.')) {
        if (num.target.innerHTML == '.') {}
        else {
            mainNum.innerHTML = currNum + num.target.innerHTML
            hold_num2 = mainNum.innerHTML
        }
    }
    else { 
        mainNum.innerHTML = currNum + num.target.innerHTML
        hold_num2 = mainNum.innerHTML
    }
}
////////////// ADD to fixed to truncate

///////////////////////////////////////////////////
///////////////////////////////////////////////////

function updateNum2 (num) {
    console.log('updateNum2')
    console.log(currNum)
    if (currNum == 0 && !mainNum.innerHTML.includes('.')) {
        mainNum.innerHTML = num.target.innerHTML
        currNum = mainNum.innerHTML
        hold_num2 = mainNum.innerHTML
    }
    else if (currNum == 0) {
        mainNum.innerHTML = num.target.innerHTML
        currNum = mainNum.innerHTML
        hold_num2 = mainNum.innerHTML
    }
    else if (mainNum.innerHTML.includes('.')) {
        if (num.target.innerHTML == '.') {}
        else {
            mainNum.innerHTML += num.target.innerHTML
            hold_num2 = mainNum.innerHTML
        }
    }
    else {
        mainNum.innerHTML = currNum + num.target.innerHTML
        currNum = mainNum.innerHTML
        hold_num2 = mainNum.innerHTML
    }
}

function updateNum3 (num) {
    console.log('updatenum3')
    console.log(currNum)
    if (currNum == 0) {
        mainNum.innerHTML = num.target.innerHTML
        currNum = mainNum.innerHTML
        hold_num2 = mainNum.innerHTML
    }
    else if (mainNum.innerHTML.includes('.')) {
        if (num.target.innerHTML == '.') {}
        else {
            mainNum.innerHTML += num.target.innerHTML
            hold_num2 = mainNum.innerHTML
        }
    }
    else {
        currNum = mainNum.innerHTML
        mainNum.innerHTML = currNum + num.target.innerHTML
        hold_num2 = mainNum.innerHTML
    }
}

for (let i = 0; i < num.length; i++) {
    num[i].addEventListener('click', function (num) {
        if (func == 'add' || func == 'sub' || func == 'mult' || func == 'div' || func == 'inv') {
            updateNum2(num)
        }
        else if (func == 'eqadd' || func == 'eqsub' || func == 'eqmult' || func == 'eqdiv'){ 
            updateNum3(num)
        }
        else {
            updateNum(num)
        }
    })
}

const add = document.getElementById('add')
add.addEventListener('click', () => {
    preSolv(func, 'add')
    if (func != 'add') {
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
    preSolv(func, 'sub')
    if (func != 'sub') {
        currNum = 0
        func = 'sub'
        hold_num = mainNum.innerHTML
        console.log('holdnum ' + hold_num)
        mainNum.innerHTML += ' - '
        //mainNum.innerHTML = 0
    }
})

const mult = document.getElementById('mult')
mult.addEventListener('click', () => {
    preSolv(func, 'mult')
    if (func != 'mult') {
        currNum = 0
        func = 'mult'
        hold_num = mainNum.innerHTML
        console.log('holdnum ' + hold_num)
        mainNum.innerHTML += ' x '
        //mainNum.innerHTML = 0
    }
})

const div = document.getElementById('div')
div.addEventListener('click', () => {
    preSolv(func, 'div')
    if (func != 'div'){
        currNum = 0
        func = 'div'
        hold_num = mainNum.innerHTML
        console.log('holdnum ' + hold_num)
        mainNum.innerHTML += ' ÷ '
        //mainNum.innerHTML = 0
    }
})

const equal = document.getElementById('equal')
equal.addEventListener('click', () => {
    console.log(func)
    if (func == 'add' || func == 'eqadd') {
        addFunc()
        func = 'eqadd'
        currNum = 0
    }
    else if (func == 'sub' || func == 'eqsub') {
        subFunc()
        func = 'eqsub'
        currNum = 0
    }
    else if (func == 'mult' || func == 'eqmult') {
        multFunc()
        func = 'eqmult'
        currNum = 0
    }
    else if (func == 'div' || func == 'eqdiv') {
        divFunc()
        func = 'eqdiv'
        currNum = 0
    }
})

const inv = document.getElementById('inv')
inv.addEventListener('click', () => {
    mainNum.innerHTML = math.round(1 / parseFloat(mainNum.innerHTML), 7)
    func = 'inv'
})

function preSolv(func, inner_func) {
    if (func == inner_func) {
        if (func == 'add') {
            currNum = 0
            addFunc()
            hold_num = mainNum.innerHTML
            console.log('holdnum ' + hold_num)
        }
        else if (func == 'sub') {
            currNum = 0
            subFunc()
            hold_num = mainNum.innerHTML
            console.log('holdnum ' + hold_num)
        }
        else if (func == 'div') {
            currNum = 0
            divFunc()
            hold_num = mainNum.innerHTML
            console.log('holdnum ' + hold_num)
        }
        else if (func == 'mult') {
            currNum = 0
            multFunc()
            hold_num = mainNum.innerHTML
            console.log('holdnum ' + hold_num)
        }
    }
    else if (func == 'add') {
        addFunc()
    }
    else if (func == 'sub') {
        subFunc()
    }
    else if (func == 'mult') {
        multFunc()
    }
    else if (func == 'div') {
        divFunc()
    }
}

function addFunc () {
    if (func == 'add') {
        mainNum.innerHTML = math.round(parseFloat(mainNum.innerHTML) + parseFloat(hold_num), 7)
    }
    else {
        mainNum.innerHTML = math.round(parseFloat(mainNum.innerHTML) + parseFloat(hold_num2), 7)
    }
}

function subFunc () {
    if (func == 'sub') {
        mainNum.innerHTML =  math.round(parseFloat(hold_num) - parseFloat(mainNum.innerHTML), 7)
    }
    else {
        mainNum.innerHTML = math.round(parseFloat(mainNum.innerHTML) - parseFloat(hold_num2), 7)
    }
}

function multFunc () {
    if (func == 'mult') {
        mainNum.innerHTML =  math.round(parseFloat(hold_num) * parseFloat(mainNum.innerHTML), 7)
    }
    else {
        mainNum.innerHTML = math.round(parseFloat(mainNum.innerHTML) * parseFloat(hold_num2), 7)
    }
}

function divFunc () {
    if (hold_num2 == 0) {
        mainNum.innerHTML = 'Cannot Divide by Zero'
        mainNum.style.fontSize = '1.5em'
        return
    } 
    if (func == 'div') {
        mainNum.innerHTML =  math.round(parseFloat(hold_num) / parseFloat(mainNum.innerHTML), 7)
    }
    else {
        mainNum.innerHTML = math.round(parseFloat(mainNum.innerHTML) / parseFloat(hold_num2), 7)
    }
}

function trunc (num, places) {
    return Math.trunc(num * Math.pow(10, places)) / Math.pow(10, places)
}