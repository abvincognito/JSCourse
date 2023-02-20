//let a = "seven"
//a = 7
//const b = 8

//string - строка
// const str1 = 'I\'m OK!'
// const str2 = "Text"
// const str3 = `Reverse`

// console.log(str1)
// console.log(str2)
// console.log(str3)


//NUMBER
//+ - * / **
// const num1 = 75 + 15
// const num2 = 79**3
// const rem = 7 + 8 + "5"
// console.log(rem)

//BIGINT
// const bigint = 101040505812315312126n
// console.log(bigint)


//BOOLEAN

// const bool = "a" > "AAA"
// console.log(bool)

//NULL
// let  empty = null
// console.log(empty, typeof empty)

//UNDEFINED
// let box = undefined
// console.log(box, typeof box)

//SYMBOL
// const uniq = Symbol('id')
// const uniq2 = Symbol('id')
// console.log(uniq == uniq2)

//OBJECT

// const obj = {
//     name: "Sasha",
//     age: 19,
//     isHappy: true,
// }
// console.log(obj.name)
// console.log(obj ['name'])

// obj.job = "Google"
// const array = ["Аня", 18, false]
// array[3] = "Facebook"
// console.log(array)
// console.log(array[0])

// console.log(obj)

// const counts = prompt("До скольки Вы хотите досчитать?", 10)
// let i = 10

// while(i <= counts){
//     console.log(i++)
// }

// do{
//     console.log(i++)
// } while (i <= counts)
// console.log(i)

// const arr = []


// for(let i = 1; i <= 50; ++i)
// {
//     arr.push(i)
// }

// const newArr = []

// for(elem of arr)
// {
//     const marker = elem % 4
//     if(!marker){
//         newArr.push(elem)
//     }
// }
// console.log(newArr)

// const obj = {
//     name: "Saha",
//     age: 25,
//     city: "Voronezh"
// }
// for(key in obj){
//     console.log(key, obj[key])
// }
//FUNCTION

//declaration
console.log(scream(15, 10))
function scream(a, b)
{
//    const result = a*b
//    return result
return a*b
}


//expression

const wowScream = function(){
    alert("AAA")
}

//Arrow
const arrow = ()=>{
    alert("AAAAAAAAAA")
}





//Game
// Нажать на копку начать игра запускается, генерация задачи, ввод ответа пользователем
//должна появится кнопка проверить
//нажав кнопку проверить мы сравнимаем ввод пользователя с ответом
//вывести результат и правильное значение, сменить кнопку на начать заново

const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {
    // const randomNum1 = getRandomNumInRange(0, 100)
    // const randomNum2 = getRandomNumInRange(0, 100)
    // let symbol
    // if (Math.random() > 0.5){
    //     symbol = "+"
    // }
    // else{
    //     symbol = "-"
    // }
const symbol = (Math.random() > 0.5) ? "+" : "-"

    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}



const gameElements = document.getElementById("my_game").children

// console.log(gameElements)
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,

}

const startGameFunc = () =>{
    if (!gameState.taskInProcess){
        title.innerText ="Игра началась"
        userAnswer.value = null
       //генерируем задачу и ответ
    //    const task = getTask()
       //показываю задачу пользователю
       userTask.innerText = getTask()
       userAnswer.hidden = false
       //меняю кнопку и меняю состояние
       btnGame.innerText = "Проверить"
       toggleGameState()
    } else{
        //сравнить ответ пользователя с правильным
        const isRight = gameState.rightAnswer == userAnswer.value
        // вывести результат
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
        //вывести поздравления
        title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли!"
        // поменять кнопку и состояние
        btnGame.innerText = "Начать заново"
        toggleGameState()

    }
}

btnGame.addEventListener("click", startGameFunc)
userAnswer.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        startGameFunc()   
    } else if(e.key === "Escape"){
        userAnswer.blur()
    }
})








// console.dir(document)
const choosedEl = document.querySelectorAll(".choosed_block-container div")
const counterEl = document.querySelector(".choosed_block span")
// const choosedState = {
//     countElements: 0,
// }

// const changeCount = (value) => {
//     choosedState.countElements += value
//     choosedEl.innerText = choosedState.countElements
// }
const choosedState = {
    countElements: 0,
    setCountValue(value){
        this.countElements += value
        counterEl.innerText = this.countElements
    }
}

const eventFunc = (e) => {
    if(e.target.className === ""){
        e.target.className = "choosed_element"
        choosedState.setCountValue(1)
        // counterEl.innerText = +counterEl.innerText + 1
    }
    else{
        e.target.className = ""
        // counterEl.innerText = counterEl.innerText - 1
        choosedState.setCountValue(-1)
    }
}

for(let i = 0; i<choosedEl.length; i++){
    choosedEl[i].addEventListener("click", eventFunc)
}
choosedEl[2].removeEventListener("click", eventFunc)