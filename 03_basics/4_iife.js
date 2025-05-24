//Immediately Invoked Function Expressions(IIFE) 
 //we write inside()

(function chai(){
    // named IIFE coz chai is the name
    console.log(`DB CONNECTED`);
})(); //when using 2 or more iife use ; to end iife after its execution

//using Arrow func
( (name) => { //un named iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') //argumnet passsed
