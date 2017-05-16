// Author: Wes Leiter
function submit() {
  window.location.href="ctform.html";
}
function getFormInput(){
  // Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", "Wees");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
  var name = document.getElementById("name").value;
  var major = document.getElementById("major").value;
  var phone = document.createElement("phone").value;
  var subjects;
  var math = document.createElement("ckMath").checked;
  if (math) {
    subjects.push("MATH");
  }
  var phys = document.createElement("ckPhys").checked;
  if (phys) {
    subjects.push("PHYS");
  }
  var csci = document.createElement("ckCsci").checked;
  if (csci) {
    subjects.push("CSCI");
  }
  var engl = document.createElement("ckEngl").checked;
  if (engl) {
    subjects.push("ENGL");
  }
  var acct = document.createElement("ckAcct").checked;
  if (acct) {
    subjects.push("ACCT");
  }
  var hist = document.createElement("ckHist").checked;
  if (hist) {
    subjects.push("HIST");
  }
  console.log(name);
  console.log(major);
  console.log(phone);

}
// validateEmail function adapted from w3schools function
// https://www.w3schools.com/Js/tryit.asp?filename=tryjs_form_validate_email
function validateEmail() {
    var x = document.forms["ctform"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        document.getElementById("emailError").innerHTML="Please enter a valid e-mail address";
        document.getElementById("emailError").classList.remove("hidden-message");
        document.getElementById("emailError").classList.add("shown-message");
        //Turn the username items red
        document.getElementById("email").classList.remove("has-success");
        document.getElementById("email").classList.add("has-error");
        alert("Not a valid e-mail address");
        return false;
    }
}
function validate(){
  //Show message that there is an error with the password...
  var email = document.getElementById("email").value;
  var emailLength = email.length;
  var emailSpace = userEntered.search(" ");
  //var passLower = passEntered.toLowerCase();
  if (emailSpace != -1) {
    document.getElementById("emailError").innerHTML="Please enter a valid e-mail address";
    document.getElementById("emailError").classList.remove("hidden-message");
    document.getElementById("emailError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("email").classList.remove("has-success");
    document.getElementById("email").classList.add("has-error");
  }
  if (passLower == "password" || passEntered == userEntered)
  {
    document.getElementById("passwordError").innerHTML="Password must NOT be the word \"password\" or be the same as the Username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if (passLength < 6 || passLength > 20) {
    document.getElementById("passwordError").innerHTML="Password must be between 6-20 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else {
    document.getElementById("passwordError").classList.remove("shown-message");
    document.getElementById("passwordError").classList.add("hidden-message");
    document.getElementById("passwordGroup").classList.remove("has-error");
    document.getElementById("passwordGroup").classList.add("has-success");
  }
}
function showMatchingSub(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var userLength = userEntered.length;

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

  else {
    document.getElementById("usernameError").classList.remove("shown-message");
    document.getElementById("usernameError").classList.add("hidden-message");
    document.getElementById("usernameGroup").classList.remove("has-error");
    document.getElementById("usernameGroup").classList.add("has-success");
  }
}

// setCookie and getCookie are courtesy of W3 Schools
// https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
