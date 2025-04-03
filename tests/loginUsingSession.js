import { test, expect } from '@playwright/test';

const setupAuth = require('../auth.setup');

test.beforeAll(async () => {
  await setupAuth(); // Run before all tests in this file
});

test('should auto login using authentication methods', async ({ page }) => {

  await page.goto('https://demo.haroldwaste.com/');

  await expect(page.locator('[data-test-id="header-menu"]')).toBeVisible();
  await page.screenshot({path: './screenshots/homePage1.png'});
  await expect(page.locator('[data-test-id="header-menu"]')).toContainText('Qa JULES');
  await expect(page.locator('[data-test-id="header-menu"]').getByText('QJ')).toBeVisible();
  await expect(page.locator('#root')).toContainText('Purchase & Opportunity list');
  await page.screenshot({path: './screenshots/homePage2.png'});

});