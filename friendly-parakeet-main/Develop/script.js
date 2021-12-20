// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function that will create users password to their specifications
function generatePassword(){
  // characteristics for our password along with the final password and our work in progress password variables
  var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var digits = "1234567890";
  var special = "~!@#$%^&*()_+{}:?><;.,";
  var password = "";
  var passwordInProgress = "";

  // asking user password length
  var longPass = prompt("Choose a password length between 8 and 128 characters!")
  // check to see if password matches length parameters
  if (longPass >= 8 && longPass <= 128) {
  }
  // if password is in fact less than 8 or greater than 128 user will be prompted to re enter length
  else {
    alert("PASSWORD MUST BE GREATER THAN 8 OR LESS THAN 128 CHARACTERS PLEASE TRY AGAIN!!!!")
    return "";
  }

  // user prompts for what to include in password
  var wantCapital = confirm("Would you like capital letters in your password?")
  var wantLowercase = confirm("Would you like lowercase letters in your password?")
  var wantDigits = confirm("Would you like numbers in your password?")
  var wantSpecial = confirm("Would you like special characters in your password?")

  // if atleast one prompt was selected a random character will be assigned to desired password length
  if (wantCapital) {
    passwordInProgress += capital
  }
  if (wantLowercase) {
    passwordInProgress += lowercase
  }
  if (wantDigits) {
    passwordInProgress += digits
  }
  if (wantSpecial) {
    passwordInProgress += special
  }

  // When no character types are selected user will be promted to at least pick one attribute
  if (
    !wantCapital && !wantLowercase && !wantDigits && !wantSpecial
  ) {
    return alert("One attribute must be chosen for password generation!!!");
  }
  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
