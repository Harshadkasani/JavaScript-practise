function calculate(a,b,calculation){
    return  calculation(a,b)
}
function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function mul(a,b){
    return a*b
}
function div(a,b){
    return a/b
}

console.log(calculate(30,10,add))
console.log(calculate(30,10,sub))
console.log(calculate(30,10,mul))
console.log(calculate(30,10,div))

/* closures*/

function outer(){
    let y = 20
    function inner(){
        console.log(y)
    }
    inner()
}
outer()
      
       /*without calling inner() it will not print*/

function outer(){
    let y = 20
    function inner(){
        console.log(y)
    }
    
}
outer()

     /* created inner function stored in return inner and it will stored in result variable and call result()*/

function outer(){
    let y = 20
    function inner(){
        console.log(y)
    }
    return inner
}
let result = outer()
result()  /* 20
// result()        20
// result()           20*/


function counter(){          /* 1 2 3*/
    let count = 0
    return function increment(){
        count++
        console.log(count)
    }
}
let incr = counter()
incr()
incr()
incr()
incr()