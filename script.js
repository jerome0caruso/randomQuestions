(function game(){
    const button =document.querySelector(".button");
    let giveQuestion = document.querySelector('.question');
    let giveList = document.querySelector('.list');
    let giveResult = document.querySelector('.response');
    let giveScore = document.querySelector(".score");

    function Question(questions, answer, correct) {
    this.questions = questions;
    this.answer = answer;
    this.correct = correct;
} 

Question.prototype.showQuestion = function(){
    giveQuestion.textContent = (this.questions);
     let listContent = this.answer.map((item, index) => `<li>${index}: ${item}`);
     giveList.innerHTML = listContent.join("");
}

Question.prototype.checkAnswer = function(userAnswer, totaScore){
    let addToScore;
    if(userAnswer === this.correct){
        giveResult.innerHTML = "<span style='color:blue'>You are correct!</span>";
        addToScore = totaScore(true);
    } else {
        giveResult.innerHTML = ("<span style='color:red'>I'm sorry thats not correct...</span>");
        addToScore = totaScore(false);
    }
        this.displayScore(addToScore);
}
Question.prototype.displayScore = function(updateScore){
    giveScore.textContent = updateScore;
    setTimeout(()=>{ giveResult.innerHTML = "";
    document.getElementById("answer").value = "";
    reRun();
}, 1500)
}
const q1 = new Question("Who was the 24th president of the USA?",
["Grover Cleveland",  "Woodrow Wilson",  "Millard Fillmore"], 0);

const q2 = new Question("Is a tomato a fruit or vegetable?",
 ["fruit",  "vegetable"], 0);

const q3 = new Question("Is a peanut a nut?",
["Yes", "No"], 1);

const q4 = new Question("What's the only letter not found in any State Name?",
["Y", "L", "Q"], 2);

const q5 = new Question("What's the longest word found in the English language?",
["152", "846", "189,819"], 2);

const q6 = new Question("How much can a Blue Whale consume in one mouthful?",
["50,000", "457,000", "189,819"], 1);

const q7 = new Question("Do we have body parts that never stop growing?",
["Yes", "No"], 0);

const allQestions = [q1, q2, q3, q4, q5, q6];

function score() {
    let sum = 0;
    return function(ifTrue){
        if(ifTrue){
            sum++;
        }
    return sum;
    }
}
let totalScore = score();
let randomNum;
function reRun(){
    randomNum = Math.floor(Math.random()* allQestions.length);
    allQestions[randomNum].showQuestion();
}
function check() {
    let userAnswer = document.getElementById("answer").value;
    allQestions[randomNum].checkAnswer(parseInt(userAnswer), totalScore);
}
reRun();

button.addEventListener("click", check);
})();


