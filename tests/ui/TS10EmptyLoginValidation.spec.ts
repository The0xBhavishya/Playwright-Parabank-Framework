import {test,expect} from "@playwright/test";

test('TS-10 Empty Login Validation', async({page})=>{

  await page.goto('https://parabank.parasoft.com/parabank/index.htm' );
  await page.locator('input[value="Log In"]').click();
  await expect(page.locator('.error')).toHaveText('Please enter a username and password.');
  await page.screenshot({path: 'screenshots/TS-10.png'});

});