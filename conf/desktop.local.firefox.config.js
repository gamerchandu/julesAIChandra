import { defineConfig } from '@playwright/test';
import baseConfig from '../playwright.config';

export default defineConfig({
    ...baseConfig,
    testDir: '../tests',
    use: {
        ...baseConfig.use,
        browserName: 'firefox',
        headless: false,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
   
    },
});