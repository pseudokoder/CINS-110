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
  window.confirm("You answered: " + ansEntered);
  window.location.href="test2.html";
}
function submit2(){
  var ansEntered = document.getElementById("answer").value;
  window.confirm("You answered: " + ansEntered);
  window.location.href="test3.html";
}
function submit3(){
  var ansEntered = document.getElementById("answer").value;
  window.confirm("You answered: " + ansEntered);
  window.location.href="results.html";
}
