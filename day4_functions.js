function greet(){
    console.log('Hello world')
}
    
greet()
greet()
greet()
greet()

/* functions with parameters*/

/* function without parameters*/
function add(){
    console.log(3+4)
}
add()

/* function with parameters*/

function addition(a,b){
    console.log(a+b)
}

addition(4,5)

function greeting(name){
    console.log('Hello '+name)
}

greeting('Harshad')

/* function with return keyword*/

function multiplication(a,b){
    console.log(a*b)
    return a*b
}

multiplication(2,3)
result = multiplication(5,4)
console.log(result)

/* calculator using function*/
function calculator(a,b){
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
    
}
calculator(4,5)

/* arrow functions*/

const wishes = name => {
    return "Happy Birthday "+name
}
result1 = wishes('Harshad')
console.log(result1)

const sum = (a,b) => a+b
res = sum(4,5)
console.log(res)

/* arrow function in short one line form*/
const sub = (a,b) => console.log(a-b)

sub(10,5)

/* arrow function without parameters*/

const wished = ()=>{
    console.log("hello")
}
wished()

/* arrow function in short without parameter*/
const wish = ()=>console.log("happy")

wish()

/* Global scope*/
let college = 'Sasi'
function show(){
    let college = 'Sasi'
    console.log(college)
}

show()
console.log(college)



