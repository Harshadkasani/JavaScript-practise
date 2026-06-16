             /* HTML code

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>day1</title>
    <script src="DOM_p1.js" defer></script>
     <link rel="icon" href="data:,">
</head>
<body>
    <p>You Tube Subscribe Button</p>
    <button class="btn" onclick="clicked()">Subscribe</button>
</body>

</html>  */


              /* JAVASCRIPT CODE*/

/*const button = document.querySelector('.btn')
console.log(button)
function clicked(){
    if (button.innerHTML === 'Subscribe'){
        button.innerHTML = 'Subscribed'
        button.style.color = 'white'
        button.style.backgroundColor = 'green'
       
        
    }
    else{
        button.innerHTML = 'Subscribe'
        button.style.color = 'white'
        button.style.backgroundColor = 'red'

    }
}
*/

/*       HTML CODE
<body>

    <h1 id="heading1">My name is Harshad</h1>
    <h1 id="heading2">My name is vinay</h1>

    <p id="descript">I have done my Bachelors degree</p>
    <button class="btn" onclick="clicked()">click</button>

</body>*/

     /* JAVASCRIPT */

const heading = document.querySelector('h1')
const paragraph = document.querySelector('p')

function clicked(){
    if (heading.innerHTML ==='My name is Harshad'){
        heading.innerHTML = 'My name is Harshad Kasani' 
        heading.style.color = 'blue'
        paragraph.innerHTML = 'I have completed M.tech'
        paragraph.style.color = 'green'


    }
}

      /* Practise element by id*/

const heading1 = document.getElementById('heading1')
console.log(heading1)

const paragraph = document.getElementById('descript')
console.log(paragraph)

const heading2 = document.getElementById('heading2')
console.log(heading2)