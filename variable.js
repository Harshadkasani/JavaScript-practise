let Quantity = 0
function show(){
    console.log(`Cart Quantity : ${Quantity}`)
}
function cart(){
    Quantity+=1
    console.log(`Cart Quantity : ${Quantity}`)

}

function add2(){
    Quantity+=2
    console.log(`Cart Quantity : ${Quantity}`)

}

function add3(){
    Quantity+=3
    console.log(`Cart Quantity : ${Quantity}`)

}
function reset(){
    console.log('Cart was reset')
    Quantity = 0
    console.log(`Cart Quantity : ${Quantity}`)
    
}
