
// Union types will gives the felexibility to work with different 
// parameter types ywe accept, but have a different logic in the function 
// based on the type you are getting 

function combine (input: number | string | boolean, input2: number | string) {
   let result;
    if (typeof input === 'number' && typeof input2 === 'number') {
        result = input + input2;   // explicitly declaring it  works with numbers 
    } else {
        result = input.toString() + input2.toString();  // and this part with strings 
    }
    return result;
    
}

const combinedAges = combine(20, 45);
console.log(combinedAges);

const combinedNames = combine ('Alex', 'Tina');
console.log(combinedNames);
