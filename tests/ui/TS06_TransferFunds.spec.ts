import {test} from "@playwright/test";
import Login from "../../pages/login.page";
import TransferFunds from "../../pages/transferFunds.page";

test('TS06 Successful Fund Transfer',async ({page})=>{
    const login =new Login(page);
    const transfer =new TransferFunds(page); 
    await login.navigate();
    await login.loginUser();
    await transfer.transferMoney();
    await transfer.verifyTransfer();
    await transfer.screenshot();
    await login.logout();
});