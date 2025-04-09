import { test, expect } from '@playwright/test';
import  TEST_DATA  from '../test-data/userinput.json';


for(const userInput of TEST_DATA) {
 
  test.skip( ` Test ${userInput.messageDisplayed}`,async ({ page }) => {

    await page.goto('https://demo.haroldwaste.com/');
      await page.locator('[data-test-id="input-email"]').getByRole('textbox').click();
      await page.locator('[data-test-id="input-email"]').getByRole('textbox').fill(userInput.username);
      await page.locator('[data-test-id="input-password"]').getByRole('textbox').click();
      await page.locator('[data-test-id="input-password"]').getByRole('textbox').fill(userInput.password);
    
      await page.locator('[data-test-id="signin"]').click();

      await expect ( page.locator('[data-test-id="toaster-message"]')).toContain(userInput.messageDisplayed);

    
    });
}