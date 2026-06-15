# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\getAllAccounts.spec.ts >> get accounts
- Location: tests\api\getAllAccounts.spec.ts:4:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 429
```

# Test source

```ts
  1 | import{test,expect}from'@playwright/test';
  2 | import{AccountsApi}from'../../pages/acctapiApi.page';
  3 | 
  4 | test('get accounts',async({request})=>{
  5 | const response=await new AccountsApi(request).getAccounts();
> 6 | expect(response.status()).toBe(200);
    |                           ^ Error: expect(received).toBe(expected) // Object.is equality
  7 | console.log(await response.text());
  8 | });
```