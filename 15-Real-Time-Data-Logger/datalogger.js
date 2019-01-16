var numberValues = []; // declares an array

function addNewNumber() {
  // get the text input from the DOM and store it in a variable
  // check if that variable is a number
  // add it to the array.push
  var newNum = document.getElementById("dataInput").value;
  if (isNaN(newNum) == 0) {
    newNum = Number(newNum); // cast to number from text
    numberValues.push(newNum);
  }
}

function updateTotal() {
  var runningTotal = 0;
  for (var i = 0; i < numberValues.length; i++) {
    runningTotal += numberValues[i];
  }
  document.getElementById("total").innerHTML = runningTotal;
  return runningTotal;
}

function updateAvg() {
  var numberAverage = 0;
  runningTotal = updateTotal();
  numberAverage = runningTotal/numberValues.length;
  document.getElementById("average").innerHTML = numberAverage;
  return numberAverage;
}
