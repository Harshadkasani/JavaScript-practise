       /* Rock*/

function rock(){
    const randomNumber = Math.random()
        console.log(randomNumber)
         let computerGuess = ''
         if (randomNumber>=0 && randomNumber<1/3){
            computerGuess = 'Rock'
         }
         else if(randomNumber>=1/3 && randomNumber<2/3){
            computerGuess = 'Paper'
         }
          else if(randomNumber>=2/3 && randomNumber<1){
            computerGuess = 'Scissor'
         }
         console.log(computerGuess)

        let result = ''
         if(computerGuess === 'Rock'){
            result = 'Tie'
            
         }
         else if(computerGuess === 'Paper'){
            result = 'You Loss'
            
         }
          else if(computerGuess === 'Scissor'){
            result = ' You Win'
            
         }
        alert(`You picked : Rock.    computer picked : ${computerGuess}.    result : ${result}`)
}

        /* paper*/


function paper(){
    const randomNumber = Math.random()
        console.log(randomNumber)
         let computerGuess = ''
         if (randomNumber>=0 && randomNumber<1/3){
            computerGuess = 'Rock'
         }
         else if(randomNumber>=1/3 && randomNumber<2/3){
            computerGuess = 'Paper'
         }
          else if(randomNumber>=2/3 && randomNumber<1){
            computerGuess = 'Scissor'
         }
         console.log(computerGuess)

        let result = ''
         if(computerGuess === 'Rock'){
            result = 'You Win'
            
         }
         else if(computerGuess === 'Paper'){
            result = 'Tie'
            
         }
          else if(computerGuess === 'Scissor'){
            result = ' You Loss'
            
         }
        alert(`You picked : Paper.    computer picked : ${computerGuess}.    result : ${result}`)
}

     /* Scissor*/

function scissor(){
    const randomNumber = Math.random()
        console.log(randomNumber)
         let computerGuess = ''
         if (randomNumber>=0 && randomNumber<1/3){
            computerGuess = 'Rock'
         }
         else if(randomNumber>=1/3 && randomNumber<2/3){
            computerGuess = 'Paper'
         }
          else if(randomNumber>=2/3 && randomNumber<1){
            computerGuess = 'Scissor'
         }
         console.log(computerGuess)

        let result = ''
         if(computerGuess === 'Rock'){
            result = 'You Loss'
            
         }
         else if(computerGuess === 'Paper'){
            result = 'You Win'
            
         }
          else if(computerGuess === 'Scissor'){
            result = ' Tie'
            
         }
        alert(`You picked : Scissor.    computer picked : ${computerGuess}.    result : ${result}`)
}
