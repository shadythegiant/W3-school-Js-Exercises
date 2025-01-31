/* 

Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

const date = new Date();
let Today = date.getDate();
let Month = date.getMonth() + 1;
let Year = date.getFullYear();

function printDate() {
  if (Today < 10) Today = `0${Today}`;
  if (Month < 10) Month = `0${Month}`;

  console.log(`${Today}-${Month}-${Year} ,${Today}/${Month}/${Year} `);
  console.log(`${Month}-${Today}-${Year} ,${Month}/${Today}/${Year} `);
}

printDate();
