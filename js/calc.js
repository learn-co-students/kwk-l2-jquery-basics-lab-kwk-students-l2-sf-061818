//add your code here

var number1 = NaN; //empty 
var number2 = NaN;
var operation = null;
$number1 = $('#number1');
$number2 = $('#number2');
$operation = $('#operation');
$equalsButton = $('#equals');
$result = $('#result');


$('number1').text;
var operation = $('operation').text;
var number2 = $('number2').text; 

function doMath() {
  $('button').click(function() {
    number1 = parseFloat($number1.val());
    number2 = parseFloat($number2.val()); //.val returns the number 
    operation = $operation.val();
    validate()
  }
)}

doMath() ;


function validate() {
 if (isNaN(number1) || isNaN(number2) || number1 === '' || number2 === ''){
    $result.text('Sorry, one of those is not a valid number!');
} else {
  result();
}
}
function result() {
  switch(operation) {
    case '+': $result.text(number1 + number2); break;
    case  '-': $result.text(number1 - number2); break;
    case 'x' : $result.text(number1 * number2); break;
    case '/' : $result.text(number1 / number2); break; 
    case 'default': $result.text('Sorry, not a valid number'); break;
  }
}