# How to setup

1. Install NPM (node package manager)
2. Install NodeJS
3. `npm install`
4. create a `.env` file with the following values:
```
    ZAP_DOMAIN=crmUrl
    ZAP_USERNAME=YourUNAME
    ZAP_PASS=YourPASS
```
5. `npm run start`

# Libraries involved
- Puppeteer
- Mocha
- Chai

# Learn Puppeteer
Puppeteer is used to simulate a browser.

You can find more information about Puppeteer [here](https://github.com/GoogleChrome/puppeteer).

You can find API documentation [here](https://github.com/GoogleChrome/puppeteer/blob/v1.15.0/docs/api.md).

# Learn Mocha
Mocha is used for organizing tests.

You can find more information about Mocha [here](https://mochajs.org/api/index.html).

You can find API documentation [here](https://mochajs.org/api/mocha).

# Learn Chai
Chai is used for assertions.
You can find more information about Chai [here](https://www.chaijs.com).

You can find API documentation [here](http://chaijs.com/api/).

# Adding new tests

1. Under the `./test` folder, create a new category folder if one doesn't already fit your needs. E.g. `./test/project`, or `./test/milestone`. 
2. Create a test file under a category folder. It should follow the naming convention `[new-test-topic]-test.js`. E.g. `create-project-test.js`
3. Tell the test runner to process the new file by adding the following new line to `mocha.opts`, under the "AUTOMATED TEST CASES" heading:
```
--file ./test/[new-category]/[new-test-topic]-test.js
```

That's it! See the section below for how to write your tests.

# Writing Tests
Your new test file should generally follow this template:

```
const chai = require('chai');

describe('[new-topic] tests', function() {
  // *can be another value, in ms. 
  this.timeout(0);
  
  it('my specific test', async function() {
    // do stuff here. E.g...
    // interact with puppeteer...
    // assert buttons or values exist using chai
  });

  it('my specific test 2', async function() {
    // ...
  });

  // ... and so on
});

```
*Setting `this.timeout(0)` disables Mocha from timing out for all tests under that `describe()`. Set it to another value (in milliseconds), if you know the CRM shouldn't take longer than that amount of time for any operation.

In your topic-specific test, there generally is no need to set up the browser and login to CRM.
This should already be done through the `./test/setup.js` file.

You'll be able to access and interact with the page object through the `page` variable.

For an example, see `./test/login/login-test.js`

If in your tests you need to spin up the browser again, login to CRM, or close the browser, you can make use of the test helpers in `./test/helpers/setup.js` and `./test/helpers/teardown.js`.

At the top of your test file, import them like so:

```
const setupHelpers = require('../path/to/helpers/setup');
// or 
const teardownHelpers = require('../path/to/helpers/teardown');
```