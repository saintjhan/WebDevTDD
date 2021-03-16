let findDifference = require('../src/index');
let assert = require('assert');

describe ('Find the difference of the cuboids', function(){
    it('test', function(){
        let res = findDifference([3, 2, 5], [1, 4, 4]);
        assert.strictEqual(res, 14);
    })
    it('test', function(){
        let res = findDifference([9, 7, 2], [5, 2, 2]);
        assert.strictEqual(res, 106);
    })
    it('test', function(){
        let res = findDifference([11, 2, 5], [1, 10, 8]);
        assert.strictEqual(res, 30);
    })
    it('test', function(){
        let res = findDifference([4, 4, 7], [3, 9, 3]);
        assert.strictEqual(res, 31);
    })
    it('test', function(){
        let res = findDifference([15, 20, 25], [10, 30, 25]);
        assert.strictEqual(res, 0);
    })
    
})