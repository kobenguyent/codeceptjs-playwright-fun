/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type loginPage = typeof import('./pages/Login');
type CDPHelper = import('./helpers/CDPHelper');
type ExpectHelper = import('codeceptjs-expect');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage }
  interface Methods extends Playwright, CDPHelper, OpenAI, ExpectHelper {}
  interface I extends ReturnType<steps_file>, WithTranslation<CDPHelper>, WithTranslation<OpenAI>, WithTranslation<ExpectHelper> {}
  namespace Translation {
    interface Actions {}
  }
}
