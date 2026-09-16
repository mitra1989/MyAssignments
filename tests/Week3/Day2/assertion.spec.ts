import { test, expect } from '@playwright/test'

test('assertion with xpath', async ({ page }, testInfo) => {

  //Part1  
  await page.goto(' https://leafground.com/input.xhtml')

  //Part2: Assert that element "//input[@placeholder="Disabled"]" is disabled
  const isDisabled = await page.locator('//input[@placeholder="Disabled"]').isDisabled();
  expect(isDisabled).toBe(true);

  //Part3: Assert that element "//input[@placeholder="Babu Manickam"]" is enabled
  const isEnabled = await page.locator('//input[@placeholder="Babu Manickam"]').isEnabled();
  expect(isEnabled).toBe(true);
  await page.locator('//input[@placeholder="Babu Manickam"]').fill('Shirsendu Mitra');

  //Part4: Check soft assertion for element "//input[@placeholder="Babu Manickam"]" is Disabled
  const isDisabledSoft = await page.locator('//input[@placeholder="Babu Manickam"]').isDisabled();
  expect.soft(isDisabledSoft).toBe(true);
  console.log('Soft assertion failed, but test continues execution');

  //Part5: Clear and enter another value "//*[@placeholder="About yourself"]"
  await page.locator('//*[@placeholder="About yourself"]').fill('Hi, I am Shirsendu Mitra');
  await page.locator('//*[@placeholder="About yourself"]').fill('');
  await page.locator('//*[@placeholder="About yourself"]').fill('Playwright Learning');




  






});