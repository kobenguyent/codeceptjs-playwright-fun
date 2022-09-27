import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://github.com',
      show: false,
      browser: 'chromium'
    }
  },
  include: {
    loginPage: './pages/Login.ts',
  },
  name: 'codeceptjs-playwright-fun',
  plugins: {
    reportportal: {
      enabled: false,
      require: '@reportportal/agent-js-codecept',
      token: process.env.RP_TOKEN,
      endpoint: 'https://demo.reportportal.io/api/v1',
      launchName: 'peterngtr_TEST_EXAMPLE',
      projectName: 'peterngtr_personal'
    }
  }
}
