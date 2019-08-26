require('dotenv').config();

exports.loginToCrm = async function(page) {
  await page.goto(process.env.ZAP_DOMAIN);
  await page.type('input', process.env.ZAP_USERNAME);
  await page.click('[value="Next"]');
  await page.waitForSelector('#passwordInput');
  await page.type('#passwordInput', process.env.ZAP_PASS);
  await page.click('#submitButton');
  await page.waitForSelector('#idBtn_Back');
  // Select "No" when asked "Stay Signed In?"
  await page.click('#idBtn_Back');
  // wait for Dashboard to appear
  await page.waitForSelector('#marsIFrame');
}
