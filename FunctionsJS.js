let _num1=prompt("Enter first number:");
let _num2=prompt("Enter second number:");

/* Function Declaration */
function add(num1,num2){
    //function params are Local variables: Scoepe is within the function
   let sum= parseInt(num1) + parseInt(num2);
    console.log("The sum is: "+sum);
}

add(_num1,_num2);


/* Arrow functions */
const multiply = (num1,num2) => {
    let product = parseInt(num1) * parseInt(num2);
    console.log("The product is: "+product);
}

multiply(_num1,_num2);
