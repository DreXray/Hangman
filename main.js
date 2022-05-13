let words = ["yellow", "orange", "blue", "green", "pink"]
// words that will be randomly chosen for hangman

let word = words[Math.floor(Math.random() * words.length)]
// this function is making the hangman word a random choice out of the array colors 

let ansArray = [];
for(let i = 0; i < word.length; i++){
  ansArray[i] = "_"
}
// once a random color is chosen, I want to loop over the letter in that word and make each letter an "_"

let remLetters = word.length;
// this variable tells me the remaining amount of letters that need to be guessed in a my random color word

while(remLetters > 0) {
  alert(ansArray.join(" "));
  // above is so that the lines are seperated and not just one big old line 
  let guessLetter = prompt("Guess a letter");
  // this variable is whatever letter the player is guessing 
  if (guessLetter == null) {
    break;
  }
  else if (guessLetter.length !== 1 ){
    alert("guess one letter");
    // player can only input a single letter at a time 
  } else {
    for (let j = 0; j < word.length; j++){
      // if the letter they guessed is at this index, 
      if(word[j] == guessLetter){
        // if they guess the correct letter, we will update the letter Array at that index
        ansArray[j] = guessLetter;
       remLetters--;
        // one of the lines will be subtracted
        
      }
    }
  }
  // end game
}

  alert(ansArray.join);
  alert("HOORAY! THE ANSWER IS" + word);