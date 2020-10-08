const container = document.querySelector('.container')
const arrayOfValues = ['images/match-1.jpeg', 'images/match-2.jpeg','images/match-3.jpeg', 'images/match-4.jpeg','images/match-5.jpeg','images/match-6.jpeg']
const arrayOfPositions = [0,1,2,3,4,5,6,7,8,9,10,11]

// Create Board
for (let i = 0; i<12; i++) {
    blueDivCardBack = document.createElement('div')
    blueDivCardBack.setAttribute('position', i)
    blueDivCardBack.setAttribute('class','card')
    container.appendChild(blueDivCardBack)
    blueDivCardBack.addEventListener('click', checkForMatch)
}

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

let firstCard;
let secondCard;
let flipCount = 0;
let matchCount = 0;

function checkForMatch(event){
flipCount++;
this.style.color ='white'
let imageValue = this.getAttribute('value')
let backgroundString = "url('" + imageValue + "')"
console.log(imageValue)
this.style.background = backgroundString;
// document.body.style.background = "url('[INSERT HTTPS IMAGE URL HERE]')";
setTimeout(() =>{
if (flipCount == 1){
    firstCard = {
    value:event.target.getAttribute('value'),
    position:event.target.getAttribute('position')
}
console.log(firstCard)               
} else if (flipCount == 2) {
    secondCard = {
    value:event.target.getAttribute('value'),
    position:event.target.getAttribute('position')
} 
console.log(secondCard)                 
let cards = document.querySelectorAll('.card')
if (firstCard.value === secondCard.value) { 
    matchCount++
    alert('match!')
    cards[firstCard.position].removeEventListener('click', checkForMatch)
    cards[secondCard.position].removeEventListener('click', checkForMatch)
} 
else {
    cards[firstCard.position].style.color = 'transparent'
    cards[secondCard.position].style.color = 'transparent'
    cards[firstCard.position].style.background = 'blue'
    cards[secondCard.position].style.background = 'blue'
}
flipCount= 0
}
if (matchCount === 6){
    alert('you win!')
}
},500)


}