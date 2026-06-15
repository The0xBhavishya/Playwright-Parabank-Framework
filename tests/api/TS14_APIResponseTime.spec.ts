import {test,expect} from "@playwright/test";
import {getCustomerId} from "../../utilis/customerUtils";
import loginData from "../../testdata/login.json";

test('TS14 API Response Time', async ({request}) =>{
    let startTime =Date.now();
    const customerId = await getCustomerId(request, loginData.username, loginData.password);
    let r1 = await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
    let endTime =Date.now();
    let responseTime = endTime -startTime;
    console.log("Response Time :",responseTime );
    expect(r1.status()).toBe(200);
    expect(responseTime).toBeLessThan(20000);
});