 {/* 
    Learned: 
        Function return a type  in Typescript is more close to the value 
    which we want to return from the function. It can return any type of value 
    from the function or nothing at all from the function.  

*/}

function sum (n1: number, n2: number) {
    return n1.toString() + n2.toString()   // concatinating the n1 to a string 
}


{/* 
    Learned : Void type in Typescript -> 
        This function has a void return type, Void function 
        in Typescript does not return anything ,but does its job. 
    And using void has the following benefits : 
        - Improves the clarity of the code meaning that you dont have to read 
          the whole function body to see if it returns anything. 
        - Ensures type-safe: you will never assign the function with the void return type to a variable. 
*/}

// 
// 
function showResult(num: string) {  
    console.log("Result: " + num);
}

showResult(sum(5, 10));

{/* 
    Simple Example Case: 
*/}

function demoExample( a: number, b: number, c: number ) {
    let addition = a + b + c;
    return addition
}

console.log("Following are the demo results -> ");

let returnVal1 = demoExample (100, 200, 300);
console.log("Returned value of first one is :" + returnVal1);

let returnVal2 = demoExample(200,100,600);
console.log( "Returned value of second one is :"+ returnVal2);

let returnVal3 = demoExample(300,400, 500);
console.log("Returned value of third one is : "+ returnVal3);
