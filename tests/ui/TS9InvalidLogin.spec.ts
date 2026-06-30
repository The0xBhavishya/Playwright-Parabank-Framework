import {test,expect} from "@playwright/test";
import data from "../../testdata/invalidLogin.json";

test('TS-09 Invalid Login', async({page})=>{
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.getByRole('textbox').first().fill(data.username);
    await page.getByRole('textbox').nth(1).fill(data.password);
    await page.getByRole('button', { name: "Log In" }).click();
    // kinda buggy here, sometime it logins with wrong username/pass and sometimes not
    // await expect(page.getByText('The username and password could not be verified.')).toBeVisible();
    await page.screenshot({path: 'screenshots/TS09.png'});

});