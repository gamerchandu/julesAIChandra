import { defineConfig } from '@playwright/test';
import  baseConfig  from '../playwright.config.js';

export default defineConfig({
    ...baseConfig,
    testDir: '../tests',
    use : {
        ...baseConfig.use,
        browserName: 'chromium',
        //viewport: { width: 1536, height: 1200 },
        headless: false,
        launchOptions: {
            args: ['--window-size=1920,1040'],
          }
        


    },
});