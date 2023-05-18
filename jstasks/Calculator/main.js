const answerInput = document.getElementById("Answer");

// Function to enter a number
function EnterNumber(value) {
  answerInput.value += value;
}

// Function to enter an operator
function EnterOperator(value) {
  answerInput.value += value;
}

// Function to clear the input field
function EnterClear() {
  answerInput.value = "";
}

// Function to calculate the result this is eval function
function EnterEqual() {
  try {
    answerInput.value = eval(answerInput.value);
  } catch (error) {
    answerInput.value = "Error";
  }
}