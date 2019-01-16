// Author: Wes Leiter

function validateAns(){
  //Grab the user's input and store in variables
  var ansEntered = document.getElementById("answer").value;
  var ansLength = ansEntered.length;
  var ansLower = ansEntered.toLowerCase();
  console.log("ansEntered: " + ansEntered);
  console.log("ansLength: " + ansLength);
  console.log("ansLower: " + ansLower);

  //Show message that there is an error with the username...
  if (ansLength == 0){
    document.getElementById("ansError").classList.remove("shown-message");
    document.getElementById("ansError").classList.add("hidden-message");
    document.getElementById("ansGroup").classList.remove("has-error");
    document.getElementById("ansGroup").classList.remove("has-success");
  }
  else if (ansLength > 1) {
    document.getElementById("ansError").innerHTML="Enter only 1 letter.";
    document.getElementById("ansError").classList.remove("hidden-message");
    document.getElementById("ansError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("ansGroup").classList.remove("has-success");
    document.getElementById("ansGroup").classList.add("has-error");
  }
  else if (ansLower != "a" &&
           ansLower != "b" &&
           ansLower != "c" &&
           ansLower != "d" &&
           ansLower != "e")
  {
    document.getElementById("ansError").innerHTML="Answer must be a letter A through E";
    document.getElementById("ansError").classList.remove("hidden-message");
    document.getElementById("ansError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("ansGroup").classList.remove("has-success");
    document.getElementById("ansGroup").classList.add("has-error");
  }
  else {
    document.getElementById("ansError").classList.remove("shown-message");
    document.getElementById("ansError").classList.add("hidden-message");
    document.getElementById("ansGroup").classList.remove("has-error");
    document.getElementById("ansGroup").classList.add("has-success");
  }
}

function begin(){
  window.location.href="test1.html";
}

function submit1(){
  var ansEntered = document.getElementById("answer").value;
  var ansUpper = ansEntered.toUpperCase();
  if (ansUpper == "B") {
    setCookie("ans1", 1, 1);
    window.confirm("You answered: " + ansUpper + "\nThat's correct!");
  } else {
    setCookie("ans1", 0, 1);
    window.confirm("You answered: " + ansUpper + "\nSorry, that's  not correct!");
  }
  window.location.href="test2.html";
}
function submit2(){
  var ansEntered = document.getElementById("answer").value;
  var ansUpper = ansEntered.toUpperCase();
  if (ansUpper == "A") {
    setCookie("ans2", 1, 1);
    window.confirm("You answered: " + ansUpper + "\nThat's correct!");
  } else {
    setCookie("ans2", 0, 1);
    window.confirm("You answered: " + ansUpper + "\nSorry, that's  not correct!");
  }
  window.location.href="test3.html";
}
function submit3(){
  var ansEntered = document.getElementById("answer").value;
  var ansUpper = ansEntered.toUpperCase();
  if (ansUpper == "D") {
    setCookie("ans3", 1, 1);
    window.confirm("You answered: " + ansUpper + "\nThat's correct!");
  } else {
    setCookie("ans3", 0, 1);
    window.confirm("You answered: " + ansUpper + "\nSorry, that's  not correct!");
  }
  window.location.href="results.html";
}
function results(){
  var ans1 = Number(getCookie("ans1"));
  var ans2 = Number(getCookie("ans2"));
  var ans3 = Number(getCookie("ans3"));
  var results1 = Number(ans1 + ans2 + ans3);
  results = (results1/3) * 100;
  console.log("results1 = " + results1);
  document.getElementById("results").innerHTML = "" + Math.round(results) +"%";
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
