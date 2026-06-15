# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\TS07_BalanceUpdatedAfterTransfer.spec.ts >> TS07 Balance Updated After Transfer
- Location: tests\e2e\TS07_BalanceUpdatedAfterTransfer.spec.ts:7:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://parabank.parasoft.com/parabank/index.htm", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0
    - generic [ref=e27]:
      - generic [ref=e28]:
        - heading "Customer Login" [level=2] [ref=e29]
        - generic [ref=e30]:
          - generic [ref=e31]:
            - paragraph [ref=e32]: Username
            - textbox [ref=e34]
            - paragraph [ref=e35]: Password
            - textbox [ref=e37]
            - button "Log In" [ref=e39] [cursor=pointer]
          - paragraph [ref=e40]:
            - link "Forgot login info?" [ref=e41] [cursor=pointer]:
              - /url: lookup.htm;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0
          - paragraph [ref=e42]:
            - link "Register" [ref=e43] [cursor=pointer]:
              - /url: register.htm;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0
      - generic [ref=e44]:
        - list [ref=e46]:
          - listitem [ref=e47]: ATM Services
          - listitem [ref=e48]:
            - link "Withdraw Funds" [ref=e49] [cursor=pointer]:
              - /url: services/ParaBank;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0?wsdl
          - listitem [ref=e50]:
            - link "Transfer Funds" [ref=e51] [cursor=pointer]:
              - /url: services/ParaBank;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0?wsdl
          - listitem [ref=e52]:
            - link "Check Balances" [ref=e53] [cursor=pointer]:
              - /url: services/ParaBank;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0?wsdl
          - listitem [ref=e54]:
            - link "Make Deposits" [ref=e55] [cursor=pointer]:
              - /url: services/ParaBank;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0?wsdl
        - list [ref=e56]:
          - listitem [ref=e57]: Online Services
          - listitem [ref=e58]:
            - link "Bill Pay" [ref=e59] [cursor=pointer]:
              - /url: services/bank;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0?_wadl&_type=xml
          - listitem [ref=e60]:
            - link "Account History" [ref=e61] [cursor=pointer]:
              - /url: services/bank;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0?_wadl&_type=xml
          - listitem [ref=e62]:
            - link "Transfer Funds" [ref=e63] [cursor=pointer]:
              - /url: services/bank;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0?_wadl&_type=xml
        - paragraph [ref=e64]:
          - link "Read More" [ref=e65] [cursor=pointer]:
            - /url: services.htm;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0
        - heading "Latest News" [level=4] [ref=e66]
        - list [ref=e67]:
          - listitem [ref=e68]: 06/13/2026
          - listitem [ref=e69]:
            - link "ParaBank Is Now Re-Opened" [ref=e70] [cursor=pointer]:
              - /url: news.htm;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0#6
          - listitem [ref=e71]:
            - link "New! Online Bill Pay" [ref=e72] [cursor=pointer]:
              - /url: news.htm;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0#5
          - listitem [ref=e73]:
            - link "New! Online Account Transfers" [ref=e74] [cursor=pointer]:
              - /url: news.htm;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0#4
        - paragraph [ref=e75]:
          - link "Read More" [ref=e76] [cursor=pointer]:
            - /url: news.htm;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0
  - generic [ref=e78]:
    - list [ref=e79]:
      - listitem [ref=e80]:
        - link "Home" [ref=e81] [cursor=pointer]:
          - /url: index.htm;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0
        - text: "|"
      - listitem [ref=e82]:
        - link "About Us" [ref=e83] [cursor=pointer]:
          - /url: about.htm;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0
        - text: "|"
      - listitem [ref=e84]:
        - link "Services" [ref=e85] [cursor=pointer]:
          - /url: services.htm;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0
        - text: "|"
      - listitem [ref=e86]:
        - link "Products" [ref=e87] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e88]:
        - link "Locations" [ref=e89] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e90]:
        - link "Forum" [ref=e91] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e92]:
        - link "Site Map" [ref=e93] [cursor=pointer]:
          - /url: sitemap.htm;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0
        - text: "|"
      - listitem [ref=e94]:
        - link "Contact Us" [ref=e95] [cursor=pointer]:
          - /url: contact.htm;jsessionid=5D980E8DC17817A25F0CAD352BF03FD0
    - paragraph [ref=e96]: © Parasoft. All rights reserved.
    - list [ref=e97]:
      - listitem [ref=e98]: "Visit us at:"
      - listitem [ref=e99]:
        - link "www.parasoft.com" [ref=e100] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import {Page} from "@playwright/test";
  2  | import data from "../testdata/login.json";
  3  | 
  4  | class Login {
  5  | 
  6  |      page: Page;
  7  |     username: any;
  8  |     password: any;
  9  |     loginBtn: any;
  10 |     logoutBtn: any;
  11 |     constructor(page:Page) {
  12 |         this.page = page;
  13 |         this.username = page.locator('[name="username"]');
  14 |         this.password = page.locator('[name="password"]');
  15 |         this.loginBtn = page.locator('input[value="Log In"]');
  16 |         this.logoutBtn = page.locator('text=Log Out');
  17 |     }
  18 | 
  19 |     async navigate() {
> 20 |         await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
     |                         ^ Error: page.goto: Test timeout of 30000ms exceeded.
  21 |     }
  22 | 
  23 |     async loginUser() {
  24 |         await this.username.fill(data.username);
  25 |         await this.password.fill(data.password);
  26 |         await this.loginBtn.click();
  27 |     }
  28 | 
  29 | 
  30 | 
  31 |     async screenshot() {
  32 |         await this.page.screenshot ({path: 'screenshots/login_success.png',fullPage: true});
  33 |     }
  34 | 
  35 |     async logout() {
  36 |         await this.logoutBtn.click();
  37 |     }
  38 | }
  39 | 
  40 | export default Login;
```