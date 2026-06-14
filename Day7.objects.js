let object = {
    name: "Harshad",
    age: 24,
    village: "Relangi",
    gender: "Male"
}

console.log(object)

/* Aceesing elements in object using two ways one is dot notation and another one is bracket notation*/

result = object.name
console.log(result)

console.log(object.village)

console.log(object['age'])
console.log(object['name'])

/* update elements in object*/

object.name = 'Sai'
object.village = 'velphur'
object.age = 20

console.log(object)

/* adding in objects*/

object.course = 'ECE'
object.college = 'Sasi'
object.year = 2

console.log(object)

/* Deleting*/

delete object.name
delete object.age
console.log(Object.keys(object).length)


/* Nested object*/

/*let student ={
    name : "Harshad",
    gender :"Male",
    village : "Relangi",
    study:{
        course : 'ECE',
        college : "Sasi",

    }

    greet:function(){

    }

}*/

/*console.log(student)

console.log(student.study.college)

       /*update*/

/*student.study.college = 'Vasavi'
console.log(student)

console.log(student.study.college)

student.study.year = 4
console.log(student)

delete student.study.year
console.log(student)*/

let student ={
    name : "Harshad",
    gender :"Male",
    village : "Relangi",
    study:{
        course : 'ECE',
        college : "Sasi",

    },

    greet:function(){
        console.log('good morning')
        
    }

}

console.log(student.greet())

/* Destructuring*/

let {name,} = student
console.log(student.name)
console.log(student.village)

/* Spread operator*/

let half={
    name : "Kalyan",
    age : 23,
    city: "Tanuku"
}

let fulldetails = {
    ...half,
    gender: "Male",
    College : "Sasi",
    Course : "ECE",
    Qualification : "B.Tech"

}

console.log(half)
console.log(fulldetails)


/* rest Operator*/

let {city,...remaining_details} = fulldetails
console.log(remaining_details)

