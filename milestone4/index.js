let X = document.getElementById("userinput");
let Y = document.getElementById("useroutput");

document.getElementById("isbutton").addEventListener("click", fetchURL);

function fetchURL(event) {
  event.preventDefault()
  fetch(`http://localhost:5050/fibonacci/${X.value}`)
  .then((response) => response.json())
  .then((data) => {Y.innerHTML = data.result;});
}

