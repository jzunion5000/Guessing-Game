//const winningNumber = 1 + Math.floor(Math.random() *winNumber);
    //User gets 5 tries. If user guesses correct between 1-5 tries, user wins and game is over. 
    //If no right guess in 5 tries, user loses and game is over.

    let correctNumber = Math.random();

function checkGuess() {
    let myGuess = guess.value;
    if (myGuess === randomNumber) {
        console.log("Correct!");
    } else if (myGuess > randomNumber) {
        console.log("Too high bozo!");
    } else if (myGuess < randomNumber) {
        console.log("Too low loser!");
    }
}





const input = document.querySelector(".input");
/*input.addEventListener("submit", function() {
   getElementById(".input").value = "0";
   for(let i = 0; i < 101) {
    return i;
   }
})*/

let game = function();

this.winningNumber = generatewinningNumber;

const guessSubmit = document.querySelector(".guess-submit");
    guessSubmit.addEventListener("click", function (){
        const userNumber = input.value;
        const guess = document.querySelector(".guess");
        guess.textContent = userNumber; 
            if (userNumber === correctNumber) {
                return true;
            }
    })

const guessReset = document.querySelector(".guess-reset");
guessReset.addEventListener("click", function(){
//reset button needs to clear all numbers in boxes upon clicking
})

