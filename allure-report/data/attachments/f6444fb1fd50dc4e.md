# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\TS-04AccountTypeBalanceValidation.spec.ts >> TS-04 Account Type & Balance Validation
- Location: tests\api\TS-04AccountTypeBalanceValidation.spec.ts:5:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 429
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | import {getCustomerId} from "../../utilis/customerUtils";
  3  | import loginData from "../../testdata/login.json";
  4  | 
  5  | test("TS-04 Account Type & Balance Validation", async ({request})=>{
  6  | 
  7  |     const customerId =await getCustomerId(request,loginData.username,loginData.password);
  8  |     const response =await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
  9  |     const body =await response.text();
> 10 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  11 | 
  12 |     expect(body).toContain(`<customerId>${customerId}</customerId>`);
  13 |  
  14 | 
  15 |     
  16 |     // expect(body).toContain(`${customerId}`);
  17 |     // const customderIdd = (await response.json()).customerId;
  18 |     // console.log("Customer ID from response:", customderIdd);
  19 |     
  20 |     expect(body.includes("<type>CHECKING</type>") ||body.includes("<type>SAVINGS</type>")).toBeTruthy();
  21 |     const balance =body.match(/<balance>(.*?)<\/balance>/)?.[1];
  22 |     expect(isNaN(Number(balance))).toBeFalsy();
  23 | 
  24 | });
```