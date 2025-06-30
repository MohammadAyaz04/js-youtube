//object literal is nothing but  simply an object as given below (user)
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`); 
    //this is used to tell currently wali cheez chahiye i.e current context deta
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

//CONSTRUCTOR func
function User(username, loginCount, isLoggedIn){
   //left side is variable
    this.username  = username; // right is jo pass krre
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
//can also write method in constructor as below
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this //not needed but can use
}

const userOne = new User("hitesh", 12, true) //new object cration with constructor func
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor); //this gives constructor func name i.e user
console.log(userOne);
console.log(userTwo);