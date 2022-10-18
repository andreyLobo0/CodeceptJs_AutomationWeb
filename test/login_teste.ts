Feature('login');

Scenario('T01 - Login - Given a user on the Login screen, when the correct user and password are entered, he should be able to log into the', ({ I }) => {
    I.amOnPage('/login');
    I.see('Login');
    I.click('#email');
    I.fillField('#email','cartos@admin.com');
    I.click('#password');
    I.fillField('#password','admin');
    I.click('Login');
    I.see('Início')
});
