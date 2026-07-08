// fetch("https://fakestoreapi.com/products")  /* this link is like promise*/
// .then((data)=>{
//     return data.json()
// })
// .then((dataObj)=>{
//     console.log(dataObj)
// })
// .catch((error)=>{
//     console.log(error)
// })
     
     /*    this below two lines are same like above code
.then((data)=>data.json())
.then((dataObj)=>console.log(dataObj))*/



       /* print all the product title in API*/

// .then((data)=>{
//     return data.json()
// })
// .then((products)=>{
//     products.map((i)=>{
//        console.log(i.title) 
//     })
// })  

        /* print all the product prices in API*/

// .then((data)=>{
//     return data.json()
// })
// .then((products)=>{
//     products.map((i)=>{
//        console.log(i.price) 
//     })
// })  

          /* if we print indivial object details*/

// fetch("https://fakestoreapi.com/products/20")
// .then((data)=>data.json())
// .then((product)=>console.log(product))

   /* if we want to print 20th product details individually like id , price...*/
// .then((product)=>console.log(product.price))

    /*  using asyn and await function*/

// async function fetchApiUsingAsyncAndAwait() {
//     let data = await fetch("https://fakestoreapi.com/products")
//     let dataTransformToObj = await data.json()
//     console.log(dataTransformToObj)
// }
// fetchApiUsingAsyncAndAwait()

   /*using error handling*/
let product = document.getElementById('products')
product.classList.add('container')

async function fetchApiUsingAsyncAndAwait() {
    try{
        let data = await fetch("https://fakestoreapi.com/products")
        let dataTransformToObj = await data.json()
        console.log(dataTransformToObj)

        dataTransformToObj.forEach((value)=>{
        product.innerHTML += `<div class="card">
        <div>
            <h3>${value.title}</h3>
        </div>
            <img src="${value.image}"/>
        <div>
        </div>
        <div class='btn1'>
            <button>$ ${value.price}</button>
        </div>
        <div class='btn2'>
        <button>Buy Now</button
        </div>
        
        </div>`
    })
    }
    catch(error){
        console.log(error)
    }

}
fetchApiUsingAsyncAndAwait()

