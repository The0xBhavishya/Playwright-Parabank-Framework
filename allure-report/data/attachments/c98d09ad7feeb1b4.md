# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\TS-10EmptyLoginValidation.spec.ts >> TS-10 Empty Login Validation
- Location: tests\ui\TS-10EmptyLoginValidation.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://parabank.parasoft.com/parabank/index.htm", waiting until "load"

```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | 
  3  | test('TS-10 Empty Login Validation', async({page})=>{
  4  | 
> 5  |   await page.goto('https://parabank.parasoft.com/parabank/index.htm' );
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  6  |   await page.locator('input[value="Log In"]').click();
  7  |   await expect(page.locator('.error')).toHaveText('Please enter a username and password.');
  8  |   await page.screenshot({path: 'screenshots/TS-10.png'});
  9  | 
  10 | });
```