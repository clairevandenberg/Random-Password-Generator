// Confirm to open page to password generator.
var length = confirm("Do You Want To Generate a Secure Password?");
if (length === false) {
  alert("you must click ok to continue");
  }

// Assignment Code
var generateBtn = document.querySelector("#Generate");
var characterAmountNumber = document.querySelector("passwordLength").value;
var includeLowercase = document.querySelector("includeLowercase").checked;
var includeUppercase = document.querySelector("includeUppercase").checked;
var includeNumbers = document.querySelector("includeNumbers").checked;
var includeSymbols = document.querySelector("includeSymbols").checked;

// Password prompts 
generateBtn.addEventListener('click', askcharacterconfirm);


function askcharacterconfirm() {
  passwordlength = prompt("How long do you want your password to be?")

  includeUppercase = confirm("Do you want to include upper case letters?")

  includeLowercase = confirm(" Do you want to include lower case letters?")

  includeSymbols = confirm(" Do you want to include symbols?")

  includeNumbers = confirm(" Do you want to include numbers")

  avaliableCharacters ();

if (isNaN(passwordlength) || length <8 || length >128) {
  alert ('your password must be a minimum of 8 or maximum of 128');
  submitOK = "false"
}

if (includeLowercase === false & includeUppercase === false & includeNumbers === false & includeSymbols === false) {
alert("you must tick atleast one of the boxes");
}

if (submitOK == "false") {
  return false;
}
}

  // Making new function- Avaliavle function - checking if variables are true or false. 

function avaliableCharacters () {

var charactersfunctions = [];

  if (includeSymbols === true){ charactersfunctions.push(includeSymbolsfun)};
  if (includeUppercase === true) { charactersfunctions.push(includeUppercasefun)};
  if (includeNumbers === true) { charactersfunctions.push(includeNumbersfun)};
  if (includeLowercase === true) { charactersfunctions.push(includeLowercasefun)};
  console.log (charactersfunctions)

    // For loop to generate random password using Math.random based on users preferences of number characters

  var password = ""
  for (i = 0; i < passwordlength; i++) {
  var randomNumber = Math.floor(Math.random() * charactersfunctions.length);
  var character= charactersfunctions [randomNumber] ();
  password += character
  }
}

  // Loop lowercase and Generate a random lowercase letter
  var includeLowercasefun = function () {
    var includeLowercase = "abcdefghijklmnopqrstuvwxyz";
    var randomlowercaseindex = Math.floor(Math.random() * includeLowercase.length);
    var randomlowercase = includeLowercase [randomlowercaseindex]
    return randomlowercase;
  }

  // Loop Symbols and Generate a random symbol 
  var includeSymbolsfun = function (){
    var includeSymbols = "!@#$%^&*=-_";
    var randomsymbolindex = Math.floor(Math.random() * includeSymbols.length);
    var randomsymbol = includeSymbols [randomsymbolindex]
    return randomsymbol;
  }

  // Loop Uppercase and Generate a random uppercase letter 
  var includeUppercasefun = function () {
    var includeUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var randomUppercaseindex = Math.floor(Math.random() * includeUppercase.length);
    var randomUppercase = includeUppercase [randomUppercaseindex]

    return randomUppercase;
  }

  // Loop numbers and Generate a random number
  var includeNumbersfun = function () {
    var includeNumbers = '0123456789';
    var randomNumbersindex= Math.floor(Math.random() * includeNumbers.length);
    var randomNumber = includeNumbers [randomNumbersindex]
    return randomNumber;
  }

document.getElementById ("passwordDisplay").innerHTML = randomNumber;