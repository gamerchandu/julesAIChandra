import { test, expect } from '@playwright/test';
import  TEST_DATA  from '../test-data/input.json';
import path from 'path';
 


const authFile = path.join(__dirname, '../playwright/.auth/user.json');

test('should allow user to login when valid login details provided', async ({ page }) => {

      await page.goto('https://demo.haroldwaste.com/');
      await page.locator('[data-test-id="input-email"]').getByRole('textbox').click();
      await page.locator('[data-test-id="input-email"]').getByRole('textbox').fill(TEST_DATA.valid.username);
      await page.locator('[data-test-id="input-password"]').getByRole('textbox').click();
      await page.locator('[data-test-id="input-password"]').getByRole('textbox').fill(TEST_DATA.valid.password);
      await page.getByRole('button', { name: 'toggle password visibility' }).click();
      await page.locator('[data-test-id="signin"]').click();
      await expect(page.locator('[data-test-id="header-menu"]')).toContainText('Qa JULES');
      await expect(page.locator('[data-test-id="header-menu"]').getByText('QJ')).toBeVisible();
      await expect(page.locator('#root')).toContainText('Purchase & Opportunity list');
      await page.screenshot({path: './screenshots/homePage.png'});

      await page.context().storageState({path: authFile});
});