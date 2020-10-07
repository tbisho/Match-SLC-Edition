console.log('sanitycheck')
cardArray = ['match-1.jpeg','match-2.jpeg', 'match-3.jpeg', 'match-4.jpeg','match-5.jpeg','match-6.jpeg','match-1.jpeg','match-2.jpeg', 'match-3.jpeg', 'match-4.jpeg','match-5.jpeg','match-6.jpeg']

// grid container
const container = document.querySelector('.container')
// create game board with back of card image
function getCards(){
    for (let i =0; i<cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src','images/display1.jpeg')
        card.setAttribute('value', i)
        // card.addEventListener('click', displayImage)
        // append blank card to DOM
        container.appendChild(card)
    }
}
getCards()



// // start game button & DOM elements for event listeners

// const container = document.querySelector('.container')
// container.addEventListener('click', displayImage)
// let imageBoard = [];
// let images = document.querySelectorAll('.imageNotFlipped')
// let strtBtn = document.querySelector('.strtBtn')
// strtBtn.addEventListener('click',createBoard)
// let firstCard;
// let secondCard;
// let arrayofFlipped = [];
// let flippedImages = document.querySelectorAll('.flipped')
// let shuffledCards;

// // container.addEventListener

// function createBoard(){ 
    
//     for (let i = 0; i<4; i++) {
//         images[i].setAttribute('src','images/display1.jpeg')
//         imageBoard.push(images)
//     }
//     // strtBtn.removeEventListener('click',createBoard)
//     return imageBoard
// }

// // display RANDOM image when cards are clicked
// function displayImage(eventObject){
//     // the image that I click
//     // console.log(eventObject.target)
//     // change the image 
//       for (let i = 1; i<6; i++){
//         // Can I generate a random image src and apply it as an attribute? 
//         randomImage = 
//         eventObject.target.setAttribute('src','images/match-1.jpeg')
//       }
      
//     // console.log(eventObject.target.getAttribute('value'))
//     if (firstCard === undefined){
//         firstCard = eventObject.target.getAttribute('value')
//     } else if (secondCard === undefined){
//         secondCard = eventObject.target.getAttribute('value')
//     }
//     console.log('first card value' + firstCard)
//     console.log('second card value' + secondCard)
//     // conditional check if images are a match by their values
//     if (firstCard === secondCard){
        
//     } else {
        
//     }
// //    how do I get random images to show up when I click an image???

// }
// const createArrayofFlipped = () => {
//     for (let i = 0; i < 6; i++){
//     arrayofFlipped.push(flippedImages[i])
//     console.log(arrayofFlipped)
//     // shuffle function?
// }
// }















