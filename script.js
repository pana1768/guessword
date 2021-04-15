// let fruits = [
//     "apple",
//     "orange",
//     "mango",
//     "qiwi"
// ]
// console.log(fruits.length)

// for(let item of fruits){
//     console.log(item)
// }

// for(let item=0; item<fruits.length; item++){
//     console.log(fruits[item])
// }

let checkBtn = document.querySelector(".check")
let letters = []
let words = ["python", "swift", "java", "kotlin", "java script", "cplusplus", "csharp"]
let word = words[getRandomNumber()]
let newGameBtn = document.querySelector(".start")
newGameBtn.disabled = true
let attempts = word.length - 2
document.querySelector("span").innerHTML = attempts

checkBtn.addEventListener("click", function checkLetter(){
    let userLetter = document.querySelector(".letter").value
    letters.push(userLetter)
    let result = ""
    for(let index=0; index<word.length; index++){
        if(letters.indexOf(word[index]) !=-1){
            result = result+word[index]
        }
        else{
            result = result + "*"
        }
    }
    console.log(letters.indexOf(userLetter))
    if(letters.indexOf(userLetter) == 0){
        attempts--
        document.querySelector("span").innerHTML = attempts
    }
    if(result==word){
        checkBtn.disabled = true
        newGameBtn.disabled = false
    }
    if(attempts < 1){
        checkBtn.disabled = true
        newGameBtn.disabled = false
    }
    document.querySelector(".word").innerHTML = result
    document.querySelector(".letter").value = ""

})

newGameBtn.addEventListener("click", function newGame(){
    letters = []
    word = words[getRandomNumber()]
    newGameBtn.disabled = true
    checkBtn.disabled = false
    attempts = word.length - 2
    document.querySelector("span").innerHTML = attempts
    document.querySelector(".word").innerHTML = "Здесь будет слово"
})

function getRandomNumber(){
    let lenList = words.length 
    return Math.floor(Math.random()*lenList)

}