class Lazy {
  constructor() {
    this.builtUpFuncs = [];
  }

  singleArgAppliedToAllFunctions(numberItem) {
    return this.builtUpFuncs.map(addObject => {
      if (addObject.arg) {
        return addObject['func'](addObject.arg, numberItem)
      } else {
        return addObject['func'](numberItem)
      }
    })
  }

  add() {
    const funcObject = {
      func: arguments[0],
    };
    if (arguments[1]) funcObject.arg = arguments[1];
    this.builtUpFuncs.push(funcObject)
    return this;
  }

  evaluate(target) {
    const totalNumber = target.map((numberItem, index) => {
      return this.singleArgAppliedToAllFunctions(numberItem).reduce((a, b) => a + b)
    })
    console.info(totalNumber);
  }
}

const computation = new Lazy();
computation.add(function timesTwo(a) {
  return a * 2;
}) // simple function
.add(function plus(a, b) {
  return a + b;
}, 1) // a plus function that will be given 1 as its first argument
.evaluate([1, 2, 3]); // returns [3, 5, 7]

Thanks for the test chaps, I don't love the solution as its using arguments[] and is britle af :D But with 30mins ¯\_(ツ)_/¯
