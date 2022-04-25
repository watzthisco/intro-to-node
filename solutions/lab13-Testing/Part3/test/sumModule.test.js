const sumModule = require('../sumModule');
const mocha = require('mocha');
const should = require('should');

describe('sumModule', function() {
    it('should add numbers together', function(done){
        sumModule(2,2,function(err,result) {
            result.should.equal(4);
            done();
        });
    });

    it('should return an error when one of the arguments is negative', function(done){
        sumModule(-1,2,function(err,result) {
            err.should.equal('all inputs must be positive');
            done();
        })
    })
});

