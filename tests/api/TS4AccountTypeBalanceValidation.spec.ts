import {test, expect} from "@playwright/test";
import {getCustomerId} from "../../utilis/customerUtils";
import loginData from "../../testdata/login.json";

test("Account Type & Balance Validation", async ({request}) =>{
    const CUSTOMERId = await getCustomerId(request, loginData.username, loginData.password);

 const response = await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${CUSTOMERId}/accounts`
    );
    const body = await response.json();
    console.log(body)
    expect(response.status()).toBe(200);
    expect(body[0].customerId).toBe(CUSTOMERId);
    console.log("account type : ",body[0].type);
    expect(body[0].type === "CHECKING" || body[0].type === "SAVINGS").toBeTruthy(); 
    expect(isNaN(Number(body[0].balance))).toBeFalsy();
});