/* Arrays*/

let array = ['Harsha',24,4.5,true];
console.log(array)

let fruits = ['Mango','Orange','Apple','Banana']
console.log(fruits)

/* Accesing array elements*/

let a = fruits[0]
console.log(a)

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])

/* add new elements in an array*/

fruits.push('Kiwi','Avacado')
console.log(fruits)

/* remove or delete elements in an array*/

fruits.pop()
fruits.pop()
fruits.pop()
fruits.pop()
console.log(fruits)

console.log(fruits.pop())
console.log(fruits)
console.log(fruits.push('Guava'))
console.log(fruits)

console.log(fruits.pop())
console.log(fruits)

/* shift (remove starting element)*/

fruits.shift()
console.log(fruits)

console.log(fruits.unshift('Kiwi','orange'))

console.log(fruits)
console.log(fruits.shift()) 
console.log(fruits)
/* unshift adds element in starting position*/


/* splice method in aray
      splice(start,deletecount,items)
                  or
      splice(index which position add or delete, for how many deleted, adding elements)*/

let fruits_list = ['Mango','Orange','Apple','Banana']
console.log(fruits_list)

fruits_list.splice(2,2,'Guava',56)
console.log(fruits_list)
  
/* slice(start,end)   strating index included and ending index not included (means (-1))*/

result = fruits_list.slice(0,3)
console.log(result)

let numbers = [10,20,30,40,50]
console.log(numbers)
copy = numbers.slice(0,5)
copy = numbers.slice(0,4)
copy = numbers.slice(0,3)

copy = numbers.slice(2)
copy = numbers.slice(-4)
console.log(copy)