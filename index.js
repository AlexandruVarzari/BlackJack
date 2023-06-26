let firstCard = randomCard();
let secondCard = randomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = `Cards:`;
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += ` ${cards[i]}`;
  }
  sumEl.textContent = `Sum: ${sum}`;

  if (sum <= 20) {
    message = "Do you want to draw another one?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function randomCard() {
  return Math.floor(Math.random() * 11) + 1;
}

function newCard() {
  let draw = randomCard();
  sum += draw;
  cards.push(draw);
  renderGame();
}
