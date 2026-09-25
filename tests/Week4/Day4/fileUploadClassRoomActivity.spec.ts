import { expect, test } from '@playwright/test'
import path from 'path'

const resumePath = path.join(__dirname, '../../../Data/test-resume.pdf')

test('upload resume using both upload methods', async ({ page }) => {
	await page.goto('https://www.naukri.com/registration/createAccount')
	await page.getByText("I'm experienced", { exact: true }).click()

	const resumeInput = page.locator('input[type="file"]')
	await resumeInput.setInputFiles(resumePath)
	const uploadedFileName = page.locator("//div[@class='uploaded-resume']//following-sibling::span[contains(@class,'file-name')]")
	const firstUploadedFileName = await uploadedFileName.innerText()
	expect(firstUploadedFileName).toBe('test-resume.pdf')

    await page.locator("//img[@role='button' and contains(@aria-label,'Delete')]").click()

	const [fileChooser] = await Promise.all([
		page.waitForEvent('filechooser'),
		page.locator("//button[@type='button' and text()='Upload Resume']").click(),
	])
	await fileChooser.setFiles(resumePath)
	const secondUploadedFileName = await uploadedFileName.innerText()
	expect(secondUploadedFileName).toBe('test-resume.pdf')
})
