let name = "Harshad "
console.log(name)

console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])
console.log(name[5])
console.log(name[6])

let leng = name.length
console.log(leng)

console.log(name.length)

let mail = "harshakasani@gmail.com"
console.log(mail.includes('@'))
console.log(mail.includes('t'))

/* split in strings*/

let fulldetails = "Harshad,24,male,Relangi,B.Tech,ECE"
console.log(fulldetails)
console.log(fulldetails.length)

let separate = fulldetails.split(',')
console.log(separate)
console.log(separate.length)

/* replace in string*/
let replaced = fulldetails.replace('Harshad','Sasi')
console.log(replaced)

/* trim*/

let string1 = "  hello  "
console.log(string1)
console.log(string1.length)
console.log(string1.trim())
let result = string1.trim()
console.log(result.length)


/* Regex it is used to pattern checking*/
/*let email = prompt()*/
let email = "harshakasani@gmail.com"
if (email.includes('@')){
    console.log('Valid')
}
else{
    console.log('Invalid')
}

let rules = /^[0-9]+$/
console.log(rules.test('9'))    /* true*/
console.log(rules.test('!'))    /*  false*/

var letters = /^[A-Z]+$/
console.log(letters.test('HAR'))    /* true*/

console.log(letters.test('a'))      /* false*/


var letters = /^[a-z]+$/
console.log(letters.test('HAR'))   /* false*/

console.log(letters.test('a'))     /* true*/


let passworpattern = /^(?=.*[A-za-z])(?=.*\d).{8,}$/;

/* at least one letter,at least one number,minimum 8 characters*/