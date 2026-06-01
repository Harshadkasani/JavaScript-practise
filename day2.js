/* Grade calculator*/
let marks = 75;
if (marks >= 90){
    console.log('Grade A')
}
else if (marks >= 75){
    console.log('Grade B')

}
else if (marks>=60){
     console.log('Grade c')
}
else{
    console.log('fail')
}


/* voting eligibility*/

let age = 19;
if (age < 18 && age==18){
    console.log('not eligible for vote')
}
else if(age >18 || age<18){
    console.log('eligible for vote')
}

/* ATM balance checker*/

let balance = 5000;
let withdrawAmount = 2000;
if (balance == 5000 && withdrawAmount <=2000){
    console.log('success')
}

else if(balance ==5000 && withdrawAmount >5000){
    console.log('failure')
}

/* Switch statement*/

// let day = 3;
// switch(day){
//     case 1:
//         console.log('monday');
//         break;
//     case 1:
//         console.log('Tuesday');
//         break;
//     case 2:
//         console.log('wednesday');
//         break;
//     case 3:
//         console.log('Thursday');
//         break;
//     case 4:
//         console.log('Friday');
//         break;
//     default:
//         console.log('sunday')

// }
  

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Weekend";
}

console.log(dayName); // Wednesday