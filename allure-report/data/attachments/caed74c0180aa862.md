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
Received: 404
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { getCustomerId } from "../../utils/customerUtils";
  3  | import loginData from "../../utils/login.json";
  4  | 
  5  | test("TS-04 Account Type & Balance Validation", async ({ request }) => {
  6  | 
  7  |     const customerId =await getCustomerId(request,loginData.username,loginData.password);
  8  |     console.log("Customer ID :", customerId);
  9  |     const url =`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`;
  10 |     console.log("URL :", url);
  11 |     const response =await request.get(url);
  12 |     console.log( "Status Code :", response.status());
  13 |     const body =await response.text();
  14 |     console.log("Response Body :");
  15 |     console.log(body);
> 16 |     expect( response.status()).toBe(200);
     |                                ^ Error: expect(received).toBe(expected) // Object.is equality
  17 |     expect(body).toContain("<type>");
  18 |     expect(body).toContain("<balance>");
  19 | 
  20 |     expect(body).toContain("<customerId>");
  21 | 
  22 |     const balances = [...body.matchAll(
  23 |             /<balance>(.*?)<\/balance>/g
  24 |         )];
  25 | 
  26 |     balances.forEach(balance => {
  27 | 
  28 |         expect(
  29 |             isNaN(
  30 |                 Number(balance[1])
  31 |             )
  32 |         ).toBeFalsy();
  33 | 
  34 |     });
  35 | 
  36 | });
```