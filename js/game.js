'use strict';

let closedBook = document.querySelector('#closed-book');
let openjack = document.querySelector('#open-jack');
let balloonOne = document.querySelector('#balloonOne');
let balloonTwo = document.querySelector('#balloonTwo');
let balloonThree = document.querySelector('#balloonThree');

let dbtwo = [
  {
    question: `In reply to an inquiry about the animals on his farm, the farmer says: “I only ever keep sheep, goats, and horses. In fact, at the moment they are all sheep bar three, all goats bar four, and all horses bar five.” How many goats does he have?`
    , answer: 2
  }
  , {
    question: `If a hen and a half lay an egg and a half in a day and a half, how many eggs will half a dozen hens lay in half a dozen days?`
    , answer: 24
  }
  , {
    question: `My twin lives at the reverse of my house number. The difference between our house numbers ends in two. What are the lowest possible numbers of our house numbers?`
    , answer: 72
  }
  , {
    question: `I have a calculator that can display ten digits. How many different ten-digit numbers can I type using just the 0-9 keys once each, and moving from one keypress to the next using the knight’s move in chess?`
    , answer: 4
  }
  , {
    question: `A grandfather, two fathers and two sons went to the movie theater together and everyone bought one movie ticket each. How many tickets did they buy in total?`
    , answer: 3
  }
  , {
    question: `A duck was given $9, a spider was given $36, a bee was given $27. Based off of this information, how much money would be given to a cat?`
    , answer: 18
  }
];

console.log(dbtwo);

function renderPassword(password) {
  let pPassword = document.createElement('p');
  pPassword.textContent = password;
  balloonOne.appendChild(pPassword);
}

function renderPasswordTwo(password) {
  let pPassword = document.createElement('p');
  pPassword.textContent = password;
  balloonTwo.appendChild(pPassword);
}

function bookPuzzle(event) {
  let randomNum = Math.floor(Math.random() * dbtwo.length);
  let randomQuestion = dbtwo[randomNum].question;
  let bookPuzzleAnswer = prompt(randomQuestion);
  console.log(bookPuzzleAnswer);
  if (parseInt(bookPuzzleAnswer) === dbtwo[randomNum].answer) {
    renderPassword(bookPuzzleAnswer);
    event.target.removeEventListener('click', bookPuzzle);
  } else {
    alert('you guessed wrong');
  }
}

closedBook.addEventListener('click', bookPuzzle);

function jackPuzzle(event) {
  let randomNum = Math.floor(Math.random() * dbtwo.length);
  let randomQuestion = dbtwo[randomNum].question;
  let jackPuzzleAnswer = prompt(randomQuestion);
  console.log(jackPuzzleAnswer);
  if (parseInt(jackPuzzleAnswer) === dbtwo[randomNum].answer) {
    renderPasswordTwo(jackPuzzleAnswer);
    event.target.removeEventListener('click', jackPuzzle);
  } else {
    alert('you guessed wrong');
  }
}

openjack.addEventListener('click', jackPuzzle);
