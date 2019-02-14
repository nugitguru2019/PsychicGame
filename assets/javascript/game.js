var computerChoices = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "u", "r", "s", "t","u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters= [];

// Create variables that hold references to the places in the HTML where we want to display things.
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessLeftText = document.getElementById("guessLeft-text");
var letText = document.getElementById("let-text");

var reset = function(){
    guessesLeft = 9;
    guessedLetters = [];
}

// This function is run whenever the user presses a key.
document.onkeyup = function(event){
    // guessesLeft--;
    var userGuess = event.key;
    guessedLetters.push(userGuess);

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//rest function when the player wins or max out 9 tries
    
    if (userGuess === computerGuess){
        wins++;
        reset();
    } if (userGuess !== computerGuess){
        guessesLeft--;

    }
    if (guessesLeft === 0){
        losses++;
        reset();
    }
    
      // Display the user and computer guesses, and wins/losses/ties.
      userChoiceText.textContent = "You chose: " + userGuess;
      computerChoiceText.textContent = "The computer chose: " + computerGuess;
      winsText.textContent = "Wins: " + wins;
      lossesText.textContent = "Losses: " + losses;
      guessLeftText.textContent = "Guess Left: " + guessesLeft;
      letText.textContent = "Your Guesses so far: " + guessedLetters; //for guesses so far


}