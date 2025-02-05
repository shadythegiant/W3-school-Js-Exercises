// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  

function getFirstDay() {
    for (let year = 2014; year <= 2050; year++)
    {
        const firstDayOfTheYear = new Date(year, 0 , 1 ).getDay(); 
        if(firstDayOfTheYear === 0) {
            console.log(`  this ${year} 1st of januray is a Sunday `) 
        } else {
            console.log(`  this ${year} 1st of januray is not sunday`)
        }
        
    }
    }

getFirstDay()