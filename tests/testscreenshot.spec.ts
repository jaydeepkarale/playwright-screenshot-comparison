import { expect } from '@playwright/test';
import test from "../lambdatest-setup";


test('capture full page screenshot', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/')
  await page.screenshot({ path: 'lt-ecomm-homepage.png', fullPage: true });
});

test('capture element screenshot', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/')
  await page.getByRole("textbox", {name : "Search For Products"}).screenshot({path: 'lt-ecomm-search.png' });
});

test('capture screenshot to buffer', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/')
  const buffer  = await page.getByRole("textbox", {name : "Search For Products"}).screenshot()
  console.log(buffer.toString('base64'))
});

test('compare screenshot', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/')
  await page.getByRole("textbox", {name : "Search For Products"}).fill('test compare screenshot')
  await expect(page).toHaveScreenshot();
});

test('compare screenshot search for apple product', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/')  
  await page.getByRole("textbox", {name : "Search For Products"}).fill('apple')
  await expect(page).toHaveScreenshot();
});

test('allow max pixel diff while compare screenshot', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/')
  await page.getByRole("textbox", {name : "Search For Products"}).fill('test compare screenshot')
  await expect(page).toHaveScreenshot({maxDiffPixels : 800});
});



test('capture full page screenshot using SMARTUI', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/')
  await page.getByRole("textbox", {name : "Search For Products"}).fill('apple')
  await page.evaluate((_) => {},
    'lambdatest_action: {"action":"smartui.takeScreenshot","arguments":{"fullPage":true,"screenshotName":"homepage-without-search.png"}}') 
  await page.evaluate(_ => {}, 'lambdatest_action: {"action":"setTestStatus","arguments":{"status":"passed","remark":"Screenshot captured"}}')
});