// Promt to open page to password generator.
var length = prompt ("Do You Want To Generate a Secure Password?")
  
// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterAmountNumber = document.getElementById("characterAmountNumber");
var includeLowercase = document.getElementById("includeLowercase");
var includeUppercase = document.getElementById("includeUppercase");
var includeNumbers = document.getElementById("includeNumbers");
var includeSymbols = document.getElementById("includeSymbols");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

   // Loop lowercase and Generate a random lowercase letter
  function includeLowercase () {
  var includeLowercase = "abcdefghijklmnopqrstuvwxyz";
  var randomLowercase = [Math.floor(Math.random() * includeLowercase.length)];

  console.log(num);
  return randomlowercase;
}

   // Loop Symbols and Generate a random symbol 
   function includeSymbols () {
   var includeSymbols = '!@#$%^&*=-_';
    var randomsymbol = [Math.floor(Math.random() * includeSymbols.length)];
    
    console.log(includeSymbols);
    return includeSymbols;
  }

  // Loop Uppercase and Generate a random uppercase letter 
  function includeUppercase() {
  var includeUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var randomUppercase = [Math.floor(Math.random() * includeUppercase.length)];
    
    console.log(includeUppercase);
    return randomUppercase;
  }

  // Loop numbers and Generate a random number
  function includeNumbers () {
  var includeNumbers = '0123456789';
  var randomnNmbers = [Math.floor(Math.random() * includeNumbers.length)];
    
    console.log(includeNumbers);
    return randomNumbers
  }
}