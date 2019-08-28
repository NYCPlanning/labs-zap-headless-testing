// Tests for creating a project here.

describe('Logged in tests', function() {
  // Setting this.timeout(0) disables Mocha from timing out for all
  // tests under that describe().
  // Set it to another value (in milliseconds), if you know the CRM
  // shouldn't take longer than that amount of time for any operation in this file.
  this.timeout(0);

  it('pulls up a browser', async function() {

    await page.waitForSelector('#crmMasthead .navigationControl span#TabProject a.navTabButtonLink');
    await page.click('#crmMasthead .navigationControl span#TabProject a.navTabButtonLink', {
      clickCount: 5,
      delay: 1000
    });

    await page.waitForSelector('[href="/main.aspx?web=true&pageType=EntityList&page=Project&area=Project&etc=10126"]');
    await page.click('[href="/main.aspx?web=true&pageType=EntityList&page=Project&area=Project&etc=10126"]', {
      delay: 1000
    });

    await page.waitForSelector('#crmRibbonManager div');
    await page.waitForSelector('#crmRibbonManager ul li:first-child a');
    await page.click('#crmRibbonManager ul li:first-child', {
      clickCount: 5,
      delay: 1000
    });

    await page.click('#crmRibbonManager ul li:first-child span', {
      clickCount: 5,
      delay: 1000
    });

  });
});