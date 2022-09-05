
enum Role {ADMIN = 4, READ_ONLY, AUTHOR = 'writer'} ;  
// enum type practice -> 

// Here the ADMIN, READ_ONLY, AUTHOR are considered to be the set of the named constants of the Role object
// The ADMIN, READ_ONLY, AUTHOR are automatically assigned to indexed number in the Typescript. 
// If we want to start the indeftifer with a number you wanted, you can assign any number value to the 
// starting (stored ) number with adding equal sign = 
// Exampele: enum Role { ADMIN = 4, READ_ONLY, AUTHOR} 

const person = {
	name: 'Steve',
	age: 21,
	job: 'developer',
	status: 'student',
	role: Role.ADMIN,  // you can the role on an object, and you access your identifer (ADMIN)
};

if (person.role === Role.ADMIN) {
	console.log('The  author is:', Role.ADMIN)
} 



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

// const number1 = 5;            
// const number2 = 10.8;

// const printResult = true;
// const resultPhrase = 'Result is:'

// add(number1, number2, printResult, resultPhrase);

