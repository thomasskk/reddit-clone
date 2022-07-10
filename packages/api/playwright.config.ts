import { devices, PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  testDir: 'src/__test__/e2e',
  timeout: 30000,
  globalSetup: 'src/__test__/e2e/global-setup.ts',
  use: {
    trace: {
      screenshots: true,
      mode: process.env.CI ? 'off' : 'on',
      snapshots: true,
    },
    contextOptions: {},
    headless: true,
    baseURL: process.env.HOST,
    viewport: {
      height: 1080,
      width: 1920,
    },
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
  ],
}
export default config
