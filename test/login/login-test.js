const chai = require('chai');

describe('Login tests', function() {
  // Setting this.timeout(0) disables Mocha from timing out for all
  // tests under that describe().
  // Set it to another value (in milliseconds), if you know the CRM
  // shouldn't take longer than that amount of time for any operation in this file.
  this.timeout(0);

  it('allows User see their ID in top right after login', async function() {
    await page.click('#navTabButtonUserInfoLinkId');
    await page.waitForSelector('#navTabButtonUserInfoUserNameId');
    const text = await page.$eval("#navTabButtonUserInfoUserNameId", (elem) => {
      return elem.textContent;
    });
    const expectedUsername = process.env.ZAP_USERNAME.replace('@planning.nyc.gov', ' #').toLowerCase();
    chai.assert(text.toLowerCase() == expectedUsername, 'Username is not in the top right profile dropdown');
  });
});