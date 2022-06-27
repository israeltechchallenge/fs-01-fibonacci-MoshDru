let X = document.getElementById("userinput");
let Y = document.getElementById("useroutput");
let spinner = document.getElementById("spinnericon");
let errorTooLarge = document.getElementById("toolarge");
let serverError = document.getElementById("servererror");
document.getElementById("isbutton").addEventListener("click", calculateFib);

function spinnerOn() {
  spinner.classList.remove("d-none");
}

function spinnerOff() {
  spinner.classList.add("d-none");
}


function calculateFib() {
  errorTooLarge.classList.add("d-none");
  serverError.classList.add("d-none");
  serverError.style.visibility = ``;
  errorTooLarge.style.visibility = ``;

  let inputNumber = parseInt(X.value);

  if (inputNumber > 50) {
    spinnerOff();
    errorTooLarge.classList.remove("d-none");
    serverError.style.visibility = `hidden`;
    Y.innerText = ``;
    
  } else if (inputNumber === 42) {
    serverError.classList.remove("d-none");
    errorTooLarge.style.visibility = `hidden`;
    Y.innerText = ``;
   
    fetchURL();
  } else {
    fetchURL();
  }
}

function fetchURL() {
  spinnerOn();
  fetch(`http://localhost:5050/fibonacci/${X.value}`)
    .then((response) => {
      if (!response.ok) {
        response.text().then((error) => {
          serverError.innerText = "Server Error:" + error;
          serverError.classList.remove("d-none");
        });
      }
      return response;
    })
    .then((response) => response.json())
    .then((data) => {
      Y.innerText = data.result;
      spinnerOff();
    })
    .catch((error) => {
      spinnerOff();
      serverError.innerText = "Server Error:" + error.message;
      serverError.classList.remove("d-none");
    });
}
