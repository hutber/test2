import 'babel-polyfill';
import { assert } from 'assert';
import { expect, should } from 'chai';
import Lazy from './';

describe('Lazy challenge', function() {
  it('It should return expected lazy array', function() {
    const lazyClass = new Lazy();
    const desiredReturn = [4,7,10];

    const returnValue =
      lazyClass
        .add(function timesTwo(a) { return a * 2; })
        .add(function plus(a, b) { return a + b; }, 1)
      .evaluate([1, 2, 3]);
    expect(desiredReturn).to.deep.equal(returnValue);
  });
});
