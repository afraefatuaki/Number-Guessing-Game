// const number4 = document.getElementById('number4');
// const number5 = document.getElementById('number5');
// const number6 = document.getElementById('number6');
// let custom = document.getElementById('custom');
// const customInput = document.getElementById('customInput');
// let roundsContainer = document.getElementById('roundsContainer');
// let totalNumber = document.getElementById('roundTotal');
// let countingNumber = document.getElementById('roundCounting');
// let results = document.getElementById('results');
// let random = randomNumber()
// let total;
// let counting = 0;

// function chooseRound() {
//     if (number4.checked) {
//         total = 4
//     } else if (number5.checked) {
//         total = 5
//     } else if (number6.checked) {
//         total = 6
//     } else {
//         total = customInput.value
//     }

// }
// chooseRound()

// function guess() {

//     if (counting < total) {
//         console.log("keep playing")
//         compareNumber(random, theGuessedNumber.value)
//         //console.log(`Computer ${random} User ${theGuessedNumber.value} `)
//         counting++
//     } else if (counting == total) {
//         results.innerHTML = "Game Over"
//     }

//     totalNumber.innerHTML = total
//     countingNumber.innerHTML = counting
// }

// function randomNumber() {
//     return Math.floor(Math.random() * 100);
// }

// function compareNumber(random, userNum) {
//     if (random == userNum) {
//         results.innerHTML = "You're a winner"
//     } else if (random < userNum) {
//         results.innerHTML = `You need to guess lower than ${userNum}, Try again.`
//     } else if (random > userNum) {
//         results.innerHTML = `You need to guess higher  than ${userNum}, Try again.`
//     }
// }

// function reloadThePage() {
//     window.location.reload();
// }


let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (human, computer, target) => {
    if (Math.abs(human - target) <= Math.abs(computer - target)) {
        return true;
    } else {
        return false;
    }
};

const updateScore = (winner) => {
    if (winner = 'human') {
        humanScore++;
    } else {
        computerScore++;
    }

};

const advanceRound = () => {
    currentRoundNumber++;
};