import { test } from '@playwright/test'

test('edit lead with css selector', async ({ page }, testInfo) => {

  await page.goto('https://leaftaps.com/opentaps/control/main');

  //Enter user name
  await page.locator('[id="username"]').fill('democsr2')

  //Enter password
  await page.locator('[type="password"]').fill('crmsfa')

  //Click login button
  await page.locator('[type="submit"]').click()

  //click on CRM/SFA link
  await page.locator('[for="crmsfa"] > a').click()

  //click on Leads link
  await page.locator('[href="/crmsfa/control/leadsMain"]').click()

  
});