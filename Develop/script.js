// character type arrays stored in global variables
var lcChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ucChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var specChars =["!", "@", "#", "$", "%", "^", "&", "*"];
// get references to the #generate element
var generateBtn = document.querySelector("#generate");
// function that creates the password
function generatePassword() {
  // generates the length of the password based on user input
  var pwLength = parseInt(prompt("Please input how long you would like your password to be between 8 and 128 characters."));
  if (!pwLength || pwLength < 8 || pwLength > 128) {
    alert("Length must be between 8-128 characters. Please try again.");
    generatePassword();
  } else if (pwLength >= 8 || pwLength <=128) {
    // checks if the user wants to use lowercase letters
    lowerCaseCF = confirm("Would you like your password to contain lowercase letters?");
    if (lowerCaseCF) {
      alert("Lowercase letters will be used.")
    } else {
      alert("Lowercase letters will not be used.")
    }
    // checks if the user wants to use uppercase letters
    upperCaseCF = confirm("Would you like your password to contain uppercase letters?");
    if (upperCaseCF) {
      alert("Uppercase letters will be used.")
    } else {
      alert("Uppercase letters will not be used.")
    }
    // checks if the user wants to use numerals
    numeralsCF = window.confirm("Would you like your password to contain numerals?");
    if (numeralsCF) {
      alert("Numerals will be used.")
    } else {
      alert("Numerals will not be used.")
    }
    // checks if the user wants to use special characters
    specialCharsCF = window.confirm("Would you like your password to contain special characters?");
    if (specialCharsCF) {
      alert("Special characters will be used.")
    } else {
      alert("Special characters will not be used.")
    }
  } 
  // if no character types are selected
  if (!lowerCaseCF && !upperCaseCF && !numeralsCF && !specialCharsCF) {
    // "confirmations" keeps track of character type arrays to concatenate based on user input
    var confirmations = window.alert("Please select at least one character type for your password.");
    generatePassword();
  // if all character types are selected
  } else if (lowerCaseCF && upperCaseCF && numeralsCF && specialCharsCF) {
    confirmations = lcChars.concat(ucChars, numChars, specChars);
  // if 3 character types are selected
  } else if (lowerCaseCF && upperCaseCF && numeralsCF) {
    confirmations = lcChars.concat(ucChars, numChars);
  } else if (lowerCaseCF && upperCaseCF && specialCharsCF) {
    confirmations = lcChars.concat(ucChars, specChars);
  } else if (lowerCaseCF && numeralsCF && specialCharsCF) {
    confirmations = lcChars.concat(numChars, specChars);
  } else if (upperCaseCF && numeralsCF && specialCharsCF) {
    confirmations = ucChars.concat(numChars, specChars);
  // if 2 character types are selected
  } else if (lowerCaseCF && upperCaseCF) {
    confirmations = lcChars.concat(ucChars);
  } else if (lowerCaseCF && numeralsCF) {
    confirmations = lcChars.concat(numChars);
  } else if (lowerCaseCF && specialCharsCF) {
    confirmations = lcChars.concat(specChars);
  } else if (upperCaseCF && numeralsCF) {
    confirmations = ucChars.concat(numChars);
  } else if (upperCaseCF && specialCharsCF) {
    confirmations = ucChars.concat(specChars);
  } else if (numeralsCF && specialCharsCF) {
    confirmations = numChars.concat(specChars);
  // if only 1 character type is selected
  } else if (lowerCaseCF) {
    confirmations = lcChars;
  } else if (upperCaseCF) {
    confirmations = ucChars;
  } else if (numeralsCF) {
    confirmations = numChars;
  } else if (specialCharsCF) {
    confirmations = specChars;
  }
  // this empty array will be filled by joining pushed data from the random generator below
  var password = [];
  // randomizer
  for (var i = 0; i < pwLength; i++) {
    var chooseConfirms = confirmations[Math.floor(Math.random() * confirmations.length)];
    password.push(chooseConfirms);
  }
  return password;
}
// function that writes the password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password.join("");
}
// add event listener to generate button
generateBtn.addEventListener("click", writePassword);