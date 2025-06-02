const userEmail = []

if (userEmail) { //empty array is truthy value
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0" string me zero, 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) { this is how we check array empty or not
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
 //check object is empty or not by finding length of array of keys in object
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
//used when we ar3e getting null or undefined result but cant print it or use it

let val1;
// val1 = 5 ?? 10 //5 is printed coz woh pehla valid ans hai
// val1 = null ?? 10 9jaise hi pehla valid answer dekhega woh lelega like here 10)
// val1 = undefined ?? 15 //15 is printed
val1 = null ?? 10 ?? 20 //10



console.log(val1);

// Terniary Operator (it is diff from ??)

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")