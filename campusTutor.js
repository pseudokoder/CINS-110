// Author: Wes Leiter

function getProfile() {
  var name = Number(getCookie("name"));
  var major = Number(getCookie("major"));
  var email = Number(getCookie("email"));
  var subjects;
  var i = 1;
  do {
    subjects[i] = getCookie("subj"+i);
    i++;
  } while (subjects[i]);
  var profile;
  profile = {"name":name,
             "major":major,
             "email":email,
             "subjects":subjects
           };
}
function submit() {
  window.location.href="ctform.html";
}
function getFormInput(){
  var name = document.getElementById("name").value;
  console.log(name);
  setCookie("name", name, 1);
  var major = document.getElementById("major").value;
  setCookie("major", major, 1);
  var email = document.getElementById("emailgroup").value;
  setCookie("email", email, 1);

  var math = document.getElementById("ckMath").checked;
  if (math) {
    subjects.push("MATH");

  }
  var phys = document.getElementById("ckPhys").checked;
  if (phys) {
    subjects.push("PHYS");
  }
  var csci = document.getElementById("ckCsci").checked;
  if (csci) {
    subjects.push("CSCI");
  }
  var engl = document.getElementById("ckEngl").checked;
  if (engl) {
    subjects.push("ENGL");
  }
  var acct = document.getElementById("ckAcct").checked;
  if (acct) {
    subjects.push("ACCT");
  }
  var hist = document.getElementById("ckHist").checked;
  if (hist) {
    subjects.push("HIST");
  }
  for (x in subjects) {
    console.log(subjects[x]);
  }

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
    document.getElementById("emailgroup").classList.remove("has-success");
    document.getElementById("emailgroup").classList.add("has-error");
    //alert("Not a valid e-mail address");
    return false;
  }
  else {
    document.getElementById("emailgroup").classList.remove("shown-message");
    document.getElementById("emailgroup").classList.add("hidden-message");
    document.getElementById("emailgroup").classList.remove("has-error");
    document.getElementById("emailgroup").classList.add("has-success");
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
