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

*/}

// 
// 
function showResult(num: string) {  
    console.log("Result: " + num);
}

showResult(sum(5, 10));