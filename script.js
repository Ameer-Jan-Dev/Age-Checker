//! =====Age Checker======
// Create a project that takes in a user's age and checks if they are eligible for vote, drink, drive displaying different messages accordingly.

document.getElementById("CheckButton").addEventListener("click", function () {
  // Select where to show output
  let resultEl = document.getElementById("Results");

  resultEl.innerHTML = " ";
  // Get value from the input
  const ageValue = parseInt(document.getElementById("ageInput").value);
  if (isNaN(ageValue) || ageValue < 0) {
    resultEl.innerHTML += "Please Enter valid age!";
    return;
  }

  // Apply Conditions
  if (ageValue >= 18) {
    resultEl.innerHTML += "1. You are eligible for Voting<br>";
  } else {
    resultEl.innerHTML += "1. You are not eligible for Voting<br>";
  }

  if (ageValue >= 21) {
    resultEl.innerHTML += "2. You are eligible to drink Alcohol<br>";
  } else {
    resultEl.innerHTML += "2. You are not eligible to drink Alcohol<br>";
  }

  if (ageValue >= 16) {
    resultEl.innerHTML += "3. You are eligible for Driving";
  } else {
    resultEl.innerHTML += "3. You are not eligible for Driving";
  }
});
