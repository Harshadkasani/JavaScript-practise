const score = {
  wins : 0,
  loses : 0,
  ties : 0
}


function playGame(userChoice) {
  const randomNumber = Math.random();
  let computerGuess = '';

  if (randomNumber < 1/3) {
    computerGuess = 'Rock';
  } else if (randomNumber < 2/3) {
    computerGuess = 'Paper';
  } else {
    computerGuess = 'Scissor';
  }
  console.log(computerGuess);

  let result = '';

  if (userChoice === computerGuess) {
    result = 'Tie';
  } else if (
    (userChoice === 'Rock' && computerGuess === 'Scissor') ||
    (userChoice === 'Paper' && computerGuess === 'Rock') ||
    (userChoice === 'Scissor' && computerGuess === 'Paper')
  ) {
    result = 'You win';
  } else {
    result = 'You lose';
  }

  if(result === 'You win'){
    score.wins += 1;
  }
  else if(result = 'You lose'){
     score.loses += 1;
  }
  else if(result = 'Tie'){
     score.ties += 1;
  }
  

  alert(`You picked ${userChoice}. Computer picked ${computerGuess}. ${result}
Wins : ${score.wins}, Loses : ${score.loses}, Ties : ${score.ties}`);
}

function reset(){
  score.wins = 0,
  score.loses = 0,
  score.ties = 0
}