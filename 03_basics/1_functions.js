
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() //func calling

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result  //NOTE: in func after return statement nothing get executes
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){ //here username cant be undefined coz sam dere 
// if name dete then sam is not taken
    if(!username){ // or if(username===undefined)
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage()) // here we are giving undefined


function calculateCartPrice(val1, val2, ...num1){ // ... is called rest operator ,
// (...num1) gives array of all parameters givin
//(val1,val2,...num1) gives array of parametrs ignoring first 2 i.e [500,2000] for below e.g
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = { //object
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)  //here direct object dediya banahuwa
//or object banakr bhi de skte
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1] //400
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));