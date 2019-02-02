var totalQuestions =  questions.length; 
var currentQuestion = 0;
var score = 0;
var	userName =	prompt("Please	Enter your Name","Quizer");	

var quizcontainer = document.getElementById("quiz-container");
questionEl =  document.getElementById("question");
var opt1 =  document.getElementById("option1");
var opt2 =  document.getElementById("option2");
var opt3 =  document.getElementById("option3");
var opt4 =  document.getElementById("option4");
var nextButton =  document.getElementById("nextButton");
var result = document.getElementById("result");

//	Load Questions

function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent =  questionIndex + 1 + ".  "  + q.question;
    opt1.textContent  = q.option1;
    opt2.textContent  = q.option2;
    opt3.textContent  = q.option3;
    opt4.textContent  = q.option4;
};

//	Radio Button Check condition;

function nextQuestion() {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	};
	var	as	=	document.querySelector('input[type=radio]:checked');
	var answer = as.value;

	//	Question answers check true	or false;

	if(questions[currentQuestion].answer == answer){
		score += 20;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totalQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totalQuestions){
		quizcontainer.style.display = 'none';
		result.style.display = '';
		result.textContent = userName  + ' Your Score: ' + score	;	
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
