/* Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.   */

/*
In the Gregorian calendar three criteria must be taken into account to identify leap years: The year can be evenly divided by 4; If the year can be evenly divided by 100, it is NOT a leap year, unless; The year is also evenly divisible by 400. Then it is a leap year. */

function leapyear(year) {
  if (year % 400 === 0 && year % 4 === 0 && year % 100 > 0) {
    console.log(year + "    is a leap year");
  } else {
    console.log(year + " is not a leap year ");
  }
}

leapyear(2025);

// Using loops

function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function isLeapYear(year) {
  let total = 0;
  for (let i = 1; i <= 12; i++) {
    let month = daysInMonth(year, i);
    total += month;
  }
  if (total === 366) {
    console.log(year + "is  a leap year");
  } else {
    console.log(year + " is not a  leap year");
  }
}

isLeapYear(2026);
