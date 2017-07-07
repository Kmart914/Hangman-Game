var computerChoice =["football", "baseball", "soccer", "golf", "cricket", "water polo", "hockey", "volleyball", "cricket", "bowling", "ping pong", "tennis", "lacrosse", "surfing", "softball", "rugby", "curling"];

var wins = 0;

var losses = 0;

var wordChosen =
  computerChoice[Math.floor(Math.random() * computerChoice.length)];

var guessesLeft = 10;

var guesses = [];


var reset = function(){
  guessesLeft = 10
  guesses =[];
  wordChosen =
  computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

  console.log(wordChosen);

document.onkeyup = function(event){

guessesLeft--;
var userGuess = "" +
event.key.toLowerCase();

guesses.push(userGuess);
console.log(guesses);

}
