//add your code here
var num1;
var num2;
var operator;
var ans;

function doMath() {
  $("#equals").click(function() {
    num1 = $("#number1").parseInt();
    num2 = $("#number2").parseInt();
    operator = $("#operation");
    validate(num1, num2, operator);
  })
}

function validate(num1, num2, operator) {
  if (isNaN(num1) || isNaN(num2)) {
    alert("Sorry, one of those is not a valid number!");
  } else if ((operator) != ("+" || "-" || "*" || "/")) {
    alert("Sorry, that is not a valid operator");
  }
  result(num1, num2, operator);
}

function result(num1, num2, operator) {
  if (operator == "+") {
    ans = num1 + num2;
  } else if (operator == "-") {
    ans = num1 - num2;
  } else if (operator == "*") {
    ans = num1 * num2;
  } else if (operator == "/") {
    ans = num1 / num2;
  }
  $("#result").innerText = ans;
}
  


