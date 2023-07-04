import { defineConfig, devices } from '@playwright/test'

const DEV_SERVER = 'http://127.0.0.1:3000' as const

/**
 * Playwright [configuration](https://playwright.dev/docs/test-configuration)
 */
const playwrightConfig = defineConfig({
    testDir: './e2e',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',

    use: {
        baseURL: DEV_SERVER,
        trace: 'on-first-retry',
    },

    webServer: {
        command: 'pnpm dev',
        url: DEV_SERVER,
        reuseExistingServer: !process.env.CI,
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },

        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },

        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },

        // device tests
        // {
        //   name: 'Mobile Chrome',
        //   use: { ...devices['Pixel 5'] },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: { ...devices['iPhone 12'] },
        // },
    ],
})

export default playwrightConfig
