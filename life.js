let firstNumber =parseFloat(window.prompt("what is the first number?"));
let secondNumber =parseFloat(window.prompt("what is the second number?"));
let operator =window.prompt("what is the operator?");
if (operator == "+"){
    alert(firstNumber + secondNumber)
}else if (operator == "-"){
    alert(firstNumber - secondNumber)
}else if (operator == "*"){
    alert(firstNumber * secondNumber)
}else if (operator == "/"){
    alert(firstNumber / secondNumber)
}else{
    alert("i can't handle this operation at this moment, wait for the upcoming version.");
}