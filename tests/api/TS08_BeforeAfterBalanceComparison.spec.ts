import {test,expect} from "@playwright/test";
import Login from "../../pages/login.page";
import TransferFunds from "../../pages/transferFunds.page";
import {getCustomerId} from "../../utilis/customerUtils";
import loginData from "../../testdata/login.json";

test('TS-08 Before After Balance Comparison', async({page,request}) =>{

    const customerId =await getCustomerId(request,loginData.username,loginData.password);
    const r1 =await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
    const before =await r1.text();
    console.log("Before Transfer");
    console.log(before);
    const login =new Login(page);
    const transfer =new TransferFunds(page);
    await login.navigate();
    await login.loginUser();
    await transfer.transferMoney();
    await transfer.verifyTransfer();
    
    const r2 =await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
    const after =await r2.text();
    console.log("After Transfer");
    console.log(after);
    expect(before).not.toEqual(after);

    await page.screenshot({path: 'screenshots/TS08.png'});

    await login.logout();
});