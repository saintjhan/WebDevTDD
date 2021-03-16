let positiveSum = require('../src/index');
let assert = require('assert');

describe ('return the sum of all of the positives ones', function(){
    it('example', function(){
        let ans = positiveSum([1,2,3,4,5]);
        assert.strictEqual(ans, 15);
    })
    it('example', function(){
        let ans = positiveSum([1,-2,3,4,5]);
        assert.strictEqual(ans, 13);
    })
    it('example', function(){
        let ans = positiveSum([]);
        assert.strictEqual(ans, 0);
    })
    it('example', function(){
        let ans = positiveSum([-1,-2,-3,-4,-5]);
        assert.strictEqual(ans, 0);
    })
    it('example', function(){
        let ans = positiveSum([-1,2,3,4,-5]);
        assert.strictEqual(ans, 9);
    })
    
})