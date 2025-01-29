// Write a JavaScript program to display the current day and time in the following format.  
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 3

const Day = new Date(); 
let hour = Day.getHours(); 
const Minuets = Day.getMinutes(); 
const seconds = Day.getSeconds(); 
const today =  Day.getDay(); 

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


const PMconditional = hour >= 12 ? "PM" : "AM"; 
// convert 24 hour to 12 hour 
hour = hour >= 12 ? hour - 12 : hour; 

const time = `${hour} ${PMconditional} : ${Minuets} : ${seconds}`; 
console.log(typeof hour)
console.log(`today is ${days[today]} \n current time is : ${time}`);