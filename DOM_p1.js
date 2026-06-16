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

const button = document.querySelector('.btn')
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

