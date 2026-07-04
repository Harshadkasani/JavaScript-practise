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

  alert(`You picked ${userChoice}. Computer picked ${computerGuess}. ${result}`);
}