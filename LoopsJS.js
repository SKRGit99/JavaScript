
/* Loops in JavaScript are used to execute a block of code repeatedly as long as a specified condition is true. 

    JavaScript supports several types of loops:
    1. For Loop
    2. While Loop
    3. Do...While Loop
    4. For...of Loop
    5. For...in Loop
    6. Nested Loops
    7. Break and Continue Statements

*/

console.log("Loops in JavaScript");


// For Loop: It is used to execute a block of code a specific number of times.
for (let i = 1; i <= 5; i++) {
    console.log("For Loop iteration: " + i);
}

for(let count=0; count<5; count++){
    console.log("Sampat Kumar Rahul");  
}


//write code to find the sum of numbers from 1 to n uisng for loop
let n=10;
let sum=0;
for(let i=1; i<=n; i++){
    sum += i; // sum = sum + i
}
console.log("Sum of numbers from 1 to " + n + " is: " + sum);

// While Loop: It is used to execute a block of code as long as a specified condition is true.
while(n<=10){
    console.log("While loop iteration: " + n);
    n++;
}

// Do...While Loop: It is similar to the while loop, but it guarantees that the block of code will be executed at least once before checking the condition.
let m=1;
do{
    console.log("Do...While loop iteration: " + m);
    m++;
}while(m<=5);


/*for ...of Loop: It is used to iterate over iterable objects like arrays, strings, etc. */

// Example of for...of loop with a string
let _nameOfEmployee="SampatKumarRahul";
for(let char of _nameOfEmployee){
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
        {
            console.log("Vowel: " + char);
            console.log(char);
        }
}

// Example of for...of loop with an array
let colors = ["Red", "Green", "Blue"];
for(let color of colors){
    console.log("Color: " + color);
}


/*for ...of Loop: It is used to iterate over the properties of an object */
let person = { name: "John", age: 30, city: "New York" };
for(let key in person){
    console.log(key + ": " + person[key]);
}

let car = { brand: "Toyota", model: "Camry", year: 2020 };
for(let key in car){
    console.log("Key is:", key, "Value is:", car[key]);
}


/*Write code to print all even numbers from 0 to 100 */
let _evenNumber=0;
for(_evenNumber=0; _evenNumber<=100; _evenNumber++){
    if(_evenNumber % 2 === 0){
        console.log("Even Number: " + _evenNumber);
    }
}

/*Write code to print all odd numbers from 0 to 100 */
let _oddNumber=0;
for(_oddNumber=0; _oddNumber<=100; _oddNumber++){
    if(_oddNumber % 2 !== 0){
        console.log("Odd Number: " + _oddNumber);
    }
}

/*create a game where you start with any random game number. ask user to keep guessing until they get it right */

let __numberToGuess = 50; // You can change this number to any random number
let __userGuess = 0;

while(__userGuess !== __numberToGuess){
    __userGuess = parseInt(prompt("Guess the number between 1 and 100: ")); //parseInt is used to convert string input to integer
    if(__userGuess < __numberToGuess){
        console.log("Too low! Try again.");
    } else if(__userGuess > __numberToGuess){
        console.log("Too high! Try again.");
    } else{
        console.log("Congratulations! You guessed the correct number: " + __numberToGuess);
    }
}   

/*Loop through an array*/
let fruits = ["Apple", "Banana", "Cherry"];
for(let i=0; i<fruits.length; i++){
    console.log("Fruit at index " + i + " is: " + fruits[i]);
}

