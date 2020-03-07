// Promt to open page to password generator.
var length = prompt("Do You Want To Generate a Secure Password?")

// Assignment Code
var generateBtn = document.querySelector("#Generate");
var characterAmountNumber = document.getElementById("characterAmountNumber").value;
var includeLowercase = document.getElementById("includeLowercase").checked;
var includeUppercase = document.getElementById("includeUppercase").checked;
var includeNumbers = document.getElementById("includeNumbers").checked;
var includeSymbols = document.getElementById("includeSymbols").checked;

// Password prompts 
generateBtn.addEventListener('click', askcharacterconfirm);

function askcharacterconfirm() {
  characterAmountNumber = prompt("How long do you want your password to be?")

  includeUppercase = confirm("Do you want to include upper case letters?")

  includeLowercase = confirm(" Do you want to include lower case letters?")

  includeSymbols = confirm(" Do you want to include symbols?")

  includeNumbers = confirm(" Do you want to include numbers")

  console.log(includeSymbols, includeNumbers, includeUppercase, characterAmountNumber, includeLowercase)
}

if (includeLowercase === false & includeUppercase === false & includeNumbers === false & includeSymbols === false) {
  alert("you must tick atleast one of the boxes");

  // Making new function- Avaliavle function - checking if variables are true or false. 

  function avaliableCharacters 
var avaliableCharacters = [];

  if (includeSymbols === true) avaliableCharacters.push(includeSymbols);
  if (includeUppercase === true) avaliableCharacters.push(includeUppercase);
  if (includeNumbers === true) avaliableCharacters.push(includeNumbers);
  if (includeLowercase === true) avaliableCharacters.push(includeLowercase);

  var password = ""
  for (i = 0; i < passwordlength; i++) {
    var randomNumber = [Math.floor(Math.random() * includeLowercase.length)];

  }

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  // Loop lowercase and Generate a random lowercase letter
  function includeLowercase() {
    var includeLowercase = "abcdefghijklmnopqrstuvwxyz";
    var randomLowercase = [Math.floor(Math.random() * includeLowercase.length)];

    console.log(num);
    return randomlowercase;
  }

  // Loop Symbols and Generate a random symbol 
  function includeSymbols() {
    var includeSymbols = "!@#$%^&*=-_";
    var randomsymbol = [Math.floor(Math.random() * includeSymbols.length)];

    console.log(includeSymbols);
    return randomsymbol;
  }

  // Loop Uppercase and Generate a random uppercase letter 
  function includeUppercase() {
    var includeUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var randomUppercase = [Math.floor(Math.random() * includeUppercase.length)];

    console.log(includeUppercase);
    return randomUppercase;
  }

  // Loop numbers and Generate a random number
  function includeNumbers() {
    var includeNumbers = '0123456789';
    var randomnNmbers = [Math.floor(Math.random() * includeNumbers.length)];

    console.log(includeNumbers);
    return randomNumbers
  }