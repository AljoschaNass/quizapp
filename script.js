
function init() {
    getFromLocalStorage();
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