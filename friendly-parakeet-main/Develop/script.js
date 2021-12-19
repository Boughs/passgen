// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Generate Password fucntion
function generatePassword() {
  var length = Number(promt("How many characters would you like your password to include?"));
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like?"));
  var uppercase = confirm("Would you like to use any uppercase letters?");
  var lowercase = confirm("Would you like to use any lowercase letters?");
  var numbers = confirm("Would you like to use any numbers?");
  var symbols = confirm("Would you like to use any special characters?");

  while (!uppercase && !lowercase && !numbers && symbols) {
    alert("You must select at least one character type!");
    uppercase = confirm("Would you like to use any uppercase letters?");
    lowercase = confirm("Would you like to use any lower case letters?");
    numbers = confirm("Would you like to use any numbers?");
    symbols = confirm("Would you liek to use any special characters?");
  }
  // 1. Promt user for the password criteria
  // a. password length between 8 and 128 characters
  // b. lowercase, uppercase, numbers, special characters
  // 2. validate the input
  // 3. Generate password based on criteria

  // 4. Display the generated password on the page
  return "Generated Password will go here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
