const mocha = require('mocha');
const should = require('should');
const sumModule = require('../sumModule');

describe('sum', function() {
    it('should add numbers together', function(done){
        sumModule.sum(2,2,function(err,result) {
            result.should.equal(4);
            done();
        });
    });
});

describe('sumSync', function() {
    it('should add numbers together', function(done){
        sumModule.sumSync(2,2).should.equal(4);
        done();
    });
});





