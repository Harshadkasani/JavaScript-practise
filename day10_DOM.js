/*let body = document.body.innerHTML = 'Coding' /* reflects the output in web page
console.log(body) */

console.log(document.body)   /* print total body in HTML*/

let title = document.title = 'DOM'  /* change title*/

console.log(title)               /* print title*/

console.log(document.body.innerHTML)

/*document.body.innerHTML = '<button>Submit</button>'  submit button in webpage*/

/*console.log(document.querySelector('h1').innerHTML = 'coding') 
console.log(document.querySelector('.heading').innerHTML = 'coding')*/

const head = document.querySelectorAll('h1')
head[0].innerText = "first"
head[1].innerText = 'second'
console.log(head[0],head[1])


