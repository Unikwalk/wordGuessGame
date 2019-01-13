/* 
Global variables:
    counter for win --> win = 0
    counter for loss --> loss = 0
    counter for guess --> guess = 10
    set an array for singers
    set an empty string to store in the dashes

Functions:
    document.ready --> display game, reset game
    choose a random word in the array
    count the length of the word and push that many dashes into the empty string
    add this string to the html
    reset counters win, loss, guess = 10

    Listen to user's key press then do an if/else statement:
    If letter is in the word:
        1. Find the index of the letter & replace the same index in the dash string with that letter
        2. Display that letter in the div below
        3. Deduct 1 from guess (guess--)
        4. Move letter to Letter Guessed div
    If letter is not in the word:
        1. Display that letter in the div below
        2. Deduct 1 from guess (guess--)
        3. Move letter to Letter Guessed div
    Win game
        If guess <= 10 and all letters are guessed correctly:
        Display You Win; win++

    Lose game
        If guess > 10
        Display You Lose; loss++

*/

var famousSinger = ["sia", "beyonce", "sminem", "prince", "adele", "bono", "sting", "cher", "shakira", "rihanna"];
var win = 0;
var loss = 0;
var guess = 10;
var choseWord = "";
var lettersInChosenWord = [];
var numberofDashes = 0
var wordInDashes = [];
var wrongLetters = [];

function gameStart() {
  guess = 10;
  chosenWord = famousSinger[Math.floor(Math.random() * famousSinger.length)];
  console.log(chosenWord);
  lettersInChosenWord = chosenWord.split("");
  numberofDashes = lettersInChosenWord.length;
  wordInDashes = [];
  wrongLetters = [];

  for (var i = 0; i < numberofDashes; i++) {
    wordInDashes.push("_");
  };

  wordInDashes = wordInDashes.join(" ");
  wrongLetters = wrongLetters.join(" ");
  console.log(wordInDashes)

  $('#wordInDashes').text(wordInDashes);
  $('#guess').text(guess);
  $('#wrongLetters').text(wrongLetters);
}

function checkLetters(letter) {
  var letterInWord = false;
  for (var i = 0; i < chosenWord.length; i++) {
    if (chosenWord[i] === letter){
      letterInWord = true;
    }
  
    if(letterInWord) {
      for (var j = 0; j < chosenWord.length; j++){
        if (chosenWord[j] === letter) {
          wordInDashes[j] = letter;
        } else {
          wrongLetters.push(letter);
        }
        console.log(wordinDashes);
        guess--;
      }
    }
  }
}

function gameComplete() {
  console.log("WinCount: " + win + " | LossCount: " + loss + " | NumGuesses: " + guess);
  document.getElementById("guesses-left").innerHTML = numGuesses;// Update the HTML to reflect the new number of guesses. Also update the correct guesses.
  
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");// This will print the array of guesses and blanks onto the page.
  
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");// This will print the wrong guesses onto the page.

  
  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {// If we have gotten all the letters to match the solution...
    
    winCounter++;
    alert("You win!"); // ..add to the win counter & give the user an alert.

    
    document.getElementById("win-counter").innerHTML = winCounter;// Update the win counter in the HTML & restart the game.
    startGame();
  }

  
  else if (numGuesses === 0) { // If we've run out of guesses..
    
    lossCounter++;// Add to the loss counter.
    
    alert("You lose");// Give the user an alert.

    document.getElementById("loss-counter").innerHTML = lossCounter;// Update the loss counter in the HTML.
    
    startGame();// Restart the game.
  }
}






GLOBAL VARIABLES (accessible by all functions)
// ==================================================================================================

// Array of Word Options (all lowercase)
var wordsList = ["jerome", "neena", "darion", "lou", "greg", "jordan",
  "jasmine", "stephen", "jacob", "adam", "rui", "luis"];

