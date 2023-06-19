import { defineConfig, devices } from '@playwright/test';

export default defineConfig({  
  timeout: 5 * 60 * 1000,
  testDir: './tests',  
  fullyParallel: true,  
  forbidOnly: !!process.env.CI,  
  retries: process.env.CI ? 2 : 0,  
  workers: process.env.CI ? 1 : undefined,  
  reporter: 'html',  
  use: {    
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chrome:latest:Windows 11@lambdatest",     
    },

    /* Comment the above lines & Uncomment the below lines to run on local */
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },   
  ],
});