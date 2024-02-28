/*Add your JavaScript here*/

var summerScore = 0;
var winterScore = 0;

var questionCount = 0;

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var restart = document.getElementById("restart");

q1a1.addEventListener("click", winter);
q1a2.addEventListener("click", summer);

q2a1.addEventListener("click", winter);
q2a2.addEventListener("click", summer);

q3a1.addEventListener("click", winter);
q3a2.addEventListener("click", summer);

restart.addEventListener("click",restartQuiz)

function winter() {
 winterScore += 1;
 questionCount += 1;

 console.log("questionCount = " + questionCount + " winterScore = " + winterScore);
  
  if (questionCount == 3){ 
  console.log("The quiz is done!")
  updateResult();
 }
}

 function summer() {
 summerScore += 1;
 questionCount +=1;

 console.log("questionCount = " + questionCount + " summerScore = " + summerScore);

  if (questionCount == 3){
  console.log("The quiz is done!")
  updateResult();
 }
} 
 
function updateResult() {
  if (winterScore >= 2) {
    result.innerHTML = "You are a winter person!";
    console.log("You are a winter person!");
    
  }
  else if (summerScore >= 2) {
    result.innerHTML = "You are a summer person!";
    console.log("You are a summer person!")
    }
}

function restartQuiz() {
  result.innerHTML = "You are a...";
  questionCount = 0;
  winterScore = 0;
  summerScore = 0;
  console.log("questionCount = " + questionCount + "/t" + "winterScore = " + winterScore + "/t" + "summerScore = " + summerScore);
  enableQuestions();
}
q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);

function disableQ1() {
  q1a1.disabled = true; 
  q1a2.disabled = true;
}

function disableQ2() {
  q2a1.disabled = true; 
  q2a2.disabled = true;}

function disableQ3() {
  q3a1.disabled = true; 
  q3a2.disabled = true;}

function enableQuestions(){
  q1a1.disabled = false; 
  q1a2.disabled = false; 
  q2a1.disabled = false; 
  q2a2.disabled = false;
  q3a1.disabled = false; 
  q3a2.disabled = false;}