# How To Compare Screenshots In Playwright

This repository contains code to demo for screenshot comparison in Playwright TypeScript 🎭

The entire testing was performed on local gird as well as [LambdaTest Cloud Grid](http://www.lambdatest.com?fp_ref=jaydeep88)
## Version Check

The code has been fully tested on the below versions

🐋 Node  v18.15.0

🐍 NPX version 9.5.0

🎭 Version 1.32.3

## Env File
The ``.env`` file needs to be amended to run the test on cloud grid by providing the username and access key

## Running the tests locally 
Amend the projects array in the``playwright.config.ts`` to include the browser engine of your choice. 
If you choose chromium the command to run test is

```javascript
{
   name: 'chromium',
   use: { ...devices['Desktop Chrome'] },
}
```

``npx playwright test --project=chromium``

## Running the tests on cloud grid
Amend the ``.env`` file to add the cloud grid username and access key.

Amend the projects array in the``playwright.config.ts`` to 
```javascript
{
      name: "chrome:latest:Windows 11@lambdatest"     
},
```