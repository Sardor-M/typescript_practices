{/*
    Learned: Function types in Typescript 
        - Just like we number and string as types, functions can be also types. 
    
    Note: In Typescript, we cannot use arrow function as they are not supported. 

*/}


let simpleExample : (text: string) => string;  // This is how we define function type in Typescript. 

function codeSample(name: string, text2: string | number) {
    
    return "This is a sample for function " + name + " which is defined by " + text2; 

} 

console.log(codeSample("Type", "Typscript"))