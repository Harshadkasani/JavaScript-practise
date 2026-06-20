          /* Container styling*/

const formContainer = document.getElementById('formContainer')
formContainer.classList.add('container')
         
         /* selecting Input Elements by ID*/

const form = document.getElementById('myForm')
const name = document.getElementById('name')
const email = document.getElementById('emailText')
const mobileNumber = document.getElementById('mobileNumber')
const password = document.getElementById('privacyPassword')

       /* selecting paragraph elements by ID*/

const errorMessage = document.getElementById('errorName')
const errorEmail = document.getElementById('errorEmail')
const errorNumber = document.getElementById('errorNumber')
const errorPassword = document.getElementById('errorPassword')

       /* Regex pattern Credential rules*/

let nameRegexPattern = /^[A-za-z]+$/
let emailRegexPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[A-Za-z]{2,}$/
let mobileRegexPattern = /^[0-9]{10}$/
let passwordRegexPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;

       /* Event listener and function*/
form.addEventListener('submit',function(event){
    event.preventDefault()

       /* Name credential rules*/

    if(nameRegexPattern.test(name.value.trim())!= true){
        errorMessage.textContent = 'please enter valid name'
        errorMessage.style.color = 'red'
        
    }
    else{
        errorMessage.textContent = ""
        console.log("Name :",name.value.trim())
    }

       /* Email credential rules*/

    if(emailRegexPattern.test(email.value.trim())!= true){
        errorEmail.textContent = 'please enter valid email'
        errorEmail.style.color = 'red'
        
    }
    else{
        errorEmail.textContent = ""
        console.log("Email :",email.value.trim())
    }

    /* Mobile Number crecdential rules*/

    if(mobileRegexPattern.test(mobileNumber.value.trim())!= true){
        errorNumber.textContent = 'please enter valid mobile number'
        errorNumber.style.color = 'red'
        
    }
    else{
        errorNumber.textContent = ""
        console.log("Mobile :",mobileNumber.value.trim())
    }

    /* Password credential rules*/

    if(passwordRegexPattern.test(password.value.trim())!= true){
        errorPassword.textContent = 'please enter valid Password'
        errorPassword.style.color = 'red'
        
    }
    else{
        errorPassword.textContent = ""
        console.log("Password :",password.value.trim())
    }

})