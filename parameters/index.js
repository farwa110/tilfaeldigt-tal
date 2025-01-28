//max parmeters and queryselector added.......................................

function generateNumber() {
  const maxInput = document.getElementById("maxValue").value;
  const max = parseInt(maxInput);

  // Validate input
  if (isNaN(max) || max < 0) {
    document.querySelector("#result").textContent = "Please enter a valid number.";
    return;
  }

  logRandomNumber(max, "#result");
}

function logRandomNumber(max, querySelector) {
  const randomNumber = Math.floor(Math.random() * (max + 1));
  const element = document.querySelector(querySelector);

  if (element) {
    element.textContent = `Random Number: ${randomNumber}`;
  } else {
    console.error(`No element found for selector: ${querySelector}`);
  }
}
