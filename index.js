export default class Lazy {
  constructor() {
    this.store = [];
  }

  add() {
    const args = Array.prototype.slice.call(arguments);
    this.store.push({
      func: args[0],
      arg: args.slice(1)
    });
    return this;
  }

  evaluate(args) {
    return args.map((arg) =>
      this.store.reduce((acc, func) => {
          return func.func.call(null, func.arg.length ? func.arg : null, acc)}
        , arg)
    );
  }
}



//My appoligies for the last test. I was under a little pressure to get these tests finished and ended up doing yours in the console in Chrome.
//Also I feel I should give an explanation to this as well.
`const funcObject = {
  func: arguments[0],
};`
//I believed this line: "Don't be defensive about the degenerate cases (E.g. bad / missing arguments)" you wanted us to use things that would be break so we could go over them in the face-to-face
