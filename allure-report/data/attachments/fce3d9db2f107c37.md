# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TS02_congratulationValidation.spec.ts >> TS-02,Congratulations Message Validation
- Location: tests\TS02_congratulationValidation.spec.ts:5:5

# Error details

```
Error: locator.selectOption: options[0]: expected object, got undefined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
        - paragraph [ref=e29]: Welcome Bhavishya Goyal
        - heading "Account Services" [level=2] [ref=e30]
        - list [ref=e31]:
          - listitem [ref=e32]:
            - link "Open New Account" [ref=e33] [cursor=pointer]:
              - /url: openaccount.htm
          - listitem [ref=e34]:
            - link "Accounts Overview" [ref=e35] [cursor=pointer]:
              - /url: overview.htm
          - listitem [ref=e36]:
            - link "Transfer Funds" [ref=e37] [cursor=pointer]:
              - /url: transfer.htm
          - listitem [ref=e38]:
            - link "Bill Pay" [ref=e39] [cursor=pointer]:
              - /url: billpay.htm
          - listitem [ref=e40]:
            - link "Find Transactions" [ref=e41] [cursor=pointer]:
              - /url: findtrans.htm
          - listitem [ref=e42]:
            - link "Update Contact Info" [ref=e43] [cursor=pointer]:
              - /url: updateprofile.htm
          - listitem [ref=e44]:
            - link "Request Loan" [ref=e45] [cursor=pointer]:
              - /url: requestloan.htm
          - listitem [ref=e46]:
            - link "Log Out" [ref=e47] [cursor=pointer]:
              - /url: logout.htm
      - generic [ref=e50]:
        - heading "Open New Account" [level=1] [ref=e51]
        - generic [ref=e52]:
          - paragraph [ref=e53]: What type of Account would you like to open?
          - combobox [ref=e54]:
            - option "CHECKING" [selected]
            - option "SAVINGS"
          - paragraph [ref=e55]: A minimum of $100.00 must be deposited into this account at time of opening. Please choose an existing account to transfer funds into the new account.
          - combobox [ref=e56]:
            - option "14010" [selected]
            - option "16563"
            - option "16785"
            - option "17007"
            - option "17229"
            - option "17451"
            - option "22557"
            - option "22668"
            - option "25554"
            - option "25665"
            - option "25776"
            - option "26109"
            - option "26220"
          - button "Open New Account" [ref=e58] [cursor=pointer]
  - generic [ref=e60]:
    - list [ref=e61]:
      - listitem [ref=e62]:
        - link "Home" [ref=e63] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e64]:
        - link "About Us" [ref=e65] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e66]:
        - link "Services" [ref=e67] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e68]:
        - link "Products" [ref=e69] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e70]:
        - link "Locations" [ref=e71] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e72]:
        - link "Forum" [ref=e73] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e74]:
        - link "Site Map" [ref=e75] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e76]:
        - link "Contact Us" [ref=e77] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e78]: © Parasoft. All rights reserved.
    - list [ref=e79]:
      - listitem [ref=e80]: "Visit us at:"
      - listitem [ref=e81]:
        - link "www.parasoft.com" [ref=e82] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | import data from "../utils/createAccount.json";
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
  23 |   async createAccount(accountType) {
  24 |     await this.openNewAccountLink.click();
> 25 |     await this.accountType.selectOption(accountType);
     |                            ^ Error: locator.selectOption: options[0]: expected object, got undefined
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