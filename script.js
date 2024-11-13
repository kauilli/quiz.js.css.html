// script.js

const questions = [
    {
        question: "O que significa HTML?",
        answers: ["HyperText Markup Language", "HyperText Markdown Language", "Home Tool Markup Language", "Hyper Trainer Marking Language"],
        correct: 0
    },
    {
        question: "Qual a função do CSS?",
        answers: ["Estilizar páginas web", "Interagir com o banco de dados", "Servir de backend", "Criar funcionalidades complexas"],
        correct: 0
    },
    {
        question: "Qual tag é usada para links em HTML?",
        answers: ["<div>", "<link>", "<a>", "<button>"],
        correct: 2
    },
    {
        question: "O que significa DOM em JavaScript?",
        answers: ["Document Object Model", "Data Orientation Model", "Display Output Mode", "Document Operation Mode"],
        correct: 0
    },
    {
        question: "Qual função é usada para exibir mensagens no console?",
        answers: ["console.log()", "print()", "display()", "log.console()"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

if (localStorage.getItem("quizScore")) {
    score = parseInt(localStorage.getItem("quizScore"));
}

document.getElementById("score").textContent = `Pontuação: ${score}`;

function showQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");

    questionElement.textContent = questions[currentQuestion].question;
    answersElement.innerHTML = "";

    questions[currentQuestion].answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => checkAnswer(index);
        answersElement.appendChild(button);
    });
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].correct) {
        score++;
        localStorage.setItem("quizScore", score);
        alert("Resposta Correta, parabéns!");
    } else {
        alert("Resposta Errada!");
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        alert(`Quiz terminado! Sua pontuação final é ${score}`);
        document.getElementById("next-button").style.display = "none";
    }

    document.getElementById("score").textContent = `Pontuação: ${score}`;
}

document.getElementById("restart-button").onclick = () => {
    score = 0;
    localStorage.setItem("quizScore", score);
    currentQuestion = 0;
    document.getElementById("next-button").style.display = "block";
    showQuestion();
    document.getElementById("score").textContent = `Pontuação: ${score}`;
};

showQuestion();
