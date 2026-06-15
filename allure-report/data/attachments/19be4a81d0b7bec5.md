# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\TS12 InvalidCID.spec.ts >> TS12 Invalid Customer ID
- Location: tests\api\TS12 InvalidCID.spec.ts:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 400
Received: 429
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | 
  3  | test('TS12 Invalid Customer ID', async ({request})=>{
  4  |     let r1 = await request.get('https://parabank.parasoft.com/parabank/services/bank/customers/999999999/accounts' );
  5  |     console.log("Status :", r1.status());
  6  |     let body =await r1.text();
> 7  |     expect(r1.status()).toBe(400);
     |                         ^ Error: expect(received).toBe(expected) // Object.is equality
  8  |     console.log(body);
  9  |     expect(body).toContain('Could not find customer');
  10 | });
```