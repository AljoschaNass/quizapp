let questionNumber = 0;
let counter = 0;

function init() {
    getFromLocalStorage();
    loadFirstQuestion();
}

function saveToLocalStorage(){
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

function getFromLocalStorage() {
    let myHighscores = JSON.parse(localStorage.getItem("highscores"));
    if(myHighscores != null) {
        highscores = myHighscores;        
    }
}

function loadFirstQuestion() {
    let questionRef = document.getElementById("question");
    questionRef.innerText = questions[questionNumber].question;
    let answerOneRef = document.getElementById("answer_1");
    answerOneRef.innerText = questions[questionNumber].answer_1;
    let answerTwoRef = document.getElementById("answer_2");
    answerTwoRef.innerText = questions[questionNumber].answer_2;
    let answerThreeRef = document.getElementById("answer_3");
    answerThreeRef.innerText = questions[questionNumber].answer_3;
    let answerFourRef = document.getElementById("answer_4");
    answerFourRef.innerText = questions[questionNumber].answer_4;
}

function nextQuestion() {
    document.getElementById("answer_1").parentNode.classList.remove("bg_green", "bg_red");
    document.getElementById("answer_2").parentNode.classList.remove("bg_green", "bg_red");
    document.getElementById("answer_3").parentNode.classList.remove("bg_green", "bg_red");
    document.getElementById("answer_4").parentNode.classList.remove("bg_green", "bg_red");
    questionNumber++;
    loadFirstQuestion();
}

function selectedAnswer(num) {
    let selectetAnswer = document.getElementById("answer_" + num);
    
    if(questions[questionNumber].correctAnswer == num) {
        selectetAnswer.parentNode.classList.add("bg_green");
        counter++;
        console.log(counter);
        
    } else{
        selectetAnswer.parentNode.classList.add("bg_red");
        let correctAnswer = document.getElementById("answer_" + questions[questionNumber].correctAnswer);
        correctAnswer.parentNode.classList.add("bg_green");
    }
}