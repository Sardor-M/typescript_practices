{/*
    In Javascript, fundamentally we group and pass the data though objects, however in Typscirpt, we do it though object types. 
    And in Typescirpt, when defining the object, they can ba named by using an interface or type alias
     
    Example: 

        interface Person {
            properties goes here 
        }

        type Person {
            properties goes here
        }

}


_____________________________________________________________________________________________________________________________________________


{/*

Simple Exercise
Given the data , define the interface "USER"

*/}
export interface User {
  name: string;
  age: number,
  occupation: string,
}

export const users: User[] = [
  {
    name: "Steven Hopkins",
    age: 25,
    occupation: "Software Developer",
  },
  {
    name:"James ",
    age: 32,
    occupation:"DevOPS Engineer"
  },
  {
    name:"Toshmatov Raxmatbek",
    age: 29,
    occupation:"Farmer"
  }
];
export function logPerson(user: User){
    console.log(` -${user.name}, ${user.age}, ${user.occupation}`);

}
console.log("Users: ");
users.forEach(logPerson);