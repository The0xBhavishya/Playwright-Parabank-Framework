import {test} from "@playwright/test";
import Login from "../../pages/login.page";
import CreateAccount from "../../pages/createAccount.page";
import data from "../../testdata/accountTypeData.json";

for (const acc of data) {
  test(`TS13 Account Type ${acc.accountType}`, async({page}) =>{
   const login = new Login(page);
   const createAccount =new CreateAccount(page);
   await login.navigate();
   await login.loginUser();
   await createAccount.openNewAccountLink.click();
   await createAccount.accountType.selectOption(acc.accountType);
   await createAccount.fromAccount.selectOption({ index: 0});
   await createAccount.openAccountBtn.click();
   await createAccount.verifyAccountCreated();

    const accountNo =await createAccount.getAccountNumber();
    console.log("Account Number : ",accountNo);
    await createAccount.screenshot();
    // await page.screenshot({path: 'screenshots/TS13.png'});
    await login.logout();
    });
}