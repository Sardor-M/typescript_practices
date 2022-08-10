{/*. 

 -  Generic Types exercise

    In TypeScript, Generics are basically a kind of tool that 
 enables you to create reusable code components that work with 
 a number of types instead of a single type.
 
    Using Generics is a very safe way to empower classes, types and 
 interfaces to act the way parameters act so that we, the developers, 
 are able to easily reuse them for all kinds of input. TypeScript Generics 
 should not however be mistaken for the any type you - would see the 
 difference between them later in this post.
 
*/}

__________________________________________________________________________


interface User {
    name: string;
    age: number,
    occupation: string;
}
interface Admin {
    name: string;
    age: number;
    occupation:string;
}

export type Person = User | Admin;

export const persons: Person[] =[
    {
        name: "Steve Jobs",
        age: 45,
        occupation: "CEO of APPLE"
    },
     {
        name: "Steve Nice",
        age: 45,
        occupation: "CEO of APPLE"
    },
     {
        name: "Steve Bad",
        age: 45,
        occupation: "CEO of APPLE"
    },
     {
        name: "Steve Serious",
        age: 45,
        occupation: "CEO of APPLE"
    }
];

export function logPerson (user: Person) {
    console.log (`- ${user.name}, ${user.age}, ${user.occupation}`);
}

persons.forEach(logPerson);
