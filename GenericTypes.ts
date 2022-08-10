{/*. 

  Generic Types exercise


*/}

___________________________________________________________________


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
