// Purpose: Allows copying or merging arrays and objects, or passing individual items into a function.

//Copying an Array:

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; // [1, 2, 3, 4]

// Copying an object

const person = { name: 'John', age: 30 };
const updatedPerson = { ...person, age: 31 }; // { name: 'John', age: 31 }

// Merging arrays

const fruits = ['Apple', 'Banana'];
const veggies = ['Carrot', 'Broccoli'];
const food = [...fruits, ...veggies]; // ['Apple', 'Banana', 'Carrot', 'Broccoli']

// Passing Props Dynamically:

const props = { name: 'John', age: 30 };
<Component {...props} />;
