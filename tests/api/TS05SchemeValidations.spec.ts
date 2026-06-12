import {test,expect} from "@playwright/test";
import {getCustomerId} from "../../utilis/customerUtils";
import loginData from "../../testdata/login.json";

test('TS-05 Schema Validation', async({request}) => {
    const customerId =await getCustomerId(request,loginData.username, loginData.password);
    const response =await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
    const body =await response.text();
    expect(response.status()).toBe(200);
    expect(body).toContain('<id>');
    expect(body).toContain('<customerId>');
    expect(body).toContain('<type>');
    expect(body).toContain('<balance>');
});