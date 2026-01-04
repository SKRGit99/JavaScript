/** Array in JavaScript:
    An array is a data structure that stores a collection of elements.
    Arrays are zero-indexed, meaning the first element is at index 0.
    Arrays can hold elements of different data types, including numbers, strings, objects, and even other arrays.
    Arrays are dynamic in size, meaning they can grow or shrink as elements are added or removed.
    Arrays come with a variety of built-in methods to manipulate and access their elements.

*/


/** Common Array Methods:
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
console.log(_fruitsArray);
 
 /* 2. Accessing Elements: */
 console.log(_fruitsArray[0]); // Output: Apple

/* 3. Adding Elements: */
_fruitsArray.push('Date'); // Adds 'Date' to the end
console.log(_fruitsArray);
  
/* 4. Removing Elements: */
_fruitsArray.pop(); // Removes the last element
console.log(_fruitsArray);

/* 5. Removing Elements from the Beginning: */
_fruitsArray.shift(); // Removes the first element  
console.log(_fruitsArray);

/* 6. Adding Elements from the Beginning: */
_fruitsArray.unshift('Grape'); // Adds 'Grape' to the beginning
console.log(_fruitsArray);

/* 7. Iterating Over an Array: */
_fruitsArray.forEach(function(_fruitsArray) {
console.log(_fruitsArray);
});


/** Practice Exercise: Calculate the Average Score from an Array of Numbers */
let _sum = 0;
let _AvgScore = 0;
let numbersArray = [85, 97, 44, 37, 76, 60];
for (let i = 0; i < numbersArray.length; i++) {
    console.log(numbersArray[i]);
    
    _sum += numbersArray[i];
}

_AvgScore = _sum / numbersArray.length;
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


/** Practice Exercise: for a given array with five items */

let _priceArray = [250, 645, 300, 900, 50];
let _discountPercent = 10; // 10% discount
let _finalPriceArray = [];
for (let i = 0; i < _priceArray.length; i++) {
    let _discountAmount = (_priceArray[i] * _discountPercent) / 100;
    let _finalPrice = _priceArray[i] - _discountAmount;
    _finalPriceArray.push(_finalPrice);
    
}
console.log("Final Price Array after discount:",_finalPriceArray);

/* concat(): Merging two arrays */
let _numArray1 = [1, 2, 3];
let _numArray2 = [4, 5, 6];
let _mergedArray = _numArray1.concat(_numArray2);
console.log("Merged Array:",_mergedArray);