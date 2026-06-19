       /*  HTML code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>day1</title>
    <link rel="stylesheet" href="DOM.css">
    <script src="Day11_event listeners.js" defer></script>
     <link rel="icon" href="data:,">
</head>
<body>
     <div id="box">
          Welcome
     </div>

     <button id="btn">Click</button>

     <label>Name :</label>
      <input type="text" id="inp">
      <p id="display">harsha</p>
     
      <form id="myForm">
          <label for="name">Name:</label>
          <input type="text" id="name">
          <p id="errorMsg"></p>
          <button type="submit" id="btn2">Submit</button>

      </form>

    </body>
    </html>

     /*   CSS code
.colouring{
    color: brown;
    background-color: aqua;
}

*/




/*innerHTML used for change or add HTML elements dynamically in the document object*/
const box = document.getElementById('box')
box.innerHTML = '<h1>Hello Box</h1>'
console.log(box)

/* suppose for data comes from an API*/

/*let product = {
    name : "Iphone",
    price : "55000",
    quantity : "2"

}*/
/*
box.innerHTML = `${product.name}`
box.innerHTML = `${product.price}`*/

/*box.textContent = '<h1>Hello Box</h1>' */ /* used for displaying text*/

/*box.style.color='red'
box.style.backgroundColor = 'green' *//* if we write more CSS properties it will difficult*/

/* that why we use Classlist */

box.classList.add('colouring')

box.classList.remove('colouring')

box.classList.contains('colouring')
console.log(box)

box.classList.toggle('colouring') /* if coluring exist it removes ,if not it adds*/

/* events deep dive*/
/* event listeners*/

const button = document.getElementById('btn')


button.addEventListener('click',function(){
    if(button.textContent === 'Click'){
        button.textContent = 'Clicked'
    }
    else{
        button.textContent = 'Click'
    }

})

const input = document.getElementById('inp')
const output = document.getElementById('display')
input.addEventListener('input',function(){
    output.textContent = input.value
    console.log(output.textContent = input.value)

});

const form1 = document.getElementById('myForm')
const name =  document.getElementById('name')
const error = document.getElementById('errorMsg')

/*const btn = document.getElementById('btn2')*/
form1.addEventListener('submit',function(event){
    if(name.value === ""){
        error.textContent ="please required credentials"
        error.style.color = "red"
    }
    else{
        error.textContent =""
    }
    event.preventDefault();
    console.log(name.value);

})
