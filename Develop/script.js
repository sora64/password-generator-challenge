// use arrays and the indexes of items in the arrays to give randomized values
// use if statements and window.confirm prompts to ask users what they want for their password (numbers, special characters, upper case, lower case)

// Assignment Code
var getPasswordLength = function() {
  var passwordLength = Number(window.prompt("Please input how long you would like your password to be between 8 and 128 characters."));
  while (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    passwordLength = Number(window.prompt("Length must be between 8-128 characters. Please try again."));
  }
};

getPasswordLength();

var getCharType = function() {
  var lowerCase = window.confirm("Would you like your password to contain lowercase letters?");
  if (lowerCase) {
    window.alert("Lowercase letters will be included.");
  }

  var upperCase = window.confirm("Would you like your password to contain uppercase letters?");
  if (upperCase) {
    window.alert("Uppercase letters will be included.");
  }

  
  var numerals = window.confirm("Would you like your password to contain numerals?");
  if (numerals) {
    window.alert("Numerals will be included.")
  }

  var specialChars = window.confirm("Would you like your password to contain special characters?");
  if (specialChars) {
    window.alert("Special characters will be included.")
  }

  while (!lowerCase && !upperCase && !numerals && !specialChars) {
    window.alert("Please select at least one character type for your password.")

    var lowerCase = window.confirm("Would you like your password to contain lowercase letters?");
    if (lowerCase) {
      window.alert("Lowercase letters will be included.");
    }

    var upperCase = window.confirm("Would you like your password to contain uppercase letters?");
    if (upperCase) {
      window.alert("Uppercase letters will be included.");
    }

    var numerals = window.confirm("Would you like your password to contain numerals?");
    if (numerals) {
      window.alert("Numerals will be included.")
    }

    var specialChars = window.confirm("Would you like your password to conain special characters?");
    if (specialChars) {
      window.alert("Special characters will be included.")
    }
  }
};

getCharType();

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);