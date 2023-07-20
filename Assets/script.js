
document.querySelector(".class")
document.getElementById('Id')
variable.textContent = "text content"
var questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            {text: "Hypertext Markup Language", correct: true},
            {text: "Hypertext Making Language", correct: false},
            {text: "Hypertext Markup Logic", correct: false},
            {text: "Hypertense Markup Language", correct: false},
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            {text: "Computer Science Statistics", correct: false},
            {text: "Computer Science Strategies", correct: false},
            {text: "Cascading Style Selection", correct: false},
            {text: "Cascading Style Sheets", correct: true},
        ]  
    },
    {
        question: "What does JS stand for?",
        answers: [
            {text: "JavaStyle", correct: false},
            {text: "JavaStandard", correct: false},
            {text: "JavaScript", correct: true,}
            {text: "JavaScripture", correct: false},
        ]
    },
    {
        question: "Which terms are used in HTML?",
        answers: [
            {text: "var, function, join", correct: false},
            {text: "head, hain, body", correct: true},
            {text: "alert, prompt, confirm", correct: false},
            {text: "font-size, color, height", correct: false},
        ]
    }
];

var questionElement = document.getElementById("question");
var answerButton = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;

var startQuiz = function (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

var showQuestion = function (){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNum + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();