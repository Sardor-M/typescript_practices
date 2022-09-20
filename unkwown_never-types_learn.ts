
{/*
    The Unknown and Never Types explained: 
        - Everything assigned to this type will result in a error 
          unless uou assign it to another type. 
        - When we conmpare the uknown to any type, the unknown
          type is more restrictive. 
*/}


let loginInput: unknown;     
let userName: string;

loginInput = 5;
loginInput = "Steve";

if (typeof loginInput === "string") {
    userName=loginInput;
}

