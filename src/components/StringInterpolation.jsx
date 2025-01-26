//Syntax:
//`string text ${expression}`

// Use backticks (`) to define the string.
//Insert variables or expressions inside ${}.

const name = "Alice";
const age = 25;

// Without Template Literals (using concatenation)
const greeting1 =
  "Hello, my name is " + name + " and I am " + age + " years old.";

// With Template Literals
const greeting2 = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting1); // Output: Hello, my name is Alice and I am 25 years old.
console.log(greeting2); // Output: Hello, my name is Alice and I am 25 years old.

//Embedding Expressions

//You can include any valid JavaScript expression inside ${}

const a = 5;
const b = 10;

console.log(`The sum of ${a} and ${b} is ${a + b}.`); // Output: The sum of 5 and 10 is 15.

//Multiline Strings

//Template literals allow you to create multiline strings easily without needing escape characters (\n).

const message = `This is the first line.
This is the second line.
And this is the third line.`;

console.log(message);
// Output:
// This is the first line.
// This is the second line.
// And this is the third line.

//Using Functions Inside Template Literals
//You can call functions or include more complex logic within ${}.

const Name = "Bob";

function getGreeting(name) {
  return `Hello, ${name}!`;
}

console.log(`${getGreeting(name)} How are you today?`);
// Output: Hello, Bob! How are you today?

//Combining with Conditional Logic
//You can use ternary operators or other expressions within template literals.

const isLoggedIn = true;

const Message = `You are ${isLoggedIn ? "logged in" : "logged out"}.`;
console.log(message); // Output: You are logged in.

//Nesting Template Literals
//You can nest template literals if needed for more complex strings.

const user = { name: "Charlie", role: "admin" };
const welcomeMessage = `Welcome, ${
  user.name
}! You are logged in as ${`a ${user.role}`}.`;

console.log(welcomeMessage); // Output: Welcome, Charlie! You are logged in as a admin.
