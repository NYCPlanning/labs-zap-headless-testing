// This file sets up all subsequent tests.
// It should be called first, as specified in `mocha.opts`
// Most importantly, this file sets up global `page` and `browser` variables
// for use across all test files under `./tests`.
// It also signs into CRM based on credentials provided in `.env`. 
const Puppeteer = require('puppeteer');
require('dotenv').config();

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
  await page.goto(process.env.ZAP_DOMAIN);
  await page.type('input', process.env.ZAP_USERNAME);
  await page.click('[value="Next"]');
  await page.waitForSelector('#passwordInput');
  await page.type('#passwordInput', process.env.ZAP_PASS);
  await page.click('#submitButton');
  await page.waitForSelector('#idBtn_Back');
  await page.click('#idBtn_Back');
  await page.waitForSelector('#marsIFrame');

  run();
}, 0);
