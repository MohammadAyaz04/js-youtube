var c = 30
let a = 300 //global variable
if (true) {
    let a = 10 //local variable
    const b = 20
    var c=300
    // console.log("INNER: ", a);
    
}



 console.log(a); //300 coz andar wala a is inside a block
 console.log(b); //error no b declared outside
console.log(c); //var creates problem ,output=300
//coz var creates issue in blockscope(never use var)


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); //andar hokar bhi username is accessable coz username is bahar
    }
    // console.log(website); //it cant access website coz not bahar

     two()

}

 one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); //cant access coz of scope
}

// console.log(username); //cant access coz of scope


// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(4)) //this not gives error

function addone(num){
    return num + 1
}


addone(5) //no error
addTwo(6) //this gives error coz func is declared as variable

const addTwo = function(num){ //variables can hold func too
    //aese declaration me func call is always after function declaration
    return num + 2
}
addTwo(5) //no error