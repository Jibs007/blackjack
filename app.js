let player = {
    name: "Jibola",
    chips: 1000
}
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false;
let isAlive = true;
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")


function getRandomCard() {
    let randomNumber = Math.floor( Math.random() *12 ) + 1
    if(randomNumber === 1){
        return 11
    } else if(randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards : "
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum < 21) {
        messageEl.textContent = "Do you want to draw a new card?"
    } else if(sum === 21) {
        messageEl.textContent = "Youv'e got Blackjack!"
        hasBlackjack = true
    } else {
        messageEl.textContent = "You're out of the game....."
        isAlive = false
    }
}

function newCard() {
    if (isAlive && hasBlackjack === false) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        console.log(cards)
        renderGame()
    }
}