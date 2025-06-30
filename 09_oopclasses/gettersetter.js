//class based getter and setter (now adays modern way)
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
//getter and setter ek sath aatey..akela koi nhi likhsakte
    
get email(){ 
//used to get a vlue outside of class
        return this._email.toUpperCase()
    }
//underscore is used with getters and setters to stop
//max call stack size exceeded error coz there will be 'race' btw 
//constructer and getter setter to set and get values coz dono me same cheez likhi
    
set email(value){
// used to set the value inside the class
        this._email = value //set as it is krre but get uppercase me(as u wish) aesehi mann tha
    }

 get password(){
        return `${this._password}hitesh`
    }
 
set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);//H@HITESH.AI
console.log(hitesh.password) //abchitesh

//fucntion based getter and setter with defineproperty

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")
console.log(chai.email);

//object based getter setter(old not used now)

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User) //to create new object tea
console.log(tea.email);
