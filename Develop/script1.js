
//prompts for the user to choose which charcters they would like in their password

lowerCase = confirm("Would you like LOWER CASE LETTERS in your password?");
upperCase = confirm("would you like UPPER CASE LETTERS in your password?");
nums = confirm("wuold you like NUMERIC VALUES in your password");
special = confirm("would you like SPECIAL CHARACTERS in your password?");
  while((lowerCase === false) && (upperCase === false) && (nums === false) && (special === false)) {
    alert("Must include at least one of the character choices. please try again.");
        lowerCase = confirm("Would you like LOWER CASE LETTERS in your password?");
        upperCase = confirm("would you like UPPER CASE LETTERS in your password?");
        nums = confirm("wuold you like NUMERIC VALUES in your password");
        special = confirm("would you like SPECIAL CHARACTERS in your password?");
      }

//prompt to determine length of password

length = prompt("Please specify the amount of charcters the password should have. (between 8-128 characters.)");
parseInt(length);
    while(length > 128 || length < 8) {
        alert("please choose a number between 8-128.");
        length = prompt("Please specify the amount of charcters the password should have. (between 8-128 characters.)");
    }

var generateBtn = document.querySelector("#generate");

window.addEventListener('load', function() {
    generateNewPassword();
    });
    
//passwrod generator function

      function generateNewPassword() {
        var password = "";
  
//rando is an online javascript resource for streamlining randomizations

        var allowed = {};
        if (upperCase) password += rando(allowed.upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM");
        if (lowerCase) password += rando(allowed.lowerCase = "qwertyuiopasdfghjklzxcvbnm");
        if (nums) password += rando(allowed.nums = "1234567890");
        if (special) password += rando(allowed.special = "!@#$%^&*(){}[]=<>/,.");
      
        for (var i = password.length; i < length; i++) {
            password += rando(rando(allowed).value);
        }

        document.getElementById("password").value = randoSequence(password).join("");

      }

      generateBtn.addEventListener("click", generateNewPassword);