

function Question(question, option, anwser){
    this.question = question;
    this.anwser = anwser;
    this.option = option;
    this.ask = function () {
        console.log(this.question);
        console.log(this.option);
        return this.response();
    } 
    
    this.response = function() {
        let yOrN = ["Correct!", "Wrong!"]
        let anwser = prompt("Please select an anwser");
        if(anwser === "exit"){return}
        else if(anwser === null){main()}
        else if(this.question.includes("meat") || this.question.includes("fish")){
            return Number(anwser) === 0? (console.log(yOrN[0]), gameOverPoint()) : (console.log(yOrN[1]), gameOver());
        } else {
            return Number(anwser) === 2?(console.log(yOrN[0]), gameOverPoint()): (console.log(yOrN[1]), gameOver());
        }      
    }
}
function score() {
        let score = 0;
        return function(num) {      
            console.log(`Your score is ${score += num}`);
        }
    }
const totalScore = score();
function gameOverPoint(){
    totalScore(1);
    main();
}
function gameOver(){
    totalScore(0);
    main();
}
function main() {
    const questions = ["you like meat", "you like fish", "what veggies do you like"];
    const options = ["0: Yes \n1: No", "0: Carrot \n1: Califlower\n2: Brussels"];
    let randomNum = Math.floor(Math.random()*3);
    if(randomNum === 0) {
    let q1 = new Question(questions[randomNum], options[0], "Correct");
    return (q1.ask())
    } else if(randomNum === 1) {
    let q2 = new Question(questions[randomNum], options[0], "Correct");
    return(q2.ask())
    } else if (randomNum === 2) {
    let q3 = new Question(questions[randomNum], options[1], "Correct");
    return(q3.ask())
    }
}

document.addEventListener("DOMContentLoaded", function(){
    main();
}, false) 