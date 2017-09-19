var testPhrase1 = 'Today I won an award for being awesome.';
var testPhrase2 = 'Today I Won an one award for being awesome.';
var testPhrase3 = 'Today I ate a tone of award for being awesome.';

QUnit.test( 'Variation 1', function( assert ) {
  assert.equal( parseToInflationary(testPhrase1), 'Threeday I two an award five being awesome.', 'Passed!' );
});

QUnit.test( 'Variation 2', function( assert ) {
  assert.equal( parseToInflationary(testPhrase2), 'Threeday I Two an two award five being awesome.', 'Passed!' );
});

QUnit.test( 'Variation 3', function( assert ) {
  assert.equal( parseToInflationary(testPhrase2), 'Elevenday I eleven an award eleven being awesome.', 'Passed!' );
});
