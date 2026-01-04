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