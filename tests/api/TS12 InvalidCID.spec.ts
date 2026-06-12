import {test,expect} from "@playwright/test";

test('TS12 Invalid Customer ID', async ({request})=>{
    let r1 = await request.get('https://parabank.parasoft.com/parabank/services/bank/customers/999999999/accounts' );
    console.log("Status :", r1.status());
    let body =await r1.text();
    expect(r1.status()).toBe(400);
    console.log(body);
    expect(body).toContain('Could not find customer');
});