// This file sets up all subsequent tests.
// It should be called first, as specified in `mocha.opts`
// Most importantly, this file sets up global `page` and `browser` variables
// for use across all test files under `./tests`.
// It also signs into CRM based on credentials provided in `.env`. 
const Puppeteer = require('puppeteer');
const setupHelpers = require('./helpers/setup');

browser = null;
page = null;

// Launch puppeteer and instantiate browser and page objects.
// Walk through CRM sign in pages until CRM landing page is visible.
setTimeout(async function() {
  browser = await Puppeteer.launch({
    // set to true to disable visuals
    headless: false,
    // assign smaller number to fast forward through page interactions
    slowMo: 2,
  });

  page = await browser.newPage();
  // `await` here is critical, because the helper has async processes
  await setupHelpers.loginToCrm(page);

  run();
}, 0);
