
//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
    {
        id: "0",
        question:"<p>Identify the word shown by the man</p>'<img src='C:/Users/nandi/Documents/Siddy/Siddy_SignLanguageTranslator/Quiz/who.gif' alt='Question gif'class='question-gif' />",
        options: ["What", "How", "Who", "Where"],
        correct: "Who",
    },
    {
        id: "1",
        question:"<p>What is the man in the video saying?</p><img src='C:/Users/nandi/Documents/Siddy/Siddy_SignLanguageTranslator/Quiz/How r u doin.gif'alt='Question gif'class='question-gif' />",
        options: ["How Are You?", "I want to fly", "Let Us do stargazing", "Let us go out"],
        correct: "How Are You?",
        
    },
    {
        id: "2",
        question:"<p>Identify the correct statement</p>'<img src='C:/Users/nandi/Documents/Siddy/Siddy_SignLanguageTranslator/Quiz/Happy_birthday.gif'alt='Question gif' class='question-gif'/>",
        options: ["Good night", "Happy Birthday to you", "Have a good day", "I am talking to you"],
        correct: "Happy Birthday to you",
    },
    {
        id: "3",
        question:"<p>Identify the correct statement</p>'<img src='C:/Users/nandi/Documents/Siddy/Siddy_SignLanguageTranslator/Quiz/I dont understand .gif' alt='Question gif' class='question-gif'/>",
        options: ["I don't understand", "I will not go", "I am studying", "I don't remember"],
        correct: "I don't understand",
    },
    {
        id: "4",
        question:"<p>Identify the correct statement</p>'<img src='C:/Users/nandi/Documents/Siddy/Siddy_SignLanguageTranslator/Quiz/See you later.gif' alt='Question gif'class='question-gif' />",
        options: ["See you later", "I am going", "You should go", "Are you fine?"],
        correct: "See you later",
    },
    {
        id: "5",
        question:"<p>Identify the correct statement</p>'<img src='C:/Users/nandi/Documents/Siddy/Siddy_SignLanguageTranslator/Quiz/where is bathroom.gif' alt='Question gif'class='question-gif' />",
        options: ["Where are you?", "Where is your bathroom?", "Where are we going?", "How are you?"],
        correct: "Where is your bathroom?",
    }, {
        id: "6",
        question:"<p>Identify the correct word from the clip below</p>'<img src='C:/Users/nandi/Documents/Siddy/Siddy_SignLanguageTranslator/Quiz/star.gif' alt='Question gif' class='question-gif'/>",
        options: ["clouds", "stars", "Hair", "fingers"],
        correct: "stars",
    },
    {
        id: "7",
        question:"<p>Identify the correct statement</p>'<img src='C:/Users/nandi/Documents/Siddy/Siddy_SignLanguageTranslator/Quiz/what_is_ur_name.gif' alt='Question gif' class='question-gif'/>",
        options: ["where are you?", "what is your name?", "Nice to meet you ", "I don't understand you"],
        correct: "what is your name?",
    },
    {
        id: "8",
        question:"<p>Identify the correct word from the clip below</p>'<img src='C:/Users/nandi/Documents/Siddy/Siddy_SignLanguageTranslator/Quiz/sun.gif' alt='Question gif' class='question-gif'/>",
        options: ["light", "sky","rain", "sun"],
        correct: "sun",
    },
    {
        id: "9",
        question:"<p>Identify the correct statement</p>'<img src='C:/Users/nandi/Documents/Siddy/Siddy_SignLanguageTranslator/Quiz/Please open the door.gif' alt='Question gif' class='question-gif'/>",
        options: ["See you later", "I will go", "Please come in", "Please open the door"],
        correct: "Please open the door",
    },
];

//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
    //replace the question text with the question string
  //  quizCards[questionCount].querySelector(".question").innerHTML = quizArray[questionCount].question;
    //display the gif
   // quizCards[questionCount].querySelector(".gif").innerHTML = quizArray[questionCount].gif;
};


//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}

//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};