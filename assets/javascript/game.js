/* 
Global variables:
    counter for win --> win = 0
    counter for loss --> loss = 0
    counter for guess --> guess = 10
    set an array for singers
    set an empty string to store in the dashes

Functions:
    document.ready --> display game
    count the length of each word and push that many dashes into the empty string
    add this string to the html

    Listen to user's key press then do an if/else statement:
    If letter is in the word:
        1. Find the index of the letter & replace the same index in the dash string with that letter
        2. Display that letter in the div below
        3. Deduct 1 from guess (guess--)
    If letter is not in the word:
        1. Display that letter in the div below
        2. Deduct 1 from guess (guess--)

    Win game
        If guess <= 10 and all letters are guessed correctly:
        Display You Win; win++

    Lose game
        If guess > 10
        Display You Lose; loss++

    Game retart
        Reset guess = 10
        Display new empty string
*/

var win = 0;
var loss = 0;
var guess = 10;
var famousSinger = ["Sia", "Beyonce", "Eminem", "Prince", "Adele", "Bono", "Sting", "Cher", "Shakira", "Rihanna"];
var wordDash = "";

$( document ).ready(function() {
    






}
