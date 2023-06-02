let data = {
  score: 0,
  button1power: 1,
  button2power: 1,
};

let scoreDisplay = document.getElementById("scoreDisplay");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button1Text = document.getElementById("button1").textContent;
let button2Text = document.getElementById("button2").textContent;

const updateDisplay = function () {
  scoreDisplay.textContent = data.score;
  button1.textContent = `Add ${data.button1power} to score`;
  button2.textContent = `Add 1 to the power of button 1`;
};

const button1Click = function () {
  data.score += data.button1power;
  updateDisplay();
};

const button2Click = function () {
  data.button1power += 1;
  data.button2power += 1;
  updateDisplay();
};

button1.addEventListener("click", button1Click, false);
button2.addEventListener("click", button2Click, false);

// let score = 0;

// let scoreDisplay = document.getElementById("score");

// let addToScore = function () {
//   score += 1;
//   refresh();
// };

// let refresh = function () {
//   scoreDisplay.textContent = score;
// };

// let button1 = document.getElementById("button1");

// button1.addEventListener("click", addToScore, false);
