const PubSub = require('../helpers/pub_sub.js');

const PrimeNumberChecker = function(){

};


PrimeNumberChecker.prototype.bindEvents = function () {
  PubSub.subscribe("FormView:number-submitted", (event) => {
    // grab the information from the event/channel
    const inputtedNumber = event.detail;
    // Do something to that information
    const result = this.numberIsPrime(inputtedNumber);
    // publish that result (payload)
    PubSub.publish("PrimeNumberChecker:number-checked", result);
  });
};



// LOGIC
PrimeNumberChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};

module.exports = PrimeNumberChecker;
