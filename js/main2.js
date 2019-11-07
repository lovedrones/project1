/*----- constants -----*/

// const diaLog =[
//     {
//         vill: 'Missing Something, <br> Young Codesmith?',
//         codeSmith: '????',
//         },
//     {
//         vill: 'Well, Ill be damned, too busy to notice your Princess is gone!?'',
//         codeSmith: 'WHAT!?<br> WHERE!? <br> WHERE IS SHE!? ',
//         },
//     {
//         vill: 'Ill tell you,<br>but youll have to tell me some things first...',
//         codeSmith: '...?',
//         }
// ]


const challenges =[
    {
        question: "which one of these illustrates the use of a String Datatype ",
        choices: {
            a: " {} ", 
            b: " false ",
            c: " 'Car' ",
            d: " 2 "
        },
        answer: " 'Car' "
    },
    {
        question: " What is the length of an empty string ",
        choices: {
            a: " Number ", 
            b: " Undefined ",
            c: " 0 ",
            d: " Null "
        },
        answer: " 0 "
    },
    {
        question: " Which of the following is <strong>not</strong> an advantage of using a function? ",
        choices: {
            a: " Functions always take in inputs through parameters", 
            b: " Statements allow can grouped together to perform a specific task.",
            c: " Functions are reusable",
            d: "Steps can be stored and not executed each time a page loads. "
        },
        answer: "Functions always take in inputs through parameters "
    },
    {
        question: " True or False: One advantage of using ordinary arrays over using objects is that arrays allow us to associate keys with values, making it easier to access data. ",
        choices: {
            a: "True ", 
            b: "False ",
            c: "Both ",
            d: "All of the Above "
        },
        answer: "False "
    },
    {
        question: "Please complete the following: When using objects, values are accessed by __ ? ",
        choices: {
            a: "Indices", 
            b: "Keys ",
            c: "Properties ",
            d: "Methods "
        },
        answer: "Keys "
    },
]


/*----- app's state (variables) -----*/
let shuffledQuestions, currentQuestionIndex


/*----- cached element references -----*/
const startButton = document.querySelector('.starter')
const hid = document.getElementById('hidden-question')
const nextButton = document.getElementById('next-btn')
const  header = document.getElementById('header')
const dia = document.getElementById('typed-strings')
const questionElement = document.getElementById('.dialogbox')
const answerButtonsElement = document.getElementById('answers')
/*----- event listeners -----*/

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

/*----- functions -----*/

function startGame() {
    startButton.classList.add('hide');
  var typed1 = new Typed('.dialogbox p', {
        // Waits 1000ms after typing "First"
        strings: [ 
           'Missing Something, <br> Young Codesmith? ^1000',
        'Well, Ill be damned, too busy to notice your Princess is gone! ^5000',
         'Ill tell you,<br>but youll have to tell me some things first...',
          ],
          startDelay: 1000,
        typeSpeed: 50,
       });
       var typed2 = new Typed('.playerbox p', {
        // Waits 1000ms after typing "First"
        strings: [
    '???? ^4500',
    'WHAT!? ^1000 <br> WHERE... <br> WHERE IS SHE!? ^3500 ',
      '... ?'
    ],
        startDelay: 4000,
        typeSpeed: 100,
       });
       
};

function next() {
hid.classList.remove('hide')
shuffledQuestions = challenges.sort(() => Math.random() - .6)
currentQuestionIndex = 0
setNextQuestion()
};

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
  }

  function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('ans-btns')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }
  
  function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
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
function answers() {
console.log('answered');
};

function health() {
    
}
