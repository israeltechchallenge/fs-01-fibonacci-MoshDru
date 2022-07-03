const userInput = document.getElementById("userinput");
const userOutput = document.getElementById("useroutput");
const spinner = document.getElementById("spinnericon");
const errorTooLarge = document.getElementById("toolarge");
const serverError = document.getElementById("servererror");
const resultsList = document.getElementById("resultslist");
const resultSpinner = document.getElementById("resultspinner");
const resultsOutput = document.getElementById("resultsoutput");
document.getElementById("isbutton").addEventListener("click", checkBoxSaved);

function spinnerOn() {
  spinner.classList.remove("d-none");
}

function spinnerOff() {
  spinner.classList.add("d-none");
}

function checkBoxSaved() {
  const calcSave = document.getElementById("checkbox");

  if (calcSave.checked) {
    calculateFib();
  } else {
    fibonacci();
  }
}

function fibonacci() {
  errorTooLarge.classList.add("d-none");
  serverError.classList.add("d-none");
  serverError.style.visibility = ``;
  errorTooLarge.style.visibility = ``;
  
  let inputtedNumber = document.getElementById("userinput").value;
  let num1 = 0;
  let num2 = 1;
  let sum;

  for (let i = 1; i < inputtedNumber; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  userOutput.innerText = num2;
}

function calculateFib() {
  errorTooLarge.classList.add("d-none");
  serverError.classList.add("d-none");
  serverError.style.visibility = ``;
  errorTooLarge.style.visibility = ``;
  userOutput.innerText = ``;

  let inputNumber = parseInt(userInput.value);
  if (inputNumber > 50) {
    spinnerOff();
    errorTooLarge.classList.remove("d-none");
    serverError.style.visibility = `hidden`;
  } else {
    fetchURL();
  }
}

function fetchURL() {
  fetch(`http://localhost:5050/fibonacci/${userInput.value}`)
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
      console.log(data);
      userOutput.innerText = data.result;
      spinnerOff();
      getFibResults();
    })
    .catch((error) => {
      spinnerOff();
      serverError.innerText = "Server Error:" + error.message;
      serverError.classList.remove("d-none");
    });
}

function resultSpinnerOn() {
  resultSpinner.classList.remove("d-none");
}

function resultSpinnerOff() {
  resultSpinner.classList.add("d-none");
}

function getFibResults() {
  resultsList.classList.remove("d-none");
  resultSpinnerOn();
  fetch(`http://localhost:5050/getFibonacciResults`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let final = data.results;

      const sortedArray = final.sort((a, b) => {
        if (a.createdDate < b.createdDate) {
          return -1;
        }
        if (a.createdDate > b.createdDate) {
          return 1;
        }

        return 0;
      });

      resultsOutput.innerHTML = "";
      for (let i = 0; i < final.length; i++) {
        const HTML = `<p class="fs-5 border-bottom pb-3 border-secondary">The Fibonnaci Of <b>${
          final[i].number
        }</b> is <b>${final[i].result}</b>. Calculated at: ${new Date(
          final[i].createdDate
        )}</p>`;
        resultsOutput.innerHTML += HTML;
      }
      resultSpinnerOff();
    });
}
