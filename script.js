let questionNumber = 0;
let counter = 0;

function init() {
    getFromLocalStorage();
    selectQuiz(1);
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

function startQuiz() {
    let startScreen = document.getElementById("quiz_start_screen");
    startScreen.classList.add("d_none");

    let questionScreen = document.getElementById("quiz_question_screen");
    questionScreen.classList.remove("d_none");
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
    let disableBtn = document.getElementById("button_next");
    disableBtn.disabled = true;
    disableBtn.classList.toggle("btn_disabled");
    questionNumber++;
    showEndScreen();
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
    let disableBtn = document.getElementById("button_next");
    disableBtn.disabled = false;
    disableBtn.classList.toggle("btn_disabled");
}

function showEndScreen() {
    if(questionNumber == 10 || questionNumber == 20 || questionNumber == 30 || questionNumber == 40) {
        showScore();

        let questionScreen = document.getElementById("quiz_question_screen");
        questionScreen.classList.add("d_none");

        let endScreen = document.getElementById("quiz_end_screen");
        endScreen.classList.remove("d_none");
    }
}

function showScore() {
    let currentScore = document.getElementById("score");
    currentScore.innerHTML = counter + "/10";
}

function selectQuiz(num) {
    let quizTitle = document.getElementById("quiz_title");

    let htmlTheme = document.getElementById("html_theme");
    let cssTheme = document.getElementById("css_theme");
    let jsTheme = document.getElementById("js_theme");
    let javaTheme = document.getElementById("java_theme");

    if(num == 1) {
        questionNumber = 0;
        quizTitle.innerHTML = templateQuizHtml();
        htmlTheme.classList.add("border_left");
        cssTheme.classList.remove("border_left");
        jsTheme.classList.remove("border_left");
        javaTheme.classList.remove("border_left");
    } if (num == 2) {
        questionNumber = 10;
        quizTitle.innerHTML = templateQuizCss();
        htmlTheme.classList.remove("border_left");
        cssTheme.classList.add("border_left");
        jsTheme.classList.remove("border_left");
        javaTheme.classList.remove("border_left");
    } if (num == 3) {
        questionNumber = 20;
        quizTitle.innerHTML = templateQuizJs();
        htmlTheme.classList.remove("border_left");
        cssTheme.classList.remove("border_left");
        jsTheme.classList.add("border_left");
        javaTheme.classList.remove("border_left");
    } if (num == 4) {
        questionNumber = 30;
        quizTitle.innerHTML = templateQuizJava();
        htmlTheme.classList.remove("border_left");
        cssTheme.classList.remove("border_left");
        jsTheme.classList.remove("border_left");
        javaTheme.classList.add("border_left");
    }
}