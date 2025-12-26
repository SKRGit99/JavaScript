/*Used to perform some operation on Data:

Arithmetic Operators: +, -, *, /, %, ++, --

Modulus Operator: %

Exponentiation Operator: **

Unary Operators: ++, --

Assignment Operators: =, +=, -=, *=, /=

Comparison Operators: ==, ===, !=, !==, >, <, >=, <=

Logical Operators: &&, ||, !

Ternary Operator: condition ? value1 : value2 

Bitwise Operators: &, |, ^, ~, <<, >>, >>>

*/ 

let a=10;
let b=5;

console.log("a=",a, " & b=",b);

console.log(a+b);
console.log("a+b=",a+b);
console.log("Sum of a and b is: " + (a+b)); 

console.log(a-b);
console.log("a-b=", a-b);
console.log("Difference of a and b is: " + (a-b));

console.log(a*b);
console.log("a*b=",a*b);
console.log("Product of a and b is: " + (a*b));

console.log(a/b);
console.log("a/b=",a/b);
console.log("Quotient of a and b is: " + (a/b));

//Modulus Operator: %
console.log(a%b);
console.log("a%b=",a%b);
console.log("Remainder when a is divided by b is: " + (a%b));

//Exponentiation Operator: **
console.log(a**b);
console.log("Exponentiation of a to the power b is: " + (a**b));

//Unary Operators: ++, --

// a++ : Post-increment: Returns the value first and then increments it by 1
// ++a : Pre-increment: Increments the value first by 1 and then returns it
// a-- : Post-decrement: Returns the value first and then decrements it by 1
// --a : Pre-decrement: Decrements the value first by 1 and then returns it

console.log("a++ is",a++); //Notice the value of a is returned first before incrementing
console.log("Value of a after a++ is",a);

console.log("a-- is", a--); //Notice the value of a is returned first before decrementing
console.log("Value of a after a-- is",a);

console.log("++b is",++b); //Notice the value of b is incremented first before returning
console.log("Value of b after ++b is",b);

console.log("--b is",--b); //Notice the value of b is decremented first before returning
console.log("Value of b after --b is",b);

//Assignment Operators: =, +=, -=, *=, /=
let c=20;

console.log("Initial value of c is",c);
c += 5; // c = c + 5
console.log("Value of c after c += 5 is",c);

c -= 3; // c = c - 3
console.log("Value of c after c -= 3 is",c);

c *= 2; // c = c * 2
console.log("Value of c after c *= 2 is",c);

c /= 4; // c = c / 4
console.log("Value of c after c /= 4 is",c);


//Comparison Operators: ==, ===, !=, !==, >, <, >=, <=

let x=10; //number
let y="10"; //string

console.log("x=",x, " & y=",y);

console.log("x == y is", x == y);   //loose equality, checks value only
console.log("x === y is", x === y); //strict equality, checks value and type

console.log("x != y is", x != y);
console.log("x !== y is", x !== y);

console.log("x > 5 is", x > 5);
console.log("x < 5 is", x < 5);
console.log("x >= 10 is", x >= 10);
console.log("x <= 10 is", x <= 10);


//Logical Operators: &&, ||, !

let p=true;
let q=false;
console.log("p=",p, " & q=",q);
console.log("p && q is", p && q); //Logical AND
console.log("p || q is", p || q); //Logical OR
console.log("!p is", !p); //Logical NOT
console.log("!q is", !q); //Logical NOT

let m=15;
let n=25;
console.log("m=",m & "n=",n);
let condition1 = (m > 10); //true
let condition2 = (n < 20); //false
console.log("condition1 && condition2 is", condition1 && condition2); //false
console.log("condition1 || condition2 is", condition1 || condition2); //true

//Ternary Operator: condition ? value1 : value2

let age=18;
let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log("Age:", age, "-", eligibility);
