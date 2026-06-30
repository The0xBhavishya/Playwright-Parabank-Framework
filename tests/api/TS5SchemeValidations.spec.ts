import {test,expect} from "@playwright/test";
import {getCustomerId} from "../../utilis/customerUtils";
import loginData from "../../testdata/login.json";

test('S5 Schema Validation', async({request}) => {
    const customerId =await getCustomerId(request,loginData.username, loginData.password);
    const response =await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`,{
         headers: {
         Accept: "application/json"
         }
    });
    const body = await response.json();
    console.log(body)
    expect(response.status()).toBe(200);
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('customerId');
    expect(body[0]).toHaveProperty('type');
    expect(body[0]).toHaveProperty('balance');
    console.log("Account ID :", body[0].id);
    console.log("Customer ID :", body[0].customerId);
});