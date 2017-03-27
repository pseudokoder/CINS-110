function validateUsername(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var userLength = userEntered.length;
  var userSpace = userEntered.search(" ");
  //var passEntered = document.getElementById("pass").value;
  //var passLength = passEntered.length;

  //Show message that there is an error with the username...
  if (userLength < 6) {
    document.getElementById("usernameError").innerHTML="Username must have at least 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.remove("has-success");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else if (userSpace != -1) {
    document.getElementById("usernameError").innerHTML="Username must NOT contain any spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    //document.getElementById("usernameGroup").classList.remove("has-success");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else {
    //document.getElementById("usernameGroup").classList.remove("has-error");
    document.getElementById("usernameGroup").classList.add("has-success");
  }
}

function validatePassword(){
  //Show message that there is an error with the password...
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var passLength = passEntered.length;
  var passLower = passEntered.toLowerCase();

  if (passLower == "password" || passEntered == userEntered)
  {
    document.getElementById("passwordError").innerHTML="Password must NOT be the word \"password\" or be the same as the Username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    //document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if (passLength < 6 || passLength > 20) {
    document.getElementById("passwordError").innerHTML="Password must be between 6-20 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    //document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else {
    //document.getElementById("passwordGroup").classList.remove("has-error");
    document.getElementById("passwordGroup").classList.add("has-success");
  }
}

function register(){
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  window.alert("Username: " + userEntered + "\nPassword: " + passEntered);
}
