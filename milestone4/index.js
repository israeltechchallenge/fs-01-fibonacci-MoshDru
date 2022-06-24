let X = document.getElementById("userinput");
let Y = document.getElementById("useroutput");
let spinner = document.getElementById("spinnericon");

document.getElementById("isbutton").addEventListener("click", fetchURL);

function spinnerOn() {
  spinner.classList.remove("d-none");
}

function spinnerOff() {
  spinner.classList.add("d-none");
}


function fetchURL(event) {
  event.preventDefault()
  spinnerOn();
  fetch(`http://localhost:5050/fibonacci/${X.value}`)
  .then((response) => response.json())
  .then((data) => {Y.innerHTML = data.result;});
}

