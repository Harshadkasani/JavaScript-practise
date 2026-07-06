        /* Array Methods*/
        /* forEach method */

let array = [10,20,30,40,50]
 
//       /* print elements one by one*/
array.forEach(function(i){
    console.log(i)
})

     /* print elements with index*/

array.forEach(function(i,index){
    console.log(index +' : '+i)
})

   /* print elements with an array*/

array.forEach(function(i,index,array){
    console.log(index +' : '+i +'   '+array)
})

/*upadating values*/

array.forEach(function(i){
    console.log(i*2)

})

/* using arrow function*/

array.forEach((i)=>{
    console.log(i)

})
  /* print banana five times one by one*/

array.forEach((i,index)=>{
    console.log(array[index]='banana')
})

array.forEach((i,index)=>{
    array[index]='banana'
})
console.log(array)


array1 = ['apple','banana','cherry']
array1.forEach((i,index)=>{
    array1[index]=i.toUpperCase()
})
console.log(array1)

let numbers = [100,200,300,400]
let multiplyWithThree = []
numbers.forEach((i)=>{
    multiplyWithThree.push(i*3)
})
console.log(multiplyWithThree)



let numbers = [100,200,300,400]
numbers.forEach((i)=>{
    console.log(i*3)
})

     /* map() in array methods*/

let numbers = [10,20,30]
let multiplyWithThree = numbers.map((i)=>{
    // console.log(i*3)
    return i*3
})

// console.log(multiplyWithThree)

let fruits = ['apple','banana','cherry']
let upperCase = fruits.map((i)=>{
    return i.toLocaleUpperCase()
})
console.log(upperCase)
console.log(fruits)

    /* Add Text*/

let fruits = ['apple','banana','cherry']
let upperCase = fruits.map((i)=>{
    return "i love "+ i
})
console.log(fruits)
console.log(upperCase)

   /* print total products  using map() methods and map() always returns new array*/

let products = [{name : 'laptop',price : 50000},{name : 'mobile',price : 20000},{name : 'watch',price : 5000}]
let totalProducts = products.map((i)=>{
    return i
})
console.log(totalProducts)

/* print  product names*/

let ProductNames = products.map((i)=>{
    return i.name
})
console.log(ProductNames)

/* print product prices*/

let price = products.map((i)=>{
    return i.price
})
console.log(price)

      /* filter() method this alse return new array like map()*/ 

let marks = [30,45,25,40,38,50]
let highmarks = marks.filter((i)=>{
    return i >=40
})
console.log(highmarks)

    /* print above highmarks in ascending order using sort()*/

let marks = [30,45,25,40,38,50]
let highmarks = marks.filter((i)=>{
    return i % 2 === 0 
}).sort()
console.log(highmarks)
 
let highPriceProducts = products.filter((i)=>{
    return i.price >= 10000
})
console.log(highPriceProducts)


/* reduce method()*/
   /* without reduce method*/

let arraynumbers = [1,2,3,4,5]
let newarr = 0
for (let i=0;i<arraynumbers.length;i++){
    newarr += arraynumbers[i]
}
console.log(newarr)

/*with reduce method*/

let arraynumbers1 = [1,2,3,4,5]
let newarr1 = arraynumbers1.reduce((accumulator,value)=>{
    return accumulator + value

},2)

console.log(newarr1)

/* add all product prices and increase 1000*/

let newarr2 = products.reduce((acc,value)=>{
    return acc+value.price
},1000)

console.log(newarr2)