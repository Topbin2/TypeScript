// const hobbies = ['Sports', 'Cooking'];
// const activeHobbies = ['Hiking', ...hobbies];

// console.log(activeHobbies);

const person = {
    firstName: 'sangbin',
    age: 30
}

// const copiedPerson = person;
// const person2 = {...person};
// console.log(copiedPerson);
// console.log(person);

const { firstName: userName , age } = person;

console.log(userName, age);