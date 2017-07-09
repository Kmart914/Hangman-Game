//Array to hold all of the different words that will be used in the game.
var computerChoice =["football", "baseball", "soccer", "golf", "cricket", "water polo", "hockey", "volleyball", "cricket", "bowling", "ping pong", "tennis", "lacrosse", "surfing", "softball", "rugby", "curling"];
// Total Wins
var wins = 0;

// Total losses
var losses = 0;

//Computer will select a random word from the computerChoice array and will be stored here.
var wordChosen =
  computerChoice[Math.floor(Math.random() * computerChoice.length)];

//Amount of guesses that the person has left.
var guessesLeft = 10;
// Variable to show which guesses they have already made.
var guesses = [];

// Variable to split the array into single letters.
var res = wordChosen.split("");

// variable that will hold the underscores for the length of the word
var currentWord = [];

// Reset function to run after choices are made
var reset = function(){
  guessesLeft = 10
  guesses =[];
  wordChosen = [];
  computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

// This for loop will look at the length of the word that the computer selected and add an underscore for each letter.
for( var i = 0; i < wordChosen.length; i++){
  currentWord += "_ ";
}


//Calling a function for anytime that someone hits a key.
document.onkeyup = function(event){

//every time they hit a key the guesses will go down by one
guessesLeft--;
var userGuess = "" + event.key.toLowerCase();

if (guessesLeft === 0){
  losses++;
  reset();
  alert("Try Again!");
}


guesses.push(userGuess);
console.log(guesses);

if (event.key === res){
  document.querySelector('#currentWord').innerHTML = currentWord.join("");
};







document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guessesLeft").innerHTML = guessesLeft;
document.getElementById("guesses").innerHTML = guesses;
document.getElementById("currentWord").innerHTML = currentWord;




}

console.log(res);
console.log(wordChosen);
