const buttonCheck = document.querySelector(".check");
const message = document.querySelector(".message");
let number = Math.trunc(Math.random() * 20) + 1;
const guessScore = document.querySelector(".score");
const again = document.querySelector(".again");
let score = 20;
let highScore=0

buttonCheck.addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    
    if (!guess) {
        message.textContent = "⛔ No Number!";
    }else if (guess === number) {
        message.textContent = "🎉 Correct Number!";
        document.body.style.backgroundColor = "#60b347";
        document.querySelector(".number").textContent = number;
        document.querySelector(".number").style.width = "30rem";
        buttonCheck.style.display="none"
        if(score > highScore){
            highScore=score
            console.log("hig",highScore);
            
            document.querySelector(".highscore").textContent=highScore
        }
    }else if(guess !== number){
        if (score < 1) {
            message.textContent = "🔚 Game over!";
            guessScore.textContent = 0;
            } else {
            message.textContent = guess>number? "📈 Too Hight!":"📉 Too Low!";
            score--;
            guessScore.textContent = score;
            }
    } 
});

again.addEventListener("click", function () {
    number = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    message.textContent = "Start guessing...";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";
    guessScore.textContent=score
    document.body.style.backgroundColor = "#222";
    document.querySelector(".guess").value = "";
    buttonCheck.style.display="block"

});
