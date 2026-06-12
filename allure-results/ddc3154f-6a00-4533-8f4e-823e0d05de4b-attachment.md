# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\TS13JsonDriven.spec.ts >> TS13 Account Type 1
- Location: tests\ui\TS13JsonDriven.spec.ts:7:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('#newAccountId')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#newAccountId')
    14 × locator resolved to <a href="" id="newAccountId"></a>
       - unexpected value "hidden"

```

```yaml
- link:
  - /url: admin.htm
  - img
- link "ParaBank":
  - /url: index.htm
  - img "ParaBank"
- paragraph: Experience the difference
- list:
  - listitem: Solutions
  - listitem:
    - link "About Us":
      - /url: about.htm
  - listitem:
    - link "Services":
      - /url: services.htm
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
  - listitem:
    - link "Admin Page":
      - /url: admin.htm
- list:
  - listitem:
    - link "home":
      - /url: index.htm
  - listitem:
    - link "about":
      - /url: about.htm
  - listitem:
    - link "contact":
      - /url: contact.htm
- paragraph: Welcome John Smith
- heading "Account Services" [level=2]
- list:
  - listitem:
    - link "Open New Account":
      - /url: openaccount.htm
  - listitem:
    - link "Accounts Overview":
      - /url: overview.htm
  - listitem:
    - link "Transfer Funds":
      - /url: transfer.htm
  - listitem:
    - link "Bill Pay":
      - /url: billpay.htm
  - listitem:
    - link "Find Transactions":
      - /url: findtrans.htm
  - listitem:
    - link "Update Contact Info":
      - /url: updateprofile.htm
  - listitem:
    - link "Request Loan":
      - /url: requestloan.htm
  - listitem:
    - link "Log Out":
      - /url: logout.htm
- heading "Error!" [level=1]
- paragraph: An internal error has occurred and has been logged.
- list:
  - listitem:
    - link "Home":
      - /url: index.htm
    - text: "|"
  - listitem:
    - link "About Us":
      - /url: about.htm
    - text: "|"
  - listitem:
    - link "Services":
      - /url: services.htm
    - text: "|"
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
    - text: "|"
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
    - text: "|"
  - listitem:
    - link "Forum":
      - /url: http://forums.parasoft.com/
    - text: "|"
  - listitem:
    - link "Site Map":
      - /url: sitemap.htm
    - text: "|"
  - listitem:
    - link "Contact Us":
      - /url: contact.htm
- paragraph: © Parasoft. All rights reserved.
- list:
  - listitem: "Visit us at:"
  - listitem:
    - link "www.parasoft.com":
      - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import {expect,Page} from "@playwright/test";
  2  | import data from "../testdata/createAccount.json";
  3  | 
  4  | class CreateAccount {
  5  | 
  6  |     page: Page;
  7  |     openNewAccountLink: any;
  8  |     accountType: any;
  9  |     fromAccount: any;
  10 |     openAccountBtn: any;
  11 |     successMsg: any;
  12 |     accountNumber: any;
  13 | 
  14 |     constructor(page:Page) {
  15 |         this.page = page;
  16 |         this.openNewAccountLink =page.locator('a').filter({hasText: 'Open New Account' }).first();
  17 |         this.accountType =page.locator('#type');
  18 |         this.fromAccount = page.locator('#fromAccountId');this.openAccountBtn =page.locator('input[value="Open New Account"]');
  19 |         this.successMsg =page.locator('#openAccountResult');
  20 |         this.accountNumber =page.locator('#newAccountId');
  21 |     }
  22 | 
  23 |   async createAccount(accountType:any)  {
  24 |     await this.openNewAccountLink.click();
  25 |     await this.accountType.selectOption(accountType);
  26 |     await this.fromAccount.selectOption({index:0});
  27 |     await this.openAccountBtn.click();
  28 | }
  29 | 
  30 |     async verifyAccountCreated() {
  31 |        await expect(this.successMsg).toContainText('Congratulations');
> 32 |         await expect(this.accountNumber).toBeVisible();
     |                                          ^ Error: expect(locator).toBeVisible() failed
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