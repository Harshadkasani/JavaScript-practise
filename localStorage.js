   /* it is used to store permanent in local storage*/

localStorage.setItem('Name','Harshad')
localStorage.setItem('City','Relangi')
localStorage.setItem('Gender','Male')
localStorage.setItem('Age','24')

let name = localStorage.getItem('Name')
let age = localStorage.getItem('Age')
let city = localStorage.getItem('City')
let gender = localStorage.getItem('Gender')

console.log(name)
console.log(age)
console.log(city)
console.log(gender)

document.body.innerHTML = name

localStorage.removeItem('City')


/* session storage*/   /* it is used fpr temporary storage*/

sessionStorage.setItem('Name','Harshad')
sessionStorage.setItem('City','Relangi')






