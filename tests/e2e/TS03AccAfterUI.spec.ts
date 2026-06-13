import {test,expect} from "@playwright/test";
import Login from "../../pages/login.page";
import CreateAccount from "../../pages/createAccount.page";
import {getCustomerId} from "../../utilis/customerUtils";
import loginData from "../../testdata/login.json";

test('TS03', async({page,request}) =>{
    const login =new Login(page);
    const createAccount =new CreateAccount(page);
    await login.navigate();
    await login.loginUser();
    await createAccount.createAccount('0');
    await createAccount.verifyAccountCreated();
    const accountNo =await createAccount.getAccountNumber();
    console.log("Created Account: ",accountNo);

    let customerId = await getCustomerId(request,loginData.username,loginData.password);
    let r1 =await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
    expect(r1.status()).toBe(200);
    let body =await r1.text();
    console.log("API Response : ",body);

    expect(body).toContain(accountNo);
    console.log("Account Found : ",body.includes(accountNo));
    await page.screenshot({path: 'screenshots/TS03.png'});
    await login.logout();
});