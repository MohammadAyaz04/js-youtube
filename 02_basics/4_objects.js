// const tinderUser = new Object() 
// also away to declare object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com", //object k andar objects
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)
//usong spread for concat
const obj3 = {...obj1, ...obj2}
 console.log(obj3);


const users = [    //array of objects
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email //1st index object ka email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //get all keys of object in array
// console.log(Object.values(tinderUser)); //get all values in array
// console.log(Object.entries(tinderUser)); //give every property in object as array inside an array

//to check If the property is presnt or not in object
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor or other way to access the operation is


const {courseInstructor} = course
// console.log(courseInstructor); or to rename it we write as below called as DESTRUCTURING
const {courseInstructor: instructor} = course //now newname is instructor
console.log(instructor);

// json api syntax
    {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
 //other way of getting api's as array form
[
    {},
    {},
    {}
]
