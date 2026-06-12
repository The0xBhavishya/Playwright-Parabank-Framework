import {test} from "@playwright/test";
import Login from "../../pages/login.page";
import CreateAccount from "../../pages/createAccount.page";

test('TS-01 Account Creation', async ({page})=>{
    const login = new Login(page);
    const createAccount =new CreateAccount(page);
    await login.navigate();
    await login.loginUser();
    
    await createAccount.createAccount('0');
    await createAccount.verifyAccountCreated();
    const checkingAccount =await createAccount.getAccountNumber();
    console.log(  "Account Number : ", checkingAccount);
    await createAccount.screenshot();

    await createAccount.createAccount('1');
    await createAccount.verifyAccountCreated();
    const savingAccount =await createAccount.getAccountNumber();
    console.log( "Saving Account : ",savingAccount);
    await createAccount.screenshot();
    await login.logout();
});






