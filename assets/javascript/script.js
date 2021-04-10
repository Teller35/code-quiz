// // Body element reference
var timeEl = document.getElementsByClassName("timer");
var mainEl = document.getElementsByClassName("main");
var message = "Congratulations you got to a message and timer!"
// var questions = [
//     {
//         q: "Commonly used data types DO Not include?",
//         o: {
//             a: "Strings",
//             b: "Booleans",
//             c: "Alerts",
//             d: "Numbers",
//         },
//         a: "c"
//     },
//     {
//         q: "A very useful tool used during development and debugging for printing content to the debugger is?",
//         o: {
//             a: "JavaScrip",
//             b: "Terminal/Bash",
//             c: "For Loops",
//             d: "Console.log",
//         },
//         a: "d"
//     },
//     {
//         q: "String values must be enclosed within ________ when being assigned to variables?",
//         o: {
//             a: "Commas",
//             b: "Curly Brackets",
//             c: "Quotes",
//             d: "Parenthesis",
//         },
//         a: "c"
//     },
//     {
//         q: "Arrays in JavaScript can be used to store _________?",
//         o: {
//             a: "Number and Strings",
//             b: "Other Arrays",
//             c: "Booleans",
//             d: "All Of The Above",
//         },
//         a: "d"
//     },
//     {
//         q: "The condition in an if / else statement is enclosed with _________?",
//         o: {
//             a: "Quotes",
//             b: "Curly Brackets",
//             c: "Parenthesis",
//             d: "Square Brackets",
//         },
//         a: "c"
//     },
// ]

function countdown() {
    var timeLeft = 10;
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timeEl.textContent = "Time: " + timeLeft;
        }
        else {
            timeEl.textContent = "";
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000)
}

function displayMessage() {
    mainEl.textContent = message;
}

startBtn.onclick = countdown;