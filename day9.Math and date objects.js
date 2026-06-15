/* PI is used to calculate PI value*/

let cal = Math.PI
console.log(cal)

console.log(Math.PI)    /* 3.14*/

let number = 5.5
console.log(Math.floor(number))     /* floor is used to down round the value*/
console.log(Math.ceil(number))      /* ceil is used to up round the value*/
console.log(Math.round(number))     /* Round is used to round the nearest value*/

  /* used to generate random decimal number between 0 to 1 */
console.log(Math.random())    

console.log(Math.floor(Math.random()*6+1)) /* it is generted 1 to 6 numbers*/

/* creating rolling a dice */

let dice = Math.floor(Math.random()*6+1)
console.log("obtain number after rolling a dice :",dice)

/* date objects*/

let currentDate = new Date()
console.log(currentDate)    /* Mon Jun 15 2026 14:13:52 GMT+0530 (India Standard Time)*/

document.body.innerHTML = currentDate

let date = currentDate.getDate()
console.log(date)

let month = currentDate.getMonth()+1   /* Month index is start from Zero thats why we add +1*/
console.log(month)

let year = currentDate.getFullYear()
console.log(year)

console.log(date+'/' + month+'/' + year)


/* time*/

let hours = currentDate.getHours()
console.log(hours)

let minutes = currentDate.getMinutes()
console.log(minutes)

let seconds = currentDate.getSeconds()
console.log(seconds)

console.log(hours+" : "+minutes+" : "+seconds)

console.log(date+" "+month+" "+year)

/* four digit OTP generation*/

let Otp = Math.floor((Math.random()*9000)+1000)  /* random four digit number*/
console.log(Otp)

let pass = Math.floor((Math.random()*90000)+10000)  /* random five digit number*/
console.log(pass)

let twoDigitNumber = Math.floor((Math.random()*90)+10)  /* random two digit number*/
console.log(twoDigitNumber)

let threeDigitNumber = Math.floor((Math.random()*900)+100)  /* random three digit number*/
console.log(threeDigitNumber)

let singleDigitNumber = Math.floor((Math.random()*9)+1)   /* random single digit number*/
console.log(singleDigitNumber)