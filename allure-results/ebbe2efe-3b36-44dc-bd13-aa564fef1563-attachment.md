# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\TS14_APIResponseTime.spec.ts >> TS14 API Response Time
- Location: tests\api\TS14_APIResponseTime.spec.ts:5:5

# Error details

```
Error: expect(received).toBeLessThan(expected)

Expected: < 2000
Received:   2501
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | import {getCustomerId} from "../../utilis/customerUtils";
  3  | import loginData from "../../testdata/login.json";
  4  | 
  5  | test('TS14 API Response Time', async ({request}) =>{
  6  |     let startTime =Date.now();
  7  |     const customerId = await getCustomerId(request, loginData.username, loginData.password);
  8  |     let r1 = await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
  9  |     let endTime =Date.now();
  10 |     let responseTime = endTime -startTime;
  11 |     console.log("Response Time :",responseTime );
  12 |     expect(r1.status()).toBe(200);
> 13 |     expect(responseTime).toBeLessThan(2000);
     |                          ^ Error: expect(received).toBeLessThan(expected)
  14 | });
```