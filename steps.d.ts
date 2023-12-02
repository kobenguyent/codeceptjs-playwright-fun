/// <reference types='codeceptjs' />
// @ts-ignore

type steps_file = typeof import('./steps_file');
type loginPage = typeof import('./pages/Login');
type CDPHelper = import('./helpers/CDPHelper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage }
  interface Methods extends Playwright, CDPHelper, OpenAI, Expect, REST {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
