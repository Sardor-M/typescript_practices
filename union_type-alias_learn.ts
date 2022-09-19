
// Union types will gives the felexibility to work with different 
// parameter types ywe accept, but have a different logic in the function 
// based on the type you are getting 
// 
// Type Alias give a type a new name and we can use any where in your code.
// They are similar to interfaces that they can be useed to name primitives 
// and any other kinds. Alias does not create a new type, instead , it gives a type to a new name.
// Type alias can be used to any type set up which includes number, string, boolean and others 

type Combinable = number | string | boolean;     // type alias 
type ConversionDesc = 'as number' | 'as text';  


function combine(
    input: Combinable,
    input2: Combinable,
    resultConvert: ConversionDesc
    ) {
   let result;
    if (typeof input === 'number' && typeof input2 === 'number') {
        result = input + input2;   // explicitly declaring it  works with numbers 
    } else {
        result = input.toString() + input2.toString();  // and this part with strings 
    }
    if (resultConvert === 'as number') {
        return + result;
    } else {
        return result.toString();
    }
    
}

const combinedAges = combine(20, 45, 'as number' );
console.log(combinedAges);

const combinedStringAges = combine (20, 44, 'as number');
console.log(combinedStringAges); 

const combinedNames = combine ('Alex', 'Tina', 'as text');
console.log(combinedNames);