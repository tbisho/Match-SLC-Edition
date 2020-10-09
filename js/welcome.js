// ----Game Data --------//
const container = document.querySelector('.container')
const arrayOfValues = ['images/utah-1.jpeg', 'images/utah-2.jpeg','images/utah-3.jpeg', 'images/utah-4.jpeg','images/utah-5.jpeg','images/utah-6.jpeg']
const arrayOfPositions = [0,1,2,3,4,5,6,7,8,9,10,11]

// ----------Create game board---------------------------//
for (let i = 0; i<12; i++) {
    blueDivCardBack = document.createElement('div')
    blueDivCardBack.setAttribute('position', i)
    blueDivCardBack.setAttribute('class','card')
    
    blueDivCardBack.style.borderColor ='1px solid white'
    blueDivCardBack.style.margin = "0 auto"
    container.appendChild(blueDivCardBack)
    blueDivCardBack.addEventListener('click', checkForMatch)
    
}

//------------------Attach Data to game board------------------//
for (let i = 0; i<arrayOfValues.length; i++){
    let randomPositionOne = Math.floor(Math.random()* arrayOfPositions.length)
    let cards = document.querySelectorAll('.card')
    cards[arrayOfPositions[randomPositionOne]].setAttribute('value', arrayOfValues[i])
    cards[arrayOfPositions[randomPositionOne]].innerText += "/" + arrayOfValues[i]
    arrayOfPositions.splice(randomPositionOne,1)
    let randomPositionTwo = Math.floor(Math.random()* arrayOfPositions.length)
    cards[arrayOfPositions[randomPositionTwo]].setAttribute('value', arrayOfValues[i])
    cards[arrayOfPositions[randomPositionTwo]].innerText += "/" + arrayOfValues[i]
    arrayOfPositions.splice(randomPositionTwo,1)
}


// --------------- Game functionality ----------------------------//

let firstCard;
let secondCard;
let flipCount = 0;
let matchCount = 0;
let score = 0;
let resetPeices =  document.querySelectorAll('.card')

function checkForMatch(event){
let scoreElement = document.querySelector('.score')
flipCount++;
let imageValue = this.getAttribute('value')
let backgroundString = "url('" + imageValue + "')"
this.style.background = backgroundString
this.style.backgroundSize = 'cover'
this.style.border = 'dashed white'
setTimeout(() =>{
    
if (flipCount == 1){
    firstCard = {
    value:event.target.getAttribute('value'),
    position:event.target.getAttribute('position'),
}         
} else if (flipCount == 2) {
    secondCard = {
    value:event.target.getAttribute('value'),
    position:event.target.getAttribute('position')
} 
let cards = document.querySelectorAll('.card')
if (firstCard.value === secondCard.value) { 
    score++
    scoreElement.innerHTML = `Score: ${score}`
    matchCount++
    console.log('match')
    cards[firstCard.position].removeEventListener('click', checkForMatch)
    cards[secondCard.position].removeEventListener('click', checkForMatch)
} 
else {
    cards[firstCard.position].style.background = "navajowhite"
    cards[secondCard.position].style.background = "navajowhite"
}
flipCount= 0
}
if (matchCount === 6){
    alert('you win!')
}
},450)

}

