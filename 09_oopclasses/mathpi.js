//INTERVIEW ques:
// can value of pie be changed from 3.14 to something else?
//yes it is a constant but still we can change this
console.log(Math.PI) //gives 3.141592653589793
//don by Object.getOwnPropertyDiscriptor(object_name,propert_name)

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name")); //chai object ki name property lena

Object.defineProperty(chai, 'name', { //here we can change whter writable ,emumerable,configurable true honge ya false...
// it is all false in case of Math.PI tabhi woh value fixed thi
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') { //this skips orderchai property jo func thi
        
        console.log(`${key} : ${value}`);
    }
}