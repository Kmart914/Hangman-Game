var computerChoice =["football", "baseball", "soccer", "golf", "cricket", "water polo", "hockey", "volleyball", "cricket", "bowling", "ping pong", "tennis", "lacrosse", "surfing", "softball", "rugby", "curling"];

var wins = 0;

var losses = 0;

var wordChosen =
  computerChoice[Math.floor(Math.random() * computerChoice.length)];


var guessesLeft = 10;

var guesses = [];

var res = wordChosen.split("");

var currentWord = [];

var reset = function(){
  guessesLeft = 10
  guesses =[];
  wordChosen = [];
  computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

for( var i = 0; i < wordChosen.length; i++){
  currentWord += "_ ";
}



  console.log(res);
  console.log(wordChosen);

document.onkeyup = function(event){

guessesLeft--;
var userGuess = "" + event.key.toLowerCase();

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
