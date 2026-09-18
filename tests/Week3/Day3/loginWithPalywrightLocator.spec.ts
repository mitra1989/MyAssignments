import { test } from '@playwright/test'

test('login with playwright locator', async ({ page }, testInfo) => {

  await page.goto(' https://leaftaps.com/opentaps/control/main');

    await page.getByLabel('Username').fill('democsr2')
    await page.getByRole('textbox',{name:"Password"}).fill('crmsfa')
    await page.getByRole('button',{name:"Login"}).click()
    await page.getByText('CRM/SFA').click()

    await page.waitForTimeout(15000)

    await page.context().storageState({ path: 'data/storage.json' });
});