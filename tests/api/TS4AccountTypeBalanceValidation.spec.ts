import {test,expect} from "@playwright/test";
import {getCustomerId} from "../../utilis/customerUtils";
import loginData from "../../testdata/login.json";

test("Account Type & Balance Validation", async ({request})=>{

    const customerId =await getCustomerId(request,loginData.username,loginData.password);
    const response =await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
    const body =await response.text();
    expect(response.status()).toBe(200);

    expect(body).toContain(`<customerId>${customerId}</customerId>`);
    
    expect(body.includes("<type>CHECKING</type>") ||body.includes("<type>SAVINGS</type>")).toBeTruthy();
    const balance =body.match(/<balance>(.*?)<\/balance>/)?.[1];
    expect(isNaN(Number(balance))).toBeFalsy();

});