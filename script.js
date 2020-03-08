//Declare DOM variables
var nav = document.getElementById("nav");
var viewHighScores = document.getElementById("viewHighScores");
var timeSpan = document.getElementById("timeSpan");
var gameStartContainer = document.getElementById("gameStartContainer");
var startQuizBtn = document.getElementById("startQuizBtn");
var quizContainer = document.getElementById("quizContainer");
var questionH2 = document.getElementById("questionH2");
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
var arrQuizQuestions = [
    {
        question: "Inside which html element do we put the Javascript?",
        answers: 
        [
            {
                answerNum: 1, answer: "&ltscripting&gt",
                answerFunction: function()
                {
                    answerBtnClickCallBack(false);
                }
            },
            {
                answerNum: 2, answer: "&ltjs&gt",
                answerFunction: function()
                {
                    answerBtnClickCallBack(false);
                }
            },
            {
                answerNum: 3, answer: "&ltscript&gt",
                answerFunction: function()
                {
                    answerBtnClickCallBack(true);
                }
            },
            {
                answerNum: 4, answer: "&ltjavascript&gt", 
                answerFunction: function()
                {
                    answerBtnClickCallBack(false);
                }
            }
        ]
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers:
        [
            {
                answerNum: 1, answer: "The &ltbody&gt section",
                answerFunction: function()
                {
                    answerBtnClickCallBack(false);
                }
            },
            {
                answerNum: 2, answer: "The &lthead&gt section",
                answerFunction: function()
                {
                    answerBtnClickCallBack(false);
                }
            },
            {
                answerNum: 3, answer: "Both are correct",
                answerFunction: function()
                {
                    answerBtnClickCallBack(true);
                }
            }
        ]
    },
    {
        question: "What is the correct syntax for referring to an external script called \"xxx.js\"?",
        answers:
        [
            {
                answerNum: 1, answer: "&ltscript name=\"xxx.js\"&gt",
                answerFunction: function()
                {
                    answerBtnClickCallBack(false);
                }
            },
            {
                answerNum: 2, answer: "&ltscript src=\"xxx.js\"&gt",
                answerFunction: function()
                {
                    answerBtnClickCallBack(true);
                }
            },
            {
                answerNum: 3, answer: "&ltscript href=\"xxx.js\"&gt",
                answerFunction: function()
                {
                    answerBtnClickCallBack(false);
                }
            }
        ]
    },
    {
        question: "The external JavaScript file must contain the &ltscript&gt tag.",
        answers:
        [
            {
                answerNum: 1, answer: "False",
                answerFunction: function()
                {
                    answerBtnClickCallBack(true);
                }
            },
            {
                answerNum: 2, answer: "True",
                answerFunction: function()
                {
                    answerBtnClickCallBack(false);
                }
            }
        ]
    },
    {
        question: "How do you write \"Hello World\" in an alert box?",
        answers:
        [
            {
                answerNum: 1, answer: "msg(\"Hello World\");",
                answerFunction: function()
                {
                    answerBtnClickCallBack(false);
                }
            },
            {
                answerNum: 2, answer: "alert(\"Hello World\");",
                answerFunction: function()
                {
                    answerBtnClickCallBack(true);
                }
            },
            {
                answerNum: 3, answer: "alertBox(\"Hello World\");",
                answerFunction: function()
                {
                    answerBtnClickCallBack(false);
                }
            },
            {
                answerNum: 4, answer: "msgBox(\"Hello World\");",
                answerFunction: function()
                {
                    answerBtnClickCallBack(false);
                }
            }
        ]
    },
    {
        question: "How do you create a function in Javascript?",
        answers:
        [
            {
                answerNum: 1, answer: "function = myFunction()",
                answerFunction: function()
                {
                    answerBtnClickCallBack(false);
                }
            },
            {
                answerNum: 2, answer: "function myFunction()",
                answerFunction: function()
                {
                    answerBtnClickCallBack(true);
                }
            },
            {
                answerNum: 3, answer: "function:myFunction()",
                answerFunction: function()
                {
                    answerBtnClickCallBack(false);
                }
            }
        ]
    },
    {
        question: "How do you call a function named \"myFunction\"",
        answers:
        [
            {
                answerNum: 1, answer: "call function myFunction()",
                answerFunction: function()
                {
                    answerBtnClickCallBack(false);
                }
            },
            {
                answerNum: 2, answer: "call myFunction()",
                answerFunction: function()
                {
                    answerBtnClickCallBack(false);
                }
            },
            {
                answerNum: 3, answer: "myFunction()",
                answerFunction: function()
                {
                    answerBtnClickCallBack(true);
                }
            }
        ]
    }
];


