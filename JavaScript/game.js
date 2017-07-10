//Array to hold all of the different words that will be used in the game.
var computerChoice =["football", "baseball", "soccer", "golf", "cricket", "water polo", "hockey", "volleyball", "cricket", "bowling", "ping pong", "tennis", "lacrosse", "surfing", "softball", "rugby", "curling"];
// Total Wins
var wins = 0;

// Total losses
var losses = 0;

//Computer will select a random word from the computerChoice array and will be stored here.
var wordChosen =
  computerChoice[Math.floor(Math.random() * computerChoice.length)];
// letters of chosen word in array
var res = [];
//Amount of guesses that the person has left.
var guessesLeft = 10;
// Variable to show which guesses they have already made.
var guesses = [];



// variable that will hold the underscores for the length of the word
var underscores = [];

// Reset function to run after certain conditions are met.
var reset = function(){

  res = wordChosen.split("");
  guessesLeft = 10
  guesses = [];
  wordChosen = computerChoice[Math.floor(Math.random() * computerChoice.length)];
  for( var i = 0; i < wordChosen.length; i++){
  underscores.push("_");
  }
document.getElementById("currentWord").innerHTML = underscores.join(" ");
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById("guesses").innerHTML = guesses;
}
// This for loop will look at the length of the word that the computer selected and add an underscore for each letter.




//Calling a function for anytime that someone hits a key.
document.onkeyup = function(event){
  // store the key  the user pressed in a variable
  var userGuess = event.key.toLowerCase();
  // add to guesses array
  guesses.push(userGuess);
  //every time they hit a key the guesses will go down by one
  guessesLeft--;

  for( var i = 0; i < res.length; i++){
    console.log(res[i]);

  var resString = res.indexOf(userGuess);

  console.log(resString);
  }

  if(resString > 0){
    alert("Got one!");
  }

  /*
       res =         ["c", "r", "i", "c", "k", "e", "t"]
       underscores = ["_", "_", "_", "_", "_", "_", "_"]
       index:          0    1    2    3    4    5    6
      Step 1: loop through the res array and check if the userGuess is equal to a letter.
      Step 2: if they are equal then replace the underscores array with that value, in the correct index.
  */

  //This will add one loss, reset the game, and alert them to try again if they use all 10 guesses.
  if (guessesLeft === 0){
    losses++;
    reset();
    alert("Try Again!");
  }

  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById("guesses").innerHTML = guesses.join(" ");
}

reset();
console.log(guesses);
console.log(res);
console.log(underscores);
console.log(res.length);
