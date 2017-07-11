var computerChoice =["football", "baseball", "soccer", "golf", "cricket", "hockey", "volleyball", "cricket", "bowling", "tennis", "lacrosse", "surfing", "softball", "rugby", "curling"];

var wins = 0;

var losses = 0;

var wordChosen =
  computerChoice[Math.floor(Math.random() * computerChoice.length)];

var guessesLeft = 10;

var guesses = [];

var underscores = [];

for ( var i = 0; i <= wordChosen.length -1; i++){
underscores.push("_");
}



var reset = function(){

  underscores = [];
  guessesLeft = 10
  guesses = [];
  wordChosen = computerChoice[Math.floor(Math.random() * computerChoice.length)];
  for( var i = 0; i <= wordChosen.length -1; i++){
  underscores.push("_");
  }
  }


document.onkeyup = function(event){

  var userGuess = event.key.toLowerCase();
  var newGuess =[];

  guesses.push(userGuess);


if (wordChosen.indexOf(event.key) < 0){
   guessesLeft--;
 }


  if (guessesLeft === 0){
     document.getElementById("losses").innerHTML = ++losses;
     alert("Try again!")
     reset();
   }

  if(wordChosen.indexOf(userGuess) >-1 ) {
    for( var i=0; i <= (wordChosen.length-1); i++){
      if (userGuess === wordChosen[i]){
        newGuess.push(wordChosen[i]);
      } else {
        newGuess.push(underscores[i]);
      }
    }
    underscores = newGuess;
  }

  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById("guesses").innerHTML = guesses.join(" ");
  document.getElementById("currentWord").innerHTML = underscores.join(" ");

  if (underscores.join("") === wordChosen){
    document.getElementById("wins").innerHTML = ++wins;
    alert("You got it!");
    guessesLeft--;
    reset();
  }
}

reset();
console.log(guesses);
console.log(underscores);
console.log(losses);
