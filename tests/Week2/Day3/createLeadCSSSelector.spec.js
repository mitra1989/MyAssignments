import { test } from '@playwright/test'

test('create lead with css selector', async ({ page }, testInfo) => {

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

  //click on Create Lead link
  await page.locator('[href="/crmsfa/control/createLeadForm"]').click()

  //Enter company name
  await page.locator('table [name="companyName"]').fill('TestLeaf')

  //Enter first name
  await page.locator('table [name="firstName"]').fill('Shirsendu')

  //Enter last name
  await page.locator('table [name="lastName"]').fill('Mitra')

  //Enter Salutation
  await page.locator('table [name="personalTitle"]').click()

  //Enter Title
  await page.locator('table [name="generalProfTitle"]').fill('Testing')

  //Enter Annual Revenue
  await page.locator('table [name="annualRevenue"]').fill('1000000')

  //Enter Department Name
  await page.locator('table [name="departmentName"]').fill('Testing')

  // Select Source Dropdown
  await page.locator('table [name="dataSourceId"]').selectOption({ label: 'Self Generated' })

  // Print all dropdown options
  let options = page.locator('table [name="dataSourceId"] option')
  let dropDownCount = await options.count()
  for (let i = 0; i < dropDownCount; i++) {
    let optionText = await options.nth(i).innerText()
    console.log(optionText)
  }

  // Enter Phone Number
  await page.locator('#createLeadForm_primaryPhoneNumber').fill('7845394366')  

  // Click on Create Lead button
  await page.locator('table [value="Create Lead"]').click()
  
});