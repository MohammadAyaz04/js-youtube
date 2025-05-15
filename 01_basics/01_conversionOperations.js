/*********Conversions***********
let age=33
console.log(typeof age)
//both syntax are correct
console.log(typeof (age))
let age1="33" //check for true,false,null,undefined to see the conversion output
let age3=Number(age1)
let age2="33abc"
let age4=Number(age2)
console.log(typeof age1)
console.log(typeof age2)
//console.log(age2)
console.log(typeof age3)
console.log(age3)
console.log(age4) //this gives NaN also a type
console.log(typeof age4)
let sc=true //for null gives 0 (on number conversion)
let sc2=Number(sc)
console.log(sc2) //gives 1
//Notes TO NUMBER CONVERSION :
//true->1,false->0
//anyString to number-> NaN 

let one=1
let bool_one=Boolean(one)
console.log(bool_one) //gives true
let abs="" 
let abc=Boolean(abs)
console.log(abc) //gives false
// TO BOOLEAN CONVERSION
//1->true ; 0->false
//""->false
//"hitesh"-> true*/
//*****************operations**************** */

let value =3
let negvalue=-value
console.log(negvalue)
console.log(2+2)
console.log(2**3)
console.log(2%3)
console.log(2/3)
console.log(2*3)
let str1="hell"
let str2=" ayaz"
let str3=str1+str2
console.log(str3)
console.log("1"+2) //12
console.log(1+"2")//12
console.log(1+2+"2") //this will add first 2+1 gives 3 then concatenate 2=32
console.log("1"+2+2) //gives 122 so use () to ignore this problem
console.log("1"+(2+2)) //14
console.log(+true) //gives 1 coz boolean ko incre means it converts to numeric so 1
console.log(true)//true
console.log(+"") //0
let x = 3;
const y = x++; // x is 4; y is 3
let x2 = 3;
const y2 = ++x2; // x is 4; y is 4

