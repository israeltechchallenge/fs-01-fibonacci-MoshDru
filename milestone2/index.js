let X = 7;
let Y = fibonacci(X);
let Z = (`The fibonacci of ${X} is ${Y}`);

function fibonacci(X) {

  let num1 = 0;
  let num2 = 1;
  let sum;

  for (let i = 1; i < X; i++) {
    sum = num1 + num2; 
    num1 = num2; 
    num2 = sum; 

  }

  return num2;
}

document.getElementById("output").innerText = Z;
