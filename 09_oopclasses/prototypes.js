//inheritance~~prototype
// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

//prototype checks everything from array,fycntions,strings to objects then to null
/*array--->object-->null
strings--->object-->null
functions--->object-->null
if property is not present in array/string/func then it checks in object if not even in object then gives null*/
let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
//hitesh naam ki property bananre hai object me
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}
//yaha same cheex array me bnare
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}
//calling hitesh property
// heroPower.hitesh() from object
// myHeros.hitesh() from array
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //this property links two objectss
}

Teacher.__proto__ = User //means teacher can use user object 

// modern syntax for __proto__
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

//string me truelength property banadi jo sirf word length dega without blank space
String.prototype.trueLength = function(){
    console.log(`${this}`); //gives ChaiAurCode
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength() //now we can use directly new property developed
"iceTea".trueLength()