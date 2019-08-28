// This file sets up all subsequent tests.
// It should be called first, as specified in `mocha.opts`
// Most importantly, this file sets up global `page` and `browser` variables
// for use across all test files under `./tests`.
// It also signs into CRM based on credentials provided in `.env`. 
const Puppeteer = require('puppeteer');
const { exec } = require('child_process');
const Mocha = require('mocha');

// Instantiate a Mocha instance.
const mocha = new Mocha();

mocha.addFile('./test/login/logged-in-test.js');
mocha.addFile('./test/project/create-project-test.js');
mocha.addFile('./test/teardown.js');

browser = null;
page = null;

wsEndpoint = false;

newChrome = exec("//Applications//Google\\ Chrome.app//Contents//MacOS//Google\\ Chrome -incognito  --remote-debugging-port=9222 --no-first-run --no-default-browser-check --user-data-dir=$(mktemp -d -t 'chrome-remote_data_dir')");

newChrome.stdout.on('data', (data) => {
  newChrome.stdin.write(data);
});

newChrome.stderr.on('data', (data) => {
  if(!wsEndpoint) {
    wsEndpoint = data.toString().replace("DevTools listening on ", "").trim();
    (async function(){
      browser = await Puppeteer.connect({
        // set to true to disable visuals
        // assign smaller number to fast forward through page interactions
        slowMo: 2,
        browserWSEndpoint: wsEndpoint,
      });
    
      page = await browser.newPage();

      // Run the tests.
      mocha.run(function(failures) {
        process.exitCode = failures ? 1 : 0;  // exit with non-zero status if there were failures
      });

    })();
  }
});

newChrome.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  newChrome.stdin.end();
});