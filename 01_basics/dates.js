// Dates

let myDate = new Date()
// console.log(myDate.toString());
 console.log(myDate.toDateString()); //gives day- month- date- year
 console.log(myDate.toLocaleString());//gives date with time
// console.log(typeof myDate); //date is of Object type

// let myCreatedDate = new Date(2023, 0, 23) //MOnths start from zero 0=jan 1=feb
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14") //here month start from 01=jan
let myCreatedDate = new Date("01-14-2023")
 console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); //month start from 0=jan
console.log(newDate.getDay());//0=sunday 1=monday

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})