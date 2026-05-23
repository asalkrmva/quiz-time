const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const questionContainer = document.getElementById("questionContainer");
const gameOverContainer = document.getElementById("gameOverContainer");
const correctNumber = document.getElementById('correctNumber');
const incorrectNumber = document.getElementById('incorrectNumber');
const tryAgainBtn = document.getElementById("tryAgainBtn");

if (!localStorage.getItem(STORAGE_KEYS.LOGIN)) {
  window.location.href = PAGES.login;
}

const params = new URLSearchParams(location.search);
const name = params.get('name');

let questions = QUIZZES.find((item) => item.category === name)?.questions || [];
let index = 0;
let current = questions[index];
let correct = 0;
let incorrect = 0;
let gameOverTitle = document.getElementById('gameOverTitle')

function renderQuestion(item) {
  // Reset UI
  questionElement.innerHTML = "";
  optionsContainer.innerHTML = "";
  optionsContainer.classList.remove("submitted");

  questionElement.innerText = item.question;

  const correctAnswer = item.options[item.answerIndex];

  for (const option of item.options) {
    const isCorrect = option === correctAnswer;
    const optionElement = document.createElement("div");
    optionElement.className = "option";
    optionElement.innerText = option;
    optionElement.classList.add(isCorrect ? "correct" : "none");

    optionElement.addEventListener("click", () => {
      optionElement.classList.add(isCorrect ? "none" : "incorrect");
      isCorrect ? correct++ : incorrect++;
      submitAnswer();
    });

    optionsContainer.appendChild(optionElement);
  }
}

function submitAnswer() {
  optionsContainer.classList.add("submitted");

  setTimeout(() => {
    current = nextQuestion();

    if (!current) {
      showGameOver();
    } else {
      renderQuestion(current);
    }
  }, 1000);
}

function showGameOver() {
  gameOverContainer.removeAttribute("hidden");
  questionContainer.setAttribute("hidden", "");

  correctNumber.innerText = correct;
  incorrectNumber.innerText = incorrect;

  if (correct > incorrect) {
    gameOverTitle.innerText = "GOOD GAME"
  } else {
    gameOverTitle.innerText = "GAME OVER"
  }

  confetti();
}

// tryAgainBtn.addEventListener('click', () => {
//   setTimeout(() => {
//     window.location.href = "select.html";
//   }, 300);
// });

tryAgainBtn.onclick = () => {
  navigateTo(PAGES.home);
};

function nextQuestion() {
  index++;
  if (index >= questions.length) {
    return false;
  }
  return questions[index];
}

renderQuestion(current);

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}