import { test, expect } from '@playwright/test'

test('salesforce login xpath', async ({ page }, testInfo) => {

  await page.goto('https://login.salesforce.com/?locale=in')

  //Enter email
  await page.locator('//*[@id="usernamegroup"]//following-sibling::input[@type="email"]').fill('dilipkumar.rajendran@testleaf.com')

  //Click login button with locator [id="Login"]
  await page.locator('//*[@id="theloginform"]//following-sibling::input[@type="submit"]').click()

  //Enter password with locator [id="password"]
  await page.locator('//form[@name="login"]//following-sibling::input[@type="password"]').fill('TestLeaf@2025')

   //Click login button with locator [id="Login"]
  await page.locator('//form[@name="login"]//following-sibling::input[@type="submit"]').click()
});