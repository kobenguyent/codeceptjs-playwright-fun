const { I, loginPage} = inject();

xFeature('login');

Scenario('Incorrect username or password.', () => {
    I.amOnPage('/');
    I.click(loginPage.text.signInBtn, '//html/body/div[1]/header');
    I.fillField(loginPage.text.usernameTbx, 'something@totest.com');
    I.fillField(loginPage.text.passwordTbx, secret('123456'));
    I.click(loginPage.text.signInBtn);
    I.see('Incorrect username or password.', '.flash-error');
});
