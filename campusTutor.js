// Author: Wes Leiter
function submit() {
  window.location.href="ctform.html";
}
function getFormInput(){
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
