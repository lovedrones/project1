/*----- constants -----*/

const questions = [
    {
        question: "which one of these illustrates the use of a String Datatype ",
       choices: [
            { text: " {} ", correct: false },
            { text: " false ", correct: false },
            { text: " 'Car' ",  correct: true},
            { text: " 2 ", correct: false },
        ]
    },
    {
        question: " What is the length of an empty string ",
        choices: [
          { text: " Number ", correct: false },
           { text: " Undefined ", correct: false },
           { text: " 0 ", correct: true },
           { text: " Null ", correct: false},
        ],
    },
    {
        question: " Which of the following is NOT an advantage of using a function? ",
        choices: [
         { text: " Functions always take in inputs through parameters", correct: true }, 
        { text: " Statements allow can grouped together to perform a specific task.", correct: false },
        { text: " Functions are reusable", correct: false},
        { text: "Steps can be stored and not executed each time a page loads. ", correct: false},
        ]
          },
    {
        question: "One advantage of using ordinary arrays over using objects is that arrays allow us to associate keys with values, making it easier to access data. ",
       choices: [
        { text: "True", correct: false },
           { text: "False" ,correct:  true },
           { text: "Both", correct: false },
           { text: "All of the Above", correct: false },
       ]
    },
    {
        question: "Please complete the following: When using objects, values are accessed by __ ? ",
        choices: [
         { text: "Indices", correct: false },
           { text: "Keys ", correct: true },
           { text: "Properties ", correct: false },
           { text: "Methods ", correct: false },
      ]
    },
]


/*----- app's state (variables) -----*/
let shuffledQuestions, currentQuestionIndex


/*----- cached element references -----*/
const startButton = document.querySelector('.starter')
const hid = document.getElementById('hidden-question')
const nextButton = document.getElementById('next-btn')
const questionElement = document.getElementById('quest')
const answerButtonsElement = document.getElementById('answers')
/*----- event listeners -----*/



startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

/*----- functions -----*/
const bgPlayer = document.getElementById('bg-player');
const bgCheckbox = document.querySelector('input[type="checkbox"]');

bgCheckbox.addEventListener('change', handleBgChanged);

 function handleBgChanged() {
  bgCheckbox.checked ? bgPlayer.play() : bgPlayer.pause();
}

function startGame() {
    startButton.classList.add('hide');
  var typed1 = new Typed('#quest', {
        // Waits 1000ms after typing "First"
        strings: [ 
           'Missing Something, <br> Young Codesmith? ^1000',
        'Well, Ill be damned, too busy to notice your Princess is gone! ^4000',
         'Ill tell you,<br>but youll have to tell me some things first...',
          ],
          startDelay: 1000,
        typeSpeed: 50,
       });
       var typed2 = new Typed('#playerbox p', {
        // Waits 1000ms after typing "First"
        strings: [
    '???? ^4500',
    'WHAT!? ^500 <br> WHERE... <br> WHERE IS SHE!? ^5000 ',
      '... ?'
    ],
        startDelay: 4700,
        typeSpeed: 50,
       });
       
};

function next() {
hid.classList.remove('hide');
shuffledQuestions = questions.sort(() => Math.random() - .5);
currentQuestionIndex = 0;
setNextQuestion();
};

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  }

  function showQuestion(question) {
    questionElement.innerText = question.question;
    question.choices.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('ans-btns');
      if (answer.correct) {
        button.dataset.correct = answer.correct;
       }
      button.addEventListener('click', selectAnswer);
      answerButtonsElement.appendChild(button);
    })
  }
  
function showScore() {
    
}

  function resetState() {
    clearStatusClass(document.body)
    // nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }
  function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }

  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }

  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }

