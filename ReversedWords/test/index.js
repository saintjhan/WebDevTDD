let reverseWords = require('../src/index');
let assert = require('assert');

describe ('Reverse the Words', function(){
    it('example', function(){
        let ans = reverseWords("hello world!");
        assert.strictEqual(ans, "world! hello");
    })
    it('example', function(){
        let ans = reverseWords("syoda doesn't speak like this" );
        assert.strictEqual(ans, "this like speak doesn't syoda");
    })
    it('example', function(){
        let ans = reverseWords("foobar"                       );
        assert.strictEqual(ans, "foobar");
    })
    it('example', function(){
        let ans = reverseWords("kata editor"                  );
        assert.strictEqual(ans, "editor kata");
    })
    it('example', function(){
        let ans = reverseWords("row row row your boat"        );
        assert.strictEqual(ans, "boat your row row row");
    })
    
})