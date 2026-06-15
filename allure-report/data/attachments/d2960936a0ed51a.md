# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\TS13JsonDriven.spec.ts >> TS13 Account Type 1
- Location: tests\ui\TS13JsonDriven.spec.ts:7:7

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://parabank.parasoft.com/parabank/index.htm", waiting until "load"

```

# Test source

```ts
  1  | import data from "../testdata/login.json";
  2  | 
  3  | class Login {
  4  | 
  5  |      page: any;
  6  |     username: any;
  7  |     password: any;
  8  |     loginBtn: any;
  9  |     logoutBtn: any;
  10 |     constructor(page: any) {
  11 |         this.page = page;
  12 |         this.username = page.locator('[name="username"]');
  13 |         this.password = page.locator('[name="password"]');
  14 |         this.loginBtn = page.locator('input[value="Log In"]');
  15 |         this.logoutBtn = page.locator('text=Log Out');
  16 |     }
  17 | 
  18 |     async navigate() {
> 19 |         await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
     |                         ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  20 |     }
  21 | 
  22 |     async loginUser() {
  23 |         await this.username.fill(data.username);
  24 |         await this.password.fill(data.password);
  25 |         await this.loginBtn.click();
  26 |     }
  27 | 
  28 | 
  29 | 
  30 |     async screenshot() {
  31 |         await this.page.screenshot({
  32 |             path: 'login_success.png',fullPage: true
  33 |         });
  34 |     }
  35 | 
  36 |     async logout() {
  37 |         await this.logoutBtn.click();
  38 |     }
  39 | }
  40 | 
  41 | export default Login;
```