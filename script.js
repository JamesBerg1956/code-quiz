//Declare DOM variables
var nav = document.getElementById("nav");
var viewHighScores = document.getElementById("viewHighScores");
var timeSpan = document.getElementById("timeSpan");
var gameStartContainer = document.getElementById("gameStartContainer");
var startQuizBtn = document.getElementById("startQuizBtn");
var quizContainer = document.getElementById("quizContainer");
var QuestionH2 = document.getElementById("QuestionH2");
var quizList = document.getElementById("quizList");
var answerFeedback = document.getElementById("answerFeedback");
var gameEndContainer = document.getElementById("gameEndContainer");
var finalScoreSpan = document.getElementById("finalScoreSpan");
var gameEndForm = document.getElementById("gameEndForm");
var enterInitialsInput = document.getElementById("enterInitialsInput");
var enterInitSubmitBtn = document.getElementById("enterInitSubmitBtn");
var highScoreContainer = document.getElementById("highScoreContainer");
var highScoreList = document.getElementById("highScoreList");
var highScoreBackBtn = document.getElementById("highScoreBackBtn");
var clearHighScores = document.getElementById("clearHighScores");

//track current quiz question
var currentQuizQuestion = 0;
//track seconds left
var secondsLeft = 60;
//track score
var score = 0;

//Declare quiz arrQuizQuestions object array

//timer function
function setTime(){
    var timerInterval = setInterval(function(){

    }, 1000)
}

//renderQuizListItems function
function renderQuizListItems(){
    //delete any li elements currently displayed

    //iterate through properties in current arrQuizQuestions object

    //create li element
    
    //create button element

    //add bootstrap class to button

    //add text to button

    //add function to button click event listener

    //add button to li element
    
}

//function called after clicking a quiz answer button
function quizAnswerClick(answer){
    //if answer to current arrQuizQuestions is correct

        //score = score + 100 + time;

        //flashAnswerFeedback(true);
            
    //else 

        //flashAnswerFeedback(false);

    //currentQuizQuestion++;

    //secondsLeft = 60;

    //if currentQuizQuestion === 25 then

        //hide quizContainer

        //show gameEndContainer

    //else

        //renderQuizListItems();
}

//flash answer feedback function
function flashAnswerFeedback(correctFalse){
    var timerInterval = setInterval(function(){

    },1000)
}

//start quiz button click event listener
startQuizBtn.addEventListener("click", function(event){
    //prevent page refresh
    event.preventDefault();

    //hide gameStartContainer

    //show quizContainer

    //renderQuizListItems();

    //setTimeout();

});