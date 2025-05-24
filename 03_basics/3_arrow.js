const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

 function chai(){
     let username = "hitesh"
     console.log(this.username); //cant use this in normal func gives undefined
 }

 chai()

//otherway of wriitng functions

//  const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
//ARROW FUNC
const chai2 =  () => {
    let username = "hitesh"
    console.log(this.username); //gives undefined coz still it is function(arrow)
}


 chai2()

 //Also another way of syntax 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
 //or
// const addTwo = (num1, num2) =>  num1 + num2
//or
// const addTwo = (num1, num2) => ( num1 + num2 )
//use {} for object in arrow func
const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()