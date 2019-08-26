// This file performs teardown for all tests.
// It should be called last, as specified in `mocha.opts`
// Primarily it closes the browser window.
describe('Teardown', function() {
  this.timeout(0);
  it('closes the browser', async function() {
    await browser.close();
  });
});