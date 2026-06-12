# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\TS09InvalidLogin.spec.ts >> TS-09 Invalid Login
- Location: tests\ui\TS09InvalidLogin.spec.ts:4:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('[name="username"]')

```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | import data from "../../testdata/invalidLogin.json";
  3  | 
  4  | test('TS-09 Invalid Login', async({page})=>{
  5  |     await page.goto('https://parabank.parasoft.com/parabank/index.htm');
> 6  |     await page.locator('[name="username"]').fill(data.username);
     |                                             ^ Error: locator.fill: Target page, context or browser has been closed
  7  |     await page.locator('[name="password"]').fill(data.password);
  8  |     await page.locator('input[value="Log In"]').click();
  9  |     await expect(page.locator('text=The username and password could not be verified.')).toBeVisible();
  10 | 
  11 | });
```