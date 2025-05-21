//2 ways to declare object - literals and constructors
//object Literals
const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh", //name is string
    "full name": "Hitesh Choudhary", //full name is string so to print this we need ["Full name"]
    [mySym]: "mykey1", //use [] for symbol if mysum hota then it is takin as string
    age: 18, 
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)

//other way to access and print using []

// console.log(JsUser["email"])

// console.log(JsUser["full name"]) //cant access with dot coz string
// console.log(JsUser[mySym]) 

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) //after this we cant make changes in object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());