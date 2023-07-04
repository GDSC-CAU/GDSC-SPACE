import { expect, test } from '@playwright/test'

test('ci test using playwright', async ({ page }) => {
    await page.goto('http://localhost:3000/')

    const title = 'GDSC'
    await expect(page.locator('h1')).toContainText([...title])
})
