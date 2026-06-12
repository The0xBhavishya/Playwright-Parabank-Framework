import {test,expect} from "@playwright/test";
import Login from "../../pages/login.page";
import CreateAccount from "../../pages/createAccount.page";

test('TS-02,Congratulations Message Validation', async ({page}) => {
    const login = new Login(page);
    const createAccount =new CreateAccount(page);
    await login.navigate();
    await login.loginUser();
    await createAccount.createAccount('0');
    await expect(page.locator('#openAccountResult')).toContainText('Congratulations, your account is now open.');
    await expect(page.locator('#newAccountId') ).toBeVisible();
    await page.screenshot(
        {path: 'TS02_MessageValidation.png',fullPage: true }
    );
    await login.logout();
});