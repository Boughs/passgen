// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Generate Password fucntion
function generatePassword() {
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var special = "`~!@#$%^&*()_-+={}[];:'<>,.?/";
  var password = "";
  var passwordChar = "";

  var length = prompt("Choose a password length from 8-128 characters!");
  length = parseInt(length);

  if (length < 8) {
    alert("Passwords must be at or above 8 characters!");
    return "";
  }

  if (length > 128) {
    alert("Passwords must not have more than 128 characters!");
    return "";
  }
  // 1. Promt user for the password criteria
  // a. password length between 8 and 128 characters
  // b. lowercase, uppercase, numbers, special characters
  // 2. validate the input
  // 3. Generate password based on criteria

  // 4. Display the generated password on the page
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
