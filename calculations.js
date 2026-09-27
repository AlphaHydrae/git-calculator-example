/**
 * Performs a calculation based on the values of two input fields and a
 * calculation function. Keeps the result updated as the input values change.
 *
 * @param {string} calculationHtmlId ID of the HTML element containing the input
 * fields and result display, expected to have two input fields with classes "a"
 * and "b", and a result display element with class "result".
 * @param {function} calculationFunc Function that takes two numbers and returns
 * the result of a calculation.
 */
function calculate(calculationHtmlId, calculationFunc) {
  const calculationHtmlElement = document.getElementById(calculationHtmlId);
  if (!calculationHtmlElement) {
    throw new Error(`Could not find HTML element with ID "${calculationHtmlId}"`);
  }

  const aElement = calculationHtmlElement.querySelector('.a');
  const bElement = calculationHtmlElement.querySelector('.b');
  const resultElement = calculationHtmlElement.querySelector('.result');

  function performCalculation() {
    const valueOfA = parseFloat(aElement.value);
    const valueOfB = parseFloat(bElement.value);
    resultElement.textContent = calculationFunc(valueOfA, valueOfB);
  }

  aElement.addEventListener('input', performCalculation);
  bElement.addEventListener('input', performCalculation);

  performCalculation();
}
