/* eslint-disable consistent-return */
/* eslint-disable default-case */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
const btn = document.querySelector('#validButton');
const resultDiv = document.querySelector('#result');

btn.addEventListener('click', (_event) => {
  const num1 = validateNumber(document.querySelector('#num1').value);
  const num2 = validateNumber(document.querySelector('#num2').value);
  // eslint-disable-next-line no-use-before-define
  const operator = validateOperator(document.querySelector('#operator').value, num2);
  // eslint-disable-next-line no-use-before-define
  const result = calculate(num1, num2, operator);
  resultDiv.textContent = result;
});

function validateNumber(num) {
  num = parseFloat(num);
  if (isNaN(num)) {
    throw new Error("n'est pas un nombre");
  }
  return num;
}

function validateOperator(operator, num2) {
  // Si l'opérateur est /, vérifier que num2 n'est pas 0, sinon lancer une erreur
  if (operator === '/' && num2 === 0) {
    throw new Error('impossible de diviser par zero');
  }

  // Vérifier que l'opérateur est bien + - * / sinon lancer une erreur
  switch (operator) {
    case '+':
    case '-':
    case '*':
    case '/':
      return operator;
    default:
      throw new Error('Operation invalide');
  }
}

function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
}
