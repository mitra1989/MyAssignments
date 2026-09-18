import {test} from "@playwright/test"

test.use(
    {
       storageState: 'tests/Week3/Day3/data/storage.json' 
    }
)

test('auth file to skip the login', async ({page}) => {

await page.goto("https://leaftaps.com/opentaps/control/login;jsessionid=29F1FC69A416D63D3DE358406DC6BB57.jvm1")

await page.waitForLoadState('domcontentloaded')

console.log(await page.title());

})