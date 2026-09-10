import { test, expect } from '@playwright/test'

test('has title', async ({ page }, testInfo) => {

  await page.goto('https://login.salesforce.com/?locale=in');

  //Verify page title before login
  await expect(page).toHaveTitle("Login | Salesforce")

  //Enter email with locator [id="username"]
  await page.locator('[id="username"]').fill('dilipkumar.rajendran@testleaf.com')

  //Click login button with locator [id="Login"]
  await page.locator('[type="submit"]').click()

  //Enter password with locator [id="password"]
  await page.locator('[type="password"]').fill('TestLeaf@2025')

   //Click login button with locator [id="Login"]
  await page.locator('[type="submit"]').click()
});