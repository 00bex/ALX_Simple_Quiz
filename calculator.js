function add(number1, number2) {
  return number1 + number2;
}
function subtract(number1, number2) {
  return number1 - number2;
}
function multiply(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
 
}
function getInputValues() {
     const number1 = parseFloat(document.getElementById('number1').value) || 0;
     const number2 = parseFloat(document.getElementById('number2').value) || 0;
     return [number1, number2];
}
function displayResults(result) {
    document.getElementById('calculation-result').textContent = result;
}
document.getElementById('add').addEventListener('click', () => {
    const [number1, number2] = getInputValues();
    displayResults(add(number1, number2));
});
document.getElementById('subtract').addEventListener('click', () => {
    const [number1, number2] = getInputValues();
    displayResults(subtract(number1, number2));
});
document.getElementById('multiply').addEventListener('click', () => {
    const [number1, number2] = getInputValues();
    displayResults(multiply(number1, number2));
});
document.getElementById('divide').addEventListener('click', () => {
    const [number1, number2] = getInputValues();
    displayResults(divide(number1, number2));
});