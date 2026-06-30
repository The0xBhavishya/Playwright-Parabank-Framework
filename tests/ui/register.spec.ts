import {test} from "@playwright/test";
import Register from "../../pages/register.page";

test.skip( 'Registration', async ({page}) => {
 const register =new Register(page);
 await register.navigate();
 await register.registerUser();
 await register.screenshot();
});