import { test, expect } from 'playwright/test';
import  TEST_DATA  from '../test-data/input.json';

test.beforeEach(  async( {page}) => {
  
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
        await page.screenshot({path: './screenshots/homePage4.png'});
      
         
});
test.describe(' Dashboard tests', async()=> {

    test('Purchase & Opportunity List overview', async( {page} ) => {
        await expect(page.locator('#root')).toContainText('Purchase & Opportunity list');

        await expect(page.getByText('Summary')).toBeVisible();
        await expect(page.getByRole('tab', { name: 'Confirmed purchases' })).toBeVisible();

        await expect(page.getByText('Total')).toBeVisible;
        await expect(page.getByText('Allocated')).toBeVisible;
        await expect(page.getByText('Planned')).toBeVisible;
        await expect(page.getByText('Booked')).toBeVisible;
        await expect(page.getByText('Loaded')).toBeVisible;

        await page.getByRole('button', { name: 'Sort by' }).click();
        await page.getByText('Creation date (desc)').click();
       
        await page.getByRole('tab', { name: 'Purchase opportunities' }).toBeVisible;
        await page.getByRole('tab', { name: 'Lost & Cancelled purchases' }).toBeVisible;
        await page.getByRole('tab', { name: 'Closed purchases' }).toBeVisible;
    });

    test('Suppliers & Customers overview', async( {page} ) => {
      
       await expect(page.locator('[class="MuiCircularProgress-root.MuiCircularProgress-colorPrimary.MuiCircularProgress-indeterminate"]')).not.toBeAttached();
       
       await expect(page.getByRole('button', { name: 'Sort by' })).not.toBeHidden();
       await page.locator('div[permission="SUPPLIERS,CUSTOMERS,CONTACTS"]').click();
        
        await expect(page.getByText('Suppliers & Sites')).toBeVisible();
        await expect(page.getByText('Customers & Sites')).toBeVisible;
        await expect(page.getByText('Sites')).toBeVisible;

        await page.screenshot({path: './screenshots/Suppliers.png'});
    });

     test('Purchases overview', async( {page} ) => {
      
        await expect(page.locator('[class="MuiCircularProgress-root.MuiCircularProgress-colorPrimary.MuiCircularProgress-indeterminate"]')).not.toBeAttached();
        
        await expect(page.getByRole('button', { name: 'Sort by' })).not.toBeHidden();
        await page.locator('div[permission="OPERATION_TRADING_BUY,WM_SPOT,WM_RECURRING,OFFERS,SOURCING_HUB,PURCHASE_GOALS"]').click();
         
        await expect(page.getByText('Purchases (trading)')).toBeVisible();
        await expect(page.getByText('Purchases (recycling)')).toBeVisible();
        await expect(page.getByText('Contracts & Services')).toBeVisible();
        await expect(page.getByText('Offers')).toBeVisible();
        await expect(page.getByText('Sourcing hub')).toBeVisible();
        await expect(page.getByText('Purchase goals')).toBeVisible();
      
 
         await page.screenshot({path: './screenshots/Purchases.png'});
     });
});