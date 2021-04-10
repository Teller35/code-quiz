// // Body element reference
var timeEl = document.querySelector("#time");
var mainEl = document.querySelector(".welcome");
var answerEl = document.querySelector(".info");
var startBtn = document.querySelector("#start");
var resultEl = document.querySelector(".result");
var number = 0;
var highScores = [];
var score = 0;
var game = true;
var correct = 0;
var wrong = 0;
var timeLeft = 45;
var questions = [
    {
     q: "Commonly used data types DO Not include?",
     o: ["Strings", "Booleans", "Alerts", "Numbers"],
     a: "3"
    },
    {
     q: "A very useful tool used during development and debugging for printing content to the debugger is?",
     o: ["JavaScrip", "Terminal/Bash", "For Loops", "Console.log"],
     a: "4"
    },
    {
      q: "String values must be enclosed within ________ when being assigned to variables?",
      o: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
      a: "3"
    },
    {
      q: "Arrays in JavaScript can be used to store _________?",
      o: ["Number and Strings", "Other Arrays", "Booleans", "All Of The Above"],
      a: "4"
    },
    {
      q: "The condition in an if / else statement is enclosed with _________?",
      o: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
      a: "3"
    },
]
function startQuiz() {
    countdown();
    startBtn.remove();
    quiz();
}
function countdown() {
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timeEl.textContent = timeLeft;
            timeLeft--;
        }
        else {
            timeEl.textContent = "";
            clearInterval(timeInterval);
            // endQuiz();
        }
    }, 1000);
}

function quiz() {
    if (number === questions.length) {
        game = false;
    }
    else {
    var question = questions[number].q;
    var options = questions[number].o;
    answer = questions[number].a;
    mainEl.textContent = question;
    answerEl.textContent = "";
    for (var i = 0; i < options.length; i++) {
        var buttonEl = document.createElement("button");
        buttonEl.className = "btn guess";
        buttonEl.setAttribute("button-id", [i+1]);
        buttonEl.textContent = `${[i+1]}. ${options[i]}`;
        answerEl.appendChild(buttonEl);
    }
    number++;
}
}

answerGuess = function(event) {
    var targetEl = event.target;
    if(targetEl.matches(".guess")) {
        var guessEl = targetEl.getAttribute("button-id");
        guessCorrect(guessEl);
    }
}

guessCorrect = function(guessEl) {
    if(guessEl === answer) {
        timeLeft = timeLeft + 3;
        correct++;
        resultEl.textContent = "Correct!";
        quiz();
    }
    else {
        timeLeft = timeLeft - 5;
        wrong++;
        resultEl.textContent = "Wrong!";
        quiz();
    }
}

endQuiz = function() {

}


startBtn.addEventListener("click", startQuiz);
answerEl.addEventListener("click", answerGuess);
