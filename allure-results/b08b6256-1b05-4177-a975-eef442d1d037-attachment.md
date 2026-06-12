# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\TS01_accountCreation.spec.ts >> TS-01 Account Creation
- Location: tests\ui\TS01_accountCreation.spec.ts:5:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('a').filter({ hasText: 'Open New Account' }).first()

```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | import data from "../testdata/createAccount.json";
  3  | 
  4  | class CreateAccount {
  5  | 
  6  |     page: any;
  7  |     openNewAccountLink: any;
  8  |     accountType: any;
  9  |     fromAccount: any;
  10 |     openAccountBtn: any;
  11 |     successMsg: any;
  12 |     accountNumber: any;
  13 | 
  14 |     constructor(page) {
  15 |         this.page = page;
  16 |         this.openNewAccountLink =page.locator('a').filter({hasText: 'Open New Account' }).first();
  17 |         this.accountType =page.locator('#type');
  18 |         this.fromAccount = page.locator('#fromAccountId');this.openAccountBtn =page.locator('input[value="Open New Account"]');
  19 |         this.successMsg =page.locator('#openAccountResult');
  20 |         this.accountNumber =page.locator('#newAccountId');
  21 |     }
  22 | 
  23 |   async createAccount(accountType:any)  {
> 24 |     await this.openNewAccountLink.click();
     |                                   ^ Error: locator.click: Target page, context or browser has been closed
  25 |     await this.accountType.selectOption(accountType);
  26 |     await this.fromAccount.selectOption({index:0});
  27 |     await this.openAccountBtn.click();
  28 | }
  29 | 
  30 |     async verifyAccountCreated() {
  31 |        await expect(this.successMsg).toContainText('Congratulations');
  32 |         await expect(this.accountNumber).toBeVisible();
  33 |     }
  34 | 
  35 |     async getAccountNumber() {
  36 |         const accNo =await this.accountNumber.innerText();
  37 |         console.log("Generated Account Number : ",accNo);
  38 |         expect(accNo.trim().length).toBeGreaterThan(0);
  39 |         return accNo;
  40 |     }
  41 | 
  42 |     async screenshot() {
  43 |         await this.page.screenshot({
  44 |             path: 'TS01_AccountCreation.png',
  45 |             fullPage: true
  46 |         });
  47 |     }
  48 | }
  49 | 
  50 | export default CreateAccount;
```