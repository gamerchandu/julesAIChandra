import { test, expect } from '@playwright/test';
import  TEST_DATA  from '../test-data/input.json';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.haroldwaste.com/');
});



test.describe('Login Funtionality', () => {
  test('should allow user to login when valid login details provided', async ({ page }) => {

   
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
    });

    test('should display error message when invalid login details provided', async ({ page }) => {

    
      await page.locator('[data-test-id="input-email"]').getByRole('textbox').click();
      await page.locator('[data-test-id="input-email"]').getByRole('textbox').fill(TEST_DATA.invalid.username);
      await page.locator('[data-test-id="input-password"]').getByRole('textbox').click();
      await page.locator('[data-test-id="input-password"]').getByRole('textbox').fill(TEST_DATA.invalid.password);
      await page.getByRole('button', { name: 'toggle password visibility' }).click();
      await page.locator('[data-test-id="signin"]').click();

      await expect(page.locator('[data-test-id="toaster-message"]')).toContainText('Your email and/or password are incorrects');
      await page.screenshot({path: './screenshots/invalidLogin.png'});
    });

    test('should display warnings message when empty login details provided', async ({ page }) => {

 
      await page.locator('[data-test-id="input-email"]').getByRole('textbox').click();
      await page.locator('[data-test-id="input-email"]').getByRole('textbox').fill(TEST_DATA.empty.username);
      await page.locator('[data-test-id="input-password"]').getByRole('textbox').click();
      await expect(page.locator('(//div[contains(text(),\'Required\')])[1]')).toContainText('Required');
      await page.locator('[data-test-id="input-password"]').getByRole('textbox').fill(TEST_DATA.empty.password);
      await page.locator('[data-test-id="signin"]').click();
      await expect(page.locator('(//div[contains(text(),\'Required\')])[2]')).toContainText('Required');
      
      await page.screenshot({path: './screenshots/warningsLogin.png'});
    });

    test('should display warnings message when incomplete login details provided', async ({ page }) => {

     
      await page.locator('[data-test-id="input-email"]').getByRole('textbox').click();
      await page.locator('[data-test-id="input-email"]').getByRole('textbox').fill(TEST_DATA.incomplete.username);
      await page.locator('[data-test-id="input-password"]').getByRole('textbox').click();
      await expect(page.locator('(//div[contains(text(),\'Email not valid\')])[1]')).toContainText('Email not valid');
      await page.locator('[data-test-id="input-password"]').getByRole('textbox').fill(TEST_DATA.incomplete.password);
      await page.locator('[data-test-id="signin"]').click();
      await expect(page.locator('(//div[contains(text(),\'Password too short\')])[1]')).toContainText('Password too short');
      
      await page.screenshot({path: './screenshots/warningsIncompleteLogin.png'});
    });

    test('should logout user after successful login', async ({ page }) => {

   
      await page.locator('[data-test-id="input-email"]').getByRole('textbox').click();
      await page.locator('[data-test-id="input-email"]').getByRole('textbox').fill(TEST_DATA.valid.username);
      await page.locator('[data-test-id="input-password"]').getByRole('textbox').click();
      await page.locator('[data-test-id="input-password"]').getByRole('textbox').fill(TEST_DATA.valid.password);
      await page.getByRole('button', { name: 'toggle password visibility' }).click();
      await page.locator('[data-test-id="signin"]').click();
      await expect(page.locator('[data-test-id="header-menu"]')).toContainText('Qa JULES');
      await page.locator('//div[contains(text(),\'Qa JULES\')]').click();
      await page.locator('[data-test-id="header-logout"]').click();
      await expect(  page.locator('[data-test-id="input-email"]').getByRole('textbox') ).toBeVisible();
      await page.screenshot({path: './screenshots/loginPageAfterLogout.png'});


    });
  });

 
 
 