/*----- constants -----*/
const answerBtn = document.getElementById('btn1')

/* const person = ['Missing Something, <br> Young Codesmith?', 

    'Well, Ill be damned, too busy to notice your Princess is gone!?',
    'Ill tell you,<br>but youll have to tell me some things first...',
]

const codesmith = [
    '????',  'WHAT!?<br> WHERE!? <br> WHERE IS SHE!? ', '...'
]
*/
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


// const challenges =[
//     {
//         question: " ",
//         choices: {
//             a: " ", 
//             b: " ",
//             c: " ",
//             d: " "
//         },
//         answer: " "
//     },
//     {
//         question: " ",
//         choices: {
//             a: " ", 
//             b: " ",
//             c: " ",
//             d: " "
//         },
//         answer: " "
//     },
//     {
//         question: " ",
//         choices: {
//             a: " ", 
//             b: " ",
//             c: " ",
//             d: " "
//         },
//         answer: " "
//     },
//     {
//         question: " ",
//         choices: {
//             a: " ", 
//             b: " ",
//             c: " ",
//             d: " "
//         },
//         answer: " "
//     },
//     {
//         question: " ",
//         choices: {
//             a: " ", 
//             b: " ",
//             c: " ",
//             d: " "
//         },
//         answer: " "
//     },
// ]


/*----- app's state (variables) -----*/

// var typed1 = new Typed('.dialogbox p', {
//     // Waits 1000ms after typing "First"
//     // stringsElement: '#typed-strings',
//     typeSpeed: 50,
//    });

//    var typed2 = new Typed('.playerbox p', {
//     // Waits 1000ms after typing "First"
//     // stringsElement: '#typed-strings',
//     startDelay: 2500,
//     typeSpeed: 100,
//    });


/*----- cached element references -----*/


/*----- event listeners -----*/
answerBtn.addEventListener('click', answers)


/*----- functions -----*/


// function next() {
//     var typed1 = new Typed('.dialogbox p', {
//         // Waits 1000ms after typing "First"
//         strings: [ 
//         'Well, Ill be damned, too busy to notice your Princess is gone!?'],
//         typeSpeed: 50,
//        });
//        var typed2 = new Typed('.playerbox p', {
//         // Waits 1000ms after typing "First"
//         strings: ['WHAT!?<br> WHERE... <br> WHERE IS SHE!? '],
//         startDelay: 3500,
//         typeSpeed: 100,
//        });
//        this.style.display = 'none';
// };

function next() {
    var typed1 = new Typed('.dialogbox p', {
        // Waits 1000ms after typing "First"
        stringsElement:,
        typeSpeed: 50,
       });
       var typed2 = new Typed('.playerbox p', {
        // Waits 1000ms after typing "First"
        stringsElement:,
        startDelay: 3500,
        typeSpeed: 100,
       });
       this.style.display = 'none';
};
function dialog() {
    
};



function question() {

};

function answers() {
console.log('answered');
};

function health() {
    
}
