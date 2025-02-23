let questionNumber = 0;
let counter = 0;

function init() {
    getFromLocalStorage();
    selectQuiz(1);
    loadQuestion();
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
    showQuestionScreen();
}

function loadQuestion() {
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
    removeBackground();
    disableNextButton();
    questionNumber++;
    endScreen();
    loadQuestion();
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
    enableNextButton();
}

function endScreen() {
    if(questionNumber == 10 || questionNumber == 20 || questionNumber == 30 || questionNumber == 40) {
        showScore();

        showEndScreen();
    }
}

function showScore() {
    let currentScore = document.getElementById("score");
    currentScore.innerHTML = counter + "/10";
}

function selectQuiz(num) {
    showStartScreen();
    let quizTitle = document.getElementById("quiz_title");
    let quizScore = document.getElementById("quiz_score");
    let htmlTheme = document.getElementById("html_theme");
    let cssTheme = document.getElementById("css_theme");
    let jsTheme = document.getElementById("js_theme");
    let javaTheme = document.getElementById("java_theme");
    if(num == 1) {
        htmlQuiz(quizTitle, quizScore, htmlTheme, cssTheme, jsTheme, javaTheme);
    } if (num == 2) {
        cssQuiz(quizTitle, quizScore, htmlTheme, cssTheme, jsTheme, javaTheme);
    } if (num == 3) {
        jsQuiz(quizTitle, quizScore, htmlTheme, cssTheme, jsTheme, javaTheme);
    } if (num == 4) {
        javaQuiz(quizTitle, quizScore, htmlTheme, cssTheme, jsTheme, javaTheme);
    }
}

function replayQuiz() {
    showStartScreen();
    counter = 0;
}

function showStartScreen() {
    let startScreen = document.getElementById("quiz_start_screen");
    startScreen.classList.remove("d_none");
    let questionScreen = document.getElementById("quiz_question_screen");
    questionScreen.classList.add("d_none");
    let endScreen = document.getElementById("quiz_end_screen");
    endScreen.classList.add("d_none");
}

function showQuestionScreen() {
    let startScreen = document.getElementById("quiz_start_screen");
    startScreen.classList.add("d_none");
    let questionScreen = document.getElementById("quiz_question_screen");
    questionScreen.classList.remove("d_none");
    let endScreen = document.getElementById("quiz_end_screen");
    endScreen.classList.add("d_none");
}

function showEndScreen() {
    let startScreen = document.getElementById("quiz_start_screen");
    startScreen.classList.add("d_none");
    let questionScreen = document.getElementById("quiz_question_screen");
    questionScreen.classList.add("d_none");
    let endScreen = document.getElementById("quiz_end_screen");
    endScreen.classList.remove("d_none");
}

function removeBackground() {
    document.getElementById("answer_1").parentNode.classList.remove("bg_green", "bg_red");
    document.getElementById("answer_2").parentNode.classList.remove("bg_green", "bg_red");
    document.getElementById("answer_3").parentNode.classList.remove("bg_green", "bg_red");
    document.getElementById("answer_4").parentNode.classList.remove("bg_green", "bg_red");
}

function disableNextButton() {
    let disableBtn = document.getElementById("button_next");
    disableBtn.disabled = true;
    disableBtn.classList.add("btn_disabled");
}

function enableNextButton() {
    let disableBtn = document.getElementById("button_next");
    disableBtn.disabled = false;
    disableBtn.classList.remove("btn_disabled");
}

function htmlQuiz(quizTitle, quizScore, htmlTheme, cssTheme, jsTheme, javaTheme) {
    questionNumber = 0;
    quizTitle.innerHTML = templateQuizHtml();
    quizScore.innerHTML = templateScoreHtml();
    htmlTheme.classList.add("border_left");
    cssTheme.classList.remove("border_left");
    jsTheme.classList.remove("border_left");
    javaTheme.classList.remove("border_left");
}

function cssQuiz(quizTitle, quizScore, htmlTheme, cssTheme, jsTheme, javaTheme) {
    questionNumber = 10;
    quizTitle.innerHTML = templateQuizCss();
    quizScore.innerHTML = templateScoreCss();
    htmlTheme.classList.remove("border_left");
    cssTheme.classList.add("border_left");
    jsTheme.classList.remove("border_left");
    javaTheme.classList.remove("border_left");
}

function jsQuiz(quizTitle, quizScore, htmlTheme, cssTheme, jsTheme, javaTheme) {
    questionNumber = 20;
    quizTitle.innerHTML = templateQuizJs();
    quizScore.innerHTML = templateScoreJs();
    htmlTheme.classList.remove("border_left");
    cssTheme.classList.remove("border_left");
    jsTheme.classList.add("border_left");
    javaTheme.classList.remove("border_left");
}

function javaQuiz(quizTitle, quizScore, htmlTheme, cssTheme, jsTheme, javaTheme) {
    questionNumber = 30;
    quizTitle.innerHTML = templateQuizJava();
    quizScore.innerHTML = templateScoreJava();
    htmlTheme.classList.remove("border_left");
    cssTheme.classList.remove("border_left");
    jsTheme.classList.remove("border_left");
    javaTheme.classList.add("border_left");
}