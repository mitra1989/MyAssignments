import { expect, test } from "@playwright/test"

test("handle confirm alert inside a frame", async ({ page }) => {
	await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

	let alertMessage = ""
	let alertType = ""

	page.on("dialog", async (dialog) => {
		alertMessage = dialog.message()
		alertType = dialog.type()
		await dialog.accept()
	})

	const resultFrame = page.frameLocator("#iframeResult")
	await resultFrame.getByRole("button", { name: "Try it" }).click()

	expect(alertMessage).toBe("Press a button!")
	expect(alertType).toBe("confirm")
	await expect(resultFrame.locator("#demo")).toHaveText("You pressed OK!")
})
