let X = 8;
let Y = fibonacci(X);
let Z = ('The Fibonacci of ' + X + ' is ' +Y);

document.getElementById("output").innerHTML = Z;

function fibonacci(X)
{
    let num1=0;
    let num2=1;
    let sum;
    let i=0;
    for (i = 1; i < X; i++) 
    {
        sum=num1+num2;
        num1=num2;
        num2=sum;
    }
    return num2;
}

fibonacci(X);