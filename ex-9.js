// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
//[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]



//this solution requires the user to add a C for celsius or F for Fahrenheit in the function's argument 


function TempConverterCelsisus(temp) {
    // C = (5/9) * (F - 32)

    if(temp.includes('F')) {
        const tempNum = +temp.replace('F', ''); 
       const celisus =  (5/9) * (tempNum -32); 

        console.log(`${tempNum}°F is ${celisus} °C`)
    } else if (temp.includes('C')) {
        const tempNum = +temp.replace('C', ''); 
        const Fahrenheit =  tempNum * 9 / 5 + 32; 
 
         console.log(`${tempNum}°C is ${Fahrenheit} °F`)
    }
   

}

TempConverterCelsisus('32C')
TempConverterCelsisus('32F')