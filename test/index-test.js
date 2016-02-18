var assert = require('assert');
var regexPattern = require('../index');
var buildPattern = regexPattern.buildPattern;

describe('buildPattern', function() {
  describe('wholeString === true', function() {
    it('Should', function() {
      assert.strictEqual('^[Ff][AaÁáÀàÃãÄäÂâ][Bb][Rr][IiÍíÌìÏïÎî][CcÇç][IiÍíÌìÏïÎî][OoÓóÒòÖöÔô]', buildPattern('fabricio', true));
    });
  
    it('Should', function() {
      assert.strictEqual('^[Ff][AaÁáÀàÃãÄäÂâ][Bb][Rr][IiÍíÌìÏïÎî][CcÇç][IiÍíÌìÏïÎî][OoÓóÒòÖöÔô]', buildPattern('Fabrício', true));
    });
  
    it('Should', function() {
      assert.strictEqual('^(?=.*\\b[Jj][OoÓóÒòÖöÔô][AaÁáÀàÃãÄäÂâ][OoÓóÒòÖöÔô]\\s)(?=.*\\b[Pp][AaÁáÀàÃãÄäÂâ][UuÚúÙùÜüÛû][Ll][OoÓóÒòÖöÔô]\\b).*$', buildPattern('Joao pAulO', true));
    });
  
    it('Should', function() {
      assert.strictEqual('^(?=.*\\b[Jj][OoÓóÒòÖöÔô][AaÁáÀàÃãÄäÂâ][OoÓóÒòÖöÔô]\\s)(?=.*\\b[Pp][AaÁáÀàÃãÄäÂâ][UuÚúÙùÜüÛû][Ll][OoÓóÒòÖöÔô]\\b).*$', buildPattern('joão paulo', true));
    });
  
    it('Should', function() {
      assert.strictEqual('^[Ss][UuÚúÙùÜüÛû][IiÍíÌìÏïÎî][CcÇç][AaÁáÀàÃãÄäÂâ]', buildPattern('suíça', true));
    });
  
    it('Should', function() {
      assert.strictEqual('^[Ss][UuÚúÙùÜüÛû][IiÍíÌìÏïÎî][CcÇç][AaÁáÀàÃãÄäÂâ]', buildPattern('suíca', true));
    });
  
    it('Should', function() {
      assert.strictEqual('^[AaÁáÀàÃãÄäÂâ][NnÑñ][Tt][OoÓóÒòÖöÔô][NnÑñ][IiÍíÌìÏïÎî][OoÓóÒòÖöÔô]', buildPattern('antônio', true));
    });
  
    it('Should', function() {
      assert.strictEqual('^[AaÁáÀàÃãÄäÂâ][NnÑñ][Tt][OoÓóÒòÖöÔô][NnÑñ][IiÍíÌìÏïÎî][OoÓóÒòÖöÔô]', buildPattern('antonio', true));
    });
  });

  describe('wholeString === false', function() {
    it('Should', function() {
      assert.strictEqual('[Ff][AaÁáÀàÃãÄäÂâ][Bb][Rr][IiÍíÌìÏïÎî][CcÇç][IiÍíÌìÏïÎî][OoÓóÒòÖöÔô]', buildPattern('fabricio'));
    });
  
    it('Should', function() {
      assert.strictEqual('[Ff][AaÁáÀàÃãÄäÂâ][Bb][Rr][IiÍíÌìÏïÎî][CcÇç][IiÍíÌìÏïÎî][OoÓóÒòÖöÔô]', buildPattern('Fabrício'));
    });
  
    it('Should', function() {
      assert.strictEqual('(?=.*[Jj][OoÓóÒòÖöÔô][AaÁáÀàÃãÄäÂâ][OoÓóÒòÖöÔô])(?=.*[Pp][AaÁáÀàÃãÄäÂâ][UuÚúÙùÜüÛû][Ll][OoÓóÒòÖöÔô]).*', buildPattern('Joao pAulO'));
    });
  
    it('Should', function() {
      assert.strictEqual('(?=.*[Jj][OoÓóÒòÖöÔô][AaÁáÀàÃãÄäÂâ][OoÓóÒòÖöÔô])(?=.*[Pp][AaÁáÀàÃãÄäÂâ][UuÚúÙùÜüÛû][Ll][OoÓóÒòÖöÔô]).*', buildPattern('joão paulo'));
    });
  
    it('Should', function() {
      assert.strictEqual('[Ss][UuÚúÙùÜüÛû][IiÍíÌìÏïÎî][CcÇç][AaÁáÀàÃãÄäÂâ]', buildPattern('suíça'));
    });
  
    it('Should', function() {
      assert.strictEqual('[Ss][UuÚúÙùÜüÛû][IiÍíÌìÏïÎî][CcÇç][AaÁáÀàÃãÄäÂâ]', buildPattern('suíca'));
    });
  
    it('Should', function() {
      assert.strictEqual('[AaÁáÀàÃãÄäÂâ][NnÑñ][Tt][OoÓóÒòÖöÔô][NnÑñ][IiÍíÌìÏïÎî][OoÓóÒòÖöÔô]', buildPattern('antônio'));
    });
  
    it('Should', function() {
      assert.strictEqual('[AaÁáÀàÃãÄäÂâ][NnÑñ][Tt][OoÓóÒòÖöÔô][NnÑñ][IiÍíÌìÏïÎî][OoÓóÒòÖöÔô]', buildPattern('antonio'));
    });
  });
});
