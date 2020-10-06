console.log("insanity check")

// What happens when the page loads?
// How is it event driven?
    // -what happens when the page loads?
// DOM events for user interaction 
    // after the user has clicked a card we want to see an image
// Is there a reason to remove an event listener? 

// Wait for user to click start game
// MDN for event listeners 

// after the user clicks start game fire createBoard function 

// start game button & DOM elements for event listeners

const container = document.querySelector('.container')
let imageBoard = [];
let images = document.querySelectorAll('.imageNotFlipped')
console.log(images)
let strtBtn = document.querySelector('.strtBtn')
console.log(strtBtn)
strtBtn.addEventListener('click',createBoard)
let firstCard;
let secondCard;

// container.addEventListener

function createBoard(){ 
    
    for (let i = 0; i<4; i++) {
        images[i].setAttribute('src','images/front1.jpeg')
        imageBoard.push(images)
    }
    // strtBtn.removeEventListener('click',createBoard)
    return imageBoard
}
console.log(imageBoard)

// display image when cards are clicked
container.addEventListener('click', displayImage)
function displayImage(eventObject){
    // the image that I click
    console.log(eventObject.target)
    // change the image 
    eventObject.target.setAttribute('src','images/display1.jpeg')
    console.log(eventObject.target.getAttribute('value'))
    if (firstCard === undefined){
        firstCard = eventObject.target.getAttribute('value')
    } else if (secondCard === undefined){
        secondCard = eventObject.target.getAttribute('value')
    }
    console.log('first card value' + firstCard)
    console.log('second card value' + secondCard)
    
    if (firstCard === secondCard){
        console.log("it's a match!")
    } else {
        console.log("these cards do not match")
    }
}





// // check if the id of clicked cards are a match
// function checkMatch(eventObject){
//     console.log(eventObject)
//     if(eventObject.target.id === 'match'){
//         console.log("it's a match!")
//     }
//     // if they are a match, hide cards and update score
//     // if cards are not a match, return to original state
// }

// // if all cards are cleared, return gameBoard to original state
// function createBoard(){ 
//     for (let i = 0; i<4; i++) {
//         image.setAttribute('src','images/front1.jpeg')
//         imageBoard.push(image)
//     }
//     // strtBtn.removeEventListener('click',createBoard)
//     return imageBoard
// }












