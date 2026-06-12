# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\TS08_BeforeAfterBalanceComparison.spec.ts >> TS-08 Before After Balance Comparison
- Location: tests\api\TS08_BeforeAfterBalanceComparison.spec.ts:7:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('text=Transfer Funds')

```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | import data from "../testdata/transferFunds.json";
  3  | 
  4  | class TransferFunds {
  5  | 
  6  |     page: any;
  7  |     transferFundsLink: any;
  8  |     amount: any;
  9  |     fromAccount: any;
  10 |     toAccount: any;
  11 |     transferBtn: any;
  12 |     successMsg: any;
  13 | 
  14 |     constructor(page) {
  15 |         this.page = page;
  16 |         this.transferFundsLink =page.locator('text=Transfer Funds');
  17 |         this.amount =page.locator('#amount');
  18 |         this.fromAccount =page.locator('#fromAccountId');
  19 |         this.toAccount =page.locator('#toAccountId');
  20 |         this.transferBtn =page.locator('input[value="Transfer"]');
  21 |         this.successMsg =page.locator('#showResult');
  22 |     }
  23 | 
  24 |     async transferMoney() {
> 25 |          await this.transferFundsLink.click();
     |                                       ^ Error: locator.click: Target page, context or browser has been closed
  26 |          await this.amount.fill(data.amount);
  27 |          
  28 |         await this.fromAccount.selectOption({index: 0});
  29 |         await this.toAccount.selectOption({index:1});
  30 | 
  31 |         await this.transferBtn.click();
  32 |     }
  33 | 
  34 |     async verifyTransfer() {
  35 |          await expect(this.page).toHaveURL(/transfer/);
  36 |           await expect(this.successMsg).toContainText('Transfer Complete');
  37 |     }
  38 | 
  39 |     async screenshot() {
  40 |           await this.page.screenshot({
  41 |             path: 'TS06TFunds.png' });
  42 |     }
  43 | }
  44 | 
  45 | export default TransferFunds;
```