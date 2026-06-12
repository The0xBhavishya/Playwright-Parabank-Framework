import {Page} from "@playwright/test";
import data from "../testdata/login.json";

class Login {

     page: Page;
    username: any;
    password: any;
    loginBtn: any;
    logoutBtn: any;
    constructor(page:Page) {
        this.page = page;
        this.username = page.locator('[name="username"]');
        this.password = page.locator('[name="password"]');
        this.loginBtn = page.locator('input[value="Log In"]');
        this.logoutBtn = page.locator('text=Log Out');
    }

    async navigate() {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
    }

    async loginUser() {
        await this.username.fill(data.username);
        await this.password.fill(data.password);
        await this.loginBtn.click();
    }



    async screenshot() {
        await this.page.screenshot({
            path: 'login_success.png',fullPage: true
        });
    }

    async logout() {
        await this.logoutBtn.click();
    }
}

export default Login;