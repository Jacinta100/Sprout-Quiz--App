const questions = [
  {
      question: "From which part of a plant does a fruit typically develop?",
      answers: [
        {text: "A. Leaf", correct: false},
        {text: "B. Flower", correct: true},
        {text: "C. Trunk", correct: false},
        {text: "D. Wood", correct: false},
      ]
  },

{
  question: "Which part of celery do we often eat?",
  answers: [
      {text: "A. Leaves", correct: false},
      {text: "B. Roots", correct:false },
      {text: "C. Stem", correct: true},
      {text: "D.seed", correct: false},
  ]
},
{
  question: "Williams” and “Conference” are kinds of which type of fruit?",
  answers: [
      {text: "A. Bananas", correct: false},
      {text: "B. Pears", correct: true},
      {text: "C. Apples", correct: false},
      {text: "D. Orange", correct: false},
  ]
},
{
  question: " This fruit is often grown in many Asian countries and is considered one of the stinkiest fruits in the world. What is it?",
  answers: [
      {text: "A. Durian", correct: true},
      {text: "B. Rambutan", correct:false },
      {text: "C. Persimmon", correct: false},
      {text: "D. Pomelo", correct: false},
  ]
},

{question: " Broccoli, Brussels sprouts, cauliflower, and cabbage belong to which type of vegetables?",
answers: [
    {text: "A. Root vegetables", correct: false},
    {text: "B. Cruciferous vegetables", correct: true},
    {text: "C. Leafy green vegetables", correct: false},
    {text: "D. Fruity vegetables", correct: false},
]
},
{
  question: ". Which vegetable became the first one to be grown in space in 1995 by NASA?",
  answers: [
      {text: "A. Broccoli", correct: false},
      {text: "B. Eggplant", correct: false},
      {text: "C. Potato", correct: true},
      {text: "D. carrot", correct: false},
  ]
},
{
  question: "Which of the following fruits is not a part of the rose family?",
  answers: [
      {text: "A. Avocadoes", correct: true},
      {text: "B. Cherries", correct: false},
      {text: "C. Apricots", correct: false},
      {text: "D. Apple", correct: false},
  ]
},
{
  question: "Carrots are particularly high in which important vitamin?",
  answers: [
      {text: "A. Vitamin A", correct: true},
      {text: "B. Vitamin C", correct: false},
      {text: "C. Vitamin E", correct: false},
      {text: "D. Vitamin k", correct: false},
  ]
},
{
  question: "Where do pineapples originally come from?",
  answers: [
      {text: "A. South Asia", correct: false},
      {text: "B. Africa", correct: false},
      {text: "C. South America", correct: true},
      {text: "West Africa", correct: false},
  ]
},

{
  question: "What are raisins?",
  answers: [
      {text: "A. Dried grapes", correct: true},
      {text: "B. Dried blueberries", correct: false},
      {text: "C. Dried plums", correct: false},
      {text: "D. Dried Veg", correct: false},
  ]
},
{
  question: "Which of the following vegetables is mostly sold before 30th October?",
  answers: [
      {text: "A. Butternut Squash", correct: false},
      {text: "B. Beets", correct: false},
      {text: "C. Pumpkins", correct: true},
      {text: "D. Peas", correct: false},
  ]
},
{
  question: "Which fruit is produced by Arthur Turner plants?",
  answers: [
      {text: "A. Apples", correct: true},
      {text: "B. Plums", correct: false},
      {text: "C. Peaches", correct: false},
      {text: "D. Pears", correct: false},
  ]
},
{
  question: "Bubble and squeak, a traditional British breakfast dish, is made from which two vegetables?",
  answers: [
      {text: "A. Cabbages and potatoes", correct: true},
      {text: "B. Carrots and peas", correct: false},
      {text: "C.  Tomatoes and Brussel Sprouts", correct: false},
      {text: "D. Dried Veg", correct: false},
  ]
},
{
  question: "Approximately how much water has a cucumber ?",
  answers: [
      {text: "A. 30 percent", correct: false},
      {text: "B. 70 percent", correct: false},
      {text: "C. 96 percent", correct: true},
      {text: "D. 50 percent", correct: false},
  ]
},
{
  question: "Which of the following fruits typically grows in bunches, which are also known as hands?",
  answers: [
      {text: "A. Apples", correct: false},
      {text: "B. Kiwis", correct: false},
      {text: "C. Bananas", correct: true},
      {text: "D. Mangoes", correct: false},
  ]
},
];
const questionTags = document.getElementById('sproutquizapp-questiontag');
const answerButtons = document.getElementById('sproutquizapp-answerbuttons');
const nextButton = document.getElementById('sproutquizapp-nextbtn');

let questionIndex = 0;
let score = 0;

function startQuiz() {
    questionIndex = 0;
    score= 0;
    nextButton.innerHTML = "Next";
    shuffleQuestions(); // Shuffle questions before starting
    showQuestion();
}

// Create the shuffleQuestion function
function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[questionIndex];
    let questionNo = questionIndex + 1;
    questionTags.innerHTML = questionNo + "." + " " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("quizapp-answebuttons-btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionTags.innerHTML = `You score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    questionIndex++;
    if(questionIndex < questions.length) {
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener('click', ()=>{
    if(questionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
























