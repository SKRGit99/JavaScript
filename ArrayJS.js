/** Array in JavaScript:
    An array is a data structure that stores a collection of elements.
    Arrays are zero-indexed, meaning the first element is at index 0.
    Arrays can hold elements of different data types, including numbers, strings, objects, and even other arrays.
    Arrays are dynamic in size, meaning they can grow or shrink as elements are added or removed.
    Arrays come with a variety of built-in methods to manipulate and access their elements.


    Common Array Methods:
    - push(): Adds one or more elements to the end of an array.
    - pop(): Removes the last element from an array.
    - shift(): Removes the first element from an array.
    - unshift(): Adds one or more elements to the beginning of an array.
    - splice(): Adds or removes elements from an array at a specified index.
    - slice(): Returns a shallow copy of a portion of an array.
    - indexOf(): Returns the first index of a specified element.
    - join(): Joins all elements of an array into a string.
    - concat(): Merges two or more arrays.
    - sort(): Sorts the elements of an array.
    - reverse(): Reverses the order of elements in an array.
    - map(): Creates a new array with the results of calling a provided function on every element.
    - filter(): Creates a new array with all elements that pass a test.
    - reduce(): Executes a reducer function on each element, resulting in a single output value.
    - find(): Returns the value of the first element that satisfies a provided testing function.
    - findIndex(): Returns the index of the first element that satisfies a provided testing function.
    - includes(): Determines whether an array includes a certain element.
    - forEach(): Executes a provided function once for each array element.
    - length: A property that returns the number of elements in an array.
 
*/

/*Here are some common operations and methods associated with arrays in JavaScript:*/

console.log("Arrays in JavaScript");

/* 1. Creating an Array: */
let _fruitsArray = ['Apple', 'Banana', 'Cherry', 'Pineapple', 'Mango', 'Orange'];
console.log(`Example of Array in JavaScript: ${_fruitsArray}`);

console.log(`The type of Array in JavaScript is: ${typeof _fruitsArray}`); // Output: object
/*  Notice that arrays are objects in JavaScript.
    So,basically, arrays are a special type of 'object' designed to hold ordered collections of data in the form of Key-Value pairs 
    only where the Key is the Index (0,1,2,3...)
*/
 
 /* 2. Accessing Elements: */
 console.log(`The initial value at index[0] in the array is ${_fruitsArray[0]}`); // Output: Apple

_fruitsArray[0] = 'Strawberry'; // Modifying the first element

console.log(`The updated value at index[0] in the array is ${_fruitsArray[0]}`); // Output: Strawberry
//This proves that Arrays are Mutable i.e, their elements can be changed after creation.
//Note: Strings are Immutable in JavaScript.

/* 3. Adding Elements: */
_fruitsArray.push('Date','Guava'); // Adds 'Date' to the end
console.log(`The 'push' method has been used to add values at the end in the _fruitsArray. The updated array includes: ${_fruitsArray}`);
  
/* 4. Removing Elements: */
let _deletedItem = _fruitsArray.pop(); // Removes the last element
console.log(`The deletd item from the last in the _fruitsArray using 'pop' method is: ${_deletedItem}`);
console.log(`The updated array includes: ${_fruitsArray}`);

/* 5. Removing Elements from the Beginning: */
_fruitsArray.shift(); // Removes the first element  
console.log(_fruitsArray);

/* 6. Adding Elements from the Beginning: */
_fruitsArray.unshift('Grape'); // Adds 'Grape' to the beginning
console.log(_fruitsArray);

/* 7. Conversion of arrays into String type */
console.log(`Conversion of Array into String: ${_fruitsArray.toString()}`);


let _numArray = [45,65,78,90,123];
let _stringVal='';

for(let i=0;i<_numArray.length;i++)
{
    _stringVal +=_numArray[i].toString();
    
}
console.log(`The final value is the String ${_stringVal}`);

/* Iterating Over an Array: Looping over an Array to access each element one by one.

Iterating through an array means going through each element one by one to perform some operation or retrieve values.
Iterable types in JavaScript are data structures that can be iterated over, meaning you can access each element in a sequential manner.

Iterable types include Objects, Arrays, Strings, Maps, Sets, and more.

Objects are not directly iterable using constructs like for...of loops, 
but you can iterate over their properties using for...in loops or Object methods.
Objects are collections of key-value pairs, where keys are strings (or Symbols) and values can be of any data type.

Arrays are one of the most commonly used iterable types in JavaScript.
Arrays are collections of Index and Value pairs where Index is the position of the element in the array starting from 0.

Strings are also iterable, allowing you to access each character in the string sequentially.
String is collection of sequences of characters enclosed in single or double quotes.

*/

/** Practice Exercise: Calculate the Average Score from an Array of Numbers */
let _sum = 0;
let _AvgScore = 0;
let numbersArray = [85, 97, 44, 37, 76, 60];
for (let i = 0; i < numbersArray.length; i++) {
    console.log(numbersArray[i]);
    
    _sum += numbersArray[i];
}

_AvgScore = _sum / numbersArray.length;
console.log(`Average marks is ${_AvgScore}`);
console.log("Average Score is:",_AvgScore); 


/** Practice Exercise: Print all the elements of the numbersArray */

//Using forEach method
numbersArray.forEach(function(numbersArray) {
console.log(numbersArray);
});

//Using for loop
for (let i = 0; i < numbersArray.length; i++) {
    console.log(numbersArray[i]);
}

//using for...of loop
for(let num of numbersArray){
    console.log(num);
}

/** Practice Exercise: for a given array with five items */

let _priceArray = [250, 645, 300, 900, 50];
let _discountPercent = 10; // 10% discount
for (let i = 0; i < _priceArray.length; i++) {
    let _discountAmount = (_priceArray[i] * _discountPercent) / 100;
     _priceArray[i] -= _discountAmount;
    
}
console.log(`The Final price of Items is ${_priceArray}`);

//using for - of loop
let _priceItems = [250, 645, 300, 900, 50];
let i=0;
let _offer=0;
for(let val of _priceItems){
    console.log(`The Price of item at ${i} is ${val}`);
     _offer = val/10;
    _priceItems[i] -=  _offer;
    i++;
    
}
console.log(`The Price of items after discount is ${_priceItems}`); 


/* concat(): Merging two arrays */
let _numArray1 = [1, 2, 3];
let _numArray2 = [4, 5, 6];
let _mergedArray = _numArray1.concat(_numArray2);
console.log("Merged Array:",_mergedArray);


/* Slice method in arrays: It does not change the original array. */
let _NumbersArray = [45,66,88,67,100,23,56,78];
console.log(`Original array is: ${_NumbersArray}`);
console.log(`Slice method returns a piece of an array: ${_NumbersArray.slice(2,6)}`);
console.log(`The slice method does not change the original array: The Original array still after slice method is ${_NumbersArray}`);

/* Splice method in arrays: It does change the original array(add,remove, replace). 
    It takes three input parameters: splice(startIdx,delCount,)

*/
console.log(`The original array before splice method is: ${_NumbersArray}`);
console.log(`The splice method result: ${_NumbersArray.splice(2,2,98,99)}`);
console.log(`The updated array after splice method is: ${_NumbersArray}`);

//If Only add element using splice.
let _NumbersArray1= [45,99,100,104,105,106];
_NumbersArray1.splice(2,0,111);
console.log(_NumbersArray1);