{/*

  Following is the pracitice of the typeof operator.
  
  
  Here we are checking if n1 typeof is equal to number 
  (&& logical AND operator) and the typeof n2 is to number,
  will return n1 + n2;
  
*/}  

function add (n1: number, n2: number) {
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    return n1 + n2;
  }
}

const number1 = 15;
const number2 = 20.3;

const result = add (number1, number2);
console.log(result);

