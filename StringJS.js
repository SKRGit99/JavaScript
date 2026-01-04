/*  String in JavaScript 
    A string is a sequence of characters used to represent text.

*/


console.log("Strings in JavaScript");


// Declaring strings using single and double quotes
let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, JavaScript!";
console.log(singleQuoteString);
console.log(doubleQuoteString);

// String concatenation
let greeting = "Hello";
let _name = "Sampat";
let fullGreeting = greeting + ", " + _name + "!";
console.log(fullGreeting); // Output: Hello, Sampat!

// String properties and methods
console.log(fullGreeting.length); // Output: Length of the string

// Accessing characters in a string
console.log(fullGreeting[0]); // Output: H
console.log(fullGreeting.charAt(7)); // Output: S

//Template Literals (Template Strings) and String Interpolation
let age = 25;
let templateLiteral = `My name is ${_name} and I am ${age} years old.`;
console.log(templateLiteral); // Output: My name is Sampat and I am 25 years old.

/*  Multi-line strings using template literals. 
    Notice the values of age is highlighed in the first output through Console.log because output of Console.log is string and age is number.

*/

let obj={
    firstName: "Sampat",
    lastName: "Kumar Rahul",
    age:33
};

console.log("My first name is:",obj.firstName, "last name is",obj.lastName,"Age is",obj.age,"Years");
let introString = `My full name is ${obj.firstName} ${obj.lastName} and my age is ${obj.age}.`;
console.log(introString); 

// String Interpolation with expressions
let a = 5;
let b = 10;
let expressionString = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(expressionString); // Output: The sum of 5 and 10 is 15.


/* List of all string methods in Javascript.

1. charAt()
2. charCodeAt()
3. concat()
4. endsWith()
5. fromCharCode()
6. includes()
7. indexOf()
8. lastIndexOf()
9. length
10. match()
11. repeat()
12. replace()
13. search()
14. slice()
15. split()
16. startsWith()
17. substr()
18. substring()
19. toLowerCase()
20. toUpperCase()
21. trim()
22. valueOf()

 
 *Note: The methods demonstrated below do not modify the original string; instead, they return a new string or value based on the operation performed.
 
*/
let sampleString = "  JavaScript is awesome!  ";
console.log(sampleString.length); // Output: 26
console.log(sampleString.charAt(2)); 
console.log(sampleString.charAt(10)); 
console.log(sampleString.charAt(11)); 
console.log(sampleString.charAt(12)); 

console.log(sampleString); //This will print the original string with spaces
console.log(sampleString.toUpperCase()); //This will print the string in uppercase
console.log(sampleString); //This will print the original string with spaces. Thus, we can say that string methods do not modify the original string.

console.log(sampleString.toLowerCase()); 
console.log(sampleString.trim()); 

console.log(sampleString.indexOf("is")); 
console.log(sampleString.slice(2, 12)); //from index 2 to index 11. The last index is not included.

//replace() method
console.log(sampleString.replace("awesome", "great")); 

let anotherString = "Hello, World! Welcome to the World of JavaScript.";
console.log(anotherString.replace("World", "Universe")); //Replaces only the first occurrence
console.log(anotherString.replaceAll("World", "Universe")); //Replaces all occurrences

console.log(anotherString.replace(/World/g, "Universe")); //Replaces all occurrences using regular expression with global flag


console.log(sampleString.split(" ")); 

let _string1="Hello";
let _string2="World";
console.log(_string1.concat(", ", _string2, "!"));



/* Escape characters in strings */
let escapeString = "He said, \"JavaScript is fun!\"\nLet's learn it.";
console.log(escapeString);

let tabString = "Column1\tColumn2\tColumn3";
console.log(tabString.length);
console.log(tabString);
console.log(tabString.length);
console.log(tabString.split(" "));



/* String comparison */
let stringA = "apple";
let stringB = "banana";
console.log(stringA === stringB); // Output: false
console.log(stringA < stringB);  // Output: true (based on lexicographical order)
console.log(stringA > stringB);  // Output: false
console.log("apple" === "apple"); // Output: true
console.log("Apple" === "apple"); // Output: false (case-sensitive comparison)
console.log("Apple".toLowerCase() === "apple".toLowerCase()); // Output: true (case-insensitive comparison)
console.log("apple".localeCompare("banana")); // Output: negative number
console.log("banana".localeCompare("apple"));



/**Practice Question:  */
let _inputVal = '@';
let _inputName = prompt("Enter Your Name:");
console.log("You entered:", _inputName);

let _finalName = _inputVal.concat(_inputName,_inputName.length);
console.log("Final Name is:", _finalName);

let _generatedName = "@" + _inputName + _inputName.length;
console.log("Generated Name is:", _generatedName);

