// use arrays and the indexes of items in the arrays to give randomized values
// use if statements and window.confirm prompts to ask users what they want for their password (numbers, special characters, upper case, lower case)

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);