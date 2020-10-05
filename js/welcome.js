console.log("this your be welcome HTML")

// Go back and return input name to upperCase 
// let userInput = prompt('what name do you go by?')
const welcome = (name) =>{
    document.querySelector(".playerName").innerHTML= `,  ${userInput}! `;
}
// welcome()

// Add event listener to start game button
// to start game I want to clear existing elements and display the game board
const createCards = (numberOfCards) =>{
    for(let i=0; i<numberOfCards; i++){
        const card = document.createElement('div')
        console.log(card)
        document.querySelector('.cards').append(card)
    }
}
createCards(12)