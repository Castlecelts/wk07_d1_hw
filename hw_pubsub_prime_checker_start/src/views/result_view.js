const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(){

};

// take in information and process it
ResultView.prototype.bindEvents = function () {
  PubSub.subscribe("PrimeNumberChecker:number-checked", (event) => {
    const booleanResult = event.detail;
    const stringResult = this.convertBoolean(booleanResult);
    this.displayResult(stringResult);
  });
};

// view processing
ResultView.prototype.displayResult = function(result){
  const resultElement = document.querySelector("#result")
  resultElement.textContent = result;
};

// convert data processing
ResultView.prototype.convertBoolean = function (boolean) {
  let stringOutput = "";
    if (boolean === true) {
      stringOutput = "Yes! It is a PRIME number"
    } else {
      stringOutput = "No! It is not a PRIME number"
    }
    return stringOutput;
};

ResultView.prototype.bindEvent2 = function () {
  PubSub.subscribe("FiveChecker:number-checked", (event) => {
    const booleanResult = event.detail;
    const stringResult = this.convertBoolean2(booleanResult);
    this.displayResult(stringResult);
  });
};

// view processing
ResultView.prototype.displayResult2 = function(result){
  const resultElement = document.querySelector("#fiveResult")
  resultElement.textContent = result;
};

// convert data processing
ResultView.prototype.convertBoolean2 = function (boolean) {
  let stringOutput = "";
    if (boolean === true) {
      stringOutput = "Yes! Love a 5"
    } else {
      stringOutput = "No! Why no 5??"
    }
    return stringOutput;
};



module.exports = ResultView;