var chosenWord = "";// Solution will be held here.
var lettersInChosenWord = [];// This will break the solution into individual letters to be stored in array.
var numBlanks = 0;// This will be the number of blanks we show based on the solution
var blanksAndSuccesses = [];// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
var wrongGuesses = [];// Holds all of the wrong guesses

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

// FUNCTIONS (These are bits of code that we will call upon to run when needed)
// =========================================================================================

// startGame()
// Its how we we will start and restart the game.
// (Note: It's not being run here. It's just being made for future use.)
function startGame() {
  
  numGuesses = 9;// Reset the guesses back to 9.
  chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];// Solution is chosen randomly from wordList.
  lettersInChosenWord = chosenWord.split(""); // The word is broken into individual letters.
  numBlanks = lettersInChosenWord.length;// We count the number of letters in the word.
  //console.log(chosenWord);// We print the solution in console (for testing).
  blanksAndSuccesses = [];// CRITICAL LINE - Here we *reset* the guess and success array at each round.
  wrongGuesses = [];// CRITICAL LINE - Here we *reset* the wrong guesses from the previous round.
  
  for (var i = 0; i < numBlanks; i++) {// Fill up the blanksAndSuccesses list with appropriate number of blanks.
    blanksAndSuccesses.push("_");
  }

  //console.log(blanksAndSuccesses); Print the initial blanks in console.
  
  document.getElementById("guesses-left").innerHTML = numGuesses;// Reprints the guessesLeft to 9
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");// Prints the blanks at the beginning of each round in the HTML
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");// Clears the wrong guesses from the previous round
}

// checkLetters() function
// It's where we will do all of the comparisons for matches.
// Again, it's not being called here. It's just being made for future use.
function checkLetters(letter) {

  // This boolean will be toggled based on whether or not a user letter is found anywhere in the word.
  var letterInWord = false;

  // Check if a letter exists inside the array at all.
  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      // If the letter exists then toggle this boolean to true. This will be used in the next step.
      letterInWord = true;
    }
  }

  // If the letter exists somewhere in the word, then figure out exactly where (which indices).
  if (letterInWord) {

    // Loop through the word.
    for (var j = 0; j < numBlanks; j++) {

      // Populate the blanksAndSuccesses with every instance of the letter.
      if (chosenWord[j] === letter) {
        // Here we set the specific space in blanks and letter equal to the letter when there is a match.
        blanksAndSuccesses[j] = letter;
      }
    }
    // Logging for testing.
    console.log(blanksAndSuccesses);
  }
  // If the letter doesn't exist at all...
  else {
    // ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.
    wrongGuesses.push(letter);
    numGuesses--;
  }
}

// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made
function roundComplete() {

  // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.
  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

  
  document.getElementById("guesses-left").innerHTML = numGuesses;// Update the HTML to reflect the new number of guesses. Also update the correct guesses.
  
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");// This will print the array of guesses and blanks onto the page.
  
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");// This will print the wrong guesses onto the page.

  
  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {// If we have gotten all the letters to match the solution...
    
    winCounter++;
    alert("You win!"); // ..add to the win counter & give the user an alert.

    
    document.getElementById("win-counter").innerHTML = winCounter;// Update the win counter in the HTML & restart the game.
    startGame();
  }

  
  else if (numGuesses === 0) { // If we've run out of guesses..
    
    lossCounter++;// Add to the loss counter.
    
    alert("You lose");// Give the user an alert.

    document.getElementById("loss-counter").innerHTML = lossCounter;// Update the loss counter in the HTML.
    
    startGame();// Restart the game.
  }

}

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================

// Starts the Game by running the startGame() function
startGame();

// Then initiate the function for capturing key clicks.
document.onkeyup = function(event) {
  // Converts all key clicks to lowercase letters.
  var letterGuessed = String.fromCharCode(event.which).toLowerCase();
  // Runs the code to check for correctness.
  checkLetters(letterGuessed);
  // Runs the code after each round is done.
  roundComplete();
};
*/
