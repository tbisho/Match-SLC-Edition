// 1) display cards
// 2) values associated with images I created
// 3) event listeners for Game
// 4) how many cards have been clicked?
// 5) if the card is clicked show the value
// 6) if the card has been clicked, show if the same card has been clicked
// 7) remove evnet listener after match

const container = document.querySelector('.container')
const arrayOfValues = ['images/match-1.jpeg', 'images/match-2.jpeg','images/match-3.jpeg', 'images/match-4.jpeg','images/match-5.jpeg','images/match-6.jpeg']
console.log(arrayOfValues.length)
const arrayOfPositions = [0,1,2,3,4,5,6,7,8,9,10,11]


let imageArray=['images/match-1.jpeg', 'images/match-2.jpeg','images/match-3.jpeg', 'images/match-4.jpeg','images/match-5.jpeg','images/match-6.jpeg','images/match-6.jpeg']
    // Create Board
    

    
    for (let i = 0; i<12; i++) {
        image = document.createElement('div')
        image.setAttribute('position', i)
        image.setAttribute('class','card')
        // let imageContent = document.createElement('div')
        // console.log(imageContent)
        // imageContent.setAttribute('class','imageContent')
        container.appendChild(image)
        // image.appendChild(imageContent) 
        
        image.addEventListener('click', checkForMatch)
    }

    
    // applying 6 values to all divs with class of card
    for (let i = 0; i<arrayOfValues.length; i++){
        let randomPositionOne = Math.floor(Math.random()* arrayOfPositions.length)
        let cards = document.querySelectorAll('.card')
        // cards is an array of the card elements in this for loop
        cards[arrayOfPositions[randomPositionOne]].setAttribute('value', arrayOfValues[i])
        cards[arrayOfPositions[randomPositionOne]].innerText += "/" + arrayOfValues[i]
        // find index to remove from list of positions so it doesn't duplicate
        arrayOfPositions.splice(randomPositionOne,1)
        let randomPositionTwo = Math.floor(Math.random()* arrayOfPositions.length)
        // cards is an array of the card elements in this for loop
        cards[arrayOfPositions[randomPositionTwo]].setAttribute('value', arrayOfValues[i])
        cards[arrayOfPositions[randomPositionTwo]].innerText += "/" + arrayOfValues[i]
        // find index to remove from list of positions so it doesn't duplicate
        arrayOfPositions.splice(randomPositionTwo,1)
    }
let firstCard;
let secondCard;
let flipCount = 0;
let matchCount = 0;
function checkForMatch(event){
    flipCount++;
    this.style.color ='white'
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
            } else {
                cards[firstCard.position].style.color = 'transparent'
                cards[secondCard.position].style.color = 'transparent'
            }
            flipCount= 0
        }
        if (matchCount === 6){
            alert('you win!')
        }
    },500)
    

}
// container.addEventListener('click', flipCountClicks)

// container.addEventListener('click', showCards)
// function showCards(event){
//     chosenCards = event.target.getAttribute('value')
//     console.log(chosenCards)
//     // when a card is clicked 
//     event.target.setAttribute[randomImage]
//     // if randomImage.target src matches from 2 clicked cards, then it's a match
// }

    // check for match

    // // shuffle board 
    // function shuffleBoard(){
    //     var m = imageArray.length,t, i;
    //     while(m) {
    //         i = Math.floor(Math.random() * m--);
    //         t = imageArray[m];
    //         imageArray[m] = imageArray[i]
    //         imageArray[i] = t;
    //         return imageArray 
    //     }
    // }
   
    
   

    // check score











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
//         // console.log("it's a match!")
//         // do something here if it's a match
//     } else {
//         // console.log("these cards do not match")
//         // if it's not a match do something else
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

