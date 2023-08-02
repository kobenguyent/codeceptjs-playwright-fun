import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './tests/*_test.ts',
  output: './output',
  emptyOutputFolder: true,
  helpers: {
    Playwright: {
      url: 'https://github.com',
      show: false,
      browser: 'chromium'
    },
    CDPHelper: {
      require: './helpers/CDPHelper.ts'
    },
    OpenAI: {
      chunkSize: 8000
    },
    ExpectHelper: {
      require: "codeceptjs-expect"
    }
  },
  include: {
    I: './steps_file.ts',
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
    },
    heal: {
      enabled: false,
    },
    ai: {
      model: 'gpt-3.5-turbo-16k',
      temperature: 0.1,
      html: {
        maxLength: 50000,
        simplify: true,
        minify: true,
        interactiveElements: [
          'a', 'input', 'button', 'select', 'textarea', 'option',
          'm-button', 'm-text-input', 'm-number-input', 'm-text-area',
          'm-form-multiselect', 'm-options-container', 'm-form-checkbox',
          'm-form-date-picker',
          'm-v2-form-field', 'm-v2-radio-button', 'm-v2-checkbox'
        ],
        textElements: ['label', 'h1', 'h2', 'm-v2-form-label'],
        allowedAttrs: [
          'id', 'for', 'class', 'name', 'type', 'value', 'tabindex', 'label', 'role',
          'data-test',
        ],
        allowedRoles: ['button', 'checkbox', 'search', 'textbox', 'tab'],
      },
    },
    allure: {
      enabled: true,
      require: "allure-codeceptjs",
    },
    retryFailedStep: {
      enabled: false,
      retries: 3
    }
  }
}
