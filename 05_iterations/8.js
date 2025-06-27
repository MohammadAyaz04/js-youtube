const myNums = [1, 2, 3]
//acc means accumulator and currval is currenvalue yeh reduce method ki cheeze hoti hai

//.REDUCE method is used for doing operations on array  add,sum,etc mostly in shopping cart price addon
 const myTotal = myNums.reduce(function (acc, currval) {
     console.log(`acc: ${acc} and currval: ${currval}`);
     return acc + currval
 }, 0) //acc has initial value as 0
console.log(myTotal);

console.log("end")
//same thing with arrowfunc
const my2Total = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(my2Total);

//CART ME SAB ADD KARNA HAI prices
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
//item denotes each object in array
console.log(priceToPay);