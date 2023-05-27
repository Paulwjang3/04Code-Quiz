let timeEl = document.getElementById('timer');
let timeLeft = 75;
let scoreEL = document.getElementById('view-scores');
var start = document.getElementById('start');
var startButton = document.getElementById('start-btn');
var questionPage = document.getElementById('question');
var displayQuestion = document.getElementById('display-question');
var multiChoice = document.querySelectorAll('.answer-button');
var answerDisplay = document.getElementById('answerDisplay');
var answerBtn1 = document.getElementById('answer-btn1');
var answerBtn2 = document.getElementById('answer-btn2');
var answerBtn3 = document.getElementById('answer-btn3');
var answerBtn4 = document.getElementById('answer-btn4');
var checkAnswer = document.getElementById('check-answer');
var goodGame = document.getElementById('end-quiz');
var submit = document.getElementById('submit');
var highscore = document.getElementById('highscore');
var scoreHistory = document.getElementById('score-history');
var inits = document.getElementById('initials');
var questionNumber = 0;
var score = 0;
var questionCount = 1;

const questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: ['1. strings', '2. booleans', '3. alerts', '4.numbers'],
        correctAnswer: '3'
    },
    {
        question: 'The condition in an if / else statement is enclosed within ____.',
        answers: ['1. quotes', '2. curly bracelets', '3. parentheses', '4. square brackets'],
        correctAnswer: '2'
    },
    {
        question: 'Arrays in JavaScript can be used to store ______.',
        answers: ['1. numbers and strings', '2. other arrays', '3.booleans', '4. all of the above'],
        correctAnswer: '4'
    },
    {
        question: 'String values must be enclosed within ____ when being assigned to variables.',
        answers: ['1. commas', '2. curly brackets', '3. quotes', '4. parentheses'],
        correctAnswer: '3'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console.log'],
        correctAnswer: '4'
    }
];

function setTimer() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timeEl.textContent = "Time:" + timeLeft;

        if(timeLeft <= 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "Time is up!";
            goodGame.textContent = "Time is up!";
            
        } else if(questionCount >= questions.length +1) {
            clearInterval(timerInterval);

        }
    }, 1000);
}

function startQuiz () {
    start.style.display = "none";
    questionPage.style.display = "block";
    questionNumber = 0
    setTimer();
    askQuestion(questionNumber);
}

function askQuestion (x) {
    displayQuestion.textContent = questions[x].question;
    answerBtn1.textContent = questions[x].answers[0];
    answerBtn2.textContent = questions[x].answers[1];
    answerBtn3.textContent = questions[x].answers[2];
    answerBtn4.textContent = questions[x].answers[3];
    questionNumber = x;
};

function answerCheck (event) {
    event.preventDefault();

    checkAnswer.style.display = "block";
    
    
    if (questions[questionCount].correctAnswer === event.target.value) {
        answerDisplay.textContent = "Correct!";
    } else if (questions[questionCount].correctAnswer !== event.target.value) {
        timeLeft = timeLeft - 10;
        answerDisplay.textContent = "Wrong!";
    }

    if (questionCount < questions.length) {
        questionCount++;
    }

    askQuestion(questionCount);
}

function saveScore(event) {
    event.preventDefault();

    submit.style.display = "none";
    highscore.style.display = "block";

    scoreHistory.push({ initals: inits, score: timeLeft });


}

function historyScores() {
    localStorage.setItem("scoreHistory", JSON.stringify(scoreHistory));
}

function clearScores() {
    localStorage.clear();
}

startButton.addEventListener("click", startQuiz);

