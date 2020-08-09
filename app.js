var myQuestions = [
    {
        question: "1)who is the president of pakistan?",
        answers: {
            a: 'imran khan',
            b: 'Arif alvi',
            c: 'nawaz shareef'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is 2+2?",
        answers: {
            a: '3',
            b: '1',
            c: '4'
        },
        correctAnswer: 'c'
    },
    {
        question: "pakistan test team captain is",
        answers: {
            a: 'azhar ali',
            b: 'babar azam ',
            c: 'shan maqsood'
        },
        correctAnswer: 'a'
    }, {
        question: "What is 12/4?",
        answers: {
            a: '3',
            b: '5',
            c: '10'
        },
        correctAnswer: 'a'
    }, {
        question: "10*10?",
        answers: {
            a: '22',
            b: '33',
            c: 'none of them'
        },
        correctAnswer: 'c'
    }
    
    
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){

        var output = [];
        var answers;

    
        for(var i=0; i<questions.length; i++){
            
            answers = [];

            for(letter in questions[i].answers){

                
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
    
        var userAnswer = '';
        var numCorrect = 0;
        
        for(var i=0; i<questions.length; i++){

            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
    
            if(userAnswer===questions[i].correctAnswer){
            
                numCorrect++;
                
                answerContainers[i].style.color = 'lightgreen';
                
            }
        
            else{

                answerContainers[i].style.color = 'red';
            }
        }


        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    showQuestions(questions, quizContainer);
    

    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}