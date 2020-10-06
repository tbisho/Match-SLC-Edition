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

let strtBtn = document.querySelector('.strtBtn')
console.log(strtBtn)
strtBtn.addEventListener('click',createBoard)

function createBoard(eventObject){
    console.log(eventObject)
    for (let i = 0; i<4; i++) {
        const imageBoard = document.createElement('img')
        imageBoard.setAttribute('src','images/front1.jpeg')
        imageBoard.setAttribute('value', i)
        container.appendChild(imageBoard)
        }
        strtBtn.removeEventListener('click',createBoard)
}

















