import { expect, test } from '@playwright/test'

test('merge two leads with window handling', async ({ page, context }) => {
	await page.goto('http://leaftaps.com/opentaps/control/main')

	await page.locator('#username').fill('Demosalesmanager')
	await page.locator('[type="password"]').fill('crmsfa')
	await page.locator('[type="submit"]').click()

	await page.locator('[for="crmsfa"] > a').click()
	await page.locator('[href="/crmsfa/control/leadsMain"]').click()
	await page.getByText('Merge Leads', { exact: true }).click()

	const [fromLeadPopup] = await Promise.all([
		context.waitForEvent('page'),
		page.locator('[name="ComboBox_partyIdFrom"]').locator('..').getByRole('link').click(),
	])
	await fromLeadPopup.waitForLoadState('domcontentloaded')
	await fromLeadPopup.locator('a[href*="viewLead"]').first().click()
	await fromLeadPopup.close()

	const [toLeadPopup] = await Promise.all([
		context.waitForEvent('page'),
		page.locator('[name="ComboBox_partyIdTo"]').locator('..').getByRole('link').click(),
	])
	await toLeadPopup.waitForLoadState('domcontentloaded')
	await toLeadPopup.locator('a[href*="viewLead"]').nth(1).click()
	await toLeadPopup.close()

	const [alertMessage] = await Promise.all([
		page.waitForEvent('dialog'),
		page.locator("//td/a[text()='Merge']").click(),
	])
	expect(alertMessage.type()).toBe('confirm')
	console.log('Merge alert:', alertMessage.message())
	await alertMessage.accept()

	await page.locator("//td/a[text()='Merge']").click()
	await expect(page).toHaveTitle(/View Lead|Leads/)
})
