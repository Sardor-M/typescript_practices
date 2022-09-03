
// This practice helps to understand the basic uderstanding of the basic types in typescript 
// Basic types: Strings, Numbers, Booleans 


function add (n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== ' number' || typeof n2 !== 'number') {     // these lines of the condtion checking is not a typscript way of doing it
    //     throw new Error (' Incorrect Input! ');
    // }

    const result = n1 + n2;     // this is the solution where the const result will strore our result here  and treat in mathematical way. 
    if (showResult) {           // Output: Result is : 15.8 ( result we wanted ) 
        console.log( phrase + result) 
    } else {
        return result;
    }

    if (showResult) {                
        console.log(phrase + n1 + n2 )    // this conditon will convert the numbers and strings and return the sum of them.
    } else {                              // Output: Result is: 510.8 ( result we didnot want it)
        return n1 + n2; 
    }
    
}

const number1 = 5;            
const number2 = 10.8;

const printResult = true;
const resultPhrase = 'Result is:'

add(number1, number2, printResult, resultPhrase);




