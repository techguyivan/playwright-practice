import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }, testInfo) => {
    await page.goto(process.env.URL)
    await page.getByText('Button Triggering AJAX Request').click()
    testInfo.setTimeout(testInfo.timeout + 2000)
})

test('Auto Waiting', async ({ page }) => {
    const successButton = page.locator('.bg-success')

    //await successButton.click()

    //const text = await successButton.textContent()
    //await successButton.waitFor({ state: "attached" })
    //const text = await successButton.allTextContents()

    //expect(text).toContain('Data loaded with AJAX get request.')

    await expect(successButton).toHaveText('Data loaded with AJAX get request.', { timeout: 20000 })
})

test('Alternative Waits', async ({ page }) => {
    const successButton = page.locator('.bg-success')

    //____wait for element
    //await page.waitForSelector('.bg-success')

    //____wait for particular response
    //await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

    //____wait for network calls to be completed (NOT RECOMMENDED)
    await page.waitForLoadState('networkidle')



    const text = await successButton.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request.')
})

test('Timeouts', async ({ page }) => {
    //test.setTimeout(10000)
    test.slow()
    const successButton = page.locator('.bg-success')
    await successButton.click()

})