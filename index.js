export default class Lazy {
  constructor() {
    this.builtUpFuncs = [];
  }

  add() {
    const newArgs = Array.prototype.slice.call(arguments);
    this.builtUpFuncs.push({
      func: newArgs[0],
      arg:  typeof newArgs[1] === "undefined"  ? [] : [newArgs[1]],
    });
    return this;
  }

  evaluate(target) {
    return target.map((args) =>
      this.builtUpFuncs.reduce((acc, cur) => {
        return cur.func.apply(null, cur.arg.concat(acc))
      }, args)
    );
  }
}
//My apologies for the last test. I was under a little pressure to get these tests finished and ended up doing yours in the console in Chrome.
//Also I feel I should give an explanation to this as well.
`const funcObject = {
  func: arguments[0],
};`
//I believed this line: "Don't be defensive about the degenerate cases (E.g. bad / missing arguments)" you wanted us to use things that would be break so we could go over them in the face-to-face
