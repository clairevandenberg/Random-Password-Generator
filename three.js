// Promt to open page to password generator.
//var length = prompt("Do You Want To Generate a Secure Password?")

// Assignment Code
var generateBtn = document.querySelector("#Generate");
var characterAmountNumber = document.getElementById("characterAmountNumber").value;
var includeLowercase = document.getElementById("includeLowercase").checked;
var includeUppercase = document.getElementById("includeUppercase").checked;
var includeNumbers = document.getElementById("includeNumbers").checked;
var includeSymbols = document.getElementById("includeSymbols").checked;

// Password prompts 
generateBtn.addEventListener('click', askcharacterconfirm);

var passwordlength

function askcharacterconfirm() {
  passwordlength = prompt("How long do you want your password to be?")

  includeUppercase = confirm("Do you want to include upper case letters?")

  includeLowercase = confirm(" Do you want to include lower case letters?")

  includeSymbols = confirm(" Do you want to include symbols?")

  includeNumbers = confirm(" Do you want to include numbers")

  console.log(includeSymbols, includeNumbers, includeUppercase, characterAmountNumber, includeLowercase)

  avaliableCharacters ();
}

//if (includeLowercase === false & includeUppercase === false & includeNumbers === false & includeSymbols === false) {
 // alert("you must tick atleast one of the boxes");
//}
  // Making new function- Avaliavle function - checking if variables are true or false. 

  function avaliableCharacters () {

var charactersfunctions = [];

  if (includeSymbols === true){ charactersfunctions.push(includeSymbolsfun)};
  if (includeUppercase === true) { charactersfunctions.push(includeUppercasefun)};
  if (includeNumbers === true) { charactersfunctions.push(includeNumbersfun)};
  if (includeLowercase === true) { charactersfunctions.push(includeLowercasefun)};
  console.log (charactersfunctions)

  var password = ""
  for (i = 0; i < passwordlength; i++) {
  var randomNumber = Math.floor(Math.random() * charactersfunctions.length);
  console.log (charactersfunctions [randomNumber])
  console.log (randomNumber)
  var character= charactersfunctions [randomNumber] ();
  console.log (character)
  password += character
  }
  console.log (password)
}
  

  // Loop lowercase and Generate a random lowercase letter
  var includeLowercasefun = function () {
    var includeLowercase = "abcdefghijklmnopqrstuvwxyz";
    var randomlowercase = Math.floor(Math.random() * includeLowercase.length);

    return randomlowercase;
  }

  // Loop Symbols and Generate a random symbol 
  var includeSymbolsfun = function (){
    var includeSymbols = "!@#$%^&*=-_";
    var randomsymbol = Math.floor(Math.random() * includeSymbols.length);
    return randomsymbol;
  }

  // Loop Uppercase and Generate a random uppercase letter 
  var includeUppercasefun = function () {
    var includeUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var randomUppercase = Math.floor(Math.random() * includeUppercase.length);

    return randomUppercase;
  }

  // Loop numbers and Generate a random number
  var includeNumbersfun = function () {
    var includeNumbers = '0123456789';
    var randomNumbers = Math.floor(Math.random() * includeNumbers.length);

    return randomNumbers
  }