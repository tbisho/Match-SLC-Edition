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

// start game button
const button = document.querySelector('button').addEventListener('click',createBoard)
const container = document.querySelector('.container')
function createBoard(eventObject) {
    for (let i = 0; i<20; i++) {
    let image = document.querySelector('img')
    image.setAttribute('src','images/front1.jpeg')
    container.appendChild(image)
    }
}





