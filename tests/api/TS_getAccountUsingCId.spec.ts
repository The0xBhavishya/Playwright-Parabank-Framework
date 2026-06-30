import { test, expect } from "@playwright/test";
import { getCustomerId } from "../../utilis/customerUtils";
import loginData from "../../testdata/login.json";

test("Get Account using Cid", async ({request}) => {
    const customerId = await getCustomerId(request,loginData.username,loginData.password);
    const response = await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`,
        {
            headers: {
                Accept: "application/json"
            }
        }
    );
    const body = await response.json();  
    console.log(body[0].id);
    console.log(body[0].customerId)
    expect(response.status()).toBe(200);
});