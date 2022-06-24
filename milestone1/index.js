let Y = fibonacci(X);
let Z = ('The Fibonacci of ' + X + ' is ' +Y);
document.getElementById("output").innerHTML = Y;

function fibonacci() {
  let X = document.getElementById("userinput").value;
  let num1 = 0;
  let num2 = 1;
  let sum;

  for (let i = 1; i < X; i++) {
    sum = num1 + num2; //1 -- 2 -- 3 -- 5
    num1 = num2; // 1 --1 -- 2
    num2 = sum; // 1 -- 2 -- 3
    // console.log(num1, num2);
  }
  document.getElementById("useroutput").innerText = num2;
  return num2;
}
// function runFib() {
//   let X = document.getElementById("userinput").value;
//   document.getElementById("useroutput").innerText = fib(X);
// }

// function fib(num) {
//   if (num == 0) {
//     return 0;
//   }

//   if (num == 1) {
//     return 1;
//   }

//   return fib(num - 1) + fib(num - 2);
// }
// document.getElementById("isbutton").onclick = function() {
//   document.getElementById("output").innerText = fibonacci(document.getElementById("userInput").value);
// };
