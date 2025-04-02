import { defineConfig } from '@playwright/test';
import  baseConfig  from '../playwright.config.js';

export default defineConfig({
    ...baseConfig,
    testDir: '../tests',
    use : {
        ...baseConfig.use,
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
        headless: false,
        channel: 'chrome', 

    },
});