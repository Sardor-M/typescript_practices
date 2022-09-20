/*  

Exercise:

    Without duplicating type structures, modify
    filterUsers function definition so that we can
    pass only those criteria which are needed,
    and not the whole User information as it is
    required now according to typing.

*/

// ______________________________________________________________________________________

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin ;

export const persons: Person [] = [
    {
        type: 'user', name: 'Max', age: 29, occupation: 'Engineer'
    },
    {
        type: 'admin',
        name: 'Jane',
        age: 45,
        role: 'Astranaut',
    },
    {
        type: 'user',
        name: 'Kate',
        age: 21,
        occupation: 'Doctor',
    },
    {
        type: 'admin',
        name: 'Kate',
        age: 76,
        role: 'Taxi Driver',
    },
    {
        type: 'user',
        name: 'Smith',
        age: 43,
        occupation: 'Tutor',
    },
    {
        type: 'admin',
        name: 'Nate',
        age: 31,
        role: 'Actor',
    },
];

export const isAdmin = (person: Person): person is Admin => person.type === 'admin';
export const isUser =(person: Person): person is User => person.type === 'user';

export function logPerson(person: Person) {
    let additionalInformation ='';

    if (isAdmin(person)) {
        additionalInformation =person.role;
    }
    if (isUser(person)) {
        additionalInformation =person.occupation;
    } 

    console.log(` -${person.name}, ${person.age}, ${additionalInformation}`);
}

export function filterUsers(persons: Person[], criteria:Partial<Omit<User,'type'>>): User[] {
    return persons.filter(isUser).filter((user)=> {
        const criteriaKeys = Object.keys(criteria) as (keyof Omit<User,'type'>)[];
        return criteriaKeys.every((fieldName) => {
            return user[fieldName] === criteria[fieldName];
        });
    });
}

console.log('User of age 21:');

filterUsers(
    persons,
    {
        age: 21
    }
).forEach(logPerson);


__________________________________________________________________________________________

/* 

  Expected Output of the exercise: 

  User of age 21:
   -Kate, 21, Doctor

*/
