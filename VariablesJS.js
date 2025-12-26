console.log("Javascript is a Dynamically typed language.");
console.log("You don't need to declare variable types explicitly.");

_fullName = "John Doe";
console.log("Full Name as string: " + _fullName);

_fullName = 12345;
console.log("Full Name as Number: " + _fullName);
console.log("This shows dynamic typing in action.");


_fullName = "Tony Stark";
_FullName= "Sampat Kumar";
console.log("This shows Variables are Case sensitive in JavaScript.");
console.log("Name: " + _fullName);
console.log("Name: " + _FullName);

_price = 99.99;
console.log("Assignment Operators in JavaScript. Values in the right hand side is assigned to the variable on the left hand side.");
console.log("Here 99.99 is assigned to price variable.");
console.log("Price: " + _price);

x=null;
y=undefined;
isStudent=true;
console.log("x: " + x);
console.log("y: " + y);
console.log("Is Student: " + isStudent);

console.log("We should not define the variables like the way we have done.");
console.log("It is a good practice to use var, let or const keywords to define variables.");

//var let const
console.log("Variables defined using var, let and const keywords.");
var city = "New York";
let country = "USA";
const pi = 3.14;

console.log("City: " + city);
console.log("Country: " + country);
console.log("Value of Pi: " + pi);


var _Name= "Bruce Wayne";
let _Age= 30;
const _Country= "USA";

console.log("Full Name: " + _Name);
console.log("Age: " + _Age);
console.log("Country: " + _Country);

console.log("we will not use var keyword to define variables in modern JavaScript.");
console.log("let and const keywords are introduced in ES6 version of JavaScript.");
console.log("let is used to define variables whose values can be changed later.");
console.log("const is used to define variables whose values cannot be changed later.");

//Why do we not use var?
console.log("var keyword has function scope.");
var _MiddleName = "Kent";
var _MiddleName = "Wayne"; // Re-declared but still No error
var _MiddleName = "Stark"; // Re-declared but still No error
console.log("Variable redeclaration is allowed with var keyword.");
console.log("Middle Name: " + _MiddleName);
//This made the use of var very confusing.

//we will use let and const from now on.
console.log("let and const keywords do not allow variable redeclaration.");
let _Surname = "Banner";
//let _Surname = "Rogers"; // Error: Identifier '_Surname' has already been declared
console.log("Surname: " + _Surname);

const _PI = 3.14159;
//const _PI = 3.14; // Error: Identifier '_PI' has already been declared
console.log("Value of PI: " + _PI);

console.log("let and const keywords have block scope.");

console.log("Demonstrating block scope with let and const keywords.");
//Block Scope 1
{
    
    let _Vegetable = "Carrot";
    //let _Vegetable = "Potato"; // Error: Identifier '_Vegetable' has already been declared

    const _Fruit = "Apple";
    //const _Fruit = "Banana"; // Error: Identifier '_Fruit' has already been declared

    console.log("Inside Block Scope 1:");
    console.log("Vegetable: " + _Vegetable);
    console.log("Fruit: " + _Fruit);
}

/*We can again declare the same variables outside in a different block scope. */
//Block Scope 2
{
    
    let _Vegetable = "Carrot";
    const _Fruit = "Apple";
    console.log("Inside Block Scope 2:");
    console.log("Vegetable: " + _Vegetable);
    console.log("Fruit: " + _Fruit);
}