//ARRAY is of object datatype
//ARRAY CREATION
const arr=[0,2,3,4,5]
const arr2=[2,4,55,true,"hello"]
const srr=["ahg",'sdvcdjv']
const arr3=new Array(1,2,3,4,5)
 //can have diff datatypes in it as well as array in side array
//javacript array are -resizeable,zero based indexing
//js array copy operations create shallow copies(copy whoes properties share same reference point)
//i.e jo change kroge copied array me woh orignal mebhi hoga change
//Deep copy me nhi hota orgnal me
console.log(arr[1])
console.log(arr3.length)
arr3.push(100)
console.log(arr3)
arr3.pop()
console.log(arr3)
arr3.unshift(9) //shifts all to right and add 9 at index 0
console.log(arr3)
arr3.shift() //removes th index 0th elemt
console.log(arr3)
//Some question methods
console.log(arr.includes(9))
console.log(arr.indexOf(3))
const newarr=arr.join()
console.log(newarr)
console.log(typeof(newarr)) //String hai 


// slice, splice methods

console.log("A ", arr); //original array 0 2 3 4 5

const myn1 = arr.slice(1, 3) // not include 3rd index [2,3] dega

console.log(myn1);
console.log("B ", arr); //still orig array


const myn2 = arr.splice(1, 3) //includes 3rd so gives index[2 3 4]
//splice also makes changes in orig array
console.log("C ", arr); //original gets modified to [0 5] coz [2 3 4] are spliced
console.log(myn2);

