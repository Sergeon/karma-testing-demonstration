var main = require('../../app/js/main');

describe('karma' , function(){
    it('works' , function(){
        expect(main.getSomething()).toBe(42);
    });
});

