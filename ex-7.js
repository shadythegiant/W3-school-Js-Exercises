// write a programme that displays days left before christmas 


const today = new Date(); 
const christmasDay =new Date(today.getFullYear(), 11, 25); 
const oneDay = 1000 * 60 * 60  * 24 ; 

if (today.getMonth === 11 && today.getDate > 25  ) {
    christmasDay.setFullYear(today.getFullYear() + 1 )
}

console.log( 
    parseInt(christmasDay.getTime() -  today.getTime()) / oneDay + ' left for christmas'
)