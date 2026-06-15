import {test,expect} from "@playwright/test";
import data from "../../testdata/invalidLogin.json";

test('TS-09 Invalid Login', async({page})=>{
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.locator('[name="username"]').fill(data.username);
    await page.locator('[name="password"]').fill(data.password);
    await page.locator('input[value="Log In"]').click();
    await expect(page.locator('text=The username and password could not be verified.')).toBeVisible();
    await page.screenshot({path: 'screenshots/TS09.png'});

});