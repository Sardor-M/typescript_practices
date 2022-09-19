
/* 
    Exercise:  

    Figure out how to help TypeScript understand 
    types in this situation and apply neseccary fixes.

 */
_______________________________________________________________________________

/* 

    Expected Output:

    Admins:
    - Jane, 32, Golf coach
    - Bruce, 54, Engineer

    Users:
    - Max, 34, Doctor
    - Muller, 42, Space Enigeer

*/
______________________________________________________________________________

interface User {
    type: "user",
    name: string
    age: number
    occupation: string
}

interface Admin {
    type: "admin";
    name: string
    age: number
    role: string
}

export type Person = User |  Admin;

export const persons: Person [] = [
    {type: "user", name: "Max", age: 34, occupation: "Doctor" },
    {type: "admin", name:"Jane" , age: 32, role:"Golf coach"},
    {type: "user", name:"Muller", age: 42, occupation:"Space Enigeer"},
    {type: "admin", name:"Bruce", age: 54, role:"Engineer"}
];

export function isAdmin(person: Person) : person is Admin {
    return person.type === "admin";
}

export function isUser (person: Person) : person is User {
    return person.type === "user";
}

export function logPerson (person: Person)  {
    let additiomalInfo: string = "";
    if (isAdmin(person)) {
        additiomalInfo = person.role;
    }
    if (isUser(person)) {
        additiomalInfo = person.occupation;
    }
    console.log(`- ${person.name}, ${person.age}, ${additiomalInfo}` );
}

console.log("Admins:");
persons.filter(isAdmin).forEach(logPerson);

console.log(); 

console.log("Users:");
persons.filter(isUser).forEach(logPerson)


