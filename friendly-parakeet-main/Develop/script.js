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
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
