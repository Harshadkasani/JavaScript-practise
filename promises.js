// let user;

// setTimeout(()=>{
//     user = 'Harshad'     /* this is the problem promises solved*/
// },3000)

// console.log(user)       /* output : undefined*/


// let promise = new Promise((resolve, reject) => {

//     let success = true;

//     if (success === false) {
//         resolve("Login Successful");
//     } else {
//         reject("Invalid Password");
//     }

// });

// promise
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });

// function prepareFood(){

//     setTimeout(()=>{
//         console.log('Food is prepared')
//     },3000)

// }



// function eatFood(){

//     setTimeout(()=>{
//         console.log('eaten food')
//     },2000)
    
// }

// function goToSchool(){

//     setTimeout(()=>{
//         console.log('go to school')
//     },1500)
    
// }
 
// prepareFood()
// eatFood()
// goToSchool()

/* executing correct order with callback function*/

// function prepareFood(next){
    
    
//     setTimeout(()=>{
//         console.log('Food is prepared')
//         next()
//     },3000)
        
// }



// function eatFood(next){
     

//     setTimeout(()=>{
//         console.log('eaten food')
//         next()
//     },2000)
    
// }

// function goToSchool(){

//     setTimeout(()=>{
//         console.log('go to school')
//     },1500)
    
// }
 
// prepareFood(()=>{
//     eatFood(()=>{
//         goToSchool()
//     })

// })

/* same process executed by using promises*/


// function prepareFood(){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('food is prepared')
        
//      },3000)

//    })
// }
 
    
//  function eatFood(){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         resolve('food is eaten')
        
//      },2000)

//    })
// }
     
     
// function goToSchool(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         console.log('go to school')
//     },1500)
//    })
    
    
// }

// prepareFood().then((value)=>{
//      console.log(value)
//      return eatFood()
     
//  })

// .then((value)=>{
//      console.log(value)
//      return goToSchool()
//  })
 
// .then((value)=>{
//      console.log(value)
//  })

      /* promises methods using then and catch ,finally to diplay resolve and reject promises*/
      
function prepareFood(){
    let isFoodReady = true
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if (isFoodReady === true){
            resolve('food is prepared')
        
        }
        else{
            reject('Food is not ready')
        }
     },3000)

   })
}
 
    
 function eatFood(){
    let isFoodEaten = false
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        if(isFoodEaten === true){
           resolve('food is eaten') 
        }
        else{
            reject('food is not eaten')
        }
        
     },2000)

   })
}
     
     
function goToSchool(){
    let isgotoschool = true
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(isgotoschool === true){
            resolve('go to school')
        }
        else{
            reject('didnt go to school')
        }
        
    },1500)
   })
    
    
}

prepareFood().then((value)=>{
     console.log(value)
     return eatFood()     /* it is used to display the resolve messages*/
     
 })

.then((value)=>{
     console.log(value)
     return goToSchool()
 })
 
.then((value)=>{
     console.log(value)
 })
.catch((error)=>{         /* catch the reject message and didnt print remaining functions*/
    console.log(error)
})     
.finally(()=>{
    console.log('All promises are resolved or rejected succesfully') /* even promises are resolved or rejected still finall block is executed*/

})


    
    
    
   




 
