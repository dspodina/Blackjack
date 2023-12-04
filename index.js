let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let startGameBtn = document.getElementById("start-game-btn");
let newCardBtn = document.getElementById("new-card-btn");
let innerTextEl = document.getElementById("inner-text");

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 11) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startOrNewGame() {

  if (!isAlive || hasBlackJack) {
    startGameBtn.textContent = "New Game";
    newCardBtn.style.display = "inline";
    innerTextEl.style.display = "block";
    isAlive = true;
    hasBlackJack = false;
    startGame();

  } else {
        startGameBtn.textContent = "Start the game";
        newCardBtn.style.display = "none"; 
        innerTextEl.style.display = "none"; 
        resetGame();
  }
}


function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function resetGame() {
  isAlive = false;
  sum = 0;
  cards = [];
  message = "";
  messageEl.textContent = "";
  sumEl.textContent = "";
  cardsEl.textContent = "";
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
      cardsEl.textContent += cards[i] + " ";
    }
  
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
      message = "Add one more card";
      messageEl.style.color = ""; // Reset text color to default
    } else if (sum === 21) {
      message = "You've got Blackjack!";
      hasBlackJack = true;
      newCardBtn.style.display = "none";
      messageEl.style.color = "green"; // Set text color to green
    } else {
      message = "You're out of the game!";
      isAlive = false;
      newCardBtn.style.display = "none";
      messageEl.style.color = "red"; // Set text color to red
    }
    messageEl.textContent = message;
  }
  

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
