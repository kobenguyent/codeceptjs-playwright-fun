const { I, loginPage} = inject();
let user;

Feature('login');

Before(async () => {
    user = await I.getUserPerPage(2);
})

Scenario('Incorrect username or password.', () => {
    I.amOnPage('/login');
    I.fillField(loginPage.text.usernameTbx, user.data.data[0].email);
    I.fillField(loginPage.text.passwordTbx, secret('123456'));
    I.click(loginPage.text.signInBtn);
    I.see('Incorrect username or password.', '.flash-error');
});
