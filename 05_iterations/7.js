const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//sab numbers k andar 10 add krna SO MAP USE KIYA
 const newNums = myNumers.map( (num) => { return num + 10})
console.log(newNums);
//chaining (ek se zyda cheez)
 const newNum = myNumers
            .map((num) => num * 10 )
            .map( (num) => num + 1)
            .filter( (num) => num >= 40)

console.log(newNum);