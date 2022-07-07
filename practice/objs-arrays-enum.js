"use strict";
// const person: {
//     name: string;
//     age: number;
// }  = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'sangbin',
//     age: 29,
//     hobbies : ['Sports', 'Cooking'],
//     role: [2, 'author'],
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'sangbin',
    age: 29,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};
// person.role.push('admin');
// console.log(person.role);
let favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('enum');
}
