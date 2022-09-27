[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/peternguyew)

# Introduction

This project demonstrates how to drive your E2E tests with CodeceptJS - Playwright.

* Tests are written in TS
* CI/CD with Github Actions
* Page Object Model is applied

## How to use

This is done using CodeceptJS <https://codecept.io/>

### Tech

This test uses a number of open source projects to work properly:

* <https://nodejs.org/en/> - evented I/O for the backend
* <https://codecept.io/> - CodeceptJS
* <https://github.com> - E2E application that is used in this project

### Installation

This requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies.

```sh
cd codeceptjs-playwright-fun
npm i
```

### How to trigger test

To run all tests just simply type

```sh
npm test
```

Example output

```sh
CodeceptJS v3.3.5 #StandWithUkraine
Using test root "/Users/tamara-thanh/Desktop/codeceptjs-playwright-fun"

login --
  Incorrect username or password.
    I am on page "/"
    I click "Sign in", "//html/body/div[1]/header"
    I fill field "Username or email address", "something@totest.com"
    I fill field "Password", *****
    I click "Sign in"
    I see "Incorrect username or password.", ".flash-error"
  ✔ OK in 9469ms


  OK  | 1 passed   // 10s
```
### Reportportal

Updating the configurations accordingly.

```
  plugins: {
    reportportal: {
      enabled: false, // enabling this plugin by setting this to true
      require: '@reportportal/agent-js-codecept',
      token: process.env.RP_TOKEN,// provide your reportportal token
      endpoint: 'https://demo.reportportal.io/api/v1',
      launchName: 'peterngtr_TEST_EXAMPLE',
      projectName: 'peterngtr_personal'
    }
  }
```

After the test execution

![Report Portal](http://g.recordit.co/WwhyMKJsip.gif)
