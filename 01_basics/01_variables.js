const accountId =4445
let accountemail="ayaz@google.com"
var accountPass="1234"
accountCity="lucknow"
let accountState; //not defined

//accountId=2 this change is not allowed coz it is const 
accountemail="hc@hc.com"
accountPass="5555"
accountCity="kolkata"
/* prefer not to use var coz of issue in block scope and functional scope*/ 

console.log(accountId);

console.table([accountId,accountState,accountPass,accountemail,accountCity])