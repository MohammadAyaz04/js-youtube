//  Primitive

const { gameName } = require("./01_strings");

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
/*JavaScript is a dynamically typed language. This means that variable types are determined at runtime,
 and you do not need to explicitly declare the type of a variable before using it. 
 You can assign different types of values to a variable during its lifetime.
For example, in JavaScript, you can do the following:
let x = 10; // x is now a number
x = "Hello"; // x is now a string
*/
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

// const bigNumber = 3456543576654356754n  //n lagane se yeh BigInt hojaega



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId); //symbol

// https://262.ecma-international.org/5.1/#sec-11.4.3
/*Return type of variables in JavaScript
there r 2 types of datatypes
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
      to run the code write: node 01_basics/datatypesSummary.js*/
     // -----------------------------------------------
     
     //*Memory Alloctaion In javascript*

     //Stack->(primitive datatypes) & Heap(for  Non primitive)
     // e.g for Stack(stack memeory me jo lenge unka sirf copy milta)
     let na="ayaz"
     let n=na
     n="chai"
     console.log(na)
     console.log(n) //na is still ayaz

     //e.g heap(heap me lene se reference milta i.e change karne se change hojata)
     let user1={
        email:"ayaz.com",
        upi:"absdf.gh"
     }
     let user2=user1
     user2.email="new email"
     console.log(user1.email)
     console.log(user2.email);
     