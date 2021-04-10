// // Body element reference
var timeEl = document.getElementById("time");
var mainEl = document.getElementsByClassName("welcome");
var startBtn =document.getElementById("start");
var highScores = [];
var score = 0;
var questions = [
    {
     question: "Commonly used data types DO Not include?",
     options: ["Strings", "Booleans", "Alerts", "Numbers"],
     answer: "3"
    },
    {
     question: "A very useful tool used during development and debugging for printing content to the debugger is?",
     options: ["JavaScrip", "Terminal/Bash", "For Loops", "Console.log"],
     answer: "4"
    },
    {
      question: "String values must be enclosed within ________ when being assigned to variables?",
      options: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
      answer: "3"
    },
    {
      question: "Arrays in JavaScript can be used to store _________?",
      options: ["Number and Strings", "Other Arrays", "Booleans", "All Of The Above"],
      answer: "4"
    },
    {
      question: "The condition in an if / else statement is enclosed with _________?",
      options: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
      answer: "3"
    },
]

function countdown() {
    var timeLeft = 45;
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timeEl.textContent = timeLeft;
            timeLeft--;
        }
        else {
            timeEl.textContent = "";
            clearInterval(timeInterval);
        }
    }, 1000);
}

var quiz = function(){
    for (var i = 0; i < questions.length; i++) {
        var answer = confirm(questions[i].question);
        
    }
}


startBtn.onclick = quiz;