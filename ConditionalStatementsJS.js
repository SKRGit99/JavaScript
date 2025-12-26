
/*Conditional Statements in JavaScript*/

//if statement
let age=19;
if(age<18){
    console.log("You are a minor.");
}


//if-else statement
let x=10;
let y="10";
let z=10;

if(x===y){
    console.log("x and y are equal in value and type.");
}
else if(x==y){
    console.log("x and y are equal in value only.");
}
else{
    console.log("x and y are not equal.");
}


if(x===z){
    console.log("x and z are equal in value and type.");
}


//Use case: Check if a number is even or odd

let num=20;

if(num%2===0){
    console.log(num + " is an even number.");
}
else{
    console.log(num + " is an odd number.");
}

//Switch statement
let day=3;
let dayName="";
switch(day){
    case 1:
        dayName="Monday";
        break;  
    case 2:
        dayName="Tuesday";
        break;
    case 3:
        dayName="Wednesday";
        break;
    case 4:
        dayName="Thursday";
        break;  
    case 5:
        dayName="Friday";
        break;
    case 6:
        dayName="Saturday";
        break;

    case 7:
        dayName="Sunday";
        break;

    default:
        dayName="Invalid day";
}
console.log("Day " + day + " is " + dayName);


let _numeral=24;
switch(_numeral%2){
    case 0:
        console.log(_numeral + " is an even number.");
        break;
    case 1:
        console.log(_numeral + " is an odd number.");
        break;
    default:
        console.log("Invalid input.");
}   