      /* set time in milliSeconds only*/

// setTimeout(function(){
//     console.log('Hi Harshad')

// },4000)

const button = document.getElementById('btn')
const heading = document.getElementById('heading')
const message = document.getElementById('text')

// button.addEventListener('click',function(){

//     // message.textContent='please wait'
//      /* if we assign same property it will replace with boom after 4 seconds*/
//     heading.textContent = 'Hello word'

    

//     setTimeout(function(){
//         message.textContent = 'Boom'

//     },4000)

//     message.textContent='please wait'
//     console.log(message.textContent='please wait')
//     message.textContent = 'loading.......'
//     console.log( message.textContent = 'loading.......')
// });


// button.addEventListener('click',function(){

//     // message.textContent='please wait'
//      /* if we assign same property it will replace with boom after 4 seconds*/
//     heading.textContent = 'Hello word'
//     message.textContent = 'loading......'
//     setTimeout(function(){
//         message.textContent = 'please wait';

//         setTimeout(function(){
//         message.textContent = 'Boom';
//     },4000)
// },2000)})

       /* Set interval*/

// let stopTime = setInterval(function(){
//     console.log('running')
// },2000)

// setTimeout(function(){
//     clearInterval(stopTime)
//     console.log('stop')
// },6000)

      /* Countdown project*/

// let time = 0
// let timer = setInterval(function(){
//      console.log(time)
//      time++
// },1000)

// setTimeout(function(){
//     clearInterval(timer)

// },11000)

   /* another way*/   /* up counter*/

// let time = 0
// let timer = setInterval(function(){
//      console.log(time)
//      time++
//      if(time > 10){
//     clearInterval(timer)
//     }
// },1000)

/* Down counter*/

let time = 10
let timer = setInterval(function(){
     console.log(time)
     time--
     if(time < 0){
    clearInterval(timer)
    }
},1000)




