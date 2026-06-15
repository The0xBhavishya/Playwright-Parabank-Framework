# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\TS05SchemeValidations.spec.ts >> TS-05 Schema Validation
- Location: tests\api\TS05SchemeValidations.spec.ts:5:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | import {getCustomerId} from "../../utilis/customerUtils";
  3  | import loginData from "../../testdata/login.json";
  4  | 
  5  | test('TS-05 Schema Validation', async ({request}) => {
  6  |     const customerId =await getCustomerId(request,loginData.username, loginData.password);
  7  |     const response =await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
  8  |     const body =await response.text();
> 9  |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  10 |     expect(body).toContain('<id>');
  11 |     expect(body).toContain('<customerId>');
  12 |     expect(body).toContain('<type>');
  13 |     expect(body).toContain('<balance>');
  14 | });
```