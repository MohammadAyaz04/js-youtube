const coding = ["js", "ruby", "java", "python", "cpp"]

 coding.forEach( function (val){ //callback function
    console.log(val);
 } )
//Arrow functions se same thing as above

 coding.forEach( (item) => {
    console.log(item);
 } )
 //Same thing with alag declaration of func below

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

 coding.forEach( (item, index, arr)=> { //gives value ,index, and whole array
    console.log(item, index, arr);
} )

const myCoding = [ //array of objects
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} ) 