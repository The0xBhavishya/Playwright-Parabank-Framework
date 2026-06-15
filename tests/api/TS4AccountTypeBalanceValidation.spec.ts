import {test, expect} from "@playwright/test";
import {getCustomerId} from "../../utilis/customerUtils";
import loginData from "../../testdata/login.json";

test("Account Type & Balance Validation", async ({request}) =>{
    const customerId = await getCustomerId(request, loginData.username, loginData.password);
    const response = await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`, {
        headers: {
            Accept: "application/json"
        }
    }
    );
    const body = await response.json();
    expect(response.status()).toBe(200);
    expect(body[0].customerId).toBe(customerId);
    expect(body[0].type === "CHECKING" || body[0].type === "SAVINGS").toBeTruthy();
    expect(isNaN(Number(body[0].balance))).toBeFalsy();
});