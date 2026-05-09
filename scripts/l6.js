const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const endGameContainer = document.getElementById("end-game-container");

const words = [
  "cat",
  "dog",
  "pizza",
  "banana",
  "computer",
  "javascript",
  "school",
  "flower",
  "music",
  "coffee"
];

let randomWord;
let score = 0;
let time = 10;

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerText = randomWord;
}

function updateScore() {
  score++;
  scoreElement.innerText = score;
}

function updateTime() {
  time--;
  timeElement.innerText = time;

  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endGameContainer.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Play Again</button>
  `;

  endGameContainer.style.display = "flex";
}

text.addEventListener("input", function () {
  if (text.value === randomWord) {
    updateScore();
    addWordToDOM();
    time += 5;
    text.value = "";
  }
});

addWordToDOM();

const timeInterval = setInterval(updateTime, 1000);