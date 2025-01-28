//with adding max parameters and qsl.....
function logRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 101); //  Generere tilfældigt tal mellem 0 og 100
  const inputField = document.getElementById("randomNumberInput"); // Get the input field
  inputField.value = randomNumber; // Set the random number as the input's value
  console.log(randomNumber);
}

// logRandomNumber();
