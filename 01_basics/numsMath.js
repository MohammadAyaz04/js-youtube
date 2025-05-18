const score=550
console.log(score)

const num=new Number(1000000) //this creats num object
console.log(num)
console.log(num.toString())
console.log(num.toString().length)
console.log(num.toFixed(2)) //100.00
const n=23.78954
console.log(n.toPrecision(4)) //23.79
console.log(num.toLocaleString('en-IN')) //this givez indian no.system commas
console.log(num.toLocaleString()) //US no.system commas
//**************Maths*********************** */

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.66))
console.log(Math.ceil(4.5))
console.log(Math.floor(4.5))
console.log(Math.min(3,4,5,6,3,2))
console.log(Math.max(34,34,2,5,6,7))
console.log(Math.random())
 //gives random no. btw 0&1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // in order to get min as 10 we add min=10
console.log(Math.floor(Math.random() * (max - min + 1))) //thois will not give min=10