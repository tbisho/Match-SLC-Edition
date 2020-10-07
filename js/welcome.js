
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
// container.addEventListener

const container = document.querySelector('.container')

let imageArray=['images/match-1.jpeg','images/match-1.jpeg','images/match-2.jpeg','images/match-2.jpeg','images/match-3.jpeg','images/match-3.jpeg', 'images/match-4.jpeg', 'images/match-4.jpeg','images/match-5.jpeg','images/match-5.jpeg','images/match-6.jpeg','images/match-6.jpeg']
    // Create Board
function createBoard(){ 
    for (let i = 1; i<13; i++) {
        let image = document.createElement('img')
        image.setAttribute('src','images/back.jpeg')
        image.setAttribute('value', i)
        container.appendChild(image)
    }
    
}
createBoard()

container.addEventListener('click', showCards)
function showCards(event){
    chosenCards = event.target.getAttribute('value')
    console.log(chosenCards)
    // when a card is clicked 
    event.target.setAttribute[randomImage]
    // if randomImage.target src matches from 2 clicked cards, then it's a match
}

    // check for match

    // shuffle board 
    function shuffleBoard(){
        var m = imageArray.length,t, i;
        while(m) {
            i = Math.floor(Math.random() * m--);
            t = imageArray[m];
            imageArray[m] = imageArray[i]
            imageArray[i] = t;
            return imageArray 
        }
    }
    shuffleBoard()
    console.log(imageArray)
   

    // check score











// display RANDOM image when cards are clicked
function displayImage(eventObject){
    // the image that I click
    // console.log(eventObject.target)
    // change the image 
      for (let i = 1; i<6; i++){
        // Can I generate a random image src and apply it as an attribute? 
        randomImage = 
        eventObject.target.setAttribute('src','images/match-1.jpeg')
      }
      
    // console.log(eventObject.target.getAttribute('value'))
    if (firstCard === undefined){
        firstCard = eventObject.target.getAttribute('value')
    } else if (secondCard === undefined){
        secondCard = eventObject.target.getAttribute('value')
    }
    console.log('first card value' + firstCard)
    console.log('second card value' + secondCard)
    // conditional check if images are a match by their values
    if (firstCard === secondCard){
        // console.log("it's a match!")
        // do something here if it's a match
    } else {
        // console.log("these cards do not match")
        // if it's not a match do something else
    }
//    how do I get random images to show up when I click an image???
}
const createArrayofFlipped = () => {
    for (let i = 0; i < 6; i++){
    arrayofFlipped.push(flippedImages[i])
    console.log(arrayofFlipped)
    // shuffle function?
}
}

