# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\TS10UnauthorizedAccess.spec.ts >> TS-10 Unauthorized Page Access
- Location: tests\ui\TS10UnauthorizedAccess.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_HTTP_RESPONSE_CODE_FAILURE at https://parabank.parasoft.com/parabank/openaccount.htm
Call log:
  - navigating to "https://parabank.parasoft.com/parabank/openaccount.htm", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This page isn’t working" [level=1] [ref=e7]
    - paragraph [ref=e8]: If the problem continues, contact the site owner.
    - generic [ref=e9]: HTTP ERROR 522
  - button "Reload" [ref=e12] [cursor=pointer]
```

# Test source

```ts
  1 | import {test,expect} from "@playwright/test";
  2 | 
  3 | test('TS-10 Unauthorized Page Access', async ({page}) =>{
> 4 |   await page.goto('https://parabank.parasoft.com/parabank/openaccount.htm');
    |              ^ Error: page.goto: net::ERR_HTTP_RESPONSE_CODE_FAILURE at https://parabank.parasoft.com/parabank/openaccount.htm
  5 |   console.log(page.url()); 
  6 |   await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/openaccount.htm' );
  7 | });
```