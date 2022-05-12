let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = " "
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")
console.log(cards)

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    return randomNumber

    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }

}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard + secondCard]
    sum = firstCard + secondCard

    renderGame()

}

function renderGame() {

    cardsEl.textContent = "cards : "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "do u want to draw a new card?"
        console.log(message)
    } else if (sum === 21) {
        message = "congrats, You've got BlackJack! 🥳"
        hasBlackJack = true
    } else {
        message = "game over habibi"
        isAlive = false

        messageEl.textContent = message
    }
}

function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()


}






