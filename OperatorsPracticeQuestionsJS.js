//Qn1: Get user to input a number using prompt("Enter a number:") and check if number is multipel of 5 or not.


let userInput=prompt("Enter a number:");
if(userInput%5===0){
    console.log(userInput + " is a multiple of 5.");
}
else{
    console.log(userInput + " is not a multiple of 5.");
}


//Qn2: Write code to assign grades to students based on their marks as per the following criteria:
let _marksTotal=prompt("Enter your Score:");
if(_marksTotal>=90 && _marksTotal<=100)
{
    console.log(_marksTotal + " comes under Grade A");
}
else if(_marksTotal>=80 && _marksTotal<90)
{
    console.log("Grade B");
}
else if(_marksTotal>=70 && _marksTotal<80)
{
    console.log("Grade C");
}
else if(_marksTotal>=60 && _marksTotal<70)
{
    console.log("Grade D");
}
else if(_marksTotal>=50 && _marksTotal<60)
{
    console.log("Grade F");
}


let _marksTotalUsingPrompt=Number(prompt("Enter your Score:"));
switch( _marksTotalUsingPrompt){
    case 90:
        console.log("Grade A");
        break;
    case 80:
        console.log("Grade B");
        break;
    case 70:
        console.log("Grade C");
        break;
    case 60:
        console.log("Grade D");
        break;
    case 50:
        console.log("Grade F");
        break;
}