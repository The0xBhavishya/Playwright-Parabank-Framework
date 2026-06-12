# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\TS10UnauthorizedAccess.spec.ts >> TS-10 Unauthorized Page Access
- Location: tests\ui\TS10UnauthorizedAccess.spec.ts:3:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://parabank.parasoft.com/parabank/openaccount.htm", waiting until "load"

```

# Test source

```ts
  1 | import { test, expect } from "@playwright/test";
  2 | 
  3 | test('TS-10 Unauthorized Page Access', async ({ page }) => {
  4 | 
> 5 |     await page.goto('https://parabank.parasoft.com/parabank/openaccount.htm'
    |                ^ Error: page.goto: Target page, context or browser has been closed
  6 | );
  7 | 
  8 |     await expect( page.locator('text=An internal error has occurred')).toBeVisible();
  9 | });
```