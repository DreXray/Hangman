let words = ["yellow", "orange", "blue", "green", "pink"]
// these will be the words that will be randomly chosen for hangman

let word = words[Math.floor(Math.random() * words.length)]
// this function is making the hangman word a random choice out of the array colors 

let answerArray = [];
for(let i = 0; i < word.length; i++){
  answerArray[i] = "_"
}
// once a random color is chosen, I want to loop over the letter in that word and make each letter an "_"

let remainingLetters = word.length;
// this variable tells me the remaining amount of letters that need to be guessed in a my random color word

while(remainingLetters > 0) {
  alert(answerArray.join(" "));
  // above is so that the lines are seperated and not just one big old line 
  let guessInput = prompt("Guess a letter");
  // this variable is whatever letter the player is guessing 
  if (guessInput == null) {
    break;
  }
  else if (guessInput.length !== 1 ){
    alert("guess one letter");
    // player can only input a single letter at a time 
  } else {
    for (let j = 0; j < word.length; j++){
      // if the letter they guessed is at this index, 
      if(word[j] == guessInput){
        // if they guess the correct letter, we will update the letter Array at that index
       answerArray[j] = guessInput;
        remainingLetters--;
        // one of the lines will be subtracted
        
      }
    }
  }
  // end of the game loop
}

  alert(answerArray.join);
  alert("WOHOO! Answer was " + word);