let operands = ['+', '-', '*', '/', '%'];
// Get two numbers
let numbers = [];
let prev = '+';

function sum(x, y) {
  return parseInt(x) + parseInt(y);
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if(y !== '0') {
    return x / y;
  } else {
    return 'error';
  }
}

function percent(x, y) {
  return (x / 100) * y
}


function calculate(userInput) {
  let numbersNumbers = []; // [1, 2]

  // Take our numbers, run the correct functions
  userInput.forEach((input) => {
    // If its a number, store it in numbersNumbers
    if(!isNaN(input)) {
      numbersNumbers.push(input);
    } else {
      operand = input;
    }

    if(numbersNumbers.length == 2) {
     switch(operand) {
        case "+":
        numbersNumbers = [sum(numbersNumbers[0], numbersNumbers[1])];
        break;
        case "-":
        numbersNumbers = [subtract(numbersNumbers[0], numbersNumbers[1])]
        break;
        case "*":
        numbersNumbers = [multiply(numbersNumbers[0], numbersNumbers[1])]
        break;
        case "/":
        numbersNumbers = [divide(numbersNumbers[0], numbersNumbers[1])]
        break;
        case "%":
        numbersNumbers = [percent(numbersNumbers[0], numbersNumbers[1])]
        break;
      }
    }
  });

  // Return the result
  return numbersNumbers;
}

function setNumbers(input) {
  // input is an operand
  if(operands.indexOf(input) > -1) {
    // prev input was an operand -> replaced by current operand
    if(operands.indexOf(prev) > -1) {
      numbers[(numbers.length-1)] = input;
    } else {
      numbers.push(input);
    }
  // input is NOT an operand -> can be a number, error msg, etc
  } else {
    // prev input was an operand
    if(operands.indexOf(prev) > -1) {
      numbers.push(input);
    // prev input was NOT an operand
    } else {
      // prev input was error message
      if(numbers[0] == 'error') {
        numbers[0] = input;
      // prev input was a number
      } else if((numbers.length) > 0) {
        numbers[(numbers.length-1)] += input;
      } else {
        numbers.push(input);
      }
    }
  }
  prev = input;

}


function handleClick(id) {

  if(id == 'reset') {
    numbers = [];
  } else if(id == 'equals') {
    numbers = calculate(numbers);
  // id is a number
  } else {
    setNumbers(id);
  }

  console.log(numbers); // For debugging

  $('#output').html(numbers);
}
