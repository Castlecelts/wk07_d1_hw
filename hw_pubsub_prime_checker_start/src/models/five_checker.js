const PubSub = require('../helpers/pub_sub.js');

const FiveChecker = function(){

};

FiveChecker.prototype.bindEvents = function(){
  PubSub.subscribe("FormView:number-submitted", (event) => {
    const inputtedNumber = event.detail;
    const result = this.numberIsFive(inputtedNumber);
    PubSub.publish("FiveChecker:number-checked", result);
  });
};

// LOGIC
FiveChecker.prototype.numberIsFive = function (number) {
  if (number % 5 === 0 ) {
    return true;
  } else {
    return false
  }
};


module.exports = FiveChecker;