//TODO: timer function
function setTime(){
    var timerInterval = setInterval(function(){

    }, 1000)
}

function deleteQuestionListItems(){

    //if quizList has any children then delete them
    if(quizList.hasChildNodes){
        
        //iterate through quizList ul childnodes
        while (quizList.firstChild){
            //remove current childnode from quizList ul
            quizList.removeChild(quizList.lastChild);
        }

    }
        
}

//renderQuizListItems function
function renderQuizListItems(){
    
    //get current question object in arrQuizQuestions object array
    var objQuestion = arrQuizQuestions[currentQuizQuestion];

    //add objQuestion.question to questionH2
    questionH2.innerHTML = objQuestion.question;

    for (let i = 0; i < objQuestion.answers.length; i++) {
        //create object variable for current answer
        var objAnswer = objQuestion.answers[i];
        
        //create li element
        var li = document.createElement("li");

        //add bootstrap class to li element
        li.className = "list-group-item";

        //create button element
        var btn = document.createElement("button");

        //add bootstrap class to button
        btn.className = "btn btn-primary";
        
        //declare variables to store answer values
        var answerNum = objAnswer.answerNum;
        var answer = objAnswer.answer;
        var answerFunction = objAnswer.answerFunction;
       
        //add text to button
        btn.innerHTML = answerNum + " " + answer;
        
        //add function to button click event listener
        btn.addEventListener("click", answerFunction);
        
        //add button to li element
        li.appendChild(btn);
        
        //add li element to ul element
        quizList.appendChild(li);
    }
            
}

function answerBtnClickCallBack(answerTruth){
    
    //if answer to current arrQuizQuestions is correct
    if(answerTruth)
    {
        //add to score;
        score = score + 100 + secondsLeft;
    }
    
    //call function that shows answer feedback container
    flashAnswerFeedback(answerTruth);

    //reset secondsLeft for next question
    secondsLeft = 60;
    
    //increment quiz quesiton
    currentQuizQuestion++;
    
    //end game if last question is completed
    if (currentQuizQuestion >= arrQuizQuestions.length){
        //TODO: hide quizContainer

        //TODO: show gameEndContainer
    }
    //otherwise, load the next question
    else{
        
        //delete all li elements from ul element
        deleteQuestionListItems();

        //load next question and answer
        renderQuizListItems();
    }

}

//flash answer feedback function
function flashAnswerFeedback(correctFalse){
    
    //amound of time feedback appears
    var flashDuration = 1;

    //modify text of answerFeedback p element
    if(correctFalse){
        answerFeedback.innerHTML = "Correct!";
    }
    else{
        answerFeedback.innerHTML = "Wrong!";
    }

    //show answerFeedback p element
    answerFeedback.className = "text-muted display-4 d-block";

    //set timer interval
    var timerInterval = setInterval(function(){
        
        //decrement flashDuration
        flashDuration--;

        //Stop timer and hide answerFeedback p element after 2 seconds
        if(flashDuration <= 0){
            //stop timer
            clearInterval(timerInterval);
            //hide answerFeedack p element
            answerFeedback.className = "text-muted display-4 d-none";
        }

    },1000)
}

//start quiz button click event listener
startQuizBtn.addEventListener("click", function(event){
    //prevent page refresh
    event.preventDefault();

    //hide gameStartContainer
    gameStartContainer.className = "container text-center d-none";

    //show quizContainer
    quizContainer.className = "container text-center d-block";

    renderQuizListItems();

    //setTimeout();

});