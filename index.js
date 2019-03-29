const puppeteer = require('puppeteer');
require('dotenv').config();

(async function() {
  // const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({
    // headless: false, // launch headful mode
    // slowMo: 150, // slow down puppeteer script so that it's easier to follow visually
  });
  const page = await browser.newPage();

  await page.goto('https://dcppfsuat.crm9.dynamics.com/main.aspx');
  await page.type('input', process.env.ZAP_USERNAME);
  await page.click('[value="Next"]');
  await page.waitForSelector('#passwordInput');
  await page.type('#passwordInput', process.env.ZAP_PASS);
  await page.click('#submitButton');
  await page.waitForSelector('#idBtn_Back');
  await page.click('#idBtn_Back');
  await page.waitForSelector('#marsIFrame');
  await page.screenshot({ path: 'login.jpg' });
  await browser.close();
})();
