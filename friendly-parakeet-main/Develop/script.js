// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function that will create users password to their specifications
function generatePassword(){
  // characteristics for our password along with the final password and our work in progress password variables
  var capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
