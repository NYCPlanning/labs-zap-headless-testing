const teardownHelpers = require('../helpers/teardown');

// This file performs teardown for all tests.
// It should be called last, as specified in `mocha.opts`
describe('Teardown', function() {
  this.timeout(0);
  it('closes the browser', async function() {
    await teardownHelpers.closeBrowser(browser);
  });
});