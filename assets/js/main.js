const number4 = document.getElementById('number4');
const number5 = document.getElementById('number5');
const number6 = document.getElementById('number6');
let custom = document.getElementById('custom');
const customInput = document.getElementById('customInput');
let theGuessedNumber = document.getElementById('theGuessedNumber');
let roundsContainer = document.getElementById('roundsContainer');

let totalNumber = document.getElementById('roundTotal');
let countingNumber = document.getElementById('roundCounting');

let results = document.getElementById('results');

let random = randomNumber()

let total;
let counting;

function chooseRound() {
    if (number4.checked) {
        total = 4
    } else if (number5.checked) {
        total = 5
    } else if (number6.checked) {
        total = 6
    } else {
        total = customInput.value
    }
    counting = total;
}

function guess() {

    totalNumber.innerHTML = total
    countingNumber.innerHTML = counting

    if (counting === 0) {
        results.innerHTML = "Game Over"

    } else {
        console.log("keep playing")
        compareNumber(random, theGuessedNumber.value)
    }
    counting--

}

function randomNumber() {
    return Math.floor(Math.random() * 100);
}

function compareNumber(random, userNum) {
    if (random === userNum) {
        results.innerHTML = "You're a winner"
    } else if (random < userNum) {
        results.innerHTML = `You need to guess lower than ${userNum}, Try again.`
    } else if (random > userNum) {
        results.innerHTML = `You need to guess higher  than ${userNum}, Try again.`
    }
}


