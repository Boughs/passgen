// Assignment code here

  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var special = "!@#$%^&*_-+=";
//Generate Password fucntion
function generatePassword() {
  var password = "";
  var passwordChar = "";


  var userLength = prompt("Choose a password length from 8-128 characters!");
  userLength = parseInt(userLength);

  if (userLength < 8) {
    alert("Passwords must be at or above 8 characters!");
    return "";
  }

  if (userLength > 128) {
    alert("Passwords must not have more than 128 characters!");
    return ""
  }

  var useUpper = confirm("Include uppercase characters in your password?");

  if (useUpper) {
    passwordChar += uppercase;
  }

  var useLower = confirm("Include lowercase characters in your password?");

  if (useLower) {
    passwordChar += lowercase;
  }

  var useNumber = confirm("Include numbers in your password?");

  if (useNumber) {
    passwordChar += numbers;
  }

  var useSpecial = confirm("Include special characters in your password?");

  if (useSpecial) {
    passwordChar += special
  }

  for (var i = 0; i < length; i++) {
    password = passwordChar[Math.floor(Math.random() * passwordChar.length)]
  }

  
  // 1. Promt user for the password criteria
  // a. password length between 8 and 128 characters
  // b. lowercase, uppercase, numbers, special characters
  // 2. validate the input
  // 3. Generate password based on criteria

  // 4. Display the generated password on the page

};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
