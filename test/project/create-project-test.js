// Tests for creating a project here.

describe('create project', function() {
  // Setting this.timeout(0) disables Mocha from timing out for all
  // tests under that describe().
  // Set it to another value (in milliseconds), if you know the CRM
  // shouldn't take longer than that amount of time for any operation in this file.
  this.timeout(0);

  it('creates a project', async function() {
    await page.waitFor(1000);

    await page.waitForSelector('#crmMasthead .navigationControl span#TabProject a.navTabButtonLink');
    await page.click('#crmMasthead .navigationControl span#TabProject a.navTabButtonLink', {
      clickCount: 5,
      delay: 1000
    });

    await page.waitFor(1000);

    await page.waitForSelector('[href="/main.aspx?web=true&pageType=EntityList&page=Project&area=Project&etc=10126"]');
    await page.click('[href="/main.aspx?web=true&pageType=EntityList&page=Project&area=Project&etc=10126"]', {
      delay: 1000
    });

    await page.waitFor(1000);

    await page.waitForSelector('#crmRibbonManager div');
    await page.waitForSelector('#crmRibbonManager ul li:first-child a');

    await page.waitFor(1000);

    await page.click('#crmRibbonManager ul li:first-child span', {
      clickCount: 5,
      delay: 1000
    });

    await page.waitFor(4000);
    await page.waitForSelector('#crmRibbonManager div');
  });
});