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
/*Notes TO NUMBER CONVERSION :
true->1,false->0
anyString to number-> NaN 
*/
let one=1
let bool_one=Boolean(one)
console.log(bool_one) //gives true
let abs="" 
let abc=Boolean(abs)
console.log(abc) //gives false
/* TO BOOLEAN CONVERSION
1->true ; 0->false
""->false
"hitesh"-> true*/

