// for of

// ["", "", ""]
// [{}, {}, {}] objects in array k liye use for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps for unique values

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) { //to get key and value separate
     console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
 //object me for of loop nahi lagta map me lagta
  
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }