function fibonacci(e) {
  e.preventDefault();
  let X = document.getElementById("userinput").value;
  let num1 = 0;
  let num2 = 1;
  let sum;

  for (let i = 1; i < X; i++) {
    sum = num1 + num2; 
    num1 = num2; 
    num2 = sum; 

  }
  document.getElementById("useroutput").innerHTML = num2;

  return num2;
}

document.getElementById("isbutton").addEventListener("click", fibonacci);