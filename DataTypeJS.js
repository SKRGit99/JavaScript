/*Primitive Data Types in JavaScript*/

/*1. Number*/
let _Integer = 42; // Integer
let _Float = 3.14; // Floating-point number
console.log("Integer: " + _Integer);
console.log("Type of _Integer: " + typeof _Integer);

console.log("Float: " + _Float);
console.log("Type of _Float: " + typeof _Float);

/*2. String*/
let _String1 = "Hello";
console.log("Type of _String1: " + typeof _String1);

let _String2 = "World";
console.log("String Behaviour needs to be understood: " + _String1 + " " + _String2);

let _String3 = "123";
let _String4 = "123";

// Concatenation of strings
let _ConcatenatedString = _String3 + _String4; 
console.log("Concatenated String: " + _ConcatenatedString); // Outputs "123123" and Not 246.


/*3. Boolean*/
let _IsJavaScriptFun = true;    
console.log("Is JavaScript Fun? " + _IsJavaScriptFun);

/*4. Undefined*/
let _UndefinedVar;
console.log("Undefined Variable: " + _UndefinedVar);

/*5. Null*/
let _NullVar = null;        
console.log("Null Variable: " + _NullVar);

/*6. Symbol*/
let _SymbolVar = Symbol("uniqueIdentifier");
console.log("Symbol Variable: " + _SymbolVar.toString());

/*7. BigInt*/
let _BigIntVar = BigInt(9007199254740991);
console.log("BigInt Variable: " + _BigIntVar);

/*Non-Primitive Data Types in JavaScript*/

/* 1. Object: Collection of values in key-value pairs*/
let _Person = {
    name: "John Doe",
    age: 25
};
console.log("Name: " + _Person.name);
console.log(_Person["age"]);

// Modifying Object Properties
_Person["age"] = _Person["age"] +1; // Update age  
console.log("Updated Age: " + _Person.age);

console.log("Object Person: " + JSON.stringify(_Person));

/*2. Array*/
let _NumbersArray = [1, 2, 3, 4, 5];
console.log("Array of Numbers: " + _NumbersArray);

/*3. Function*/
function _Greet(name) {
    return "Hello, " + name + "!";
}

console.log(_Greet("Alice"));