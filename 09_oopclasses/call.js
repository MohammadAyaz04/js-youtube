 function SetUsername(username){
    //complex DB calls
    this.username = username //yeh cheez normally createuseruser func me hi likhte but 
    //to demonstrate '.call' we made a separate func to set username
    console.log("called");
}

function createUser(username, email, password){
    //.call is used to  set username given
    SetUsername.call(this, username) //this may or may not be used
   //without .call username given will not be printed/setted 
   //since set username fucn will be called without .call but username nnhi banaega
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);