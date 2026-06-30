      /* call() method*/

const person = {
    name : "Harshad"
}

function greet(city,country){
    console.log(`Hello ${person.name} from ${city}, ${country}`)
}

greet.call(person,"Hyderabad","India")

           /*without call method*/  /* it is used to call function fixed single object*/

const person1= {
    name : "Harshad"
}

const person2 = {
    name : "Rahul"
}

function greet(city,country){
    console.log('Hello '+ person1.name + ' from ' + city+', '+country )
}

greet("Hyderabad","India")

            /* with call method*/  /* without modifying the existing function we can call different objects*/

const person1 = {
    name : "Harshad"
}

const person2 = {
    name : "Rahul"
}

function greet(city,country){
    console.log('Hello '+ this.name + ' from ' + city+', '+country )
}

greet.call(person1,"Hyderabad","India")
greet.call(person2,"Mumbai","India")



/* the main differencr between without call method and with call method is ---> 
without call method function is big , with call method we call several times for differtent objects*/

          /*  apply()*/

const person = {
    name :"Harshad"
}

function greet(city,country){
    console.log('Hello '+ this.name + ' from ' + city+', '+country )
}

greet.apply(person,['hyderabad','India'])

/* difference between call() and apply() methods is ----> we pass arguments separately in call()
   but in apply() passed arguments as a group like an array*/

/*syntax for call(): functionName.call(thisValue,arg1,arg2...);
syntax for apply(): functionName.apply(thisValue,[arg1,arg2...]);
*/

     /* bind()*/  /* it cant execute immediately it returns in new function and execute later */

const person = {
    name :"Harshad"
}

function greet(city,country){
    console.log('Hello '+ this.name + ' from ' + city+', '+country )
}

const newFunction = greet.bind(person,'Hyderabad','India')
console.log('1')
console.log('2')
newFunction()
