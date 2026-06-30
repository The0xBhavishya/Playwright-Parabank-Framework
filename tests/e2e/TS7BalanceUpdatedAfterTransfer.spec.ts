import {test,expect} from "@playwright/test";
import Login from "../../pages/login.page";
import TransferFunds from "../../pages/transferFunds.page";
import {getCustomerId} from "../../utilis/customerUtils";
import loginData from "../../testdata/login.json";

test('TS07 Balance Updated After Transfer', async ({page,request}) => {
    const login = new Login(page);
    const transfer =new TransferFunds(page);
    await login.navigate();
    await login.loginUser();
    let customerId = await getCustomerId(request,loginData.username,loginData.password);
    
    let beforeResponse = await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
    let beforeBody =await beforeResponse.text();
    console.log( "BEFORE TRANSFER");
    console.log(beforeBody);
    await transfer.transferMoney();
    await transfer.verifyTransfer();
    let afterResponse =await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);

    let afterBody = await afterResponse.text();
    console.log("AFTER TRANSFER");
    console.log(afterBody);
    expect(await transfer.successMsg.textContent()).toContain('Transfer Complete');
    await page.screenshot({path: 'screenshots/TS07.png'});
    await login.logout();
});