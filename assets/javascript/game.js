//array of computer's choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//variables of player's wins, losses, and guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9; 

//array variables for player's guesses and computer's guesses
//array for user to push choices to
var lettersGuessed = []; 
var computerGuess = [];


//window.onload
window.onload = function() {
    //Randomly chooses a choice from computerChoices array. Set to comGuess which is the computer's guess
    var comGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //pushes random comGuess to the computerGuess array
    computerGuess.push(comGuess);
    //console.logs the computer's guess (index of 0) from the array
    console.log(computerGuess[0]);
}


//GAME

//Function runs when user presses a key
document.onkeyup = function(event) {

    //var playerGuess will equal what key was pressed
    var playerGuess = event.key;
    //insert player's guess into lettersGuessed array
    lettersGuessed.push(playerGuess);
    console.log(computerGuess[0]);



//if else statments determines (wins, losses, guesses left)
// when player = computer's guess and guess more than 0.
if ((playerGuess === computerGuess [0]) && (guessesLeft > 0)) {
    wins++;
    guessesLeft = 9;
    lettersGuessed.length = 0;
    computerGuess.length = 0;
    var comGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(comGuess);
    console.log(computerGuess[0]);
}
//when player !== computer's guess and guess more than 0, guesses left decreases by 1
else if ((playerGuess !== computerGuess [0]) && (guessLeft > 0)){
    guessesLeft--;
}
// when guesses left is 0
else {
    losses++;
    guessesLeft--;
    lettersGuessed.length = 0;
    computerGuess.length = 0;
    var comGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(comGuess);
    console.log(computerGuess[0]);

}

//display wins, losses, guesses left, and guesses so far

document.querySelector("#win").innerHTML = "Wins: " + wins;
document.querySelector("#loss").innerHTML = "Loss:" + losses;
document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guessesLeft;
document.querySelector("#guessSoFar").innerHTML = "Your Guesses so far:" + lettersGuessed;

} //end document.onkeyup function



