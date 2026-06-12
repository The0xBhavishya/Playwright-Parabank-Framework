# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\TS13JsonDriven.spec.ts >> TS13 Account Type 1
- Location: tests\ui\TS13JsonDriven.spec.ts:7:7

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('a').filter({ hasText: 'Open New Account' }).first()

```

# Test source

```ts
  1  | import {test} from "@playwright/test";
  2  | import Login from "../../pages/login.page";
  3  | import CreateAccount from "../../pages/createAccount.page";
  4  | import data from "../../testdata/accountTypeData.json";
  5  | 
  6  | for (const acc of data) {
  7  |   test(`TS13 Account Type ${acc.accountType}`, async ({ page }) => {
  8  |    const login = new Login(page);
  9  |    const createAccount =new CreateAccount(page);
  10 |    await login.navigate();
  11 |    await login.loginUser();
> 12 |    await createAccount.openNewAccountLink.click();
     |                                           ^ Error: locator.click: Target page, context or browser has been closed
  13 |    await createAccount.accountType.selectOption(acc.accountType);
  14 |    await createAccount.fromAccount.selectOption({ index: 0});
  15 |    await createAccount.openAccountBtn.click();
  16 |    await createAccount.verifyAccountCreated();
  17 | 
  18 |     const accountNo =await createAccount.getAccountNumber();
  19 |     console.log("Account Number : ",accountNo);
  20 |     await createAccount.screenshot();
  21 |     await login.logout();
  22 |     });
  23 | }
```