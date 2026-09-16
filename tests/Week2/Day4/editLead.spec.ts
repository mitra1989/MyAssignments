import { test } from '@playwright/test'

test('edit lead with css selector', async ({ page }, testInfo) => {

  await page.goto('https://leaftaps.com/opentaps/control/main');

  //Enter user name
  await page.locator('[id="username"]').fill('democsr2')

  //Enter password
  await page.locator('[type="password"]').fill('crmsfa')

  //Click login button
  await page.locator('[type="submit"]').click()

  //Click on CRM/SFA link
  await page.locator('[for="crmsfa"] > a').click()

  //Click on Leads link
  await page.locator('[href="/crmsfa/control/leadsMain"]').click()

  //Click on Create Lead link
  await page.locator('[href="/crmsfa/control/createLeadForm"]').click()

  //Enter company name
  await page.locator('table [name="companyName"]').fill('TestLeaf')

  //Enter first name
  await page.locator('table [name="firstName"]').fill('Shirsendu')

  //Enter last name
  await page.locator('table [name="lastName"]').fill('Mitra')

  //Click on Create Lead button
  await page.locator('table [value="Create Lead"]').click()

  //Click on Edit button
  await page.locator('.frameSectionExtra .subMenuButton').nth(2).click()

  //change the company name
  await page.locator('table [name="companyName"]').fill('')
  await page.locator('table [name="companyName"]').fill('TestLeaf Updated')

  //Click on Update button
  await page.locator('table [value="Update"]').click()
});