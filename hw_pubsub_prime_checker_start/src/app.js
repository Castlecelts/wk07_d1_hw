const FormView = require('./views/form_view.js');
const PrimeNumberChecker = require('./models/prime_number_checker.js');
const FiveChecker = require('./models/five_checker.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  // bindEvents is constant in each new javascript. It is the function to call that combines all the functions inside of the js.

  const formView = new FormView();
  formView.bindEvents();

  const primeNumberChecker = new PrimeNumberChecker();
  primeNumberChecker.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
  resultView.bindEvent2();

});
