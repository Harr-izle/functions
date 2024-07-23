function greet(name) {
    return `Hello, ${name}!`;
  }

  function add(num1, num2) {
    return num1 + num2;
  }

  function reverse(str) {
    return str.split('').reverse().join('');
  }

  function subtract(num1, num2) {
    return num1 - num2;
  }


  module.exports = {
    greet,
    add,
    reverse,
    subtract
  }