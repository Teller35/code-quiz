// // Body element reference
var timeEl = document.querySelector(".time");
var mainEl = document.querySelector(".welcome");
var answerEl = document.querySelector(".info");
var startBtn = document.querySelector("#start");
var scoreBtn = document.querySelector(".highscore");
var restartBtn = document.querySelector(".reset");
var resultEl = document.querySelector(".result");
var endEl = document.querySelector(".end");
var number = 0;
var correct = 0;
var wrong = 0;
var timeLeft = 29;
var timeInterval;
var questions = [
    {
     q: "Commonly used data types DO Not include?",
     o: ["Strings", "Booleans", "Alerts", "Numbers"],
     a: "3"
    },
    {
     q: "A very useful tool used during development and debugging for printing content to the debugger is?",
     o: ["JavaScrip", "Console.log", "Terminal/Bash", "For Loops"],
     a: "2"
    },
    {
      q: "String values must be enclosed within ________ when being assigned to variables?",
      o: ["Quotes", "Commas", "Curly Brackets",  "Parenthesis"],
      a: "1"
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
    timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timeEl.textContent = timeLeft;
            timeLeft--;
        }
        else {
            timeEl.textContent = "";
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}

function quiz() {
    if (number === questions.length) {
        endQuiz();
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
    resultEl.remove();
    clearInterval(timeInterval);
    mainEl.textContent = "Let's see how you did!";
    answerEl.textContent = "You got " + correct + " correct and " + wrong + " wrong!";
    if (correct < score) {
        
        endEl.textContent = "You did not bet the high score try again!";
    }
    else {
    var input = document.createElement("input");
    input.setAttribute("name", "initials")
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Enter Your Initials!");
    input.className = "input";
    var submit = document.createElement("button");
    submit.className = "submit";
    submit.setAttribute("type", "submit");
    submit.textContent = "Submit";
    endEl.appendChild(input);
    endEl.appendChild(submit);
    }
}

saveScore = function(event) {
    event.preventDefault();
    var target = event.target;
    if(target.matches(".submit")) {
        var form = document.querySelector(".input");
        var playInitials = form.value;
        if(!playInitials) {
            alert("Save your hard work!");
            return;
        }
        else {
            localStorage.setItem("initials", playInitials);
            localStorage.setItem("score", correct);
        }
    }
}

var score = localStorage.getItem("score");
function highScores() {
    var initials = localStorage.getItem("initials");
    if (!score || !initials) {
        alert("No high score yet!");
        return;
    }
    else {
        alert("Highscore belongs to " + initials + " with a score of " + score + "!");
    }
}

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", startQuiz);
scoreBtn.addEventListener("click", highScores);
answerEl.addEventListener("click", answerGuess);
endEl.addEventListener("click", saveScore);


