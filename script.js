
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
    questionRef.innerText = questions[0].question;
    let answerOneRef = document.getElementById("answer_1");
    answerOneRef.innerText = questions[0].answer_1;
    let answerTwoRef = document.getElementById("answer_2");
    answerTwoRef.innerText = questions[0].answer_2;
    let answerThreeRef = document.getElementById("answer_3");
    answerThreeRef.innerText = questions[0].answer_3;
    let answerFourRef = document.getElementById("answer_4");
    answerFourRef.innerText = questions[0].answer_4;
}