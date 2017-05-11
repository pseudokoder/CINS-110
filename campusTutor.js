// Author: Wes Leiter
function submit() {
  window.location.href="ctform.html";
}
function getFormInput(){
  var name = document.getElementById("name").value;
  var major = document.getElementById("major").value;
  var phone = document.createElement("phone").value;
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
