# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\TS01_accountCreation.spec.ts >> TS-01 Account Creation
- Location: tests\ui\TS01_accountCreation.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('a').filter({ hasText: 'Open New Account' }).first()

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm
    - generic [ref=e27]:
      - generic [ref=e28]:
        - heading "Customer Login" [level=2] [ref=e29]
        - generic [ref=e30]:
          - generic [ref=e31]:
            - paragraph [ref=e32]: Username
            - textbox [active] [ref=e34]
            - paragraph [ref=e35]: Password
            - textbox [ref=e37]
            - button "Log In" [ref=e39] [cursor=pointer]
          - paragraph [ref=e40]:
            - link "Forgot login info?" [ref=e41] [cursor=pointer]:
              - /url: lookup.htm
          - paragraph [ref=e42]:
            - link "Register" [ref=e43] [cursor=pointer]:
              - /url: register.htm
      - generic [ref=e44]:
        - heading "Error!" [level=1] [ref=e45]
        - paragraph [ref=e46]: An internal error has occurred and has been logged.
  - generic [ref=e48]:
    - list [ref=e49]:
      - listitem [ref=e50]:
        - link "Home" [ref=e51] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e52]:
        - link "About Us" [ref=e53] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e54]:
        - link "Services" [ref=e55] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e56]:
        - link "Products" [ref=e57] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e58]:
        - link "Locations" [ref=e59] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e60]:
        - link "Forum" [ref=e61] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e62]:
        - link "Site Map" [ref=e63] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e64]:
        - link "Contact Us" [ref=e65] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e66]: © Parasoft. All rights reserved.
    - list [ref=e67]:
      - listitem [ref=e68]: "Visit us at:"
      - listitem [ref=e69]:
        - link "www.parasoft.com" [ref=e70] [cursor=pointer]:
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
> 24 |     await this.openNewAccountLink.click();
     |                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
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