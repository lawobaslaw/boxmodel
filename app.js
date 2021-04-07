

var num1 = Number(prompt("Enter Number 1"));
var operator = prompt("Enter Operator");
var num2 = Number(prompt("Enter Number 2"));


if (operator == "+"){
   var result = num1 + num2
   alert(`The addition of ${num1} and ${num2} is ${result}`)
}
else if (operator == "-"){
    var result = num1 - num2
    alert(`The subtraction of ${num1} and ${num2} is ${result}`)
 }


 else if (operator == "*"){
    var result = num1 * num2
    alert(`The multiplication of ${num1} and ${num2} is ${result}`)
 }
 else{alert(`failed`)}