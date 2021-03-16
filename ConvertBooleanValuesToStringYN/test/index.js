let boolToWord = require('../src/index');
let assert = require('assert');

describe ('Convert true to Yes and False to No', function(){
    it('test', function(){
        let res = boolToWord(true);
        assert.strictEqual(res, "Yes");
    })
    it('test', function(){
        let res = boolToWord(false);
        assert.strictEqual(res, "No");
    })
    
})