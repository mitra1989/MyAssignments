import { expect, test } from "@playwright/test"

test("handle a single child window", async ({ page, context }) => {
	await page.goto("https://www.leafground.com/window.xhtml")

	const childPagePromise = context.waitForEvent("page")
	await page.locator("//*[text()='Click and Confirm new Window Opens']//following::span[text()='Open']").click()

	const childPage = await childPagePromise
	await childPage.waitForLoadState("domcontentloaded")

	console.log("Main page title:", await page.title())
	console.log("Child page title:", await childPage.title())

	const emailField = childPage.locator('#email').first()
	const messageField = childPage.locator('#message').first()
	await emailField.fill("abc@gmail.com")
	await messageField.fill("Playwright window handling")

	await expect(emailField).toHaveValue("abc@gmail.com")
	await expect(messageField).toHaveValue("Playwright window handling")
})
