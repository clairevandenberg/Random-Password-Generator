// Promt to open page to password generator.
var length = prompt ("Do You Want To Generate a Secure Password")
// make this promt unbreakable add yes and no.

// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterAmountNumber = documnet.querySelector("#amountNumber");
var includeLowercase = document.querySelector("#lowercase");
var includeUppercase = document.querySelector("#uppercase");
var includeNumbers = document.querySelector("#number");
var includeSymbols = document.querySelector("#symbol");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

   // Loop lowercase and Generate a random lowercase letter
  function lowercase () {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var randomlowercase = [Math.floor(Math.random() * lowercase.length)];

  console.log(num);
  return randomlowercase;
}

   // Loop Symbols and Generate a random symbol 
   function symbol () {
   var symbol = '!@#$%^&*=-_';
    var randomsymbol = [Math.floor(Math.random() * symbol.length)];
    
    console.log(symbol);
    return randomsymbol;
  }

  // Loop Uppercase and Generate a random uppercase letter 
  function uppercase() {
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var randomuppercase = [Math.floor(Math.random() * uppercase.length)];
    
    console.log(uppercase);
    return randomuppercase;
  }

  // Loop numbers and Generate a random number
  function numbers () {
  var number = '0123456789';
  var randomlowercase = [Math.floor(Math.random() * numbers.length)];
    
    console.log(number);
    return randomlowercase
  }
}