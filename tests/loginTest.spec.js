import {expect, test} from '@playwright/test';

test.describe('Login Tests', () => {

    test('login with valid credentials', async ({page}) => {
        await page.goto("https://www.saucedemo.com/v1/index.html")

        await expect(page.locator("#user-name")).toBeVisible()
        await page.locator("#user-name").fill("standard_user")
        await page.locator("#password").fill("secret_sauce")
        await page.locator("#login-button").click()

        await expect(page.locator(".app_logo")).toBeVisible()

        await page.close()
        expect(page.isClosed()).toBeTruthy()
    })

})